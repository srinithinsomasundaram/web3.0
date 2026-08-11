type WebsiteEmailAttachment = {
  filename: string;
  content: string; // base64
  contentType?: string;
};

type WebsiteEmail = {
  subject: string;
  replyTo: string;
  text: string;
  to?: string;
  attachments?: WebsiteEmailAttachment[];
};

export async function sendWebsiteEmail({ subject, replyTo, text, to, attachments }: WebsiteEmail) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? "hello@yespstudio.com";
  const recipient = to ?? process.env.SMTP_TO ?? "srinithinoffl@gmail.com";

  // Check if Resend API key is provided in pass or host contains resend
  const isResendApiKey = pass && pass.startsWith("re_");

  if (isResendApiKey) {
    // 1. Primary: Use Resend HTTPS API (bulletproof, works on port 443 with zero socket blocks)
    try {
      const formattedAttachments = attachments?.map((att) => ({
        filename: att.filename,
        content: att.content,
      }));

      // Try sending from configured sender
      let res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${pass}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Yesp Corporation <${from}>`,
          to: [recipient],
          reply_to: replyTo,
          subject: subject,
          text: text,
          ...(formattedAttachments ? { attachments: formattedAttachments } : {}),
        }),
      });

      let resData = (await res.json()) as any;

      // If custom domain is unverified, fall back to onboarding@resend.dev
      if (!res.ok && (res.status === 403 || res.status === 422 || resData?.message?.includes("domain"))) {
        console.warn("Resend domain verification notice. Retrying with fallback sender onboarding@resend.dev");
        res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${pass}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: `Yesp Corporation <onboarding@resend.dev>`,
            to: [recipient],
            reply_to: replyTo,
            subject: subject,
            text: text,
            ...(formattedAttachments ? { attachments: formattedAttachments } : {}),
          }),
        });
        resData = await res.json();
      }

      if (res.ok) {
        console.log(`Email dispatched via Resend API (ID: ${resData.id}) to ${recipient}`);
        return { ok: true, id: resData.id };
      } else {
        throw new Error(`Resend API Error (${res.status}): ${JSON.stringify(resData)}`);
      }
    } catch (apiError) {
      console.warn("Resend API attempt failed, trying fallback socket transport:", apiError);
    }
  }

  // 2. Secondary: Raw Socket SMTP Transport
  if (!host || !user || !pass) {
    throw new Error("Email configuration missing. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
  }

  const secure = String(process.env.SMTP_SECURE ?? "").toLowerCase() === "true" || port === 465;
  const { connect: connectNet } = await import("node:net");
  const { connect: connectTls } = await import("node:tls");

  let socket = await new Promise<import("node:net").Socket>((resolve, reject) => {
    const nextSocket = secure
      ? connectTls({ host, port, servername: host }, () => resolve(nextSocket))
      : connectNet({ host, port }, () => resolve(nextSocket));

    nextSocket.once("error", reject);
    nextSocket.setTimeout(15_000, () => {
      nextSocket.destroy();
      reject(new Error("SMTP connection timed out."));
    });
  });

  let buffer = "";

  const trackData = () => {
    socket.on("data", (chunk) => {
      buffer += chunk.toString("utf8");
    });
  };

  trackData();

  const readResponse = async () => {
    for (;;) {
      const lines = buffer.split(/\r?\n/).filter(Boolean);
      const lastLine = lines.at(-1);
      if (lastLine && /^\d{3} /.test(lastLine)) {
        const response = buffer;
        buffer = "";
        return response;
      }
      await new Promise((resolve) => setTimeout(resolve, 20));
    }
  };

  const write = async (command: string, expected: number[]) => {
    socket.write(`${command}\r\n`);
    const response = await readResponse();
    const code = Number(response.slice(0, 3));
    if (!expected.includes(code)) {
      throw new Error(`SMTP command failed: ${response.trim()}`);
    }
  };

  try {
    await readResponse();
    await write(`EHLO ${host}`, [250]);

    if (!secure) {
      await write("STARTTLS", [220]);
      socket.removeAllListeners("data");
      socket = connectTls({ socket, servername: host });
      buffer = "";
      trackData();
      await new Promise<void>((resolve, reject) => {
        socket.once("secureConnect", resolve);
        socket.once("error", reject);
      });
      await write(`EHLO ${host}`, [250]);
    }

    await write("AUTH LOGIN", [334]);
    await write(Buffer.from(user).toString("base64"), [334]);
    await write(Buffer.from(pass).toString("base64"), [235]);
    await write(`MAIL FROM:<${from}>`, [250]);
    await write(`RCPT TO:<${recipient}>`, [250, 251]);
    await write("DATA", [354]);

    const hasAttachments = attachments && attachments.length > 0;
    const boundary = "----=_Part_Yesp_" + Math.random().toString(36).substring(2);

    let messageBody = "";
    if (hasAttachments) {
      messageBody =
        [
          `From: Yesp Corporation <${from}>`,
          `To: ${recipient}`,
          `Reply-To: ${replyTo}`,
          `Subject: ${subject}`,
          `MIME-Version: 1.0`,
          `Content-Type: multipart/mixed; boundary="${boundary}"`,
          "",
          `--${boundary}`,
          `Content-Type: text/plain; charset=utf-8`,
          `Content-Transfer-Encoding: 7bit`,
          "",
          text.replace(/^\./gm, ".."),
          "",
          ...attachments.flatMap((att) => [
            `--${boundary}`,
            `Content-Type: ${att.contentType || "application/octet-stream"}; name="${att.filename}"`,
            `Content-Transfer-Encoding: base64`,
            `Content-Disposition: attachment; filename="${att.filename}"`,
            "",
            att.content.replace(/(.{76})/g, "$1\r\n"),
            "",
          ]),
          `--${boundary}--`,
          ".",
        ].join("\r\n") + "\r\n";
    } else {
      messageBody =
        [
          `From: Yesp Corporation <${from}>`,
          `To: ${recipient}`,
          `Reply-To: ${replyTo}`,
          `Subject: ${subject}`,
          "Content-Type: text/plain; charset=utf-8",
          "",
          text.replace(/^\./gm, ".."),
          ".",
        ].join("\r\n") + "\r\n";
    }

    socket.write(messageBody);

    const dataResponse = await readResponse();
    if (Number(dataResponse.slice(0, 3)) !== 250) {
      throw new Error(`SMTP message failed: ${dataResponse.trim()}`);
    }

    await write("QUIT", [221]);
    return { ok: true };
  } finally {
    socket.end();
  }
}
