// Cloudflare Pages Function: /api/webhook
// Stripe Webhook 受信ハンドラー（ライセンス自動発行・状態同期）

function generateLicenseKey(prefix = "OFS") {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // 誤認しやすい 0, O, 1, I を除外
    const segments = [];
    for (let s = 0; s < 3; s++) {
        let seg = "";
        const bytes = new Uint8Array(4);
        crypto.getRandomValues(bytes);
        for (let i = 0; i < 4; i++) {
            seg += chars[bytes[i] % chars.length];
        }
        segments.push(seg);
    }
    return `${prefix}-${segments.join("-")}`;
}

export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const payload = await request.json();
        const eventType = payload.type;
        const dataObject = payload.data?.object;

        if (!dataObject) {
            return new Response("Invalid event payload", { status: 400 });
        }

        // 1. チェックアウト完了（購入またはトライアル開始）
        if (eventType === "checkout.session.completed") {
            const email = (dataObject.customer_details?.email || dataObject.customer_email || "").trim().toLowerCase();
            const customerId = dataObject.customer;
            const subscriptionId = dataObject.subscription;

            if (!email) {
                console.warn("checkout.session.completed without email");
                return new Response("No email found in session", { status: 200 });
            }

            // 既存ライセンスがあるか確認
            const existingLicense = await env.DB.prepare(
                "SELECT * FROM licenses WHERE LOWER(email) = ? AND product_id = 'filestudio'"
            ).bind(email).first();

            if (existingLicense) {
                // すでにキーが存在する場合はステータスを active に更新
                await env.DB.prepare(
                    "UPDATE licenses SET status = 'active', updated_at = CURRENT_TIMESTAMP WHERE id = ?"
                ).bind(existingLicense.id).run();
            } else {
                // 新規ライセンスキー生成
                const licenseKey = generateLicenseKey("OFS");
                const maxActivations = 2; // 個人ライセンスは2台

                await env.DB.prepare(
                    `INSERT INTO licenses (email, license_key, product_id, plan_name, status, max_activations)
                     VALUES (?, ?, 'filestudio', 'Omni File Studio Pro', 'active', ?)`
                ).bind(email, licenseKey, maxActivations).run();
            }

            return new Response(JSON.stringify({ received: true }), {
                headers: { "Content-Type": "application/json" }
            });
        }

        // 2. サブスクリプション解約
        if (eventType === "customer.subscription.deleted") {
            const customerId = dataObject.customer;
            // 該当するサブスクリプションを失効処理
            // (顧客メール等からステータスを canceled に更新)
            return new Response(JSON.stringify({ received: true }), {
                headers: { "Content-Type": "application/json" }
            });
        }

        // その他のイベント
        return new Response(JSON.stringify({ received: true }), {
            headers: { "Content-Type": "application/json" }
        });

    } catch (err) {
        console.error("Webhook processing error:", err);
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
