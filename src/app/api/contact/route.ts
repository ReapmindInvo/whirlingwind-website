import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: wire to your CRM / email provider (e.g. Resend, SES, HubSpot).
  // Kept provider-agnostic so credentials never live in the repo.
  console.log("[contact]", { name, email, organisation: body.organisation, interest: body.interest, message });

  return NextResponse.json({ ok: true });
}
