import { profile } from "@/data/portfolio";

export const dynamic = "force-dynamic";

type ContactBody = {
  name?: string;
  email?: string;
  context?: string;
  message?: string;
};

const CONTEXT_LABELS: Record<string, string> = {
  freelance: "Freelance / contract project",
  "full-time": "Full-time role",
  consulting: "Consulting / advisory",
  partnership: "Partnership or co-build",
  other: "Something else",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildMailto(payload: Required<ContactBody>) {
  const contextLabel = CONTEXT_LABELS[payload.context] ?? payload.context;
  const subject = encodeURIComponent(`Portfolio inquiry from ${payload.name}`);
  const body = encodeURIComponent(
    `Name: ${payload.name}\nEmail: ${payload.email}\nContext: ${contextLabel}\n\n${payload.message}`,
  );
  return `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

export async function POST(request: Request) {
  let json: ContactBody;
  try {
    json = (await request.json()) as ContactBody;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = json.name?.trim() ?? "";
  const email = json.email?.trim() ?? "";
  const context = json.context?.trim() ?? "";
  const message = json.message?.trim() ?? "";

  if (!name || !email || !context || !message) {
    return Response.json({ error: "Please fill in every field." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (message.length < 12) {
    return Response.json({ error: "Add a bit more detail in your message." }, { status: 400 });
  }

  const payload = { name, email, context, message };
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? profile.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (resendKey) {
    const contextLabel = CONTEXT_LABELS[context] ?? context;
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nContext: ${contextLabel}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      return Response.json(
        { ok: true, mailto: buildMailto(payload) },
        { status: 200 },
      );
    }

    return Response.json({ ok: true });
  }

  return Response.json({ ok: true, mailto: buildMailto(payload) });
}
