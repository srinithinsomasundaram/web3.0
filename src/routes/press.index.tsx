import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/yesp-footer-logo.png";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  Newspaper,
  Calendar,
  User,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building2,
  Globe,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/press/")({
  head: () => ({
    meta: [
      { title: "Press Center & Newsroom | Yesp Corporation India" },
      {
        name: "description",
        content:
          "Official Press Center & Newsroom for Yesp Corporation. Corporate announcements, press releases, media resources, and executive announcements for global enterprise clients.",
      },
      {
        name: "keywords",
        content:
          "Yesp Corporation Press, Yesp Newsroom, Yesp Corp India Press Releases, Enterprise Software Announcements, AI Automation News",
      },
      { property: "og:title", content: "Press Center | Yesp Corporation India" },
      {
        property: "og:description",
        content:
          "Official press releases and corporate announcements for Yesp Corporation India.",
      },
      { property: "og:image", content: "https://yespstudio.com/assets/yesp-footer-logo.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Press Center | Yesp Corporation" },
      {
        name: "twitter:description",
        content: "Official press announcements by Yesp Corporation India.",
      },
      { name: "twitter:image", content: "https://yespstudio.com/assets/yesp-footer-logo.png" },
    ],
    links: [{ rel: "canonical", href: "/press" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://yespstudio.com/press#webpage",
              url: "https://yespstudio.com/press",
              name: "Press Center & Newsroom | Yesp Corporation",
              description: "Official press release newsroom for Yesp Corporation India.",
            },
            {
              "@type": "Corporation",
              name: "Yesp Corporation",
              url: "https://yespstudio.com",
              founder: {
                "@type": "Person",
                name: "Srinithin Somasundaram",
                jobTitle: "Founder & CEO",
                url: "https://yespstudio.com/founder",
              },
              slogan: "Make Better Happen.",
            },
          ],
        }),
      },
    ],
  }),
  component: PressIndexPage,
});

const pressReleases = [
  {
    slug: "/press/yesp-corp-global-expansion-and-ai-infrastructure",
    title: "Yesp Corporation Global Team Announces Expansion of Autonomous AI & Enterprise Software Operations",
    date: "August 10, 2026",
    summary: "Scaling custom core software backbones, practical AI agents, and zero-latency integration pipelines for international enterprise clients from Bengaluru, Coimbatore, and Erode.",
    tag: "Global Expansion",
  },
  {
    slug: "/press/srinithin-somasundaram-keynote-future-of-ai",
    title: "Srinithin Somasundaram Outlines the Future of Practical AI and Custom Enterprise Software Architecture",
    date: "August 10, 2026",
    summary: "Executive address highlights how enterprise organizations can transition from experimental AI pilots to ROI-driven operational architectures.",
    tag: "Executive Keynote",
  },
  {
    slug: "/press/make-better-happen-initiative",
    title: "Yesp Corporation Introduces 'Make Better Happen' Operational Standard for Enterprise System Integrations",
    date: "August 8, 2026",
    summary: "New corporate engineering standard focuses on eliminating data fragmentation, reducing manual entry, and building software around actual business logic.",
    tag: "Corporate Initiative",
  },
  {
    slug: "/press/global-expansion-bengaluru",
    title: "Yesp Corporation Accelerates Global Growth with Operational Headquarters in Bengaluru Technology Corridor",
    date: "August 5, 2026",
    summary: "Strategic expansion connects Erode and Coimbatore engineering teams with Bengaluru's technology ecosystem to serve global enterprise clients.",
    tag: "Global Expansion",
  },
  {
    slug: "/press/ai-automation-launch",
    title: "Yesp Corporation Unveils Autonomous Enterprise AI & Automation Platform Led by Founder Srinithin Somasundaram",
    date: "August 1, 2026",
    summary: "New enterprise technology release combines bespoke software architecture, autonomous AI agents, and cross-system integrations under the 'Make Better Happen.' standard.",
    tag: "Product Release",
  },
];

function PressIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Top Press Header - PROMINENT AT TOP */}
        <section className="border-b border-border/60 bg-gradient-to-b from-background via-card to-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
              <Newspaper className="h-3.5 w-3.5 text-primary" /> Official Press Center & Corporate Newsroom
            </div>

            <div className="mt-8 grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                  Yesp Corporation <span className="text-gradient-brand">Press Center</span>
                </h1>
                <p className="mt-4 text-xl font-bold text-primary">
                  Official Corporate Announcements & Media Releases
                </p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Access official press statements, product launches, technology roadmaps, and media resources from Yesp Corporation India.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-accent-foreground">
                    <Building2 className="h-3.5 w-3.5 text-primary" /> Yesp Corporation India
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
                    <User className="h-3.5 w-3.5" /> Founder Profile (Srinithin Somasundaram) <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs font-semibold text-foreground transition-transform hover:-translate-y-0.5 hover:bg-secondary"
                  >
                    <Mail className="h-3.5 w-3.5 text-primary" /> Media Relations Desk <ArrowRight className="h-3.5 w-3.5" />
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
                    <p className="font-semibold text-foreground">Enterprise Technology & AI</p>
                    <p>Built for Global Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Press Releases List */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center justify-between border-b border-border/60 pb-6 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Corporate Media Releases
              </p>
              <h2 className="mt-1 text-2xl font-bold md:text-3xl">4 Official Press Releases</h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-3.5 w-3.5" /> Media Contact Desk
            </Link>
          </div>

          <div className="space-y-6">
            {pressReleases.map((pr) => (
              <article
                key={pr.slug}
                className="rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:border-primary/40 hover:shadow-elevated"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                    <Newspaper className="h-3.5 w-3.5 text-primary" /> {pr.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-semibold">
                    <Calendar className="h-3.5 w-3.5" /> {pr.date}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold md:text-2xl text-foreground">
                  <Link to={pr.slug} className="hover:text-primary transition-colors">
                    {pr.title}
                  </Link>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pr.summary}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <span>Yesp Corporation Official Release</span>
                    <CheckCircle2 className="h-3.5 w-3.5 fill-primary text-primary-foreground" />
                  </div>

                  <Link
                    to={pr.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    Read Full Press Release <ArrowRight className="h-3.5 w-3.5" />
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
