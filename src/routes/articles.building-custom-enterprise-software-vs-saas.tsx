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
  Globe,
  Sparkles,
  ChevronLeft,
} from "lucide-react";

export const Route = createFileRoute("/articles/building-custom-enterprise-software-vs-saas")({
  head: () => ({
    meta: [
      { title: "Custom Enterprise Software vs SaaS Bloat | Published by Yesp Corp India Team" },
      {
        name: "description",
        content:
          "Published by Yesp Corporation India Team & Founder Srinithin Somasundaram: Why scaling enterprise businesses across Erode, Coimbatore, and Bengaluru are moving away from fragmented SaaS subscriptions towards custom software backbones.",
      },
      {
        name: "keywords",
        content:
          "Custom Enterprise Software, SaaS Bloat, Yesp Corp India Team, Srinithin Somasundaram, Erode Coimbatore Bengaluru Software, Enterprise Architecture India",
      },
      { name: "geo.region", content: "IN-KA;IN-TN" },
      { name: "geo.placename", content: "Bengaluru, Coimbatore, Erode, India" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      { property: "og:title", content: "Custom Enterprise Software vs SaaS Bloat — Published by Yesp Corp India Team" },
      {
        property: "og:description",
        content:
          "Published by Yesp Corporation India Team & Founder Srinithin Somasundaram. Why scaling enterprises are replacing SaaS tools with custom software.",
      },
      { property: "og:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: "Custom Software vs SaaS Bloat — Yesp Corp India Team" },
      {
        name: "twitter:description",
        content: "Published by Yesp Corporation India Team & Srinithin Somasundaram.",
      },
      { name: "twitter:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
    ],
    links: [{ rel: "canonical", href: "/articles/building-custom-enterprise-software-vs-saas" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TechArticle",
              "@id": "https://yespstudio.com/articles/building-custom-enterprise-software-vs-saas#article",
              headline: "Why Scaling Enterprises Are Moving from Fragmented SaaS to Custom Software Backbones",
              description: "Published by Yesp Corporation India Team: An analysis of SaaS fragmentation and how bespoke software architecture provides long-term speed and scalability.",
              datePublished: "2026-08-02T09:00:00+05:30",
              dateModified: "2026-08-02T09:00:00+05:30",
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
              mainEntityOfPage: "https://yespstudio.com/articles/building-custom-enterprise-software-vs-saas",
            },
          ],
        }),
      },
    ],
  }),
  component: Article1,
});

function Article1() {
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
              <BookOpen className="h-3.5 w-3.5" /> Executive Architecture Insights
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              <Building2 className="h-3.5 w-3.5 text-primary" /> Published by Yesp Corp India Team
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> August 2, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Erode · Coimbatore · Bengaluru, India
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl leading-tight">
            Why Scaling Enterprises Are Moving from Fragmented SaaS to Custom Software Backbones
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground font-medium">
            Published by the Yesp Corporation India Team — How subscription creep and disconnected SaaS tools slow down operations, and why companies are building custom software backbones.
          </p>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 p-2">
              <img src={logo} alt="Yesp Logo" className="h-6 w-6 object-contain" />
            </div>
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
            In the early stages of business growth, subscribing to off-the-shelf SaaS applications feels like the fastest path forward. You pick a CRM, a separate billing tool, a project management platform, and a customer support ticketing app.
          </p>

          <p>
            However, as your organization grows past 50, 100, or 500 team members, a dangerous side effect emerges: <strong>SaaS fragmentation</strong>. Data is locked inside disconnected tools, employees spend hours manually copy-pasting numbers between tabs, and annual software licensing fees balloon exponentially.
          </p>

          <h3 className="text-xl font-bold text-foreground pt-4">The Real Cost of Software Fragmentation</h3>

          <p>
            When a business relies on 15 different SaaS platforms that do not communicate seamlessly, the organization suffers from three critical bottlenecks:
          </p>

          <div className="rounded-2xl border border-border bg-secondary/50 p-6 my-6 space-y-3">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> The Hidden Operational Bottlenecks:
            </h4>
            <ol className="list-decimal list-inside text-xs space-y-2 text-muted-foreground">
              <li><strong>Data Silos & Blind Spots:</strong> Executives lack a single source of truth for revenue, inventory, and customer health.</li>
              <li><strong>Manual Entry Overhead:</strong> High-value staff spend up to 25% of their working hours transferring data manually.</li>
              <li><strong>Rigid Template Limitations:</strong> Generic SaaS apps force your team to change its operational processes to fit the vendor's rigid UI.</li>
            </ol>
          </div>

          <h3 className="text-xl font-bold text-foreground pt-4">The Shift Towards Bespoke Enterprise Backbones</h3>

          <p>
            Published by the <strong>Yesp Corporation India Team</strong> across Erode, Coimbatore, and Bengaluru, our engineering philosophy is built around a clear standard: <em>Make Better Happen.</em> We partner with scaling organizations to construct custom enterprise software platforms that consolidate fragmented tools into a single, unified operational backbone.
          </p>

          <p>
            "A custom enterprise software backbone is not an expense — it is an appreciating core asset," explains <strong>Srinithin Somasundaram</strong>, Founder & CEO of Yesp Corporation India. "When software is engineered specifically around your proprietary business logic, your company operates faster, scales without linear headcount costs, and retains full control over its data security."
          </p>

          <h3 className="text-xl font-bold text-foreground pt-4">Conclusion & Strategic Takeaway</h3>
          <p>
            If your business is struggling with subscription bloat, disconnected spreadsheets, or slow manual hand-offs, it is time to evaluate custom software architecture built around your exact operational needs by the Yesp Corp India Team.
          </p>
        </article>

        <section className="border-t border-border/60 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider">Discuss Custom Architecture</p>
            <p className="text-xs text-muted-foreground mt-1">Published by Yesp Corporation India Team — hello@yespstudio.com</p>
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
