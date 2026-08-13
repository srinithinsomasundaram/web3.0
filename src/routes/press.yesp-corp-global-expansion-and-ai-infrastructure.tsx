import { Link } from "react-router-dom";
import founderImage from "@/assets/founder-srinithin-somasundaram.jpg";
import logo from "@/assets/yesp-footer-logo.png";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import {
  Newspaper,
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
  Share2,
  Radio,
} from "lucide-react";

export default function YespCorpGlobalPressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <article>
          {/* Header Banner */}
          <header className="border-b border-border/60 bg-gradient-to-b from-background via-card to-background py-16 md:py-24">
            <div className="mx-auto max-w-4xl px-6">
              <Link
                to="/press"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline mb-6"
              >
                <ChevronLeft className="h-4 w-4" /> Back to Official Press Center
              </Link>

              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-sm">
                <Radio className="h-3.5 w-3.5 text-primary animate-pulse" /> Official Press Release · Yesp Corp Global
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight md:text-5xl leading-tight text-foreground">
                Yesp Corporation Global Team Announces Expansion of Autonomous AI & Enterprise Software Operations
              </h1>

              <p className="mt-6 text-base text-muted-foreground leading-relaxed md:text-lg">
                Scaling custom core software backbones, practical AI agents, and zero-latency integration pipelines for international enterprise clients from Bengaluru, Coimbatore, and Erode.
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
                  <span>Bengaluru · Coimbatore · Erode, India</span>
                </div>
              </div>
            </div>
          </header>

          {/* Body Content */}
          <div className="mx-auto max-w-4xl px-6 py-16">
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 leading-relaxed text-foreground">
              
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                BENGALURU, INDIA — August 10, 2026
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Yesp Corporation Global Team today announced a major milestone in expanding its enterprise engineering infrastructure and applied AI agent delivery model to serve international clients across North America, Europe, Asia, and India.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                As global businesses navigate fragmented SaaS subscriptions and operational overhead, Yesp Corporation has established a dedicated 100% remote engineering framework designed around zero-latency integrations, custom database backbones, and deterministic AI agent pipelines.
              </p>

              <blockquote className="my-8 rounded-3xl border-l-4 border-primary bg-card p-8 shadow-card italic text-sm text-foreground space-y-3">
                <p>
                  "Our mission at Yesp Corporation has always been clear: Make Better Happen. We don't build generic SaaS tools or speculative AI wrappers. We partner directly with enterprises to build custom core software systems and practical AI agents that run real production operations with zero fluff."
                </p>
                <footer className="not-italic font-bold text-xs text-primary pt-2">
                  — Srinithin Somasundaram, Founder & CEO, Yesp Corporation
                </footer>
              </blockquote>

              <h2 className="text-2xl font-bold text-foreground">
                Key Global Expansion Highlights:
              </h2>

              <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Zero-Latency System Mesh:</strong> Real-time synchronization connecting legacy ERPs, CRMs, and financial databases with zero operational lag.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Autonomous AI Agent Pipelines:</strong> Production-grade agents automating document processing, customer operations, and data reconciliation 24/7.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>100% Remote Delivery:</strong> Asynchronous senior engineering teams serving global enterprises directly without middle layers.</span>
                </li>
              </ul>

              {/* Media Contact Box */}
              <section className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-card space-y-4">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Newspaper className="h-5 w-5 text-primary" /> Media & Press Contact
                </h3>
                <div className="grid gap-2 text-xs text-muted-foreground">
                  <p><strong>Organization:</strong> Yesp Corporation Global Team</p>
                  <p><strong>Press Office:</strong> hello@yespstudio.com</p>
                  <p><strong>Executive Head Office:</strong> Bengaluru, Karnataka, India</p>
                  <p><strong>Engineering Centers:</strong> Coimbatore & Erode, Tamil Nadu, India</p>
                </div>
              </section>

              {/* Discovery Call CTA */}
              <section className="rounded-3xl bg-brand p-8 sm:p-10 text-primary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-12">
                <div className="space-y-2 max-w-xl">
                  <h3 className="text-xl font-extrabold sm:text-2xl">
                    Schedule a Discovery Call
                  </h3>
                  <p className="text-xs opacity-90 leading-relaxed">
                    Connect directly with Srinithin Somasundaram and the Yesp Corporation engineering team.
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
