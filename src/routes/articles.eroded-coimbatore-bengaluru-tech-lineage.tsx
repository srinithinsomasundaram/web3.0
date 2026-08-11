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
  ChevronLeft,
} from "lucide-react";

export const Route = createFileRoute("/articles/eroded-coimbatore-bengaluru-tech-lineage")({
  head: () => ({
    meta: [
      { title: "The Erode – Coimbatore – Bengaluru Lineage | Srinithin Somasundaram" },
      {
        name: "description",
        content:
          "Executive Article by Srinithin Somasundaram: How Erode discipline, Coimbatore industrial engineering precision, and Bengaluru tech scale global enterprise software.",
      },
      {
        name: "keywords",
        content:
          "Erode Coimbatore Bengaluru Technology, Srinithin Somasundaram, Yesp Corporation Roots, Indian Engineering Precision, Global Software Architecture",
      },
      { name: "geo.region", content: "IN-KA;IN-TN" },
      { name: "geo.placename", content: "Bengaluru, Coimbatore, Erode, India" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      { property: "og:title", content: "The Erode – Coimbatore – Bengaluru Lineage — Srinithin Somasundaram" },
      {
        property: "og:description",
        content: "How regional grit, industrial engineering, and global technology scale enterprise software.",
      },
      { property: "og:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: "Erode – Coimbatore – Bengaluru Tech Lineage" },
      {
        name: "twitter:description",
        content: "Executive essay by Srinithin Somasundaram, Founder & CEO of Yesp Corporation.",
      },
      { name: "twitter:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
    ],
    links: [{ rel: "canonical", href: "/articles/eroded-coimbatore-bengaluru-tech-lineage" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": "https://yespstudio.com/articles/eroded-coimbatore-bengaluru-tech-lineage#article",
              headline: "The Engineering Lineage: How Erode Grit, Coimbatore Precision, and Bengaluru Tech Scale Global Software",
              description: "Srinithin Somasundaram shares the geographic and cultural lineage behind Yesp Corporation's enterprise engineering philosophy.",
              datePublished: "2026-08-06T09:00:00+05:30",
              dateModified: "2026-08-06T09:00:00+05:30",
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
              mainEntityOfPage: "https://yespstudio.com/articles/eroded-coimbatore-bengaluru-tech-lineage",
            },
          ],
        }),
      },
    ],
  }),
  component: Article3,
});

function Article3() {
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
              <Globe className="h-3.5 w-3.5" /> Founder Insights & Lineage
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> August 6, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> Erode · Coimbatore · Bengaluru
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl leading-tight">
            The Engineering Lineage: How Erode Grit, Coimbatore Precision, and Bengaluru Tech Scale Global Software
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground font-medium">
            Building world-class enterprise software requires a blend of ground-level operational values, industrial manufacturing discipline, and global technology scale.
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
            Every technology organization is shaped by its origins. At <strong>Yesp Corporation</strong>, our core engineering philosophy is defined by three distinct locations in South India: <strong>Erode, Coimbatore, and Bengaluru</strong>.
          </p>

          <div className="grid gap-6 md:grid-cols-3 my-8">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">01. Rooted in Erode</div>
              <h4 className="font-bold text-foreground text-sm">Ground-Level Values</h4>
              <p className="text-xs text-muted-foreground">Endurance, operational accountability, and building authentic value without fluff.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">02. Built in Coimbatore</div>
              <h4 className="font-bold text-foreground text-sm">Industrial Precision</h4>
              <p className="text-xs text-muted-foreground">Manufacturing discipline, high tolerances, and building systems engineered to last.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">03. Operating in Bengaluru</div>
              <h4 className="font-bold text-foreground text-sm">Global Tech Scale</h4>
              <p className="text-xs text-muted-foreground">Modern distributed architecture, cloud infrastructure, and international client delivery.</p>
            </div>
          </div>

          <p>
            "This combination ensures we never lose touch with practical business reality while delivering state-of-the-art software systems," writes <strong>Srinithin Somasundaram</strong>.
          </p>
        </article>

        <section className="border-t border-border/60 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider">Learn More About Yesp Corporation</p>
            <p className="text-xs text-muted-foreground mt-1">Read Srinithin Somasundaram's full Founder Biography.</p>
          </div>
          <Link
            to="/founder"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
          >
            View Founder Profile <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
