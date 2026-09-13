import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import { useSEO } from "@/hooks/useSEO";
import {
  ArrowRight,
  Lightbulb,
  Code2,
  Zap,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Target,
  Globe,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-bold text-foreground hover:text-primary transition-colors"
      >
        <span>{q}</span>
        <ChevronDown className={`h-4 w-4 text-primary shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}

const capabilities = [
  {
    num: "01",
    name: "Advise",
    icon: Lightbulb,
    headline: "Strategy before software.",
    desc: "Understand the business, map its challenges, identify technology opportunities, and create the roadmap. Yesp doesn't start with tools — we start with the problem.",
    items: [
      "Business process discovery and analysis",
      "Technology opportunity identification",
      "Architecture planning and system design",
      "Digital transformation roadmap",
    ],
  },
  {
    num: "02",
    name: "Build",
    icon: Code2,
    headline: "Engineering built around the business.",
    desc: "Custom software, platforms, cloud infrastructure, integrations and digital products — designed precisely for how the business works, not for how a generic platform works.",
    items: [
      "Custom enterprise software development",
      "SaaS product and platform engineering",
      "ERP, CRM and business system development",
      "API development and third-party integrations",
    ],
  },
  {
    num: "03",
    name: "Automate",
    icon: Zap,
    headline: "Let AI and automation do the repetitive work.",
    desc: "AI agents, intelligent workflows, document intelligence and operational automation — removing bottlenecks, eliminating manual processes, and giving teams back their time.",
    items: [
      "AI agents and agentic workflow systems",
      "Business process automation",
      "Document intelligence and data extraction",
      "AI voice agents and customer-facing AI",
    ],
  },
  {
    num: "04",
    name: "Grow",
    icon: TrendingUp,
    headline: "Technology-powered growth.",
    desc: "Digital experiences, SEO, GEO (AI search visibility), lead systems and conversion infrastructure — making the business visible, discoverable and capable of scaling.",
    items: [
      "SEO and GEO (Generative Engine Optimisation)",
      "Digital experience design and development",
      "Lead generation and conversion systems",
      "Growth infrastructure and analytics",
    ],
  },
];

const betterList = [
  { word: "Better businesses.", sub: "Operations that run smarter, not harder." },
  { word: "Better systems.", sub: "Technology that fits the workflow, not fights it." },
  { word: "Better decisions.", sub: "Data and intelligence that informs action." },
  { word: "Better experiences.", sub: "Products and interfaces users actually want to use." },
  { word: "Better outcomes.", sub: "Measurable improvement — not just delivered projects." },
];

const problems = [
  { from: '"Our sales process is messy."', to: "A connected, automated sales system." },
  { from: '"Our teams do everything manually."', to: "AI and automation that handles repetitive work." },
  { from: '"Our systems don\'t talk to each other."', to: "Integrated infrastructure with zero-latency data flow." },
  { from: '"We need AI, but don\'t know where to start."', to: "A clear AI roadmap and the engineering to execute it." },
  { from: '"We need to modernize our operations."', to: "Modern, scalable technology built around your process." },
];

const faqs = [
  {
    q: "What does 'Your Business Technology Partner' mean?",
    a: "It means Yesp doesn't just deliver software and disappear. We become the technology team behind your business — understanding how you operate, identifying what can be improved, building the right technology, and continuously evolving it. The goal is a long-term relationship where Yesp is accountable for technology outcomes, not just deliverables.",
  },
  {
    q: "How is Yesp different from a traditional IT services company?",
    a: "Traditional IT companies take a requirement, build to spec, and hand it over. Yesp starts with the business problem — not a spec document. We advise on what technology is right, build it around the actual business workflow, integrate it into the existing ecosystem, automate what should be automated, and then keep improving it. We own outcomes, not just code.",
  },
  {
    q: "What does 'Make Better Happen' mean as a company philosophy?",
    a: "Make Better Happen is Yesp's core belief: that technology, applied correctly, can make every part of a business better — better operations, better decisions, better customer experiences, better outcomes. We're not interested in technology for its own sake — only in technology that creates genuine improvement for the businesses we work with.",
  },
  {
    q: "What is Yesp's 4-capability model?",
    a: "Yesp organises its work around four capabilities: Advise (strategy and roadmap), Build (software and product engineering), Automate (AI agents, workflows and process automation), and Grow (SEO, GEO, lead systems and digital growth). This gives businesses a complete technology partner — from strategy through execution through scale.",
  },
  {
    q: "Who does Yesp work with?",
    a: "Yesp works with businesses that want to modernise their operations, connect fragmented systems, reduce manual work, and use AI and software to operate at a higher level. Our clients are typically established businesses — mid-market and above — in manufacturing, healthcare, technology, logistics, real estate, and professional services, across India, the UK, USA, UAE, Australia and Singapore.",
  },
  {
    q: "What is Yesp's vision?",
    a: "Yesp's vision is to make better business possible through technology — to shape a world where every business has the technology partner to move faster, think smarter, and scale further.",
  },
];

export default function VisionPage() {
  useSEO({
    title: "Vision & Mission — Make Better Happen | Your Business Technology Partner | Yesp Corporation",
    description:
      "Yesp Corporation's vision: Make Better Happen. We are Your Business Technology Partner — building software, AI, automation and growth systems around your business. Strategy → Technology → AI → Growth.",
    keywords:
      "Yesp Corporation vision mission, make better happen Yesp, business technology partner, Yesp philosophy, Yesp strategy, enterprise technology partner India, AI and software company vision, technology partner for businesses",
    canonical: "https://yespstudio.com/vision",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Yesp Corporation",
        url: "https://yespstudio.com",
        description:
          "Yesp Corporation is Your Business Technology Partner. We partner with businesses to make better happen — turning complex challenges into software, AI, automation and digital systems built around the business.",
        slogan: "Make Better Happen.",
        knowsAbout: [
          "Enterprise Software Development",
          "AI Development",
          "Business Process Automation",
          "AI Agents",
          "Digital Transformation",
          "SEO and GEO",
          "System Integration",
          "SaaS Development",
        ],
        mission:
          "We partner with businesses to make better happen — by turning complex challenges into simple, intelligent, and scalable technology solutions.",
        founder: {
          "@type": "Person",
          name: "Srinithin Somasundaram",
          jobTitle: "Founder & CEO",
          url: "https://yespstudio.com/founder",
        },
        areaServed: ["India", "United Kingdom", "United States", "UAE", "Australia", "Singapore", "Worldwide"],
        sameAs: [
          "https://www.linkedin.com/company/yespstudio",
          "https://www.instagram.com/yespstudio",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://yespstudio.com" },
          { "@type": "ListItem", position: 2, name: "Vision & Mission", item: "https://yespstudio.com/vision" },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />
      <main className="overflow-x-hidden">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-border/60 py-16 sm:py-28">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[44rem] w-[44rem] rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent/60 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Vision &amp; Mission
            </div>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl">
              Make{" "}
              <span className="text-gradient-brand">Better</span>{" "}
              Happen.
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg font-semibold text-muted-foreground">
              Your Business Technology Partner.
            </p>
            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              Businesses come to Yesp with problems. We understand the business, design the technology, build it, integrate it, automate it — and keep improving it. Yesp becomes the technology team behind the business.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                Work with Yesp <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                About Yesp
              </Link>
            </div>
          </div>
        </section>

        {/* ── Vision + Mission ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Vision */}
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card relative overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/8 blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-primary mb-6">
                  <Target className="h-3 w-3" /> Vision
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-foreground mb-4">
                  Make better business possible through technology.
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A world where every business has the technology partner to move faster, think smarter, and scale further — without limits.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card relative overflow-hidden">
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-accent/50 blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground mb-6">
                  <Globe className="h-3 w-3" /> Mission
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-foreground mb-4">
                  We partner with businesses to make better happen.
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  By turning complex challenges into simple, intelligent and scalable technology solutions — through software, AI, automation and digital systems built around the business.
                </p>
              </div>
            </div>
          </div>

          {/* Positioning line */}
          <div className="mt-6 rounded-3xl border border-primary/20 bg-primary/5 p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Brand Philosophy</p>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground leading-snug">
              "Build technology around your business —<br className="hidden sm:inline" />
              not businesses around technology."
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground max-w-xl">
              That single belief separates Yesp from every generic software vendor, IT outsourcer, and platform company. We start with the business. The technology follows.
            </p>
          </div>
        </section>

        {/* ── The Better Manifesto ─────────────────────────────────────── */}
        <section className="border-y border-border/60 bg-secondary/20 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">The Manifesto</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 max-w-lg">
              Better is the only direction that matters.
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {betterList.map(({ word, sub }) => (
                <div
                  key={word}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-3"
                >
                  <div className="h-1.5 w-10 rounded-full bg-primary" />
                  <p className="text-base font-extrabold text-foreground">{word}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Problem → Yesp → Outcome ─────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">How It Works</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Businesses come to Yesp with problems.</h2>
          <p className="text-sm text-muted-foreground mb-10 max-w-xl">
            We don't wait for a spec document. We understand the business, find what can be better, and build the technology to make it happen.
          </p>
          <div className="space-y-3">
            {problems.map(({ from, to }) => (
              <div
                key={from}
                className="grid gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm sm:grid-cols-[1fr_auto_1fr] sm:items-center"
              >
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground italic">{from}</p>
                <div className="flex items-center gap-2 justify-center">
                  <div className="h-px w-6 bg-primary/40 hidden sm:block" />
                  <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                  <div className="h-px w-6 bg-primary/40 hidden sm:block" />
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-bold text-foreground">{to}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4 Capabilities ───────────────────────────────────────────── */}
        <section className="border-t border-border/60 bg-secondary/20 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">The Model</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Four capabilities. One partner.</h2>
            <p className="text-sm text-muted-foreground mb-12 max-w-xl">
              Strategy → Technology → AI → Growth. Everything a business needs from a technology partner — in a single engagement model.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {capabilities.map(({ num, name, icon: Icon, headline, desc, items }) => (
                <div key={num} className="rounded-3xl border border-border bg-card p-7 sm:p-8 shadow-card">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">{num} — {name}</p>
                      <p className="text-lg font-extrabold text-foreground leading-snug mt-0.5">{headline}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-5">{desc}</p>
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <p className="text-xs font-semibold text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">The throughline</p>
              <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-foreground">
                {["Advise", "Build", "Automate", "Grow"].map((s, i, arr) => (
                  <span key={s} className="flex items-center gap-3">
                    <span className="text-primary">{s}</span>
                    {i < arr.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                A closed loop — not a one-off project. Yesp stays as the technology partner through every stage of business growth.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who we work with ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Who we work with</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Businesses ready to be better.</h2>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                Yesp partners with established businesses — typically mid-market and above — that are ready to use technology seriously. Not to experiment. Not to tick a box. To genuinely make their operations, systems and outcomes better.
              </p>
              <div className="space-y-3">
                {[
                  "Manufacturing and industrial businesses modernising operations",
                  "Healthcare and life sciences organisations digitising workflows",
                  "Technology companies scaling engineering and AI capabilities",
                  "Logistics and supply chain businesses connecting their systems",
                  "Financial services firms automating compliance and operations",
                  "Professional services businesses building client-facing technology",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Positioning</p>
                <p className="text-lg font-extrabold text-foreground">Your Business Technology Partner</p>
                <p className="text-xs text-muted-foreground mt-1">Not a vendor. Not an agency. A partner accountable for outcomes.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Tagline</p>
                <p className="text-lg font-extrabold text-foreground">Make Better Happen.</p>
                <p className="text-xs text-muted-foreground mt-1">Better systems. Better decisions. Better outcomes.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Markets</p>
                <p className="text-sm font-bold text-foreground">India · UK · USA · UAE · Australia · Singapore</p>
                <p className="text-xs text-muted-foreground mt-1">Global delivery. Local understanding.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="border-t border-border/60 bg-secondary/20 py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Common Questions</h2>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
              {faqs.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Explore ───────────────────────────────────────────────────── */}
        <section className="border-t border-border/60 py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-5">Explore</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "About Yesp", to: "/about" },
                { label: "Founder Profile", to: "/founder" },
                { label: "Services", to: "/services" },
                { label: "Solutions Hub", to: "/solutions" },
                { label: "Industries", to: "/industries" },
                { label: "Case Studies", to: "/case-studies" },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary/50 hover:text-primary transition-colors shadow-sm"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="border-t border-border/60 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-start gap-6 rounded-3xl bg-brand p-8 sm:p-12 text-primary-foreground md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Make Better Happen</p>
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  Ready to become a better business?
                </h2>
                <p className="text-sm opacity-90 leading-relaxed">
                  Book a discovery call with the Yesp Corporation team. We'll start with the business — understand where it is, where it needs to go, and what technology needs to exist for that to happen.
                </p>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5 shrink-0 shadow-elevated"
              >
                Book a Discovery Call <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
