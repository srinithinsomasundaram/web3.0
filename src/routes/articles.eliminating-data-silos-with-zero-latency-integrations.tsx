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
  Layers,
  ChevronLeft,
} from "lucide-react";

export const Route = createFileRoute("/articles/eliminating-data-silos-with-zero-latency-integrations")({
  head: () => ({
    meta: [
      { title: "Eliminating Data Silos with Zero-Latency Integrations | Srinithin Somasundaram" },
      {
        name: "description",
        content:
          "Executive Article by Srinithin Somasundaram: How automated cross-system pipelines and zero-latency ERP integrations eliminate business bottlenecks.",
      },
      {
        name: "keywords",
        content:
          "System Integrations, Zero Latency ERP, Data Silos, Srinithin Somasundaram, Yesp Corporation Software Architecture",
      },
      { name: "geo.region", content: "IN-KA;IN-TN" },
      { name: "geo.placename", content: "Bengaluru, Coimbatore, Erode, India" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      { property: "og:title", content: "Eliminating Data Silos — Srinithin Somasundaram" },
      {
        property: "og:description",
        content: "How zero-latency system integrations drive operational velocity for scaling enterprises.",
      },
      { property: "og:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: "Eliminating Data Silos — Srinithin Somasundaram" },
      {
        name: "twitter:description",
        content: "Executive insights by Srinithin Somasundaram, Founder & CEO of Yesp Corporation.",
      },
      { name: "twitter:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
    ],
    links: [{ rel: "canonical", href: "/articles/eliminating-data-silos-with-zero-latency-integrations" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TechArticle",
              "@id": "https://yespstudio.com/articles/eliminating-data-silos-with-zero-latency-integrations#article",
              headline: "Eliminating Operational Bottlenecks: How Zero-Latency ERP & System Integrations Drive Business Velocity",
              description: "A deep dive into system integration design, API pipelines, and eliminating manual data entry across enterprise software ecosystems.",
              datePublished: "2026-08-07T09:00:00+05:30",
              dateModified: "2026-08-07T09:00:00+05:30",
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
              mainEntityOfPage: "https://yespstudio.com/articles/eliminating-data-silos-with-zero-latency-integrations",
            },
          ],
        }),
      },
    ],
  }),
  component: Article4,
});

function Article4() {
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
              <Layers className="h-3.5 w-3.5" /> System Integration Architecture
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> August 7, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Building2 className="h-3.5 w-3.5" /> Yesp Corporation Insights
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl leading-tight">
            Eliminating Operational Bottlenecks: How Zero-Latency ERP & System Integrations Drive Business Velocity
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground font-medium">
            When sales, finance, inventory, and customer databases sync in real-time, business operations accelerate without administrative friction.
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
            One of the subtle killers of enterprise growth is "latency between software departments." A sale is made in the CRM, but the finance team does not see the invoice for 24 hours, and the warehouse team is unaware of inventory stockouts until a customer complains.
          </p>

          <p>
            At <strong>Yesp Corporation</strong>, Founder & CEO <strong>Srinithin Somasundaram</strong> leads the engineering of zero-latency system integration pipelines that connect ERP, CRM, and custom databases in real-time.
          </p>
        </article>

        <section className="border-t border-border/60 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider">Connect Systems Today</p>
            <p className="text-xs text-muted-foreground mt-1">Book an integration audit with Yesp Corporation.</p>
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
