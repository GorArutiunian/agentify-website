// lib/hmac.ts
import crypto from "crypto";

export function signBody(body: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(body).digest("hex");
}
