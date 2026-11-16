// Cloudflare Pages Function: /api/health
// D1 接続確認およびヘルスチェック API

export async function onRequestGet(context) {
    const { env } = context;

    try {
        const countResult = await env.DB.prepare(
            "SELECT COUNT(*) as count FROM licenses"
        ).first();

        return new Response(JSON.stringify({
            status: "healthy",
            d1_connected: true,
            total_licenses: countResult ? countResult.count : 0,
            timestamp: new Date().toISOString()
        }), {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*"
            }
        });
    } catch (err) {
        return new Response(JSON.stringify({
            status: "error",
            d1_connected: false,
            error: err.message
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*"
            }
        });
    }
}
