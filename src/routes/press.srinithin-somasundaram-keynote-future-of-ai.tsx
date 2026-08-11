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
  Cpu,
  Globe,
  ChevronLeft,
} from "lucide-react";

export const Route = createFileRoute("/press/srinithin-somasundaram-keynote-future-of-ai")({
  head: () => ({
    meta: [
      { title: "Press Release: Srinithin Somasundaram Keynote on Practical AI & Enterprise Architecture | Yesp Corporation" },
      {
        name: "description",
        content:
          "Official Press Release: Srinithin Somasundaram, Founder & CEO of Yesp Corporation, presents executive address on building practical enterprise AI architectures and system backbones.",
      },
      {
        name: "keywords",
        content:
          "Srinithin Somasundaram Keynote, Srinithin AI Address, Yesp Founder Press, Enterprise AI Architecture, Practical AI Systems",
      },
      { name: "geo.region", content: "IN-KA;IN-TN" },
      { name: "geo.placename", content: "Bengaluru, Coimbatore, Erode, India" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      { property: "og:title", content: "Srinithin Somasundaram Keynote on Practical AI Architecture" },
      {
        property: "og:description",
        content: "Executive address by Srinithin Somasundaram, Founder & CEO of Yesp Corporation.",
      },
      { property: "og:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: "PR: Srinithin Somasundaram Keynote on Practical AI" },
      {
        name: "twitter:description",
        content: "Official keynote summary from Srinithin Somasundaram, Founder & CEO of Yesp Corporation.",
      },
      { name: "twitter:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
    ],
    links: [{ rel: "canonical", href: "/press/srinithin-somasundaram-keynote-future-of-ai" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "NewsArticle",
              "@id": "https://yespstudio.com/press/srinithin-somasundaram-keynote-future-of-ai#article",
              headline: "Srinithin Somasundaram Outlines the Future of Practical AI and Custom Enterprise Software Architecture",
              description: "Founder & CEO Srinithin Somasundaram delivers executive address detailing the deployment roadmap for enterprise AI automation.",
              datePublished: "2026-08-10T09:00:00+05:30",
              dateModified: "2026-08-10T09:00:00+05:30",
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
              mainEntityOfPage: "https://yespstudio.com/press/srinithin-somasundaram-keynote-future-of-ai",
            },
          ],
        }),
      },
    ],
  }),
  component: PressArticle4,
});

function PressArticle4() {
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
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> August 10, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> Bengaluru, India
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl leading-tight">
            Srinithin Somasundaram Outlines the Future of Practical AI and Custom Enterprise Software Architecture
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground font-medium">
            Executive keynote highlights how scaling enterprise organizations can transition from experimental AI pilots to ROI-driven operational architectures.
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
            BENGALURU, INDIA — August 10, 2026 — Srinithin Somasundaram, Founder & CEO of Yesp Corporation, delivered an executive address today focusing on the shift from theoretical AI concepts to deterministic enterprise AI architecture.
          </p>

          <p>
            Addressing executive leaders, technical directors, and enterprise clients, Somasundaram emphasized that the next decade of corporate productivity will belong to companies that integrate custom software backbones with autonomous AI agents.
          </p>

          <h3 className="text-xl font-bold text-foreground pt-4">Moving Beyond Proofs-of-Concept</h3>

          <p>
            "The market is saturated with artificial intelligence prototypes that never make it to production," Somasundaram noted. "At Yesp Corporation, our focus is on building practical systems tied directly to financial and operational ROI. If an AI agent does not demonstrably reduce cycle times or eliminate manual friction, it does not belong in enterprise software."
          </p>

          <div className="rounded-2xl border border-border bg-secondary/50 p-6 my-6 space-y-2">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" /> Key Takeaways from Srinithin Somasundaram:
            </h4>
            <ul className="list-disc list-inside text-xs space-y-1.5 text-muted-foreground">
              <li><strong>Data Infrastructure First:</strong> AI performance is bottlenecked by data fragmentation. Clean system integration is required first.</li>
              <li><strong>Task-Specific AI Agents:</strong> Deploy specialized agents for specific operational workflows rather than generic models.</li>
              <li><strong>Continuous ROI Measurement:</strong> Audit AI deployments against concrete operational speed benchmarks.</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-foreground pt-4">About Yesp Corporation</h3>
          <p>
            Yesp Corporation is an enterprise technology company headquartered in Bengaluru, India, building software, AI systems, and intelligent automation for businesses operating at scale worldwide.
          </p>
        </article>

        <section className="border-t border-border/60 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-foreground uppercase tracking-wider">Media & PR Inquiries</p>
            <p className="text-xs text-muted-foreground mt-1">Yesp Corporation Press Desk — hello@yespstudio.com</p>
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
