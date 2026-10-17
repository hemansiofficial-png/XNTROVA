import { NextResponse } from "next/server";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(req) {
  let d; try { d = await req.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
  if (d.website) return NextResponse.json({ ok: true }); // honeypot
  const name = String(d.name || "").trim(), email = String(d.email || "").trim();
  if (name.length < 2 || !EMAIL.test(email)) return NextResponse.json({ error: "Please check your name and email." }, { status: 422 });
  // TODO: send to email/CRM here (e.g. SMTP, Resend, HubSpot).
  console.log("New lead:", { name, email, phone: d.phone, service: d.service, message: d.message });
  return NextResponse.json({ ok: true });
}
