import { useState } from "react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import {
  Cpu,
  Bot,
  Cloud,
  Code2,
  Database,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Server,
  Globe,
  Terminal,
  Activity,
  Boxes,
  Lock,
} from "lucide-react";

interface TechPillar {
  id: string;
  category: "Backend" | "AI & ML" | "Cloud & Infra" | "Frontend" | "Data & Sync";
  title: string;
  icon: any;
  summary: string;
  technologies: string[];
  capabilities: string[];
  architectureHighlights: string;
}

const TECH_PILLARS: TechPillar[] = [
  {
    id: "backend",
    category: "Backend",
    title: "Enterprise Backends & Microservices",
    icon: Server,
    summary:
      "High-concurrency microservices, event-driven architectures, and zero-latency API gateways designed for high-scale enterprise operations.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Go (Golang)",
      "Python",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "REST APIs",
      "gRPC",
    ],
    capabilities: [
      "High-throughput transactional API backbones",
      "Distributed cache management with Redis & KeyDB",
      "Strict type-safe database schemas with Prisma / Drizzle",
      "Real-time WebSocket event streaming push notifications",
    ],
    architectureHighlights:
      "Sub-50ms p99 latency SLAs with auto-healing container orchestration and immutable API contracts.",
  },
  {
    id: "ai-ml",
    category: "AI & ML",
    title: "Autonomous AI Agents & ML Engines",
    icon: Bot,
    summary:
      "Production-ready autonomous AI agents, multi-agent orchestration frameworks, and Retrieval-Augmented Generation (RAG) engines.",
    technologies: [
      "Python AI Stack",
      "LangChain",
      "LlamaIndex",
      "OpenAI GPT-4o",
      "Claude 3.5 Sonnet",
      "Pinecone",
      "pgvector",
      "FastAPI",
      "Whisper & Speech AI",
    ],
    capabilities: [
      "Autonomous tool-calling agents for enterprise ERPs",
      "Document intelligence & semantic vector search",
      "Custom fine-tuning & prompt security guardrails",
      "Real-time voice AI agents with low-latency audio processing",
    ],
    architectureHighlights:
      "Strict deterministic safety bounds ensuring zero hallucinations in critical financial & operational workflows.",
  },
  {
    id: "cloud-infra",
    category: "Cloud & Infra",
    title: "Cloud Infrastructure & Edge Operations",
    icon: Cloud,
    summary:
      "Multi-region cloud infrastructure, infrastructure-as-code (IaC), edge serverless deployment, and zero-trust security perimeter.",
    technologies: [
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)",
      "Cloudflare Workers & Edge",
      "Docker",
      "Kubernetes (EKS/GKE)",
      "Terraform",
      "GitHub Actions CI/CD",
      "Nginx",
    ],
    capabilities: [
      "Automated blue-green deployment pipelines",
      "Edge-rendered dynamic routing with zero origin delay",
      "Cloudflare DDoS protection & WAF security controls",
      "Automated database backups & point-in-time disaster recovery",
    ],
    architectureHighlights:
      "99.99% SLA availability with multi-availability zone failover and infrastructure declarative versioning.",
  },
  {
    id: "frontend",
    category: "Frontend",
    title: "High-Performance Web Platforms",
    icon: Code2,
    summary:
      "Ultra-responsive executive web portals, reactive web applications, and dynamic interfaces engineered for instant interactivity.",
    technologies: [
      "React 19",
      "Next.js App Router",
      "Vite",
      "TypeScript",
      "React Router",
      "React Query",
      "TailwindCSS",
      "Framer Motion",
      "Lucide Icons",
    ],
    capabilities: [
      "Sub-second Largest Contentful Paint (LCP) performance",
      "Universal Server-Side Rendering (SSR) & Static Generation",
      "Component design systems with accessibility (WCAG AA)",
      "Generative Engine Optimization (GEO) & SEO meta graph engine",
    ],
    architectureHighlights:
      "Silky 60fps animations with optimized bundle sizes and client-side optimistic UI state updates.",
  },
  {
    id: "data-sync",
    category: "Data & Sync",
    title: "Data Integration & Real-Time Sync",
    icon: Database,
    summary:
      "Zero-latency database synchronization pipelines connecting legacy enterprise ERP systems with modern cloud applications.",
    technologies: [
      "Apache Kafka",
      "RabbitMQ",
      "PostgreSQL Change Data Capture (CDC)",
      "Debezium",
      "Snowflake",
      "BigQuery",
      "Prisma ORM",
      "Redis Streams",
    ],
    capabilities: [
      "Real-time bi-directional database synchronization",
      "Legacy SAP/Oracle ERP connector bridges",
      "Data pipeline transformation & validation hooks",
      "Audit logging and immutable event replay ledger",
    ],
    architectureHighlights:
      "Guaranteed exactly-once message delivery semantics with instant data reconciliation across distributed databases.",
  },
];

const BENCHMARKS = [
  {
    icon: Zap,
    stat: "< 50ms",
    label: "p99 API Response Latency",
    desc: "Optimized database indexing and edge caching for instant response times.",
  },
  {
    icon: Activity,
    stat: "99.99%",
    label: "Uptime SLA Guarantee",
    desc: "Multi-region cloud infrastructure with automatic failover & health checks.",
  },
  {
    icon: ShieldCheck,
    stat: "SOC2 Ready",
    label: "Security & Encryption",
    desc: "End-to-end TLS 1.3 encryption, AES-256 data at rest, and zero-trust controls.",
  },
  {
    icon: Boxes,
    stat: "0 Bloat",
    label: "Clean Core Codebase",
    desc: "No unnecessary dependencies. Strict TypeScript type safety across every file.",
  },
];

export default function TechExpertisePage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = [
    "All",
    "Backend",
    "AI & ML",
    "Cloud & Infra",
    "Frontend",
    "Data & Sync",
  ];

  const filteredPillars = TECH_PILLARS.filter(
    (p) => selectedFilter === "All" || p.category === selectedFilter
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      <main className="overflow-x-hidden">
        {/* Header Hero Section */}
        <section className="border-b border-border/60 bg-gradient-to-b from-background via-card to-background py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-sm">
              <Cpu className="h-3.5 w-3.5 text-primary" /> Technical Expertise & Stack Architecture
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight md:text-5xl leading-tight text-foreground">
              Our Technical <span className="text-gradient-brand">Expertise.</span>
            </h1>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base max-w-2xl">
              Yesp Corporation builds high-concurrency backends, autonomous AI agent platforms, zero-latency ERP integration bridges, and ultra-fast web platforms for scaling global enterprises.
            </p>

            {/* Location Lineage Pill */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground border-t border-border/60 pt-4">
              <span className="flex items-center gap-1.5 text-foreground font-semibold">
                <Globe className="h-3.5 w-3.5 text-primary" /> Regional Lineage: Erode · Coimbatore · Bengaluru
              </span>
              <span>·</span>
              <span className="text-primary font-semibold">100% Remote Global Operations</span>
              <span>·</span>
              <span>Sub-50ms API Latency SLA</span>
            </div>
          </div>
        </section>

        {/* Tech Benchmarks Ribbon */}
        <section className="border-b border-border/60 bg-secondary/30 py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {BENCHMARKS.map((b, i) => {
                const IconComp = b.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-primary">
                        <IconComp className="h-4.5 w-4.5" />
                      </div>
                      <span className="text-2xl font-extrabold text-foreground">{b.stat}</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{b.label}</h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Capabilities Matrix */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Engineering Stack Overview
              </span>
              <h2 className="text-2xl font-extrabold md:text-4xl text-foreground">
                Core Architectural Pillars
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl">
                Explore our full spectrum of technology capabilities, frameworks, and deployment standards.
              </p>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    selectedFilter === cat
                      ? "bg-brand text-primary-foreground shadow-sm"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Pillars Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {filteredPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card flex flex-col justify-between space-y-6 hover:border-primary/40 transition-all group"
                >
                  <div className="space-y-6">
                    {/* Category & Title */}
                    <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-6">
                      <div className="space-y-2">
                        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-wider text-primary border border-brand/20">
                          {pillar.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary border border-border group-hover:bg-brand group-hover:text-primary-foreground transition-colors">
                        <IconComp className="h-6 w-6" />
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.summary}
                    </p>

                    {/* Technologies Tag Pills */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                        <Terminal className="h-3.5 w-3.5 text-primary" /> Key Stack Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {pillar.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-border/80 bg-secondary/60 px-2.5 py-1 text-xs font-semibold text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Core Capabilities */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Core Engineering Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {pillar.capabilities.map((cap, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Architecture SLA Highlight Box */}
                  <div className="rounded-2xl border border-border bg-secondary/30 p-4 text-xs text-muted-foreground space-y-1">
                    <span className="font-bold text-foreground flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Architecture Standard
                    </span>
                    <p className="leading-relaxed">{pillar.architectureHighlights}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Methodology Standards Section */}
        <section className="border-t border-border/60 bg-secondary/40 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Engineering Discipline
              </span>
              <h2 className="text-3xl font-extrabold md:text-5xl text-foreground">
                How We Engineer Technology
              </h2>
              <p className="text-sm text-muted-foreground">
                Every line of code deployed by Yesp Corporation adheres to strict engineering principles rooted in Erode grit, Coimbatore industrial precision, and Bengaluru scale.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-primary font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-foreground">Zero Technical Debt</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We write clean, strictly typed codebases with high test coverage, strict linting rules, and clear documentation.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-primary font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-foreground">Sub-Latency SLAs</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Database queries are indexed, payloads are gzipped, assets are edge-cached, and network roundtrips are minimized.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-primary font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-foreground">Deterministic AI Safety</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Autonomous AI agents operate within defined schema parameters, verified JSON outputs, and automated validation fallbacks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="rounded-3xl bg-brand p-8 md:p-12 text-primary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-elevated">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-wider opacity-80">
                Technical Consultation
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold">
                Need to architect a high-scale tech backbone or AI platform?
              </h3>
              <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                Connect directly with Srinithin Somasundaram and the Yesp Corporation engineering team for a technical architecture review.
              </p>
            </div>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-xs font-bold text-foreground transition-transform hover:-translate-y-0.5 shrink-0 shadow-elevated"
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
