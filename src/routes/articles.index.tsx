import { Link } from "react-router-dom";
import logo from "@/assets/yesp-footer-logo.png";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  BookOpen,
  Calendar,
  User,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building2,
  Mail,
} from "lucide-react";

const articlesList = [
  {
    slug: "/articles/yesp-corp-global-engineering-and-ai-delivery",
    title: "Yesp Corp Global: Engineering Enterprise Software & Applied AI Systems from India to International Scale",
    date: "August 10, 2026",
    summary: "An executive guide into how Yesp Corporation Global Team delivers custom software backbones, practical AI agents, and zero-latency integrations for international enterprises.",
    tag: "Global Infrastructure",
    author: "Srinithin Somasundaram",
  },
  {
    slug: "/articles/the-make-better-happen-engineering-framework",
    title: "The 'Make Better Happen' Blueprint: Designing Software Around Actual Business Operations",
    date: "August 9, 2026",
    summary: "How a commitment to operational simplicity, zero-fluff software, and deterministic automation defines the engineering standard at Yesp Corporation Global.",
    tag: "Corporate Blueprint",
    author: "Srinithin Somasundaram",
  },
  {
    slug: "/articles/eliminating-data-silos-with-zero-latency-integrations",
    title: "Eliminating Operational Bottlenecks: How Zero-Latency ERP & System Integrations Drive Business Velocity",
    date: "August 7, 2026",
    summary: "When sales, finance, inventory, and customer databases sync in real-time, business operations accelerate without administrative friction.",
    tag: "System Architecture",
    author: "Srinithin Somasundaram",
  },
  {
    slug: "/articles/eroded-coimbatore-bengaluru-tech-lineage",
    title: "The Engineering Lineage: How Erode Grit, Coimbatore Precision, and Bengaluru Tech Scale Global Software",
    date: "August 6, 2026",
    summary: "Building world-class enterprise software requires a blend of ground-level operational values, industrial manufacturing discipline, and global technology scale.",
    tag: "Founder Insights",
    author: "Srinithin Somasundaram",
  },
  {
    slug: "/articles/practical-ai-agents-in-enterprise-workflows",
    title: "Deploying Practical AI Agents: Bridging the Gap Between AI Hype and Operational ROI",
    date: "August 4, 2026",
    summary: "While many organizations experiment with generic chatbots, leading enterprises are quietly deploying autonomous AI agents that run real production operations.",
    tag: "AI & Automation",
    author: "Srinithin Somasundaram",
  },
  {
    slug: "/articles/building-custom-enterprise-software-vs-saas",
    title: "Why Scaling Enterprises Are Moving from Fragmented SaaS to Custom Software Backbones",
    date: "August 2, 2026",
    summary: "How subscription creep and disconnected SaaS tools slow down operations, and why forward-thinking companies are building custom software built around their exact business logic.",
    tag: "Enterprise Strategy",
    author: "Srinithin Somasundaram",
  },
];

export default function ArticlesIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Top Header - PROMINENT AT TOP */}
        <section className="border-b border-border/60 bg-gradient-to-b from-background via-card to-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
              <BookOpen className="h-3.5 w-3.5 text-primary" /> Executive Articles & Technology Insights
            </div>

            <div className="mt-8 grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                  Executive <span className="text-gradient-brand">Articles</span>
                </h1>
                <p className="mt-4 text-xl font-bold text-primary">
                  Published by Yesp Corporation Global Team & Founder Srinithin Somasundaram
                </p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  In-depth architectural articles and practical engineering guides published by the Yesp Corporation Global Team across Erode, Coimbatore, and Bengaluru for global technology leaders.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-accent-foreground">
                    <Building2 className="h-3.5 w-3.5 text-primary" /> Published by Yesp Corp Global Team
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-accent-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary" /> Erode – Coimbatore – Bengaluru
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/founder"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
                  >
                    <User className="h-3.5 w-3.5" /> Founder Profile <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/press"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs font-semibold text-foreground transition-transform hover:-translate-y-0.5 hover:bg-secondary"
                  >
                    <Building2 className="h-3.5 w-3.5 text-primary" /> Press Releases <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-4 flex justify-center">
                <div className="relative rounded-3xl border border-border bg-card p-8 shadow-elevated text-center max-w-sm w-full">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-brand/10 p-4">
                    <img src={logo} alt="Yesp Corporation" className="h-14 w-auto object-contain" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">Yesp Corporation</h3>
                  <p className="text-xs text-primary font-semibold">Make Better Happen.</p>
                  <p className="mt-2 text-xs text-muted-foreground">Erode – Coimbatore – Bengaluru</p>
                  <div className="mt-4 border-t border-border/60 pt-4 text-[0.72rem] text-muted-foreground">
                    <p className="font-semibold text-foreground">Author: Srinithin Somasundaram</p>
                    <p>Published by Yesp Corp Global Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Articles List */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center justify-between border-b border-border/60 pb-6 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Technology & Architecture Articles
              </p>
              <h2 className="mt-1 text-2xl font-bold md:text-3xl">5 Executive Articles</h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-3.5 w-3.5" /> Direct Contact
            </Link>
          </div>

          <div className="space-y-6">
            {articlesList.map((article) => (
              <article
                key={article.slug}
                className="rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:border-primary/40 hover:shadow-elevated"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                    <BookOpen className="h-3.5 w-3.5 text-primary" /> {article.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-semibold">
                    <Calendar className="h-3.5 w-3.5" /> {article.date}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold md:text-2xl text-foreground">
                  <Link to={article.slug} className="hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {article.summary}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <span>By {article.author} · Published by Yesp Corp Global Team</span>
                    <CheckCircle2 className="h-3.5 w-3.5 fill-primary text-primary-foreground" />
                  </div>

                  <Link
                    to={article.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
