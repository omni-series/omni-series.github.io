// Cloudflare Pages Function: /api/webhook
// Stripe / 外部決済 Webhook 受信ハンドラー（複数商品対応・ライセンス自動発行・状態同期）

// 各プロダクト・プランのプリセット定義
const PRODUCT_CONFIGS = {
    // 1. OmniPane Explorer
    "omnipane": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Professional",
        maxActivations: 2
    },
    "omnipane_pro": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Professional",
        maxActivations: 2
    },
    "omnipane_professional": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Professional",
        maxActivations: 2
    },
    "omnipane_standard": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Standard",
        maxActivations: 2
    },
    "omnipane_enterprise": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Enterprise",
        maxActivations: 10
    },

    // 2. Omni Warp Helm
    "warphelm": {
        productId: "warphelm",
        prefix: "OWH",
        defaultPlan: "Omni Warp Helm Pro",
        maxActivations: 2
    },
    "warphelm_pro": {
        productId: "warphelm",
        prefix: "OWH",
        defaultPlan: "Omni Warp Helm Pro",
        maxActivations: 2
    },
    "omniwarphelm": {
        productId: "warphelm",
        prefix: "OWH",
        defaultPlan: "Omni Warp Helm Pro",
        maxActivations: 2
    },

    // 3. Omni File Studio
    "filestudio": {
        productId: "filestudio",
        prefix: "OFS",
        defaultPlan: "Omni File Studio Pro",
        maxActivations: 2
    },
    "filestudio_pro": {
        productId: "filestudio",
        prefix: "OFS",
        defaultPlan: "Omni File Studio Pro",
        maxActivations: 2
    },
    "omnifilestudio": {
        productId: "filestudio",
        prefix: "OFS",
        defaultPlan: "Omni File Studio Pro",
        maxActivations: 2
    },

    // 4. Omni Logbook
    "logbook": {
        productId: "logbook",
        prefix: "OLB",
        defaultPlan: "Omni Logbook Pro",
        maxActivations: 2
    },
    "logbook_pro": {
        productId: "logbook",
        prefix: "OLB",
        defaultPlan: "Omni Logbook Pro",
        maxActivations: 2
    },

    // 5. Omni Data Harbor
    "dataharbor": {
        productId: "dataharbor",
        prefix: "ODH",
        defaultPlan: "Omni Data Harbor Pro",
        maxActivations: 2
    },
    "dataharbor_pro": {
        productId: "dataharbor",
        prefix: "ODH",
        defaultPlan: "Omni Data Harbor Pro",
        maxActivations: 2
    },

    // 6. Stripe プラン・オファー ID の直接マッピング (trial/live)
    "to_1uedw8fnot08dcftbqld39hc": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Standard",
        maxActivations: 2
    },
    "to_1uedv4fnot08dcftcjpseh7w": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Standard",
        maxActivations: 2
    },
    "to_1ueepgfnot08dcfterhzefba": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Professional",
        maxActivations: 2
    },
    "to_1uee3yfnot08dcftuhnuog4t": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Professional",
        maxActivations: 2
    },
    "to_1uees7fnot08dcft0dq8pblv": {
        productId: "warphelm",
        prefix: "OWH",
        defaultPlan: "Omni Warp Helm Pro",
        maxActivations: 2
    },
    "to_1ueevvfnot08dcftn2ildxpk": {
        productId: "warphelm",
        prefix: "OWH",
        defaultPlan: "Omni Warp Helm Pro",
        maxActivations: 2
    },

    // 7. Stripe Payment Link スラッグの直接マッピング
    "7sy5kdeie5bv0nce6wga80d": {
        productId: "warphelm",
        prefix: "OWH",
        defaultPlan: "Omni Warp Helm Pro",
        maxActivations: 2
    },
    "4gm5kd7ugawfee26euga80i": {
        productId: "warphelm",
        prefix: "OWH",
        defaultPlan: "Omni Warp Helm Pro",
        maxActivations: 2
    },
    "28edr9b6sfcv2vk9qgga80j": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Standard",
        maxActivations: 2
    },
    "drm9ata2o2pjb1q3siga80g": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Standard",
        maxActivations: 2
    },
    "evqaex0ro2pj6labyoga80h": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Professional",
        maxActivations: 2
    },
    "bje00j4i4fcv9xm8mcga80c": {
        productId: "omnipane",
        prefix: "OPE",
        defaultPlan: "OmniPane Explorer Professional",
        maxActivations: 2
    }
};

// 誤認しやすい 0, O, 1, I を除外した 12 桁のライセンスキー生成
function generateLicenseKey(prefix = "OPE") {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
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

// Stripe ペイロードから商品情報（productId, planName, prefix, maxActivations）を解決
function resolveProductInfo(dataObject) {
    const metadata = dataObject.metadata || {};
    const refId = (dataObject.client_reference_id || "").toLowerCase();

    // 候補となる ID 群を順次チェック
    const candidateKeys = [
        metadata.product_id,
        metadata.productId,
        metadata.product,
        metadata.price_id,
        metadata.plan_id,
        dataObject.client_reference_id,
        dataObject.payment_link,
        dataObject.line_items?.data?.[0]?.price?.id,
        dataObject.lines?.data?.[0]?.price?.id,
        dataObject.plan?.id
    ].filter(Boolean).map(s => String(s).toLowerCase());

    let config = null;
    let candidateKey = "";
    for (const k of candidateKeys) {
        if (PRODUCT_CONFIGS[k]) {
            config = PRODUCT_CONFIGS[k];
            candidateKey = k;
            break;
        }
    }
    if (!config && candidateKeys.length > 0) {
        candidateKey = candidateKeys[0];
    }

    const productId = config?.productId || candidateKey || "filestudio";
    const prefix = metadata.prefix || config?.prefix || (productId.substring(0, 3).toUpperCase());
    const planName = metadata.plan_name || metadata.planName || metadata.plan || config?.defaultPlan || `${productId} Pro`;

    let maxActivations = parseInt(metadata.max_activations || metadata.maxActivations || "0", 10);
    if (!maxActivations || isNaN(maxActivations)) {
        maxActivations = config?.maxActivations || 2;
    }

    return { productId, planName, prefix, maxActivations };
}

export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const payload = await request.json();
        const eventType = payload.type;
        const dataObject = payload.data?.object;

        if (!dataObject) {
            return new Response(JSON.stringify({ error: "Invalid event payload" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        console.log(`[Webhook] Received event: ${eventType}`);

        // 1. チェックアウト完了（購入またはサブスクリプション開始）
        if (eventType === "checkout.session.completed") {
            const email = (dataObject.customer_details?.email || dataObject.customer_email || "").trim().toLowerCase();
            const customerId = dataObject.customer;
            const subscriptionId = dataObject.subscription;

            if (!email) {
                console.warn("[Webhook] checkout.session.completed received without email");
                return new Response(JSON.stringify({ received: true, message: "No email found" }), {
                    status: 200,
                    headers: { "Content-Type": "application/json" }
                });
            }

            // 複数商品対応: 商品情報の解決
            const { productId, planName, prefix, maxActivations } = resolveProductInfo(dataObject);

            console.log(`[Webhook] Processing purchase for email=${email}, product=${productId}, plan=${planName}`);

            // 既存ライセンスがあるか確認
            const existingLicense = await env.DB.prepare(
                "SELECT * FROM licenses WHERE LOWER(email) = ? AND product_id = ?"
            ).bind(email, productId).first();

            let issuedKey = "";

            if (existingLicense) {
                // すでにキーが存在する場合はステータスを active に更新（プラン名も最新へ）
                issuedKey = existingLicense.license_key;
                await env.DB.prepare(
                    `UPDATE licenses 
                     SET status = 'active', plan_name = ?, max_activations = ?, updated_at = CURRENT_TIMESTAMP 
                     WHERE id = ?`
                ).bind(planName, maxActivations, existingLicense.id).run();

                console.log(`[Webhook] Re-activated existing license: ${issuedKey}`);
            } else {
                // 新規ライセンスキー生成
                issuedKey = generateLicenseKey(prefix);

                await env.DB.prepare(
                    `INSERT INTO licenses (email, license_key, product_id, plan_name, status, max_activations)
                     VALUES (?, ?, ?, ?, 'active', ?)`
                ).bind(email, issuedKey, productId, planName, maxActivations).run();

                console.log(`[Webhook] Created new license key: ${issuedKey}`);
            }

            return new Response(JSON.stringify({
                received: true,
                email: email,
                product_id: productId,
                plan_name: planName,
                license_key: issuedKey
            }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        }

        // 2. サブスクリプション解約
        if (eventType === "customer.subscription.deleted") {
            const customerEmail = (dataObject.customer_email || "").trim().toLowerCase();
            const metadata = dataObject.metadata || {};
            const productId = (metadata.product_id || metadata.productId || "").toLowerCase();

            if (customerEmail) {
                let query = "UPDATE licenses SET status = 'canceled', updated_at = CURRENT_TIMESTAMP WHERE LOWER(email) = ?";
                const params = [customerEmail];
                if (productId) {
                    query += " AND product_id = ?";
                    params.push(productId);
                }
                await env.DB.prepare(query).bind(...params).run();
                console.log(`[Webhook] Canceled subscription license for email=${customerEmail}`);
            }

            return new Response(JSON.stringify({ received: true, action: "subscription_canceled" }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        }

        // その他のイベント（invoice.payment_succeeded 等）
        return new Response(JSON.stringify({ received: true, event: eventType }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (err) {
        console.error("[Webhook] Processing error:", err);
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
