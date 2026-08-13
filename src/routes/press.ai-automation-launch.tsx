import { Link } from "react-router-dom";
import logo from "@/assets/yesp-footer-logo.png";
import founderImage from "@/assets/founder-srinithin-somasundaram.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
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
  Sparkles,
  ChevronLeft,
  Mail,
} from "lucide-react";

export default function PressArticle1() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Link
          to="/press"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Press Center
        </Link>

        {/* PR Top Header - PROMINENT AT TOP */}
        <header className="space-y-6 border-b border-border/60 pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <Newspaper className="h-3.5 w-3.5" /> Official Press Release
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              <Building2 className="h-3.5 w-3.5 text-primary" /> Published by Yesp Corp India Team
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> August 1, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Bengaluru, India
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl leading-tight">
            Yesp Corporation Unveils Autonomous Enterprise AI & Automation Platform Led by Founder Srinithin Somasundaram
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground font-medium">
            Published by the Yesp Corporation India Team across Erode, Coimbatore, and Bengaluru for global enterprise technology.
          </p>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
            <img
              src={founderImage}
              alt="Srinithin Somasundaram"
              className="h-12 w-12 rounded-full object-cover border border-primary/20"
            />
            <div>
              <div className="flex items-center gap-1 text-xs font-bold text-foreground">
                Srinithin Somasundaram <CheckCircle2 className="h-3.5 w-3.5 fill-primary text-primary-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">Founder & CEO, Yesp Corporation India</p>
              <p className="text-[0.7rem] text-primary font-semibold">Published by Yesp Corp India Team</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/srinithinsomasundaram/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-foreground hover:bg-[#0A66C2] hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.instagram.com/srinithin.somasundaram/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-foreground hover:bg-[#E1306C] hover:text-white transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </header>

        <article className="prose prose-neutral dark:prose-invert max-w-none py-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p className="text-base text-foreground font-semibold">
            BENGALURU, INDIA — August 1, 2026 — The Yesp Corporation India Team today announced the official rollout of its next-generation Enterprise AI & Automation Platform.
          </p>

          <p>
            Designed under the leadership of Founder & CEO <strong>Srinithin Somasundaram</strong> and published by the Yesp Corp India engineering desk, the new platform targets mid-market and enterprise organizations operating at scale across international markets including the UK, US, Europe, and Asia-Pacific.
          </p>

          <h3 className="text-xl font-bold text-foreground pt-4">Bridging the Gap Between AI Promises and Operational Reality</h3>

          <p>
            "Many organizations attempt to deploy AI by adding surface-level chatbots or generic SaaS subscriptions," stated <strong>Srinithin Somasundaram</strong>, Founder & CEO of Yesp Corporation India. "Real operational transformation requires AI agents that run directly within the business's existing software backbone, executing repetitive tasks, syncing data across isolated platforms, and providing real-time operational intelligence."
          </p>

          <div className="rounded-2xl border border-border bg-secondary/50 p-6 my-6 space-y-2">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> Key Platform Capabilities:
            </h4>
            <ul className="list-disc list-inside text-xs space-y-1.5 text-muted-foreground">
              <li><strong>Autonomous Agent Workflows:</strong> AI agents capable of handling complex document processing, order routing, and inventory sync.</li>
              <li><strong>Zero-Latency Integrations:</strong> Pre-built ERP, CRM, and custom database pipelines.</li>
              <li><strong>Deterministic Executive Dashboards:</strong> Real-time operational metric tracking without data drift.</li>
              <li><strong>100% Virtual Deployment:</strong> Built for distributed enterprise teams working remotely worldwide.</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-foreground pt-4">Rooted in Engineering Precision</h3>

          <p>
            Yesp Corporation India's development framework is rooted in its geographic lineage: <em>Rooted in Erode, built in Coimbatore, and operating in Bengaluru</em>. This combination merges ground-level operational discipline with high-precision engineering and global scalability.
          </p>

          <p>
            "Our motto is simple: <strong>Make Better Happen.</strong> We measure technology not by lines of code or hype, but by the tangible operational speed, clarity, and cost reduction delivered to our business clients," Somasundaram added.
          </p>

          <h3 className="text-xl font-bold text-foreground pt-4">About Yesp Corporation India</h3>
          <p>
            Yesp Corporation India is an enterprise technology firm headquartered in Bengaluru, India, with technical roots in Erode and Coimbatore. Published by the Yesp Corp India Team, Yesp builds enterprise software platforms, AI agent architectures, and automated system integrations for global enterprises.
          </p>
        </article>

        <section className="border-t border-border/60 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider">Media & PR Inquiries</p>
            <p className="text-xs text-muted-foreground mt-1">Yesp Corporation India Press Desk — hello@yespstudio.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
            >
              Contact Press Team <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
