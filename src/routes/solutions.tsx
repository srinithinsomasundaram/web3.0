import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const problems = [
  {
    problem: "Too much manual work in your business?",
    solution: "We automate repeatable workflows with AI pipelines — eliminating manual data entry, routing and follow-up.",
    services: [
      { label: "AI Automation", to: "/services/ai-automation" },
      { label: "Business Process Automation", to: "/services/business-process-automation" },
      { label: "AI Agents", to: "/services/ai-agents" },
    ],
  },
  {
    problem: "Struggling to follow up on every sales lead?",
    solution: "We build AI lead qualification and sales automation systems that respond to every lead instantly and route qualified prospects to your sales team.",
    services: [
      { label: "Sales & Lead Automation", to: "/services/sales-automation" },
      { label: "AI Voice Agents", to: "/services/ai-voice-agents" },
      { label: "CRM Development", to: "/services/crm-development" },
    ],
  },
  {
    problem: "Systems that don't talk to each other?",
    solution: "We integrate ERP, CRM, databases and business tools with zero-latency connections so information flows in real time across your operations.",
    services: [
      { label: "System Integration", to: "/services/system-integration" },
      { label: "ERP Development", to: "/services/erp-development" },
      { label: "Enterprise Software", to: "/services/enterprise-software-development" },
    ],
  },
  {
    problem: "Drowning in documents that require manual processing?",
    solution: "We build document intelligence systems that read, classify and extract data from invoices, contracts and records automatically.",
    services: [
      { label: "Document Intelligence", to: "/services/document-intelligence" },
      { label: "AI Agents", to: "/services/ai-agents" },
      { label: "Business Process Automation", to: "/services/business-process-automation" },
    ],
  },
  {
    problem: "Call centre costs growing faster than revenue?",
    solution: "We deploy AI voice agents that handle inbound calls, qualify leads and book appointments — 24/7, without call centre headcount.",
    services: [
      { label: "AI Voice Agents", to: "/services/ai-voice-agents" },
      { label: "Sales Automation", to: "/services/sales-automation" },
      { label: "AI Agents", to: "/services/ai-agents" },
    ],
  },
  {
    problem: "Locked into aging legacy software you can't replace easily?",
    solution: "We modernize legacy systems in phases — keeping operations running while replacing the technology underneath.",
    services: [
      { label: "Legacy System Modernization", to: "/services/legacy-system-modernization" },
      { label: "Digital Transformation", to: "/services/digital-transformation" },
      { label: "System Integration", to: "/services/system-integration" },
    ],
  },
  {
    problem: "Need AI in your product but don't know where to start?",
    solution: "We integrate generative AI, LLMs and AI agents into existing products and platforms — with reliability engineering built in.",
    services: [
      { label: "Generative AI", to: "/services/generative-ai" },
      { label: "AI Development", to: "/services/ai-development" },
      { label: "AI Agents", to: "/services/ai-agents" },
    ],
  },
  {
    problem: "SaaS subscription costs spiralling out of control?",
    solution: "We build custom software and SaaS platforms that replace multiple subscriptions with a single owned system — built for your business.",
    services: [
      { label: "Custom SaaS Development", to: "/services/custom-saas-development" },
      { label: "Enterprise Software", to: "/services/enterprise-software-development" },
      { label: "ERP Development", to: "/services/erp-development" },
    ],
  },
  {
    problem: "No real-time visibility across your business operations?",
    solution: "We build operational dashboards, ERP integrations and data systems that give management real-time visibility across every department.",
    services: [
      { label: "ERP Development", to: "/services/erp-development" },
      { label: "System Integration", to: "/services/system-integration" },
      { label: "Enterprise Software", to: "/services/enterprise-software-development" },
    ],
  },
  {
    problem: "Business not discoverable on Google or AI search engines?",
    solution: "We build the SEO and GEO infrastructure — content architecture, structured data and entity signals — that makes businesses visible in traditional and AI-driven search.",
    services: [
      { label: "SEO & GEO Growth", to: "/services/growth" },
    ],
  },
];

const solutionKeywords = [
  "automate business processes",
  "automate manual workflows",
  "replace manual data entry",
  "connect ERP and CRM",
  "integrate business systems",
  "eliminate data silos",
  "automate customer support",
  "automate sales follow-up",
  "automate lead qualification",
  "automate invoice processing",
  "automate document processing",
  "automate recruitment",
  "automate inventory management",
  "automate reporting",
  "modernize legacy software",
  "replace spreadsheets with software",
  "build custom business software",
  "automate procurement",
  "build AI for my business",
  "connect disconnected systems",
];

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

const faq = [
  {
    q: "How do I know which Yesp service is right for my business?",
    a: "Start with the problem: what is the manual, disconnected or inefficient process costing your business the most? Book a discovery call and we'll map your operational challenges to the right technology — software, AI, automation or integration.",
  },
  {
    q: "Can Yesp automate our business processes?",
    a: "Yes. Business process automation is one of Yesp's core capabilities. We automate document processing, lead qualification, approval workflows, data entry, reporting and operational monitoring using a combination of custom software, AI agents and system integrations.",
  },
  {
    q: "How long does it take to automate a business workflow?",
    a: "A focused single-process automation takes 4–10 weeks from design to deployment. More complex multi-system workflow automation is delivered in phases. We start with the highest-impact process to demonstrate value quickly.",
  },
  {
    q: "Can Yesp build custom software AND AI for our business?",
    a: "Yes. Yesp builds both the software infrastructure and the AI systems that run on top of it. Most enterprise clients need both: custom software for the operational system, and AI automation to handle the high-volume, repetitive workflows within it.",
  },
  {
    q: "What makes Yesp different from a typical software development company?",
    a: "Yesp combines enterprise software engineering, practical AI development and business automation in one team. We build to solve the business problem — not to maximize development scope. Most projects start with an operational audit before a single line of code is written.",
  },
];

export default function SolutionsPage() {
  useSEO({
    title: "Business Solutions — Automate, Integrate & Modernize | Yesp Corporation",
    description:
      "Yesp Corporation solves real business problems: automate manual workflows, connect business systems, qualify leads automatically, process documents with AI, modernize legacy software. Enterprise software, AI and automation company in India.",
    keywords:
      "automate business processes, automate manual workflows, connect ERP and CRM, integrate business systems, eliminate data silos, automate customer support, automate sales follow up, automate lead qualification, automate invoice processing, automate document processing, modernize legacy software, build custom business software, business automation company, enterprise AI solutions, digital transformation India",
    canonical: "https://yespstudio.com/solutions",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Business Solutions by Yesp Corporation",
        description: "Enterprise software, AI and automation solutions for common business problems",
        itemListElement: problems.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.problem,
          description: p.solution,
        })),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 py-14 sm:py-24">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-accent/70 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Solutions</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              What Problem Are You Trying to Solve?
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Yesp Corporation builds enterprise software, AI systems and automation that fix the real operational problems businesses face — not generic technology deployments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                Tell Us Your Problem <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Browse All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Problem → Solution Grid */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Common Business Problems</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">Problems We Solve</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {problems.map((p) => (
              <div
                key={p.problem}
                className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-card flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground">{p.problem}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.solution}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/80 px-3 py-1.5 text-xs font-bold text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {s.label} <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Keyword cloud for crawlers + real users */}
        <section className="border-t border-border/60 bg-secondary/20 py-10 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">What Businesses Search For</p>
            <div className="flex flex-wrap gap-2">
              {solutionKeywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full border border-border/60 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Service landscape quick nav */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">All Capabilities</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">What Yesp Builds</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Enterprise Software Development", to: "/services/enterprise-software-development" },
              { label: "AI Development", to: "/services/ai-development" },
              { label: "AI Automation", to: "/services/ai-automation" },
              { label: "AI Agents", to: "/services/ai-agents" },
              { label: "Generative AI & LLM", to: "/services/generative-ai" },
              { label: "AI Voice Agents", to: "/services/ai-voice-agents" },
              { label: "Document Intelligence", to: "/services/document-intelligence" },
              { label: "Sales & Lead Automation", to: "/services/sales-automation" },
              { label: "Business Process Automation", to: "/services/business-process-automation" },
              { label: "Custom ERP Development", to: "/services/erp-development" },
              { label: "Custom CRM Development", to: "/services/crm-development" },
              { label: "System Integration", to: "/services/system-integration" },
              { label: "Digital Transformation", to: "/services/digital-transformation" },
              { label: "Custom SaaS Development", to: "/services/custom-saas-development" },
              { label: "Legacy System Modernization", to: "/services/legacy-system-modernization" },
              { label: "SEO & GEO Growth", to: "/services/growth" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-2xl border border-border bg-card px-4 py-3.5 text-xs font-bold text-foreground hover:border-primary/50 hover:text-primary transition-colors shadow-sm flex items-center justify-between gap-2"
              >
                <span>{item.label}</span>
                <ArrowRight className="h-3 w-3 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </section>

        {/* Industry links */}
        <section className="border-t border-border/60 bg-secondary/20 py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">By Industry</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Technology & SaaS", to: "/industries/technology" },
                { label: "Healthcare & Medical", to: "/industries/healthcare" },
                { label: "Manufacturing", to: "/industries/manufacturing" },
                { label: "Logistics", to: "/industries/logistics" },
                { label: "Education & EdTech", to: "/industries/education" },
                { label: "Real Estate", to: "/industries/real-estate" },
              ].map((ind) => (
                <Link
                  key={ind.to}
                  to={ind.to}
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary/50 hover:text-primary transition-colors shadow-sm"
                >
                  {ind.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Common Questions</h2>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
            {faq.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60 bg-secondary/30 py-12 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-start gap-5 rounded-3xl bg-brand p-8 sm:p-12 text-primary-foreground md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 max-w-xl">
                <h2 className="text-2xl font-extrabold sm:text-3xl">Ready to solve it?</h2>
                <p className="text-sm opacity-90 leading-relaxed">
                  Book a 20–30 minute discovery call with Srinithin Somasundaram and the Yesp Corporation team. We'll identify the right approach for your specific problem.
                </p>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5 shrink-0 shadow-elevated"
              >
                Book a Call <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
