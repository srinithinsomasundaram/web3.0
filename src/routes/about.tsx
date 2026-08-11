import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/yesp-footer-logo.png";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import {
  MapPin,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  CheckCircle2,
  Globe,
  ArrowRight,
  ShieldCheck,
  Zap,
  User,
  Newspaper,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Yesp Corporation — The Story, Vision & Slogan | Make Better Happen." },
      {
        name: "description",
        content:
          "Discover the story behind Yesp Corporation: our slogan 'Make Better Happen.', our engineering lineage across Erode, Coimbatore, and Bengaluru, and our mission to build practical enterprise software & AI for global clients.",
      },
      { name: "keywords", content: "Yesp Corporation, About Yesp, Make Better Happen, Erode, Coimbatore, Bengaluru, Global Enterprise Technology, Enterprise Software Story" },
      { name: "geo.region", content: "IN-KA;IN-TN" },
      { name: "geo.placename", content: "Bengaluru, Coimbatore, Erode, India" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      { property: "og:title", content: "About Yesp Corporation — The Story & Slogan" },
      {
        property: "og:description",
        content:
          "Enterprise Software · AI · Automation · Growth. Erode – Coimbatore – Bengaluru. Built for global.",
      },
      { property: "og:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Yesp Corporation — Make Better Happen." },
      { name: "twitter:description", content: "Learn about the logo, philosophy, and engineering story of Yesp Corporation." },
      { name: "twitter:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "Corporation",
            name: "Yesp Corporation",
            slogan: "Make Better Happen.",
            description:
              "Global enterprise technology company rooted in Erode, built in Coimbatore, and operating from Bengaluru, India.",
            email: "hello@yespstudio.com",
            url: "https://yespstudio.com",
          },
        }),
      },
    ],
  }),
  component: AboutBrandPage,
});

const capabilities = [
  {
    name: "Yesp Digital",
    title: "Enterprise Software & Digital Systems",
    tagline: "Custom Software · Web Applications · Business Systems · SaaS · Dashboards · API Integrations",
    description: "We design and develop technology systems around specific business requirements.",
    icon: Layers,
    link: "/services/digital",
  },
  {
    name: "Yesp AI Labs",
    title: "AI & Intelligent Automation",
    tagline: "AI Agents · Voice AI · Workflow Automation · Document Intelligence · AI Assistants · Intelligent Systems",
    description: "We apply AI where it can create measurable value across business and customer operations.",
    icon: Cpu,
    link: "/services/ai-labs",
  },
  {
    name: "Yesp Growth",
    title: "Organic Growth & Search Systems",
    tagline: "SEO · Local SEO · Technical SEO · GEO · Lead Generation · Conversion Systems",
    description: "We help businesses become more discoverable across traditional search and emerging AI-driven search environments.",
    icon: TrendingUp,
    link: "/services/growth",
  },
];

const processSteps = [
  { step: "01", name: "Discover", desc: "Understand the business, workflow, systems, and objectives." },
  { step: "02", name: "Design", desc: "Define the right technology, architecture, and implementation approach." },
  { step: "03", name: "Build", desc: "Develop the required software, AI, and automation systems." },
  { step: "04", name: "Integrate", desc: "Connect the solution with the client's existing technology ecosystem." },
  { step: "05", name: "Scale", desc: "Improve, maintain, and expand the solution as the business grows." },
];

const problemToSystem = [
  { problem: "Manual processes", system: "Connected systems" },
  { problem: "Disconnected systems", system: "Automated workflows" },
  { problem: "Repetitive tasks", system: "Intelligent processes" },
  { problem: "Large volumes of information", system: "Better visibility" },
  { problem: "Slow workflows & Bottlenecks", system: "Scalable infrastructure" },
];

const beliefs = [
  {
    title: "Technology should serve the business.",
    desc: "Not the other way around.",
  },
  {
    title: "AI should solve real problems.",
    desc: "Not exist simply because it is fashionable.",
  },
  {
    title: "Automation should empower people.",
    desc: "Not add another layer of complexity.",
  },
  {
    title: "Software should fit the workflow.",
    desc: "Not force the business to change unnecessarily.",
  },
  {
    title: "Better technology should create better outcomes.",
    desc: "That's what Yesp stands for.",
  },
];

function AboutBrandPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Brand Card & Hero Section */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-accent/70 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24">
            
            {/* Separate Brand Identity Card */}
            <div className="mb-10 inline-flex flex-wrap items-center gap-6 rounded-3xl border border-border bg-card p-5 shadow-card sm:p-6">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Yesp Corporation Logo" className="h-12 w-12 object-contain" />
                <div>
                  <h2 className="font-display text-lg font-extrabold text-foreground">Yesp Corporation</h2>
                  <p className="text-xs font-bold text-primary">Make Better Happen.</p>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Erode – Coimbatore – Bengaluru</span>
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                About Yesp Corporation
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                The Story Behind <span className="text-gradient-brand">Yesp Corporation</span>
              </h1>
              <p className="mt-4 font-display text-xl font-bold text-primary sm:text-2xl">
                Make Better Happen.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Yesp Corporation is an enterprise technology company <strong className="text-foreground">rooted in Erode, built in Coimbatore, and working in Bengaluru, India for global clients</strong>. We build custom software, AI systems, and intelligent automation for businesses operating at scale.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We work with organizations that want to modernize operations, connect fragmented systems, reduce repetitive work, and build technology around the way their business actually operates.
              </p>

              {/* Key Founder & PR Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/founder"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
                >
                  <User className="h-4 w-4" /> Founder Profile <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/press"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 hover:bg-secondary"
                >
                  <Newspaper className="h-4 w-4 text-primary" /> Press Center & PR Releases <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Built Around Better */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Core Philosophy</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Built Around Better</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Technology should not create more complexity. It should make businesses <strong className="text-foreground">simpler, faster, smarter, and more connected.</strong>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">That's the philosophy behind Yesp Corporation.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Enterprise Software", desc: "Custom applications & portals" },
                { title: "Artificial Intelligence", desc: "Practical AI & document agents" },
                { title: "Automation", desc: "Workflow orchestration" },
                { title: "System Integrations", desc: "Connecting silos & ERPs" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                  <span className="block h-1.5 w-8 rounded-full bg-primary mb-3" />
                  <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm font-medium text-muted-foreground">
              We combine these technologies to solve real business problems — from individual workflows to complex operational systems.
            </p>
          </div>
        </section>

        {/* Section: Executive Leadership & Press Center */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                  <User className="h-3.5 w-3.5 text-primary" /> Founder & Executive Leadership
                </div>
                <h3 className="text-2xl font-bold text-foreground">Srinithin Somasundaram</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Founder & Chief Executive Officer leading Yesp Corporation's enterprise software, AI, and automation architecture across Erode, Coimbatore, and Bengaluru.
                </p>
              </div>
              <Link
                to="/founder"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5 w-fit"
              >
                View Founder Profile <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                  <Newspaper className="h-3.5 w-3.5 text-primary" /> Corporate Newsroom
                </div>
                <h3 className="text-2xl font-bold text-foreground">Press Releases & Media</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Explore official corporate announcements, product releases, executive keynotes, and media relations resources for Yesp Corporation.
                </p>
              </div>
              <Link
                to="/press"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-xs font-semibold text-foreground transition-transform hover:-translate-y-0.5 hover:bg-secondary w-fit"
              >
                Explore Press Center <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section: Make Better Happen. */}
        <section className="border-y border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">The Standard Behind Our Work</span>
              <h2 className="mt-2 text-3xl font-extrabold md:text-5xl text-foreground">
                Make Better <span className="text-gradient-brand">Happen.</span>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Our slogan is more than a tagline. It is the standard behind how we approach technology.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" /> Make Systems Communicate
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Connect ERP, CRM, internal applications, APIs, databases, and business tools into unified workflows.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" /> Make AI Practical
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Build AI agents, intelligent assistants, document intelligence, and automation that solve real operational problems.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" /> Make Operations Better
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Reduce repetitive manual work, improve workflows, and give teams better systems to work with.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" /> Make Growth Sustainable
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Build digital visibility, organic acquisition, and conversion infrastructure that supports long-term growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Our Three Capabilities */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What We Do</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Our Three Capabilities</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div key={cap.name} className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-card">
                  <div>
                    <div className="rounded-2xl bg-accent p-3.5 w-fit mb-6">
                      <IconComp className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{cap.name}</span>
                    <h3 className="mt-1 text-xl font-bold text-foreground">{cap.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
                    <p className="mt-4 text-xs font-semibold text-foreground/80 leading-relaxed bg-secondary/60 p-3 rounded-xl border border-border/40">
                      {cap.tagline}
                    </p>
                  </div>
                  <Link
                    to={cap.link as any}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    Learn details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: How We Work */}
        <section className="border-t border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="max-w-xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Our Process</span>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">How We Work</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We don't begin with a technology stack. We begin with the <strong className="text-foreground">business problem</strong>.
              </p>
            </div>

            <ol className="grid gap-6 sm:grid-cols-2 md:grid-cols-5">
              {processSteps.map((s) => (
                <li key={s.step} className="border-t-2 border-primary pt-5">
                  <span className="font-display text-sm font-bold text-primary">{s.step}</span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section: From Problem to System */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Transformation</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">From Problem to System</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Our role is to turn business challenges into scalable digital infrastructure.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {problemToSystem.map((item) => (
              <div key={item.problem} className="rounded-2xl border border-border bg-card p-6 shadow-sm flex items-center justify-between gap-4">
                <div>
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider text-destructive/80">From Challenge</span>
                  <p className="text-sm font-semibold text-muted-foreground mt-0.5">{item.problem}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                <div className="text-right">
                  <span className="text-[0.68rem] font-bold uppercase tracking-wider text-primary">To Solution</span>
                  <p className="text-sm font-bold text-foreground mt-0.5">{item.system}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Rooted in Erode */}
        <section className="border-t border-border/60 bg-secondary/50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="rounded-3xl bg-card border border-border p-8 shadow-card sm:p-12">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Global Tech Hub</span>
              </div>
              <h2 className="text-3xl font-bold md:text-4xl text-foreground">Rooted in Erode. Built in Coimbatore. Working in Bengaluru for Global Clients.</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Yesp Corporation</strong> bridges a powerful technology corridor: <strong className="text-foreground">rooted in Erode, engineered & built in Coimbatore, and operating from Bengaluru, India</strong> — serving enterprise clients across international markets.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                We combine regional engineering talent, modern AI and software technology, and a deep understanding of real business operations to build high-value solutions for global clients worldwide.
              </p>
              <div className="mt-8 border-t border-border/60 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Our Ambition</p>
                <p className="mt-2 font-display text-2xl font-extrabold text-foreground">
                  Build technology that creates real business value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: What We Believe */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Our Convictions</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">What We Believe</h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {beliefs.map((b, idx) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm flex items-start gap-4">
                <span className="font-display text-sm font-bold text-primary shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-3xl bg-brand p-8 text-primary-foreground sm:p-12 shadow-elevated">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Yesp Logo" className="h-8 w-8 object-contain" />
              <span className="font-display text-lg font-extrabold tracking-normal">Yesp Corporation</span>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider opacity-85">
              Enterprise Software · AI · Automation · Growth
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Make Better Happen.</h2>
            <p className="mt-3 text-sm opacity-90 max-w-xl">
              Let's identify automation, software, and AI opportunities in your business with a 20–30 minute discovery call.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                Get Connected
              </Link>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
