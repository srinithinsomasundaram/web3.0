import { createServerFn } from "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import { sendWebsiteEmail } from "@/lib/smtp.server";
import { CheckCircle2, Send, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Yesp Corporation — Get Connected | Make Better Happen." },
      {
        name: "description",
        content:
          "Connect with Yesp Corporation to explore custom enterprise software, AI agents, and workflow automation. Book a discovery call or send us a message.",
      },
      { name: "keywords", content: "Contact Yesp, Yesp Corporation, Book Discovery Call, Enterprise Software Inquiry, AI Consulting, Automation Consultation" },
      { name: "geo.region", content: "IN-KA;IN-TN" },
      { name: "geo.placename", content: "Bengaluru, Coimbatore, Erode, India" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      { property: "og:title", content: "Contact Yesp Corporation — Get Connected" },
      {
        property: "og:description",
        content:
          "Book a discovery call or message Yesp Corporation for enterprise software, AI agents, and intelligent automation systems.",
      },
      { property: "og:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Yesp Corporation" },
      { name: "twitter:description", content: "Get connected with Yesp Corporation for software & AI projects." },
      { name: "twitter:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Yesp Corporation",
          description: "Get in touch with Yesp Corporation for custom enterprise software, AI, and workflow automation.",
          url: "https://yespstudio.com/contact",
          mainEntity: {
            "@type": "Corporation",
            name: "Yesp Corporation",
            email: "hello@yespstudio.com",
            slogan: "Make Better Happen.",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const sendContactEmail = createServerFn({ method: "POST" })
  .validator((input: ContactFormData) => {
    const data = {
      name: input.name?.trim() ?? "",
      email: input.email?.trim() ?? "",
      message: input.message?.trim() ?? "",
    };

    if (!data.name || !data.email || !data.message) {
      throw new Error("Please fill in your name, email and message.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new Error("Please enter a valid email address.");
    }

    return data;
  })
  .handler(async ({ data }) => {
    const targetInternalEmail = "srinithinoffl@gmail.com";

    // 1. Send Internal Notification Email to srinithinoffl@gmail.com
    let internalSent = false;
    try {
      await sendWebsiteEmail({
        subject: `[YESP CONTACT] New Client Enquiry from ${data.name}`,
        to: targetInternalEmail,
        replyTo: data.email,
        text: [
          "[YESP CONTACT] New Client Enquiry Received",
          "==========================================",
          `• Sender Name:  ${data.name}`,
          `• Sender Email: ${data.email}`,
          `• Timestamp:    ${new Date().toLocaleString()}`,
          "",
          "Enquiry Message:",
          "----------------------------------------",
          data.message,
          "----------------------------------------",
        ].join("\n"),
      });
      internalSent = true;
    } catch (e) {
      console.warn("Internal contact email dispatch warning:", e);
    }

    // 2. Send Executive Confirmation Email to Client
    let confirmationSent = false;
    try {
      await sendWebsiteEmail({
        subject: "Thank you for contacting Yesp Corporation",
        to: data.email,
        replyTo: targetInternalEmail,
        text: [
          `Dear ${data.name},`,
          "",
          "Thank you for reaching out to Yesp Corporation.",
          "",
          "We have successfully received your message. A member of our enterprise solutions team is currently reviewing your inquiry to determine how we can best assist your business.",
          "",
          "Inquiry Details:",
          `• Client Name: ${data.name}`,
          `• Contact Email: ${data.email}`,
          `• Message Summary: "${data.message}"`,
          "",
          "If your request requires immediate technical or commercial alignment, an enterprise consultant from our team will contact you directly.",
          "",
          "We appreciate your interest in partnering with Yesp Corporation.",
          "",
          "Warm regards,",
          "",
          "Client Relations & Business Development",
          "Yesp Corporation",
          "Make Better Happen.",
        ].join("\n"),
      });
      confirmationSent = true;
    } catch (e) {
      console.warn("Applicant confirmation email dispatch warning:", e);
    }

    return { ok: true, internalSent, confirmationSent };
  });

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    setStatus("sending");
    setStatusMessage("");

    try {
      await sendContactEmail({
        data: { name, email, message },
      });
      form.reset();
      setSubmittedData({ name, email });
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Could not send message. Please try again."
      );
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Get in <span className="text-gradient-brand">touch.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Have a project in mind or want to explore AI and automation for your business? Send us a
            message or schedule a call.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
            >
              Book a call
            </a>

            <div className="mt-6 flex flex-col gap-1 text-sm text-muted-foreground">
              <p className="font-bold text-foreground">Yesp Corporation</p>
              <p className="text-xs font-semibold text-primary">Make Better Happen.</p>
              <p className="text-xs text-muted-foreground">Erode – Coimbatore – Bengaluru</p>
              <a
                href="mailto:hello@yespstudio.com"
                className="mt-2 inline-block font-medium text-primary hover:underline"
              >
                hello@yespstudio.com
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
          {status === "sent" ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Message Received!</h2>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-md mx-auto">
                Thank you, <strong className="text-foreground">{submittedData?.name}</strong>. We have sent a confirmation email to <strong className="text-foreground">{submittedData?.email}</strong>. Our enterprise team will review your inquiry and reach out to you shortly.
              </p>

              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setSubmittedData(null);
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Send className="h-4 w-4" /> Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full cursor-pointer rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Connecting..." : "Get Connected"}
              </button>

              {statusMessage && (
                <p
                  className={`text-center text-sm font-semibold ${
                    status === "sent" ? "text-primary" : "text-destructive"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
