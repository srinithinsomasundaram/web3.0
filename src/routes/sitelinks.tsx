import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import {
  Compass,
  Building2,
  Layers,
  BookOpen,
  Newspaper,
  Briefcase,
  ArrowRight,
  Globe,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/sitelinks")({
  head: () => ({
    meta: [
      {
        title:
          "Sitelinks Directory & HTML Sitemap | Yesp Corporation Global Team",
      },
      {
        name: "description",
        content:
          "Official Sitelinks Directory and HTML Sitemap for Yesp Corporation Global Team. Access all core pages, service capabilities, executive articles, press releases, and corporate resources.",
      },
      {
        name: "keywords",
        content:
          "Yesp Sitelinks, HTML Sitemap, Yesp Corporation Directory, Enterprise Navigation, Yesp Pages Index, Erode Coimbatore Bengaluru Technology",
      },
      { name: "geo.region", content: "IN-KA;IN-TN" },
      { name: "geo.placename", content: "Bengaluru, Coimbatore, Erode, India" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      {
        property: "og:title",
        content: "Sitelinks Directory & Sitemap — Yesp Corporation",
      },
      {
        property: "og:description",
        content:
          "Complete index of core pages, service capabilities, executive technology articles, and official press releases.",
      },
      {
        property: "og:image",
        content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg",
      },
      { property: "og:type", content: "website" },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Sitelinks Directory — Yesp Corporation",
      },
      {
        name: "twitter:description",
        content:
          "Official navigation directory for Yesp Corporation Global Team.",
      },
      {
        name: "twitter:image",
        content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "/sitelinks" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ItemPage",
              "@id": "https://yespstudio.com/sitelinks#webpage",
              url: "https://yespstudio.com/sitelinks",
              name: "Sitelinks Directory & HTML Sitemap | Yesp Corporation",
              description:
                "Official navigation directory and site map for Yesp Corporation Global Team.",
              publisher: {
                "@type": "Corporation",
                name: "Yesp Corporation Global Team",
                slogan: "Make Better Happen.",
                url: "https://yespstudio.com",
                logo: "https://yespstudio.com/assets/yesp-footer-logo.png",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: SitelinksPage,
});

const siteCategories = [
  {
    title: "Core Corporate Pages",
    icon: Building2,
    links: [
      { name: "Homepage (Executive Portal)", path: "/", desc: "Main corporate overview, 3 core industries, and active pipeline." },
      { name: "Technical Expertise & Architecture", path: "/tech-expertise", desc: "Core technical stack across Backend, Autonomous AI, Cloud Infra, Frontend, and Data Sync." },
      { name: "About Yesp Corporation", path: "/about", desc: "Corporate slogan 'Make Better Happen.', brand story, and regional lineage." },
      { name: "Founder Profile (Srinithin Somasundaram)", path: "/founder", desc: "Founder biography, leadership principles, and tech vision." },
      { name: "Selected Client Work & Proof", path: "/case-studies", desc: "Enterprise case studies and system performance proof." },
      { name: "100% Remote Careers", path: "/careers", desc: "Open positions and candidate application portal." },
      { name: "Contact & Discovery Call", path: "/contact", desc: "Direct executive contact and booking calendar." },
      { name: "Cookie & Privacy Policy", path: "/cookies", desc: "Data privacy practices and cookie management." },
    ],
  },
  {
    title: "Service Capabilities",
    icon: Layers,
    links: [
      { name: "Yesp Digital (Enterprise Software)", path: "/services/digital", desc: "Custom core software, business portals, and API integrations." },
      { name: "Yesp AI Labs (Applied AI Agents)", path: "/services/ai-labs", desc: "Autonomous AI agents, document intelligence, and voice AI." },
      { name: "Yesp Growth (Lead Systems & GEO)", path: "/services/growth", desc: "Search engine & generative engine optimization." },
    ],
  },
  {
    title: "Executive Articles & Insights",
    icon: BookOpen,
    links: [
      { name: "Executive Articles Directory", path: "/articles", desc: "Full index of technology essays and operational blueprints." },
      { name: "Yesp Corp Global: Engineering & AI Delivery", path: "/articles/yesp-corp-global-engineering-and-ai-delivery", desc: "Global delivery model from Erode, Coimbatore, and Bengaluru." },
      { name: "The 'Make Better Happen' Framework", path: "/articles/the-make-better-happen-engineering-framework", desc: "Operational engineering standard for core software." },
      { name: "Eliminating Data Silos (Zero-Latency ERP)", path: "/articles/eliminating-data-silos-with-zero-latency-integrations", desc: "Cross-system real-time database synchronization." },
      { name: "Erode, Coimbatore & Bengaluru Tech Lineage", path: "/articles/eroded-coimbatore-bengaluru-tech-lineage", desc: "Regional manufacturing grit and software scale." },
      { name: "Deploying Practical AI Agents in Enterprise", path: "/articles/practical-ai-agents-in-enterprise-workflows", desc: "Moving from LLM chatbots to ROI-driven autonomous agents." },
      { name: "Custom Software Backbones vs SaaS Bloat", path: "/articles/building-custom-enterprise-software-vs-saas", desc: "Why scaling companies replace fragmented SaaS subscriptions." },
    ],
  },
  {
    title: "Official Press Releases & Newsroom",
    icon: Newspaper,
    links: [
      { name: "Official Press Center Index", path: "/press", desc: "Corporate announcements, media room, and press statements." },
      { name: "Yesp Corp Global Expansion & AI Infrastructure", path: "/press/yesp-corp-global-expansion-and-ai-infrastructure", desc: "Official press release on international AI operations expansion." },
      { name: "Srinithin Somasundaram Keynote on Future of AI", path: "/press/srinithin-somasundaram-keynote-future-of-ai", desc: "Executive address on practical AI and software architecture." },
      { name: "Make Better Happen Operational Standard", path: "/press/make-better-happen-initiative", desc: "Announcement of zero-complexity integration framework." },
      { name: "Global Expansion in Bengaluru Tech Corridor", path: "/press/global-expansion-bengaluru", desc: "Strategic expansion into Bengaluru technology corridor." },
      { name: "Autonomous Enterprise AI Platform Release", path: "/press/ai-automation-launch", desc: "Official launch of Yesp AI Labs autonomous agent engine." },
    ],
  },
  {
    title: "Official Social & Corporate Channels",
    icon: Globe,
    links: [
      { name: "LinkedIn (Yesp Studio)", path: "https://www.linkedin.com/company/yespstudio", desc: "Official company network, corporate announcements, and client case studies.", isExternal: true },
      { name: "Instagram (@yespstudio)", path: "https://www.instagram.com/yespstudio", desc: "Behind the scenes engineering, remote culture, and corporate updates.", isExternal: true },
    ],
  },
];

function SitelinksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      <main className="overflow-x-hidden">
        {/* Header Banner */}
        <section className="border-b border-border/60 bg-gradient-to-b from-background via-card to-background py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-sm">
              <Compass className="h-3.5 w-3.5 text-primary" /> Navigation Directory & Site Map
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight md:text-5xl leading-tight text-foreground">
              Yesp Corporation Sitelinks
            </h1>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base max-w-2xl">
              Explore the complete directory of official pages, service capabilities, executive articles, and press announcements published by Yesp Corporation Global Team across Erode, Coimbatore, and Bengaluru.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground border-t border-border/60 pt-4">
              <span className="flex items-center gap-1 text-foreground font-semibold">
                <Globe className="h-3.5 w-3.5 text-primary" /> 25 Total Active Pages
              </span>
              <span>·</span>
              <span>XML Sitemap & Crawler Verified</span>
              <span>·</span>
              <span>100% Remote Global Operations</span>
            </div>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            {siteCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-primary font-bold">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">{cat.title}</h2>
                    </div>

                    <ul className="space-y-4">
                      {cat.links.map((item) => (
                        <li key={item.path} className="group">
                          {item.isExternal ? (
                            <a
                              href={item.path}
                              target="_blank"
                              rel="noreferrer"
                              className="block rounded-2xl border border-transparent p-3 transition-colors hover:border-border hover:bg-secondary/40"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                                  {item.name}
                                </span>
                                <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary shrink-0" />
                              </div>
                              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                                {item.desc}
                              </p>
                            </a>
                          ) : (
                            <Link
                              to={item.path}
                              className="block rounded-2xl border border-transparent p-3 transition-colors hover:border-border hover:bg-secondary/40"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                                  {item.name}
                                </span>
                                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary shrink-0" />
                              </div>
                              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                                {item.desc}
                              </p>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct XML & Robots Technical Links Box */}
          <div className="mt-12 rounded-3xl border border-border bg-secondary/30 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> Technical Crawler Standards
              </h3>
              <p className="text-xs text-muted-foreground">
                Raw XML sitemap and search engine crawler directives for automated indexing.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-primary">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 hover:bg-secondary transition-colors"
              >
                sitemap.xml <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 hover:bg-secondary transition-colors"
              >
                robots.txt <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 rounded-3xl bg-brand p-8 text-primary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <h3 className="text-xl font-extrabold">Ready to transform your software infrastructure?</h3>
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
