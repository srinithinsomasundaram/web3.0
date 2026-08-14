import { Link } from "react-router-dom";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import { sendWebsiteEmail } from "@/lib/smtp.server";
import yespOneLogo from "@/assets/yesp-one-logo.png";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Search,
  Target,
  Code2,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Zap,
  Building2,
  Users,
  ShoppingCart,
  Boxes,
  Cpu,
  Receipt,
  UserCheck,
  FolderGit2,
  FileCheck2,
  BarChart3,
  Bot,
  RefreshCw,
  Send,
  X,
} from "lucide-react";

const capabilities = [
  { name: "Sales", icon: ShoppingCart, description: "Lead tracking, pipeline & order workflows" },
  { name: "Customers", icon: Users, description: "360° client management & support history" },
  { name: "Purchase", icon: Receipt, description: "Vendor POs, procurement & cost tracking" },
  { name: "Inventory", icon: Boxes, description: "Stock control, batch tracking & multi-warehouse" },
  { name: "Production", icon: Cpu, description: "Job cards, BOM, shop floor & capacity planning" },
  { name: "Finance", icon: Building2, description: "Invoicing, ledger sync & operational cashflow" },
  { name: "Employees", icon: UserCheck, description: "Attendance, payroll & team allocation" },
  { name: "Projects", icon: FolderGit2, description: "Milestones, task tracking & resource planning" },
  { name: "Approvals", icon: FileCheck2, description: "Custom multi-level authorization workflows" },
  { name: "Reports", icon: BarChart3, description: "Real-time executive dashboards & analytics" },
  { name: "Automation", icon: Bot, description: "AI agents, automated alerts & background triggers" },
  { name: "Integrations", icon: Zap, description: "Zero-latency connection to your existing tools" },
];

const steps = [
  {
    num: "01",
    title: "Discover",
    icon: Search,
    desc: "We understand your business, processes and challenges.",
  },
  {
    num: "02",
    title: "Define",
    icon: Target,
    desc: "We identify the features and workflows you actually need.",
  },
  {
    num: "03",
    title: "Build",
    icon: Code2,
    desc: "We develop a focused MVP around your requirements.",
  },
  {
    num: "04",
    title: "Implement",
    icon: Rocket,
    desc: "We deploy it into your day-to-day operations.",
  },
  {
    num: "05",
    title: "Manage",
    icon: ShieldCheck,
    desc: "We provide ongoing support, maintenance and improvements.",
  },
  {
    num: "06",
    title: "Scale",
    icon: TrendingUp,
    desc: "As your business grows, your system grows with it.",
  },
];

const whyPillars = [
  {
    title: "Built for your process",
    desc: "Not forced into someone else's workflow. Designed ground-up for how your company operates.",
  },
  {
    title: "Start with an MVP",
    desc: "Avoid unnecessary features, bloat, and massive upfront software costs.",
  },
  {
    title: "Flexible development",
    desc: "Add new functionality, modules, and workflows whenever your business needs them.",
  },
  {
    title: "Managed by Yesp",
    desc: "One dedicated engineering team for development, maintenance, and continuous updates.",
  },
  {
    title: "Built to scale",
    desc: "Your system evolves effortlessly as your transaction volume and headcount expand.",
  },
];

export default function YespOnePage() {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState<string>("Inventory Control");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  async function handleAssessmentSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const focusArea = String(formData.get("focusArea") ?? selectedFocus ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();

    if (!name || !email || !details) {
      setStatus("error");
      setStatusMsg("Please provide your name, email, and a brief description of your business needs.");
      return;
    }

    setStatus("sending");
    setStatusMsg("");

    try {
      await sendWebsiteEmail({
        subject: `[YESP ONE ASSESSMENT] ${name} (${company || "Business Enquiry"})`,
        replyTo: email,
        to: "srinithinoffl@gmail.com",
        text: [
          "[YESP ONE] Business Assessment Request",
          "=======================================",
          `• Client Name:    ${name}`,
          `• Contact Email:  ${email}`,
          `• Contact Phone:  ${phone || "Not provided"}`,
          `• Company Name:   ${company || "Not specified"}`,
          `• Starting Focus: ${focusArea}`,
          `• Timestamp:      ${new Date().toLocaleString()}`,
          "",
          "Business Requirements & Challenge:",
          "---------------------------------------",
          details,
          "---------------------------------------",
        ].join("\n"),
      });

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setStatusMsg(err instanceof Error ? err.message : "Failed to submit assessment. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteHeader />

      <main className="relative overflow-hidden">
        {/* Decorative Background Accents */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-gradient-radial from-primary/15 via-primary/5 to-transparent blur-3xl" />

        {/* 1. Hero Section */}
        <section className="relative px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-md">
              <Layers className="h-3.5 w-3.5" />
              Yesp One
            </div>

            {/* Brand Logo Header */}
            <div className="mt-8 flex items-center justify-center">
              <img
                src={yespOneLogo}
                alt="Yesp One Logo"
                className="h-16 sm:h-24 md:h-32 w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Your business. <br className="hidden sm:inline" />
              <span className="text-gradient-brand">Built into one digital core.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              We understand how your business works, build the systems you actually need, and
              continuously improve them as you grow.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://one.yespstudio.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                <span>Launch Yesp One</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setAssessmentModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/80 px-7 py-3.5 text-sm font-bold text-foreground transition-all hover:border-primary/40 hover:bg-secondary cursor-pointer"
              >
                Business Assessment
              </button>
            </div>

            {/* Sub-tagline */}
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground/80">
              understand → build → manage → improve
            </p>
          </div>
        </section>

        {/* 2. What is Yesp One? */}
        <section className="border-y border-border/60 bg-secondary/30 px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                What is
              </span>
              <img src={yespOneLogo} alt="Yesp One" className="h-5 object-contain" />
            </div>

            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Not another off-the-shelf software.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              <strong className="text-foreground">Yesp One</strong> is a flexible business technology service where we build your digital system
              around your actual requirements.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-card p-6 text-left shadow-sm transition-all hover:border-primary/40">
                <span className="text-xs font-extrabold uppercase tracking-wider text-primary">
                  Phase 1
                </span>
                <h3 className="mt-2 text-xl font-bold">Start with what you need today.</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Focus strictly on solving your immediate operational bottlenecks without paying for
                  unused features or bloat.
                </p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-card p-6 text-left shadow-sm transition-all hover:border-primary/40">
                <span className="text-xs font-extrabold uppercase tracking-wider text-primary">
                  Phase 2+
                </span>
                <h3 className="mt-2 text-xl font-bold">Add what you need tomorrow.</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Expand smoothly as your operations grow. Add new modules, approvals, and AI automation
                  whenever ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. How It Works */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Methodology
              </h2>
              <p className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
                How It Works
              </p>
              <p className="mt-4 text-muted-foreground">
                A structured, 6-step lifecycle to transform manual operations into an automated core.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="group relative rounded-2xl border border-border/60 bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-black text-primary/40 group-hover:text-primary">
                        {step.num}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Built Around Your Business */}
        <section className="border-t border-border/60 bg-secondary/20 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Unified Architecture
              </h2>
              <p className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
                Built Around Your Business
              </p>
              <p className="mt-4 text-lg font-medium text-foreground">
                Your requirements. Your workflows. Your system.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">Yesp One</strong> can bring different parts of your business together into one seamless ecosystem:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.name}
                    className="flex flex-col items-center rounded-xl border border-border/60 bg-card p-5 text-center transition-all hover:border-primary/50 hover:bg-card/80"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <span className="mt-3 text-sm font-bold text-foreground">{cap.name}</span>
                    <span className="mt-1 text-[0.7rem] text-muted-foreground leading-tight">
                      {cap.description}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-xs font-bold text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Only use what your business needs.
              </span>
            </div>
          </div>
        </section>

        {/* 5. Start Small. Build Smart. */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-b from-card to-secondary/40 p-8 md:p-14 shadow-elevated">
              <div className="max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
                  Implementation Strategy
                </span>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  Start Small. Build Smart.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  You don't need to digitize everything on day one. Start with one problem.
                </p>
              </div>

              {/* Example Quote Box */}
              <div className="mt-8 rounded-2xl border border-border/80 bg-background/90 p-6 md:p-8 backdrop-blur-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Real Scenario Example:
                </div>
                <blockquote className="mt-2 font-display text-xl font-bold italic text-foreground md:text-2xl">
                  “We need better inventory control.”
                </blockquote>

                <div className="mt-6 flex flex-col gap-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    We Build & Deploy:
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                    <span className="rounded-lg bg-primary/10 px-3.5 py-2 text-primary border border-primary/20">
                      Inventory MVP
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="rounded-lg bg-secondary px-3.5 py-2 text-foreground border border-border">
                      Implement
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="rounded-lg bg-secondary px-3.5 py-2 text-foreground border border-border">
                      Use
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="rounded-lg bg-secondary px-3.5 py-2 text-foreground border border-border">
                      Improve
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="rounded-lg bg-primary/20 px-3.5 py-2 text-primary border border-primary/30">
                      Expand
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                  Then add purchasing, sales, production and automation when you're ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Continuous Improvement */}
        <section className="border-t border-border/60 bg-secondary/30 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Long-Term Partnership
            </h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Continuous Improvement
            </p>
            <p className="mt-4 font-display text-xl font-bold text-foreground">
              We don't disappear after deployment.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Your business changes. Your system should change with it. Yesp continuously helps you:
            </p>

            <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <span className="flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-xs font-bold text-foreground">
                <RefreshCw className="h-3.5 w-3.5 text-primary" /> Monitor
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground/60" />
              <span className="flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-xs font-bold text-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> Improve
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground/60" />
              <span className="flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-xs font-bold text-foreground">
                <Bot className="h-3.5 w-3.5 text-primary" /> Automate
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground/60" />
              <span className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground">
                <TrendingUp className="h-3.5 w-3.5" /> Scale
              </span>
            </div>
          </div>
        </section>

        {/* 7. Why Yesp One? */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Key Advantages
              </h2>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="text-3xl font-extrabold tracking-tight sm:text-5xl">Why</span>
                <img src={yespOneLogo} alt="Yesp One" className="h-8 sm:h-12 object-contain" />
                <span className="text-3xl font-extrabold tracking-tight sm:text-5xl">?</span>
              </div>
              <p className="mt-4 text-muted-foreground">
                Built ground-up to eliminate the risk, cost, and friction of traditional software projects.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyPillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-border/60 bg-card p-8 transition-all hover:border-primary/50 hover:shadow-elevated"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="relative border-t border-border/60 bg-gradient-to-b from-card to-background px-6 py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              Let's build the system your business actually needs.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
              Tell us how your business works. We'll identify what should be built first.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://one.yespstudio.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                <span>Go to Yesp One Platform</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setAssessmentModalOpen(true)}
                className="inline-flex items-center justify-center rounded-full border border-border bg-secondary px-8 py-4 text-sm font-bold text-foreground transition-colors hover:bg-secondary/80 cursor-pointer"
              >
                Start Assessment
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-border/40 flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center">
                <img src={yespOneLogo} alt="Yesp One Logo" className="h-10 sm:h-12 w-auto object-contain" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Built around your business.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Business Assessment Interactive Modal */}
      {assessmentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl border border-border bg-card p-6 shadow-2xl md:p-8 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => {
                setAssessmentModalOpen(false);
                setStatus("idle");
                setStatusMsg("");
              }}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                <Layers className="h-3.5 w-3.5" /> Yesp One Assessment
              </div>
              <h3 className="mt-3 text-2xl font-extrabold text-foreground flex items-center justify-center gap-2">
                <span>Start Your</span>
                <img src={yespOneLogo} alt="Yesp One" className="h-6 object-contain" />
                <span>Assessment</span>
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Tell us how your business works and what problem you'd like to solve first.
              </p>
            </div>

            {status === "sent" ? (
              <div className="my-8 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-bold text-foreground">Assessment Received!</h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Thank you. An enterprise solution engineer will analyze your requirements and reach out within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setAssessmentModalOpen(false);
                    setStatus("idle");
                  }}
                  className="rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleAssessmentSubmit} className="mt-6 space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="e.g. Apex Engineering Ltd."
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Starting Problem / Module Focus</label>
                  <select
                    name="focusArea"
                    value={selectedFocus}
                    onChange={(e) => setSelectedFocus(e.target.value)}
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-xs text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="Inventory Control">Inventory & Stock Control</option>
                    <option value="Sales & Pipeline">Sales & Customer Pipeline</option>
                    <option value="Production & Shop Floor">Production & Shop Floor Planning</option>
                    <option value="Purchase & Procurement">Purchase & PO Management</option>
                    <option value="Finance & Invoicing">Finance & Billing Automation</option>
                    <option value="Approvals & Workflows">Approvals & Workflow Triggers</option>
                    <option value="Custom Core System">Custom Full-Business Core System</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1">Describe Your Current Challenge *</label>
                  <textarea
                    name="details"
                    required
                    rows={3}
                    placeholder="Tell us how your business works and what manual process or bottleneck needs to be solved first..."
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                {statusMsg && <p className="text-xs font-semibold text-destructive">{statusMsg}</p>}

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setAssessmentModalOpen(false)}
                    className="rounded-full border border-border px-5 py-2.5 text-xs font-bold text-foreground"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-sm hover:opacity-90 disabled:opacity-50"
                  >
                    {status === "sending" ? "Submitting..." : "Submit Assessment"}
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
