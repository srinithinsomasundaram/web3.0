import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { caseStudies } from "@/lib/case-studies";
import { bookingUrl } from "@/lib/links";
import { services } from "@/lib/services";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  ChevronRight,
  Cpu,
  HeartPulse,
  Factory,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yesp - India | Make Better Happen" },
      {
        name: "description",
        content:
          "Yesp Corporation builds custom enterprise software, practical AI agents, and intelligent workflow automation for global clients across Tech, Medical, and Manufacturing sectors.",
      },
      { name: "keywords", content: "Yesp Corporation, Enterprise Software, Tech Software, Healthcare Systems, Manufacturing Software, AI Agents, Erode, Coimbatore, Bengaluru" },
      { name: "geo.region", content: "IN-KA;IN-TN" },
      { name: "geo.placename", content: "Bengaluru, Coimbatore, Erode, India" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      { property: "og:title", content: "Yesp - India | Make Better Happen" },
      {
        property: "og:description",
        content:
          "Custom enterprise software, practical AI agents, and automated workflow systems built for global enterprises in Tech, Medical, and Manufacturing.",
      },
      { property: "og:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Yesp - India | Make Better Happen" },
      { name: "twitter:description", content: "Enterprise software, applied AI agents, and intelligent automation built for global scale." },
      { name: "twitter:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Corporation",
              "@id": "https://yespstudio.com/#corporation",
              name: "Yesp Corporation",
              alternateName: ["Yesp", "Yesp Digital", "Yesp AI Labs", "Yesp Growth"],
              legalName: "Yesp Corporation",
              slogan: "Make Better Happen.",
              description:
                "Global enterprise technology company building custom software, practical AI agents, and intelligent workflow automation for Tech, Medical, and Manufacturing enterprises.",
              url: "https://yespstudio.com",
              logo: "https://yespstudio.com/assets/yesp-footer-logo.png",
              email: "hello@yespstudio.com",
              areaServed: "Global",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://yespstudio.com/#website",
              url: "https://yespstudio.com",
              name: "Yesp Corporation",
              publisher: {
                "@id": "https://yespstudio.com/#corporation",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://yespstudio.com/articles?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "SiteNavigationElement",
              "@id": "https://yespstudio.com/#navigation",
              name: [
                "About Yesp Corporation",
                "Founder Profile",
                "Yesp Digital Services",
                "Yesp AI Labs",
                "Selected Case Studies",
                "Executive Articles",
                "Official Press Center",
                "100% Remote Careers",
                "Contact & Booking"
              ],
              url: [
                "https://yespstudio.com/about",
                "https://yespstudio.com/founder",
                "https://yespstudio.com/services/digital",
                "https://yespstudio.com/services/ai-labs",
                "https://yespstudio.com/case-studies",
                "https://yespstudio.com/articles",
                "https://yespstudio.com/press",
                "https://yespstudio.com/careers",
                "https://yespstudio.com/contact"
              ]
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const heroPhrases = [
  "Enterprise Software.",
  "Autonomous AI Agents.",
  "Intelligent Automation.",
  "Zero-Latency Systems.",
];

const industries = [
  {
    icon: Cpu,
    title: "Technology & Software Platforms",
    subtitle: "Tech & SaaS",
    description:
      "Custom core software backbones, multi-tenant databases, API mesh integrations, and high-velocity cloud architecture built for scaling technology companies.",
    highlights: ["Custom Multi-Tenant Backbones", "Zero-Latency API Mesh", "High-Velocity Telemetry"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Medical Systems",
    subtitle: "Medical & HealthTech",
    description:
      "HIPAA-compliant document intelligence, automated patient workflow pipelines, and real-time EMR/EHR database synchronization built for hospitals and health systems.",
    highlights: ["Patient Workflow Automation", "EMR / EHR Sync Engine", "Medical Document Intelligence"],
  },
  {
    icon: Factory,
    title: "Industrial Manufacturing & Logistics",
    subtitle: "Manufacturing & Supply Chain",
    description:
      "Real-time ERP database synchronization, inventory tracking automation, and production line telemetry engineered with industrial precision.",
    highlights: ["Real-Time ERP Sync", "Shop Floor Telemetry", "Automated Inventory Control"],
  },
];

const problems = [
  { q: "Too much manual work?", a: "We automate repetitive workflows with deterministic AI pipelines." },
  { q: "Systems don't communicate?", a: "We integrate ERP, CRM, and internal databases with zero latency." },
  { q: "Data silos & information overload?", a: "We build unified real-time executive dashboard backbones." },
  { q: "Customer operations overloaded?", a: "We deploy autonomous AI agents that run 24/7 client operations." },
  { q: "Legacy systems slowing you down?", a: "We modernize and extend core business infrastructure." },
];

const steps = [
  { n: "01", t: "Discover", d: "Deep-dive operational audit & system mapping." },
  { n: "02", t: "Design", d: "Custom software & AI agent architecture blueprint." },
  { n: "03", t: "Build", d: "High-precision engineering of custom core software." },
  { n: "04", t: "Integrate", d: "Zero-latency connection of existing enterprise databases." },
  { n: "05", t: "Scale", d: "24/7 system optimization, telemetry & expansion." },
];

const reasons = [
  "Business-first engineering standard",
  "Custom software backbones (Zero SaaS bloat)",
  "Practical AI agents with ROI metrics",
  "Zero-latency API & ERP integrations",
  "100% Remote delivery for global clients",
  "Foundational commitment: Make Better Happen.",
];

function Index() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Silky Smooth Hero Text Optical Transition Loop
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % heroPhrases.length);
        setIsTransitioning(false);
      }, 350);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Methodology Traveling One-by-One Step Loop
  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(stepTimer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      <main className="overflow-x-hidden">
        {/* Executive Professional Dark Theme Hero Section - Compact Responsive */}
        <section className="relative overflow-hidden surface-ink text-white border-b border-white/10 py-12 sm:py-20 md:py-28">
          {/* Ambient Glowing Orbs */}
          <div className="pointer-events-none absolute -right-36 -top-36 h-[32rem] w-[32rem] sm:h-[42rem] sm:w-[42rem] rounded-full bg-gradient-to-br from-primary/30 via-brand/20 to-transparent blur-3xl opacity-80" />
          <div className="pointer-events-none absolute -left-36 top-1/3 h-[28rem] w-[28rem] sm:h-[34rem] sm:w-[34rem] rounded-full bg-gradient-to-tr from-sky-500/20 via-primary/15 to-transparent blur-3xl opacity-70" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-4xl space-y-4 sm:space-y-6">
              {/* Fixed Height Dark Headline - Full Text Display */}
              <div className="space-y-1">
                <span className="block text-xl font-extrabold text-slate-300 tracking-tight sm:text-3xl md:text-4xl">
                  Make Better Happen with
                </span>
                <div className="min-h-[3rem] sm:min-h-[4.2rem] md:min-h-[5.2rem] flex items-center py-1">
                  <h1 className="text-2xl font-extrabold leading-snug tracking-tight sm:text-4xl md:text-6xl lg:text-7xl py-1">
                    <span
                      className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400 transition-all duration-500 ease-out transform ${
                        isTransitioning
                          ? "opacity-0 -translate-y-2 scale-95"
                          : "opacity-100 translate-y-0 scale-100"
                      }`}
                    >
                      {heroPhrases[phraseIndex]}
                    </span>
                  </h1>
                </div>
              </div>

              {/* Subhead */}
              <p className="max-w-2xl text-xs sm:text-base md:text-lg leading-relaxed text-slate-300">
                Custom software backbones, applied AI agents, and intelligent workflow automation built for global scaling enterprises in Tech, Medical, and Manufacturing.
              </p>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2 sm:gap-4">
                <Link
                  to="/yesp-core"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs sm:px-7 sm:py-3.5 sm:text-sm font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
                >
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>Yesp Core</span>
                </Link>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2.5 text-xs sm:px-6 sm:py-3.5 sm:text-sm font-semibold text-white transition-all hover:bg-white/20"
                >
                  Book a Call <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md px-4 py-2.5 text-xs font-medium text-slate-300 transition-all hover:bg-white/10"
                >
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section: What We Do */}
        <section id="solutions" className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="text-[0.68rem] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Capabilities & Solutions
              </p>
              <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold">What We Do</h2>
            </div>
            <Link to="/about" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              Learn about Yesp Corporation <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((d) => (
              <Link
                key={d.name}
                to="/services/$slug"
                params={{ slug: d.slug }}
                className="group rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    {d.name}
                  </span>
                  <h3 className="mt-3.5 text-lg sm:text-xl font-bold text-foreground">{d.title}</h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{d.body}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline">
                  Explore Capability <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section: Industries We Work With (Only 3: Tech, Medical, Manufacturing) */}
        <section id="industries" className="border-t border-border/60 bg-secondary/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-20">
            <div>
              <p className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-widest text-primary">
                Focused Industry Expertise
              </p>
              <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold">Industries We Work With</h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-xl">
                We specialize exclusively in three core sectors where custom software precision and automated AI execution deliver immediate operational impact.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-3">
              {industries.map((ind) => {
                const IconComp = ind.icon;
                return (
                  <div
                    key={ind.title}
                    className="group rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-primary font-bold">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <span className="text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground bg-accent px-2.5 py-1 rounded-full">
                          {ind.subtitle}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-foreground">{ind.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{ind.description}</p>
                      </div>
                    </div>

                    <ul className="mt-6 pt-4 border-t border-border/60 space-y-2 text-[0.72rem] font-semibold text-muted-foreground">
                      {ind.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section: Selected Client Work */}
        <section id="work" className="relative overflow-hidden border-y border-border/60 bg-gradient-to-b from-card/90 via-secondary/40 to-card/90">
          <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand/15 blur-3xl opacity-70" />
          <div className="pointer-events-none absolute -left-24 bottom-1/4 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-primary/10 blur-3xl opacity-60" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <p className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-widest text-primary">
                  Case Studies & Proof
                </p>
                <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                  Selected Client Work
                </h2>
              </div>
              <Link to="/case-studies" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                View all case studies <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
              {caseStudies
                .filter((c) => c.featured)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to="/case-studies"
                    hash={c.slug}
                    className="group relative rounded-3xl border border-border/80 bg-card/90 p-5 sm:p-7 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-elevated flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-3">
                        <span className="font-display text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                          {c.index}
                        </span>
                        <span className="text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">
                          {c.category}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {c.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                        {c.value.split(". ")[0]}.
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3.5 text-xs font-bold text-primary group-hover:underline">
                      <span>Explore Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Section: Enterprise Problems We Solve */}
        <section id="problems" className="surface-ink">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-20">
            <p className="text-[0.68rem] sm:text-xs font-semibold uppercase tracking-wider opacity-60">
              Operational Challenges
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold">Enterprise Problems We Solve</h2>

            <div className="mt-8 sm:mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {problems.map((p) => (
                <div key={p.q} className="surface-ink p-5 sm:p-8 space-y-2">
                  <h3 className="text-sm sm:text-lg font-bold text-white flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary shrink-0" /> {p.q}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-75 leading-relaxed">{p.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Methodology with Traveling Step Animation */}
        <section id="process" className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-20">
          <div>
            <p className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-widest text-primary">
              Methodology & Pipeline
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold">How Yesp Works</h2>
          </div>

          {/* Traveling Progress Light Beam */}
          <div className="relative mt-8 mb-6 hidden lg:block">
            <div className="h-1.5 w-full rounded-full bg-border/60" />
            <div
              className="absolute top-0 h-1.5 rounded-full bg-gradient-to-r from-sky-400 via-brand to-primary transition-all duration-700 ease-in-out shadow-[0_0_12px_rgba(56,189,248,0.6)]"
              style={{ width: `${((activeStepIndex + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* 5 Cards with Traveling Focus Animation */}
          <ol className="mt-6 sm:mt-8 grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <li
                  key={s.n}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group relative rounded-3xl border p-4.5 sm:p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "border-primary bg-card shadow-elevated -translate-y-1.5 scale-[1.01]"
                      : "border-border/80 bg-card/60 opacity-80 hover:opacity-100 hover:border-border"
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-display text-[0.7rem] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full transition-colors ${
                          isActive
                            ? "bg-brand text-primary-foreground shadow-sm"
                            : "bg-accent text-accent-foreground"
                        }`}
                      >
                        {s.n}
                      </span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                      )}
                    </div>
                    <h3 className={`text-base sm:text-lg font-bold transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                      {s.t}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-border/40 flex items-center justify-between text-[0.65rem] font-semibold text-muted-foreground">
                    <span>Phase {s.n}</span>
                    <ChevronRight className={`h-3.5 w-3.5 transition-transform ${isActive ? "text-primary translate-x-1" : "opacity-40"}`} />
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Section: Why Yesp & Discovery Call CTA */}
        <section id="why" className="border-t border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-20">
            <p className="text-[0.68rem] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Engineering Advantage
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold">Why Choose Yesp Corporation</h2>

            <ul className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r) => (
                <li
                  key={r}
                  className="rounded-2xl border border-border bg-card px-4 py-3.5 text-xs font-bold text-foreground shadow-card flex items-center gap-2.5"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            {/* Discovery CTA Banner */}
            <div className="mt-10 sm:mt-14 flex flex-col items-start justify-between gap-5 rounded-3xl bg-brand p-6 sm:p-10 text-primary-foreground md:flex-row md:items-center">
              <div className="max-w-xl space-y-1.5">
                <h3 className="text-xl font-extrabold sm:text-3xl">Let's identify your software opportunity.</h3>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  A 20–30 minute discovery conversation with Srinithin Somasundaram and the Yesp Corporation engineering team.
                </p>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-xs sm:px-7 sm:py-3.5 sm:text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5 shrink-0 shadow-elevated"
              >
                Book a Call <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
