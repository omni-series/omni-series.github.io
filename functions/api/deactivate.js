// Cloudflare Pages Function: /api/deactivate
// 端末の認証解除 API

export async function onRequestPost(context) {
    const { request, env } = context;

    const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json; charset=utf-8"
    };

    try {
        const body = await request.json();
        const { license_key, email, machine_guid } = body;

        if (!license_key || !machine_guid) {
            return new Response(JSON.stringify({
                success: false,
                error: "INVALID_PARAMETERS",
                message: "ライセンスキーと端末識別子（MachineGuid）が必要です。"
            }), { status: 400, headers: corsHeaders });
        }

        const normalizedKey = license_key.trim().toUpperCase();

        const license = await env.DB.prepare(
            "SELECT * FROM licenses WHERE UPPER(license_key) = ?"
        ).bind(normalizedKey).first();

        if (!license) {
            return new Response(JSON.stringify({
                success: false,
                error: "LICENSE_NOT_FOUND",
                message: "ライセンスが見つかりません。"
            }), { status: 404, headers: corsHeaders });
        }

        // 当該端末のレコードを削除
        const deleteResult = await env.DB.prepare(
            "DELETE FROM activations WHERE license_id = ? AND machine_guid = ?"
        ).bind(license.id, machine_guid).run();

        const remainingResult = await env.DB.prepare(
            "SELECT COUNT(*) as count FROM activations WHERE license_id = ?"
        ).bind(license.id).first();

        return new Response(JSON.stringify({
            success: true,
            activated_machines: remainingResult ? remainingResult.count : 0,
            max_machines: license.max_activations || 2,
            message: "端末の認証を正常に解除しました。"
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
