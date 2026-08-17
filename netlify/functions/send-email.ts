import type { Config } from "@netlify/functions";

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { subject, replyTo, text, to, attachments } = body ?? {};

  if (!subject || !replyTo || !text) {
    return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey =
    process.env.SMTP_PASS ||
    atob("cmVfOFlmZlB5OVlfOGNqOENiNUQ0ZXBjRGtoMlBkS3VqMjJQ");
  const recipient = to ?? process.env.SMTP_TO ?? "srinithinoffl@gmail.com";

  try {
    const formattedAttachments = attachments?.map((att: any) => ({
      filename: att.filename,
      content: att.content,
    }));

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Yesp Corporation <onboarding@resend.dev>",
        to: [recipient],
        reply_to: replyTo,
        subject,
        text,
        ...(formattedAttachments?.length ? { attachments: formattedAttachments } : {}),
      }),
    });

    const resData = await res.json();

    if (res.ok) {
      return new Response(JSON.stringify({ ok: true, id: (resData as any)?.id }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(
        JSON.stringify({ ok: false, error: `Resend error (${res.status}): ${JSON.stringify(resData)}` }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (err: any) {
    return new Response(
      JSON.stringify({ ok: false, error: err?.message ?? "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const config: Config = {
  path: "/api/send-email",
};
