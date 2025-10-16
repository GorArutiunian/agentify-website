// app/api/chat/route.ts
import crypto from "crypto";

export async function POST(req: Request) {
  const raw = await req.text();
  const signature = req.headers.get("x-signature") || "";
  const secret = process.env.WIDGET_SECRET;
  const webhook = process.env.N8N_WEBHOOK_URL;

  if (!secret || !webhook) {
    return new Response(JSON.stringify({ error: "server not configured" }), { status: 500 });
  }

  const expected = crypto.createHmac("sha256", secret).update(raw).digest("hex");
  if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) {
    return new Response(JSON.stringify({ error: "bad signature" }), { status: 403 });
  }

  const r = await fetch(webhook, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: raw,
  });

  const text = await r.text();
  return new Response(text, { status: r.status, headers: { "content-type": "application/json" } });
}
