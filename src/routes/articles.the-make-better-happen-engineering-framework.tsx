import { createFileRoute, Link } from "@tanstack/react-router";
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
  Award,
  ChevronLeft,
} from "lucide-react";

export const Route = createFileRoute("/articles/the-make-better-happen-engineering-framework")({
  head: () => ({
    meta: [
      { title: "The 'Make Better Happen' Engineering Framework | Srinithin Somasundaram" },
      {
        name: "description",
        content:
          "Executive Article by Srinithin Somasundaram: The foundational blueprint behind Yesp Corporation's enterprise software and AI engineering framework.",
      },
      {
        name: "keywords",
        content:
          "Make Better Happen Framework, Srinithin Somasundaram, Yesp Corporation Slogan, Software Architecture Standard, Business Automation Blueprint",
      },
      { name: "geo.region", content: "IN-KA;IN-TN" },
      { name: "geo.placename", content: "Bengaluru, Coimbatore, Erode, India" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      { property: "og:title", content: "The 'Make Better Happen' Framework — Srinithin Somasundaram" },
      {
        property: "og:description",
        content: "Designing enterprise software around actual business logic and operational velocity.",
      },
      { property: "og:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: "The 'Make Better Happen' Framework" },
      {
        name: "twitter:description",
        content: "Executive essay by Srinithin Somasundaram, Founder & CEO of Yesp Corporation.",
      },
      { name: "twitter:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
    ],
    links: [{ rel: "canonical", href: "/articles/the-make-better-happen-engineering-framework" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TechArticle",
              "@id": "https://yespstudio.com/articles/the-make-better-happen-engineering-framework#article",
              headline: "The 'Make Better Happen' Blueprint: Designing Software Around Actual Business Operations",
              description: "Srinithin Somasundaram outlines the engineering principles that guide software development, automation, and AI integrations at Yesp Corporation.",
              datePublished: "2026-08-09T09:00:00+05:30",
              dateModified: "2026-08-09T09:00:00+05:30",
              author: {
                "@type": "Person",
                name: "Srinithin Somasundaram",
                jobTitle: "Founder & CEO",
                worksFor: { "@type": "Corporation", name: "Yesp Corporation" },
                url: "https://yespstudio.com/founder",
                sameAs: [
                  "https://www.linkedin.com/in/srinithinsomasundaram/",
                  "https://www.instagram.com/srinithin.somasundaram/",
                ],
              },
              publisher: {
                "@type": "Corporation",
                name: "Yesp Corporation",
                url: "https://yespstudio.com",
                logo: "https://yespstudio.com/assets/yesp-footer-logo.png",
                slogan: "Make Better Happen.",
              },
              image: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg",
              mainEntityOfPage: "https://yespstudio.com/articles/the-make-better-happen-engineering-framework",
            },
          ],
        }),
      },
    ],
  }),
  component: Article5,
});

function Article5() {
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
              <Award className="h-3.5 w-3.5" /> Corporate Philosophy & Blueprint
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> August 9, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Building2 className="h-3.5 w-3.5" /> Yesp Corporation Insights
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl leading-tight">
            The 'Make Better Happen' Blueprint: Designing Software Around Actual Business Operations
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground font-medium">
            How a commitment to operational simplicity, zero-fluff software, and deterministic automation defines the engineering standard at Yesp Corporation.
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
            When <strong>Srinithin Somasundaram</strong> established <strong>Yesp Corporation</strong>, he selected a simple three-word slogan: <em>"Make Better Happen."</em>
          </p>

          <p>
            Far from a marketing motto, it serves as the foundational engineering standard for every platform, database schema, and AI agent pipeline created by the Yesp engineering team.
          </p>

          <div className="rounded-2xl border border-border bg-secondary/50 p-6 my-6 space-y-2">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" /> The 4 Guiding Principles:
            </h4>
            <ol className="list-decimal list-inside text-xs space-y-2 text-muted-foreground">
              <li><strong>Zero-Complexity UI:</strong> Interface design that requires zero training for team members to operate.</li>
              <li><strong>Business-First Logic:</strong> Building software directly around the client's proven operational workflows.</li>
              <li><strong>Deterministic Automation:</strong> High-reliability pipelines that execute without silent errors or human oversight.</li>
              <li><strong>Continuous Modernization:</strong> Future-proofing system backbones against vendor lock-in.</li>
            </ol>
          </div>
        </article>

        <section className="border-t border-border/60 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider">Partner with Yesp Corporation</p>
            <p className="text-xs text-muted-foreground mt-1">Transform your business software with Srinithin Somasundaram and team.</p>
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
