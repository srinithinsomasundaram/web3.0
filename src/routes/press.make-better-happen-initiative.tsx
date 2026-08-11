import { createFileRoute, Link } from "@tanstack/react-router";
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
  Award,
  ChevronLeft,
} from "lucide-react";

export const Route = createFileRoute("/press/make-better-happen-initiative")({
  head: () => ({
    meta: [
      { title: "Press Release: Yesp Corporation India Sets 'Make Better Happen' Standard | Srinithin Somasundaram" },
      {
        name: "description",
        content:
          "Official Press Release published by Yesp Corporation India Team: Introducing the 'Make Better Happen.' framework for enterprise software, AI integrations, and zero-complexity automation across Erode, Coimbatore, and Bengaluru.",
      },
      {
        name: "keywords",
        content:
          "Make Better Happen, Yesp Corporation India Press Release, Yesp Corp India Team, Srinithin Somasundaram, Enterprise Software Standard, System Integration Excellence",
      },
      { name: "geo.region", content: "IN-KA;IN-TN" },
      { name: "geo.placename", content: "Bengaluru, Coimbatore, Erode, India" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      { property: "og:title", content: "Yesp Corporation India Sets 'Make Better Happen' Standard" },
      {
        property: "og:description",
        content: "Published by Yesp Corporation India Team & Founder Srinithin Somasundaram.",
      },
      { property: "og:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: "PR: Yesp Corporation India 'Make Better Happen' Initiative" },
      {
        name: "twitter:description",
        content: "Published by Yesp Corporation India Team & Srinithin Somasundaram.",
      },
      { name: "twitter:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
    ],
    links: [{ rel: "canonical", href: "/press/make-better-happen-initiative" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "NewsArticle",
              "@id": "https://yespstudio.com/press/make-better-happen-initiative#article",
              headline: "Yesp Corporation Introduces 'Make Better Happen' Operational Standard for Enterprise System Integrations",
              description: "Published by Yesp Corporation India Team: Yesp Corporation formalizes its foundational engineering philosophy to eliminate software complexity.",
              datePublished: "2026-08-08T09:00:00+05:30",
              dateModified: "2026-08-08T09:00:00+05:30",
              locationCreated: {
                "@type": "Place",
                name: "Bengaluru, Karnataka, India",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bengaluru",
                  addressRegion: "Karnataka",
                  addressCountry: "IN",
                },
              },
              author: {
                "@type": "Person",
                name: "Srinithin Somasundaram",
                jobTitle: "Founder & CEO",
                worksFor: { "@type": "Corporation", name: "Yesp Corporation India" },
                url: "https://yespstudio.com/founder",
                sameAs: [
                  "https://www.linkedin.com/in/srinithinsomasundaram/",
                  "https://www.instagram.com/srinithin.somasundaram/",
                ],
              },
              publisher: {
                "@type": "Corporation",
                name: "Yesp Corporation India Team",
                url: "https://yespstudio.com",
                logo: "https://yespstudio.com/assets/yesp-footer-logo.png",
                slogan: "Make Better Happen.",
              },
              image: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg",
              mainEntityOfPage: "https://yespstudio.com/press/make-better-happen-initiative",
            },
          ],
        }),
      },
    ],
  }),
  component: PressArticle3,
});

function PressArticle3() {
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
              <Calendar className="h-3.5 w-3.5" /> August 8, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Bengaluru, India
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl leading-tight">
            Yesp Corporation Introduces "Make Better Happen" Operational Standard for Enterprise System Integrations
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground font-medium">
            Published by the Yesp Corporation India Team across Erode, Coimbatore, and Bengaluru for global enterprise technology operations.
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
            BENGALURU, INDIA — August 8, 2026 — The Yesp Corporation India Team today announced the formalization of its company-wide engineering framework: <strong>"Make Better Happen."</strong>
          </p>

          <p>
            Developed by Founder & CEO <strong>Srinithin Somasundaram</strong> and published by the Yesp Corp India team, the framework addresses the growing problem of "software bloat" in modern enterprises — where companies run dozens of incompatible SaaS tools resulting in severe operational slowdowns.
          </p>

          <h3 className="text-xl font-bold text-foreground pt-4">About Yesp Corporation India</h3>
          <p>
            Yesp Corporation India is an enterprise technology company headquartered in Bengaluru, India, building software, AI systems, and intelligent automation for businesses operating at scale worldwide. Published by the Yesp Corp India Team.
          </p>
        </article>

        <section className="border-t border-border/60 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider">Media & PR Inquiries</p>
            <p className="text-xs text-muted-foreground mt-1">Yesp Corporation India Press Desk — hello@yespstudio.com</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
          >
            Contact Press Team <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
