export type ServiceSlug = "digital" | "ai-labs" | "growth";

export const services = [
  {
    slug: "digital",
    name: "Yesp Digital",
    title: "Enterprise Software & Digital Systems",
    body: "Custom software, business applications, dashboards, SaaS platforms and integrations.",
    intro:
      "We design and build the internal software, portals, dashboards and connected systems that help teams run cleaner operations.",
    outcomes: [
      "Custom business applications matched to your workflow",
      "Operational dashboards for faster decisions",
      "SaaS platforms and internal tools built for scale",
      "API integrations across ERP, CRM, finance and support systems",
    ],
    capabilities: [
      "Full-stack web application development",
      "Admin panels and business portals",
      "Database design and reporting layers",
      "Third-party API and legacy system integration",
      "Role-based access, workflows and approvals",
      "Cloud deployment and maintenance",
    ],
    process: [
      "Map the workflow and define the business rules",
      "Design the system architecture and user flows",
      "Build a focused pilot with real operational data",
      "Integrate with existing tools and scale after validation",
    ],
  },
  {
    slug: "ai-labs",
    name: "Yesp AI Labs",
    title: "AI & Intelligent Automation",
    body: "AI agents, workflow automation, AI systems, document intelligence and intelligent business processes.",
    intro:
      "We apply AI to repeatable business processes where automation can reduce manual effort, improve response time and make information easier to use.",
    outcomes: [
      "AI agents for structured business workflows",
      "Automated document reading, routing and summarization",
      "Voice and chat workflows for customer and internal operations",
      "Human-in-the-loop automation with review and escalation paths",
    ],
    capabilities: [
      "AI agent design and implementation",
      "Workflow automation and orchestration",
      "Document intelligence and extraction",
      "Voice agent and conversational interfaces",
      "Evaluation, guardrails and fallback handling",
      "Integration with business systems and CRMs",
    ],
    process: [
      "Identify high-volume workflows with clear automation potential",
      "Define guardrails, handoff points and success criteria",
      "Build a pilot that handles real cases safely",
      "Measure accuracy, improve reliability and expand coverage",
    ],
  },
  {
    slug: "growth",
    name: "Yesp Growth",
    title: "Organic Growth & Lead Systems",
    body: "SEO, GEO, lead generation, conversion systems and growth infrastructure.",
    intro:
      "We build the search, content and lead-capture systems that help businesses become easier to find and easier to buy from.",
    outcomes: [
      "SEO and GEO foundations for discoverability",
      "Lead capture paths connected to follow-up workflows",
      "Conversion-focused landing pages and content systems",
      "Reporting that connects traffic, leads and sales activity",
    ],
    capabilities: [
      "SEO strategy and technical optimization",
      "Generative engine optimization for AI search surfaces",
      "Landing pages and conversion flows",
      "Lead forms, CRM routing and qualification workflows",
      "Content systems and case study infrastructure",
      "Analytics, tracking and growth reporting",
    ],
    process: [
      "Audit current visibility, funnel gaps and positioning",
      "Build the content, technical and conversion foundation",
      "Connect lead capture to sales follow-up systems",
      "Measure discoverability, conversion and pipeline quality",
    ],
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
