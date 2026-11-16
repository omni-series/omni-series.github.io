// Cloudflare Pages Function: /api/verify
// アプリケーション（C#）からのライセンス照合および端末数制御 API

export async function onRequestPost(context) {
    const { request, env } = context;

    // CORS ヘッダー
    const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json; charset=utf-8"
    };

    try {
        const body = await request.json();
        const { license_key, email, machine_guid, machine_name } = body;

        if (!license_key || !machine_guid) {
            return new Response(JSON.stringify({
                success: false,
                error: "INVALID_PARAMETERS",
                message: "ライセンスキーと端末識別子（MachineGuid）が必要です。"
            }), { status: 400, headers: corsHeaders });
        }

        const normalizedKey = license_key.trim().toUpperCase();
        const normalizedEmail = (email || "").trim().toLowerCase();

        // 1. ライセンスの存在・有効性チェック
        let licenseQuery = "SELECT * FROM licenses WHERE UPPER(license_key) = ?";
        let queryParams = [normalizedKey];

        if (normalizedEmail) {
            licenseQuery += " AND LOWER(email) = ?";
            queryParams.push(normalizedEmail);
        }

        const license = await env.DB.prepare(licenseQuery).bind(...queryParams).first();

        if (!license) {
            return new Response(JSON.stringify({
                success: false,
                error: "LICENSE_NOT_FOUND",
                message: "ライセンスが見つかりません。キーまたはメールアドレスをご確認ください。"
            }), { status: 404, headers: corsHeaders });
        }

        if (license.status !== "active") {
            return new Response(JSON.stringify({
                success: false,
                error: "LICENSE_INACTIVE",
                message: `ライセンスが無効です（ステータス: ${license.status}）。サブスクリプション状況をご確認ください。`
            }), { status: 403, headers: corsHeaders });
        }

        // 2. 端末（Activation）の確認
        const activationsResult = await env.DB.prepare(
            "SELECT * FROM activations WHERE license_id = ?"
        ).bind(license.id).all();

        const activations = activationsResult.results || [];
        const existingActivation = activations.find(a => a.machine_guid === machine_guid);

        if (existingActivation) {
            // 既に登録済みの端末 ➔ last_seen_at を更新して認証成功
            await env.DB.prepare(
                "UPDATE activations SET last_seen_at = CURRENT_TIMESTAMP, machine_name = ? WHERE id = ?"
            ).bind(machine_name || existingActivation.machine_name, existingActivation.id).run();

            return new Response(JSON.stringify({
                success: true,
                plan: license.plan_name,
                product_id: license.product_id,
                email: license.email,
                activated_machines: activations.length,
                max_machines: license.max_activations || 2,
                message: "ライセンス認証に成功しました。"
            }), { status: 200, headers: corsHeaders });
        }

        // 3. 新規端末の登録チェック（台数制限）
        const maxMachines = license.max_activations || 2;
        if (activations.length >= maxMachines) {
            return new Response(JSON.stringify({
                success: false,
                error: "DEVICE_LIMIT_EXCEEDED",
                activated_machines: activations.length,
                max_machines: maxMachines,
                message: `利用可能な端末数（最大 ${maxMachines} 台）の上限に達しています。別の端末の認証を解除してください。`
            }), { status: 403, headers: corsHeaders });
        }

        // 4. 新規端末を登録
        await env.DB.prepare(
            "INSERT INTO activations (license_id, machine_guid, machine_name) VALUES (?, ?, ?)"
        ).bind(license.id, machine_guid, machine_name || "Windows PC").run();

        return new Response(JSON.stringify({
            success: true,
            plan: license.plan_name,
            product_id: license.product_id,
            email: license.email,
            activated_machines: activations.length + 1,
            max_machines: maxMachines,
            message: "端末の認証が完了しました。"
        }), { status: 200, headers: corsHeaders });

    } catch (err) {
        return new Response(JSON.stringify({
            success: false,
            error: "SERVER_ERROR",
            message: err.message
        }), { status: 500, headers: corsHeaders });
    }
}

export async function onRequestOptions() {
    return new Response(null, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
    });
}
