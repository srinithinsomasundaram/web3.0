import { Link } from "react-router-dom";
import founderImage from "@/assets/founder-srinithin-somasundaram.jpg";
import logo from "@/assets/yesp-footer-logo.png";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import {
  BookOpen,
  Calendar,
  User,
  MapPin,
  ArrowRight,
  Linkedin,
  Instagram,
  CheckCircle2,
  Building2,
  Globe,
  ChevronLeft,
  Zap,
  ShieldCheck,
  Cpu,
} from "lucide-react";

export default function YespCorpGlobalArticlePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <article>
          {/* Header Banner */}
          <header className="border-b border-border/60 bg-gradient-to-b from-background via-card to-background py-16 md:py-24">
            <div className="mx-auto max-w-4xl px-6">
              <Link
                to="/articles"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline mb-6"
              >
                <ChevronLeft className="h-4 w-4" /> Back to Executive Articles
              </Link>

              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-sm">
                <Globe className="h-3.5 w-3.5 text-primary" /> Global Infrastructure & Engineering
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight md:text-5xl leading-tight text-foreground">
                Yesp Corp Global: Engineering Enterprise Software & Applied AI Systems from India to International Scale
              </h1>

              <p className="mt-6 text-base text-muted-foreground leading-relaxed md:text-lg">
                An executive breakdown of how Yesp Corporation's global delivery model bridges ground-level manufacturing discipline in Erode and Coimbatore with Bengaluru's technology infrastructure to ship mission-critical software for international clients.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border/60 pt-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-foreground">Srinithin Somasundaram</span>
                  <span>· Founder & CEO</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>August 10, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Erode · Coimbatore · Bengaluru, India</span>
                </div>
              </div>
            </div>
          </header>

          {/* Body Content */}
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 leading-relaxed text-foreground">
              
              {/* Core Thesis */}
              <section className="rounded-3xl border border-border bg-card p-8 shadow-card space-y-4">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2.5">
                  <Zap className="h-5 w-5 text-primary" /> Executive Summary: The Global Software Engine
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As enterprises scale across borders, off-the-shelf SaaS tools fail under complex operational realities. Subscription fees multiply, data becomes trapped in disconnected silos, and manual workarounds accumulate. Yesp Corporation Global Team operates as an engineering powerhouse—shipping custom core software backbones, practical AI agents, and zero-latency database integrations for enterprises across North America, Europe, Asia, and India.
                </p>
              </section>

              {/* Section 1 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  1. The Three-Pillar Geographic Lineage: Erode, Coimbatore, and Bengaluru
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Yesp Corporation’s engineering model is anchored in three distinct technological geographies that form a high-precision delivery pipeline:
                </p>
                <div className="grid gap-4 md:grid-cols-3 pt-2">
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <Building2 className="h-4 w-4" /> Erode Grit
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      Rooted in relentless work ethic, operational frugality, and zero tolerance for superficial fluff.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <ShieldCheck className="h-4 w-4" /> Coimbatore Precision
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      Industrial engineering discipline—where systems are built to withstand high continuous loads without failure.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <Cpu className="h-4 w-4" /> Bengaluru Scale
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      Global cloud infrastructure, AI telemetry, and asynchronous high-velocity remote engineering execution.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  2. 100% Remote Asynchronous Delivery for International Clients
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Global enterprises require velocity without timezone friction. Yesp Corporation operates 100% remote, allowing senior engineers to work asynchronously directly with client stakeholders. Every commit, architectural blueprint, and AI agent evaluation is documented transparently in real time.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2 font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Direct engineering access—no intermediate account management layers.</span>
                  </li>
                  <li className="flex items-center gap-2 font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Deterministic AI workflows with continuous evaluation & guardrails.</span>
                  </li>
                  <li className="flex items-center gap-2 font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Zero SaaS bloat—clients own their custom software assets end to end.</span>
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  3. Applied AI Agents vs. Generic Chatbots
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  While generic LLM wrappers flood the market with speculative promises, Yesp AI Labs designs production-grade autonomous agents that execute real enterprise transactions—processing unstructured documents, updating ERP databases, and automating customer operations 24/7 with measurable ROI metrics.
                </p>
              </section>

              {/* Founder Profile Callout */}
              <section className="rounded-3xl border border-border bg-gradient-to-b from-card via-secondary/50 to-card p-8 shadow-card flex flex-col md:flex-row items-center gap-8">
                <img
                  src={founderImage}
                  alt="Srinithin Somasundaram"
                  className="h-28 w-28 rounded-2xl object-cover shadow-elevated border border-border shrink-0"
                />
                <div className="space-y-3 text-left">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    About the Author
                  </span>
                  <h3 className="text-xl font-bold text-foreground">Srinithin Somasundaram</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Founder & CEO of Yesp Corporation. Srinithin leads the global team in building custom enterprise software, AI agents, and zero-latency systems for international enterprises.
                  </p>
                  <div className="flex items-center gap-4 pt-1 text-xs font-semibold text-primary">
                    <a
                      href="https://www.linkedin.com/in/srinithinsomasundaram/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                    </a>
                    <a
                      href="https://www.instagram.com/srinithin.somasundaram/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      <Instagram className="h-3.5 w-3.5" /> Instagram
                    </a>
                  </div>
                </div>
              </section>

              {/* Discovery CTA Banner */}
              <section className="rounded-3xl bg-brand p-8 sm:p-10 text-primary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <h3 className="text-xl font-extrabold sm:text-2xl">
                    Ready to build custom software for your enterprise?
                  </h3>
                  <p className="text-xs opacity-90 leading-relaxed">
                    Book a 20–30 minute discovery call with Srinithin Somasundaram and the Yesp Corporation engineering team.
                  </p>
                </div>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-xs font-bold text-foreground transition-transform hover:-translate-y-0.5 shrink-0 shadow-elevated"
                >
                  Book a Call <ArrowRight className="h-4 w-4" />
                </a>
              </section>

            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
