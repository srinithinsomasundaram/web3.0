import { Link } from "react-router-dom";
import founderImage from "@/assets/founder-srinithin-somasundaram.jpg";
import logo from "@/assets/yesp-footer-logo.png";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
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
  Cpu,
  ChevronLeft,
} from "lucide-react";

export default function Article2() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Link
          to="/articles"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Executive Articles
        </Link>

        {/* Top Header - PROMINENT AT TOP */}
        <header className="space-y-6 border-b border-border/60 pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <Cpu className="h-3.5 w-3.5" /> Artificial Intelligence & Automation
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> August 4, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Building2 className="h-3.5 w-3.5" /> Yesp Corporation Insights
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl leading-tight">
            Deploying Practical AI Agents: Bridging the Gap Between AI Hype and Operational ROI
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground font-medium">
            While many organizations experiment with generic chatbots, leading enterprises are quiet quietly deploying autonomous AI agents that run real production operations.
          </p>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 p-2">
              <img src={logo} alt="Yesp Logo" className="h-6 w-6 object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-xs font-bold text-foreground">
                Srinithin Somasundaram <CheckCircle2 className="h-3.5 w-3.5 fill-primary text-primary-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">Founder & CEO, Yesp Corporation</p>
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
            Artificial Intelligence has reached a pivotal transition point. The era of novelty demos is giving way to hard operational requirements: Does your AI system reduce processing times, eliminate data errors, and lower cost-per-transaction?
          </p>

          <p>
            According to <strong>Srinithin Somasundaram</strong>, Founder & CEO of Yesp Corporation, the difference between failed AI pilots and successful enterprise deployments lies in <em>task specificity</em>.
          </p>

          <h3 className="text-xl font-bold text-foreground pt-4">What Makes an Enterprise AI Agent "Practical"?</h3>

          <div className="rounded-2xl border border-border bg-secondary/50 p-6 my-6 space-y-3">
            <ul className="list-disc list-inside text-xs space-y-2 text-muted-foreground">
              <li><strong>Deep API Integration:</strong> The agent does not just output text — it reads from internal databases, calls microservices, and updates ERP systems automatically.</li>
              <li><strong>Deterministic Guardrails:</strong> Critical financial or compliance actions pass through strict validation before execution.</li>
              <li><strong>Human-in-the-Loop Supervision:</strong> Complex edge cases are flagged directly to senior staff for approval.</li>
            </ul>
          </div>

          <p>
            At <strong>Yesp Corporation</strong>, we architect custom AI agent pipelines that handle document intelligence, automated customer dispatch, and supply chain forecasting for global enterprises.
          </p>
        </article>

        <section className="border-t border-border/60 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider">Explore Enterprise AI Architecture</p>
            <p className="text-xs text-muted-foreground mt-1">Contact Srinithin Somasundaram and the Yesp AI engineering team.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
          >
            Get Connected <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
