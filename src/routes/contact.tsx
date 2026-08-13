import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import { sendWebsiteEmail } from "@/lib/smtp.server";
import { CheckCircle2, Send, Mail } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setStatusMessage("Please fill in your name, email, and message.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      await sendWebsiteEmail({
        subject: `[YESP CONTACT] New Client Enquiry from ${name}`,
        to: "srinithinoffl@gmail.com",
        replyTo: email,
        text: [
          "[YESP CONTACT] New Client Enquiry Received",
          "==========================================",
          `• Sender Name:  ${name}`,
          `• Sender Email: ${email}`,
          `• Timestamp:    ${new Date().toLocaleString()}`,
          "",
          "Enquiry Message:",
          "----------------------------------------",
          message,
          "----------------------------------------",
        ].join("\n"),
      });

      // Send confirmation to client asynchronously
      sendWebsiteEmail({
        subject: "We Received Your Message — Yesp Corporation",
        replyTo: "srinithinoffl@gmail.com",
        to: email,
        text: [
          `Dear ${name},`,
          "",
          "Thank you for contacting Yesp Corporation.",
          "We have received your message and an executive team member will follow up with you shortly.",
          "",
          "Sincerely,",
          "",
          "Yesp Corporation Team",
          "Make Better Happen.",
        ].join("\n"),
      }).catch((e) => console.warn("Client confirmation email warning:", e));

      form.reset();
      setSubmittedData({ name, email });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again or email us directly at hello@yespstudio.com."
      );
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground inline-block">
            Get In Touch
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Let's Talk About Your Enterprise Goals
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Whether you need a custom core software backbone, applied AI agents, or workflow automation, we're here to help you Make Better Happen.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-10 lg:grid-cols-12">
          {/* Left Column: Direct Info & Booking */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold">Direct Discovery Call</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Schedule a 30-minute discovery call directly with our technical leadership team to discuss your project requirements.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                Book Discovery Call
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-lg font-bold">Official Email Contacts</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <div>
                    <p className="font-semibold">General & Sales Enquiries</p>
                    <a href="mailto:hello@yespstudio.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@yespstudio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <div>
                    <p className="font-semibold">Founder Direct</p>
                    <a href="mailto:srinithin@yespstudio.com" className="text-muted-foreground hover:text-primary transition-colors">
                      srinithin@yespstudio.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-3 shadow-sm">
              <h2 className="text-lg font-bold">Corporate Locations</h2>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Erode · Coimbatore · Bengaluru
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Operating with a distributed 100% remote engineering team serving clients globally.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm">
              {submittedData ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Received!</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-foreground">{submittedData.name}</span>. We've received your enquiry and will respond to <span className="font-semibold text-foreground">{submittedData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedData(null);
                      setStatus("idle");
                    }}
                    className="mt-4 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Send Us a Message</h2>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 business hours.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Anand Kumar"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="anand@company.com"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        How can we help you? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell us about your project requirements, technology stack, timelines, or operational challenges..."
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                  >
                    {status === "sending" ? (
                      "Sending message..."
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  {statusMessage && (
                    <p className="text-center text-sm font-semibold text-destructive">
                      {statusMessage}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
