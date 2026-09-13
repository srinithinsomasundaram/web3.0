export type ServiceSlug =
  | "digital"
  | "ai-labs"
  | "growth"
  | "enterprise-software-development"
  | "ai-development"
  | "ai-automation"
  | "business-process-automation"
  | "system-integration"
  | "digital-transformation"
  | "custom-saas-development"
  | "legacy-system-modernization"
  | "ai-agents"
  | "generative-ai"
  | "ai-voice-agents"
  | "document-intelligence"
  | "erp-development"
  | "sales-automation"
  | "crm-development";

export type Service = {
  slug: ServiceSlug;
  name: string;
  title: string;
  body: string;
  intro: string;
  outcomes: string[];
  capabilities: string[];
  process: string[];
  seo: {
    pageTitle: string;
    description: string;
    keywords: string;
    canonical: string;
    h1: string;
  };
  faq: { q: string; a: string }[];
  related: ServiceSlug[];
};

export const services: Service[] = [
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
    seo: {
      pageTitle: "Enterprise Software Development — Yesp Digital | Yesp Corporation",
      description:
        "Yesp Digital builds custom enterprise software, business applications, SaaS platforms and API integrations for global businesses. Rooted in Coimbatore & Bengaluru, delivering worldwide.",
      keywords:
        "enterprise software development, custom business software, SaaS development, API integration, business application development, Yesp Digital",
      canonical: "https://yespstudio.com/services/digital",
      h1: "Enterprise Software & Digital Systems",
    },
    faq: [
      {
        q: "What does Yesp Digital build?",
        a: "Yesp Digital builds custom business applications, internal portals, SaaS platforms, operational dashboards and API integrations for enterprises. Every system is built around your specific workflow rather than a generic template.",
      },
      {
        q: "How long does enterprise software development take?",
        a: "A focused MVP typically takes 8–16 weeks depending on complexity. Larger enterprise systems with multiple integrations are phased over 3–6 months. We start with a pilot to validate requirements before scaling.",
      },
      {
        q: "Do you integrate with existing ERP and CRM systems?",
        a: "Yes. Integration with existing ERP, CRM, finance, inventory and support systems is a core part of our delivery. We connect new software to your existing technology stack using API and database integration.",
      },
      {
        q: "Where is Yesp Digital based?",
        a: "Yesp Digital operates from Erode, Coimbatore and Bengaluru in India and delivers 100% remotely for global enterprise clients.",
      },
    ],
    related: ["enterprise-software-development", "system-integration", "custom-saas-development"],
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
    seo: {
      pageTitle: "AI Development & Intelligent Automation — Yesp AI Labs | Yesp Corporation",
      description:
        "Yesp AI Labs builds practical AI agents, workflow automation, document intelligence and voice AI for enterprise businesses. AI development company in India serving global clients.",
      keywords:
        "AI development company, AI automation, enterprise AI solutions, AI agents for business, workflow automation, document intelligence, voice AI, Yesp AI Labs",
      canonical: "https://yespstudio.com/services/ai-labs",
      h1: "AI & Intelligent Automation",
    },
    faq: [
      {
        q: "What AI services does Yesp AI Labs provide?",
        a: "Yesp AI Labs designs and builds AI agents, intelligent workflow automation, document intelligence systems, voice AI agents and conversational interfaces for enterprise business operations.",
      },
      {
        q: "What business processes can be automated with AI?",
        a: "High-volume, structured, rule-based processes are the strongest candidates: document processing, lead qualification, customer onboarding, inventory monitoring, report generation, invoice handling and customer support routing.",
      },
      {
        q: "How does Yesp approach AI safety and reliability?",
        a: "Every AI system we build includes defined guardrails, human-in-the-loop escalation paths, and fallback handling. We start with a pilot on real data to measure accuracy before scaling.",
      },
      {
        q: "Does Yesp AI Labs build AI agents?",
        a: "Yes. AI agent design and implementation is a core capability of Yesp AI Labs. We build autonomous AI agents that handle structured workflows, process documents, respond to queries and route cases to the right teams.",
      },
    ],
    related: ["ai-development", "ai-automation", "business-process-automation"],
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
    seo: {
      pageTitle: "SEO, GEO & Organic Growth Systems — Yesp Growth | Yesp Corporation",
      description:
        "Yesp Growth builds SEO strategy, generative engine optimization (GEO), lead generation systems and conversion infrastructure for enterprise businesses. Make your business easier to find on Google and AI.",
      keywords:
        "SEO company India, GEO generative engine optimization, lead generation, organic growth, content strategy, conversion optimization, Yesp Growth",
      canonical: "https://yespstudio.com/services/growth",
      h1: "Organic Growth & Lead Systems",
    },
    faq: [
      {
        q: "What is GEO — Generative Engine Optimization?",
        a: "Generative Engine Optimization (GEO) is the practice of structuring your website content, entity data and structured markup so that AI systems like ChatGPT, Gemini, Perplexity and Google AI Overviews can accurately understand and represent your business in AI-generated answers.",
      },
      {
        q: "How long does SEO take to show results?",
        a: "Technical SEO improvements can show impact within weeks. Content and authority-building SEO typically compounds over 3–6 months. GEO signals can influence AI answers within weeks of content publication.",
      },
      {
        q: "Does Yesp Growth handle both SEO and lead generation?",
        a: "Yes. We build the full acquisition stack: search visibility (SEO + GEO), landing pages, lead capture forms, CRM routing and follow-up automation — so traffic converts to qualified pipeline.",
      },
    ],
    related: ["digital-transformation", "system-integration"],
  },

  // ─── SEO-Targeted Commercial Service Pages ───────────────────────────────

  {
    slug: "enterprise-software-development",
    name: "Enterprise Software Development",
    title: "Enterprise Software Development Company",
    body: "Custom enterprise software, business applications, ERP systems and integrated digital platforms built for scale.",
    intro:
      "We design and develop enterprise-grade software systems that are built around how your business actually operates — not generic templates or off-the-shelf tools that require you to adapt to them.",
    outcomes: [
      "Custom enterprise software built to your exact business requirements",
      "Scalable architecture that grows with your operations",
      "Integrations with ERP, CRM, finance and data systems",
      "Reduced dependency on expensive SaaS subscriptions",
    ],
    capabilities: [
      "Custom ERP and business management systems",
      "Enterprise web applications and portals",
      "Multi-tenant SaaS platform development",
      "Database architecture and reporting layers",
      "Role-based workflows, approvals and access control",
      "Cloud infrastructure, DevOps and deployment",
      "Legacy system migration and modernization",
      "Third-party API and data integration",
    ],
    process: [
      "Conduct a deep operational audit to map current workflows and system gaps",
      "Design the software architecture and user experience blueprint",
      "Build a working pilot with real business data and workflows",
      "Integrate with existing tools and scale after validation",
    ],
    seo: {
      pageTitle: "Enterprise Software Development Company — Custom Business Software | Yesp Corporation",
      description:
        "Yesp Corporation is an enterprise software development company based in India (Erode, Coimbatore, Bengaluru) building custom ERP, SaaS platforms, business applications and integrations for global enterprises.",
      keywords:
        "enterprise software development company, custom enterprise software, enterprise application development, custom business software, ERP development, enterprise software company India",
      canonical: "https://yespstudio.com/services/enterprise-software-development",
      h1: "Enterprise Software Development Company",
    },
    faq: [
      {
        q: "What is enterprise software development?",
        a: "Enterprise software development is the process of designing and building custom software systems for large organizations. These systems manage core business operations such as sales, inventory, finance, HR, supply chain and customer operations — and are built to scale with the business.",
      },
      {
        q: "Why build custom enterprise software instead of buying off-the-shelf?",
        a: "Off-the-shelf software is built for the average business. Custom enterprise software is built for your specific workflows, rules and data model. This removes the cost and overhead of unused features, eliminates workarounds and creates software that fits how your team actually works.",
      },
      {
        q: "How much does custom enterprise software development cost?",
        a: "The investment depends on scope, integrations and complexity. A focused enterprise MVP typically ranges from project-scoped engagements of a few months to multi-phase programs. We scope each engagement after understanding your specific requirements.",
      },
      {
        q: "How long does enterprise software development take?",
        a: "A focused enterprise software MVP takes 10–20 weeks. Larger systems with multiple integrations and modules are delivered in phases of 3–6 months each, starting with the highest-priority workflow.",
      },
      {
        q: "Which industries does Yesp build enterprise software for?",
        a: "Yesp Corporation builds enterprise software for Technology & SaaS, Healthcare & Medical, Manufacturing & Supply Chain, Logistics, Real Estate and other industries that require custom operational systems.",
      },
      {
        q: "Is Yesp Corporation an enterprise software development company in India?",
        a: "Yes. Yesp Corporation is an enterprise software development company rooted in Erode, built in Coimbatore and operating from Bengaluru, India. We serve enterprise clients globally with 100% remote delivery.",
      },
    ],
    related: ["digital", "system-integration", "custom-saas-development", "legacy-system-modernization"],
  },

  {
    slug: "ai-development",
    name: "AI Development",
    title: "AI Development Company — Enterprise AI Solutions",
    body: "Custom AI systems, AI agents, machine learning and intelligent automation built for enterprise business operations.",
    intro:
      "We design and build AI systems that solve specific business problems — not technology demonstrations. Every AI system we develop is tied to a measurable outcome, integrated with your existing operations and built to work reliably at scale.",
    outcomes: [
      "Custom AI systems built around your business data and workflows",
      "AI agents that handle structured processes autonomously",
      "Document intelligence that reads, extracts and routes information",
      "Voice and conversational AI for customer and internal operations",
    ],
    capabilities: [
      "AI agent design and autonomous workflow systems",
      "Natural language processing and document intelligence",
      "Voice AI and conversational interface development",
      "Machine learning model development and integration",
      "AI system evaluation, guardrails and safety layers",
      "RAG (Retrieval-Augmented Generation) systems",
      "AI integration with CRM, ERP and business databases",
      "Generative AI application development",
    ],
    process: [
      "Identify the business problem and the data available to solve it",
      "Design the AI architecture and define success criteria and guardrails",
      "Build a pilot system that operates on real data with human oversight",
      "Measure accuracy and reliability, then expand coverage systematically",
    ],
    seo: {
      pageTitle: "AI Development Company — Enterprise AI Solutions | Yesp Corporation",
      description:
        "Yesp Corporation is an AI development company building custom AI agents, document intelligence, voice AI and enterprise AI solutions for global businesses. Based in India, serving worldwide.",
      keywords:
        "AI development company, enterprise AI solutions, custom AI development, AI agents for business, AI agent development company, generative AI development, AI company India",
      canonical: "https://yespstudio.com/services/ai-development",
      h1: "AI Development Company — Enterprise AI Solutions",
    },
    faq: [
      {
        q: "What does an AI development company do?",
        a: "An AI development company designs and builds custom artificial intelligence systems for businesses. This includes AI agents, natural language processing systems, document intelligence, voice AI, machine learning models and generative AI applications — all integrated with the client's existing operations.",
      },
      {
        q: "What are enterprise AI solutions?",
        a: "Enterprise AI solutions are AI systems built specifically for business operations at scale. They handle structured workflows, process large volumes of data, automate decisions and integrate with ERP, CRM and business databases — unlike consumer AI applications.",
      },
      {
        q: "How is Yesp Corporation different from other AI development companies?",
        a: "Yesp applies AI to specific business problems with defined outcomes and reliability standards. We start with a pilot on real data, measure accuracy before scaling, and always include guardrails and human-in-the-loop escalation paths — so AI systems work in production, not just demonstrations.",
      },
      {
        q: "Can you build AI agents for my business?",
        a: "Yes. AI agent design and implementation is a core capability. We build autonomous AI agents that handle structured business workflows — from document processing and lead qualification to customer onboarding and operational monitoring.",
      },
      {
        q: "Is Yesp Corporation an AI development company in India?",
        a: "Yes. Yesp Corporation is an AI development company operating from Erode, Coimbatore and Bengaluru in India. We build enterprise AI solutions and serve businesses globally with 100% remote delivery.",
      },
    ],
    related: ["ai-labs", "ai-automation", "business-process-automation"],
  },

  {
    slug: "ai-automation",
    name: "AI Automation",
    title: "AI Automation Company — Intelligent Business Automation",
    body: "AI-powered automation for business workflows, document processing, sales operations and customer service.",
    intro:
      "We automate the high-volume, repetitive workflows that slow your business down — using AI to handle document processing, lead follow-up, customer operations and internal approvals without manual intervention.",
    outcomes: [
      "High-volume workflows automated with AI — without additional headcount",
      "Faster response times for customer and sales operations",
      "Document processing that reads, classifies and routes automatically",
      "Automated reporting and escalation with human override paths",
    ],
    capabilities: [
      "AI workflow automation and orchestration",
      "Automated document reading, extraction and routing",
      "Sales and lead follow-up automation",
      "Customer service AI automation",
      "Approval and escalation workflow automation",
      "AI-triggered notifications and alerts",
      "Integration with CRM, ERP and communication tools",
      "Monitoring, logging and performance dashboards",
    ],
    process: [
      "Map the target workflow and identify the automation trigger points",
      "Define the automation rules, decision logic and escalation paths",
      "Build and test the automation system on real operational data",
      "Deploy, monitor and expand as the system demonstrates reliability",
    ],
    seo: {
      pageTitle: "AI Automation Company — Business Workflow Automation | Yesp Corporation",
      description:
        "Yesp Corporation is an AI automation company building intelligent business automation for workflows, documents, sales operations and customer service. Enterprise AI automation services from India.",
      keywords:
        "AI automation company, AI automation services, AI workflow automation, business AI automation, intelligent automation, enterprise automation, AI automation India",
      canonical: "https://yespstudio.com/services/ai-automation",
      h1: "AI Automation Company — Intelligent Business Automation",
    },
    faq: [
      {
        q: "What is AI automation?",
        a: "AI automation uses artificial intelligence to execute business processes that previously required human effort — reading documents, making decisions, routing tasks, responding to queries and triggering actions — faster, at greater volume, and with consistent accuracy.",
      },
      {
        q: "Which business processes can AI automation handle?",
        a: "AI automation handles document processing, lead qualification and follow-up, customer onboarding, invoice processing, inventory monitoring, support ticket routing, approval workflows, report generation and internal communications — among many others.",
      },
      {
        q: "How is AI automation different from traditional automation?",
        a: "Traditional automation handles fixed, rule-based tasks. AI automation handles variable inputs — like reading unstructured documents, understanding customer messages or evaluating lead quality — using machine learning and language models to make decisions that rigid rules cannot.",
      },
      {
        q: "What's the ROI of AI automation?",
        a: "ROI varies by workflow, but AI automation typically reduces processing time by 60–90%, reduces per-transaction cost significantly and eliminates manual errors on high-volume processes. We measure automation accuracy and output before recommending scale-up.",
      },
      {
        q: "Is Yesp an AI automation company in India?",
        a: "Yes. Yesp Corporation is an AI automation company based in Coimbatore and Bengaluru, India. We deliver AI automation services to enterprise clients globally with 100% remote operations.",
      },
    ],
    related: ["ai-labs", "ai-development", "business-process-automation"],
  },

  {
    slug: "business-process-automation",
    name: "Business Process Automation",
    title: "Business Process Automation — Workflow Automation Company",
    body: "End-to-end business process automation: connecting systems, eliminating manual steps and building reliable workflow infrastructure.",
    intro:
      "We design and implement business process automation systems that eliminate manual bottlenecks, connect fragmented tools and give your team operational leverage without additional headcount.",
    outcomes: [
      "Manual workflows replaced with automated, connected processes",
      "Elimination of data re-entry and disconnected spreadsheet workflows",
      "Faster approvals, routing and escalations across teams",
      "Real-time process visibility with automated reporting",
    ],
    capabilities: [
      "Business process analysis and workflow mapping",
      "End-to-end process automation design and implementation",
      "Approval and escalation automation",
      "Form, data capture and routing automation",
      "System-to-system data sync and event triggers",
      "Process monitoring and audit trail systems",
      "Integration with CRM, ERP, HRMS and operations tools",
      "Robotic Process Automation (RPA) for legacy system interfaces",
    ],
    process: [
      "Audit the current process: inputs, decisions, outputs and bottlenecks",
      "Design the automated workflow with clear rules and exception handling",
      "Build and integrate the automation with existing business systems",
      "Monitor performance, refine edge cases and expand to adjacent workflows",
    ],
    seo: {
      pageTitle: "Business Process Automation Company — Workflow Automation | Yesp Corporation",
      description:
        "Yesp Corporation builds business process automation systems that eliminate manual workflows, connect business systems and improve operational efficiency. Workflow automation company in India.",
      keywords:
        "business process automation, workflow automation company, business automation services, process automation India, BPA, enterprise workflow automation, automation company",
      canonical: "https://yespstudio.com/services/business-process-automation",
      h1: "Business Process Automation — Workflow Automation Company",
    },
    faq: [
      {
        q: "What is business process automation?",
        a: "Business process automation (BPA) is the use of technology to perform repeatable business tasks with minimal human intervention. It connects systems, automates decisions and replaces manual handoffs — making operations faster, more consistent and less expensive to run.",
      },
      {
        q: "What processes can be automated?",
        a: "Most structured, rule-based processes can be automated: purchase order approvals, employee onboarding, invoice processing, data entry between systems, customer quote generation, inventory replenishment triggers, sales handoff workflows and compliance reporting.",
      },
      {
        q: "How long does business process automation take to implement?",
        a: "A single focused process automation typically takes 4–10 weeks from design to deployment. More complex multi-system automations are delivered in phases. We start with the highest-impact process to demonstrate value quickly.",
      },
      {
        q: "Do we need to replace our existing systems to automate?",
        a: "No. Business process automation connects your existing systems — ERP, CRM, HRMS, spreadsheets, email and communication tools — rather than replacing them. We build automation layers on top of what you already have.",
      },
    ],
    related: ["ai-automation", "system-integration", "ai-labs"],
  },

  {
    slug: "system-integration",
    name: "System Integration",
    title: "Enterprise System Integration — API & ERP Integration",
    body: "Connect enterprise systems, ERP platforms, CRMs and data sources with zero-latency integrations.",
    intro:
      "We design and implement enterprise system integrations that eliminate data silos, connect your operational systems and allow information to flow in real time between your ERP, CRM, databases, business applications and third-party tools.",
    outcomes: [
      "Real-time data flow between ERP, CRM and operational systems",
      "Elimination of manual data re-entry and synchronization errors",
      "Unified data layer accessible across business tools",
      "Event-driven integrations that trigger automated actions",
    ],
    capabilities: [
      "REST and GraphQL API development and integration",
      "ERP integration (SAP, Oracle, Microsoft Dynamics, custom ERP)",
      "CRM integration (Salesforce, HubSpot, custom CRM)",
      "Database-to-database synchronization",
      "Event-driven webhook and message queue architectures",
      "Legacy system integration via RPA or data layer",
      "Third-party SaaS integration and data normalization",
      "Integration monitoring, logging and alerting",
    ],
    process: [
      "Map all data sources, systems and the required information flows",
      "Design the integration architecture and data transformation layer",
      "Build and test integrations with real data across all connected systems",
      "Deploy, monitor data quality and add alerting for integration failures",
    ],
    seo: {
      pageTitle: "Enterprise System Integration — API & ERP Integration | Yesp Corporation",
      description:
        "Yesp Corporation provides enterprise system integration services connecting ERP, CRM, databases and business applications with zero-latency API integrations. System integration company in India.",
      keywords:
        "enterprise system integration, ERP integration, API integration company, system integration services, CRM integration, data integration, software integration India",
      canonical: "https://yespstudio.com/services/system-integration",
      h1: "Enterprise System Integration — API & ERP Integration",
    },
    faq: [
      {
        q: "What is enterprise system integration?",
        a: "Enterprise system integration connects separate business systems — ERP, CRM, databases, SaaS tools and custom applications — so that data flows between them automatically. This eliminates manual data transfer, reduces errors and gives teams a single source of truth.",
      },
      {
        q: "Which systems can Yesp integrate?",
        a: "Yesp integrates ERP systems (SAP, Oracle, Microsoft Dynamics, custom ERP), CRM platforms (Salesforce, HubSpot), inventory and supply chain systems, financial platforms, HR systems, e-commerce platforms and custom business applications — using APIs, webhooks or direct database connections.",
      },
      {
        q: "What is the difference between API integration and ERP integration?",
        a: "API integration connects two systems through their programming interfaces, allowing real-time data exchange. ERP integration is a specific category of integration that connects your ERP system — the core of business operations — with other tools like CRM, inventory, finance and third-party platforms.",
      },
      {
        q: "How long does enterprise system integration take?",
        a: "A point-to-point API integration between two systems typically takes 2–6 weeks. Complex multi-system ERP integrations with data transformation and error handling take 8–20 weeks and are usually delivered in phases.",
      },
    ],
    related: ["digital", "enterprise-software-development", "business-process-automation"],
  },

  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    title: "Digital Transformation Company — Enterprise Modernization",
    body: "End-to-end digital transformation: modernizing operations, replacing legacy systems and building scalable digital infrastructure.",
    intro:
      "We help businesses move from fragmented, manual and legacy-dependent operations to connected, automated and scalable digital systems — without disrupting the business during the transition.",
    outcomes: [
      "Legacy operations replaced with modern, connected digital infrastructure",
      "Manual workflows converted to automated, scalable processes",
      "Integrated data and visibility across all business functions",
      "Technology that supports growth rather than constraining it",
    ],
    capabilities: [
      "Digital transformation strategy and roadmap",
      "Legacy system assessment and modernization planning",
      "Custom software development for digital operations",
      "Business process automation and workflow redesign",
      "Enterprise system integration and data unification",
      "Cloud migration and infrastructure modernization",
      "AI and intelligent automation integration",
      "Change management and team enablement support",
    ],
    process: [
      "Assess the current technology landscape, processes and business objectives",
      "Define the transformation roadmap: priorities, phases and success metrics",
      "Execute the highest-value transformation phases with minimal disruption",
      "Validate, iterate and expand the digital infrastructure systematically",
    ],
    seo: {
      pageTitle: "Digital Transformation Company — Enterprise Modernization | Yesp Corporation",
      description:
        "Yesp Corporation is a digital transformation company helping businesses modernize operations, replace legacy systems and build scalable digital infrastructure. Digital transformation services from India.",
      keywords:
        "digital transformation company, digital transformation services, business digital transformation, enterprise modernization, legacy system modernization, digital transformation India",
      canonical: "https://yespstudio.com/services/digital-transformation",
      h1: "Digital Transformation Company — Enterprise Modernization",
    },
    faq: [
      {
        q: "What is digital transformation?",
        a: "Digital transformation is the process of replacing manual, paper-based or legacy technology operations with modern digital systems — custom software, automation, integrated data and AI — so the business can operate faster, smarter and more efficiently at scale.",
      },
      {
        q: "What does a digital transformation company do?",
        a: "A digital transformation company assesses your current operations and technology, designs a modernization roadmap, builds or integrates the required systems and implements automation — all while keeping the business running. They are responsible for turning strategy into working technology.",
      },
      {
        q: "How long does digital transformation take?",
        a: "Digital transformation is a phased journey, not a single project. The first high-value phase — typically automating a core workflow or replacing a major legacy system — takes 3–6 months. Full transformation across an enterprise spans 12–36 months depending on scale and complexity.",
      },
      {
        q: "Is Yesp a digital transformation company in India?",
        a: "Yes. Yesp Corporation is a digital transformation company based in Erode, Coimbatore and Bengaluru in India. We help enterprise businesses across India and globally modernize their operations with custom software, AI and automation.",
      },
    ],
    related: ["enterprise-software-development", "legacy-system-modernization", "business-process-automation", "ai-automation"],
  },

  {
    slug: "custom-saas-development",
    name: "Custom SaaS Development",
    title: "Custom SaaS Development Company",
    body: "Custom SaaS platform development: multi-tenant architecture, subscription billing, user management and scalable cloud infrastructure.",
    intro:
      "We design and build custom SaaS platforms from the ground up — built around your product vision, your customers and your business model, not a generic template.",
    outcomes: [
      "A scalable multi-tenant SaaS platform built to your product specification",
      "Subscription billing, user management and onboarding flows",
      "Secure, cloud-deployed infrastructure built for scale",
      "Admin dashboards and customer-facing product interfaces",
    ],
    capabilities: [
      "Multi-tenant SaaS architecture design",
      "Subscription billing and payment integration (Stripe, Razorpay)",
      "User authentication, roles and permission management",
      "Customer-facing dashboard and product interface",
      "Admin portal for operations and customer management",
      "API development for third-party and mobile integration",
      "Cloud infrastructure (AWS, GCP, Azure) deployment and scaling",
      "SaaS analytics, usage monitoring and product telemetry",
    ],
    process: [
      "Define the product scope, user flows and technical architecture",
      "Build the core product MVP with authentication, billing and primary features",
      "Test with real users and refine the product based on feedback",
      "Scale infrastructure, add integrations and expand product capabilities",
    ],
    seo: {
      pageTitle: "Custom SaaS Development Company — SaaS Platform Development | Yesp Corporation",
      description:
        "Yesp Corporation builds custom SaaS platforms with multi-tenant architecture, subscription billing, user management and cloud infrastructure. SaaS development company in India.",
      keywords:
        "custom SaaS development, SaaS development company, SaaS platform development, custom software as a service, build SaaS product, SaaS development India",
      canonical: "https://yespstudio.com/services/custom-saas-development",
      h1: "Custom SaaS Development Company",
    },
    faq: [
      {
        q: "What is custom SaaS development?",
        a: "Custom SaaS development is the process of building a software-as-a-service product from scratch — designed around your specific product vision, user base and business model. Unlike off-the-shelf SaaS tools, a custom SaaS platform is entirely owned by you and can be built to any specification.",
      },
      {
        q: "What is multi-tenant SaaS architecture?",
        a: "Multi-tenant SaaS architecture allows a single deployed platform to serve multiple customers (tenants) with separate data, configurations and user accounts — while sharing the underlying infrastructure. This is the standard architecture for SaaS businesses that serve many clients from a single platform.",
      },
      {
        q: "How long does custom SaaS development take?",
        a: "A focused SaaS MVP with core product features, authentication, billing and a basic dashboard typically takes 12–20 weeks. A full production-ready SaaS platform with integrations and advanced features takes 6–12 months.",
      },
      {
        q: "Can Yesp build a SaaS product for my business?",
        a: "Yes. Yesp Corporation builds custom SaaS platforms end-to-end — from product architecture and design to development, billing integration, cloud deployment and ongoing maintenance. We have delivered SaaS products for technology companies, recruitment platforms and enterprise clients.",
      },
    ],
    related: ["digital", "enterprise-software-development", "system-integration"],
  },

  {
    slug: "legacy-system-modernization",
    name: "Legacy System Modernization",
    title: "Legacy System Modernization — Modernize Your Business Technology",
    body: "Assess, migrate and modernize legacy software systems to modern, scalable and maintainable technology.",
    intro:
      "We help businesses move away from outdated, fragile legacy systems — without a disruptive big-bang replacement. Our approach is phased, risk-managed and focused on keeping the business operational throughout the modernization.",
    outcomes: [
      "Legacy systems replaced with modern, maintainable software",
      "Data migrated safely from old systems to new infrastructure",
      "Business continuity maintained throughout the modernization",
      "Reduced technical debt and improved operational reliability",
    ],
    capabilities: [
      "Legacy system assessment and modernization roadmap",
      "Data migration design and safe data transfer",
      "API wrapper and strangler-fig modernization patterns",
      "Re-architecture to cloud-native or microservices",
      "Modern UI and business logic development on legacy data",
      "Parallel-run testing and cutover planning",
      "Integration of legacy systems with modern business tools",
      "Documentation and knowledge transfer for new systems",
    ],
    process: [
      "Assess the legacy system: architecture, data, dependencies and business criticality",
      "Design the modernization approach: full replacement, phased migration or API wrapper",
      "Execute the first modernization phase with parallel-run validation",
      "Migrate data, test thoroughly and cut over with minimal business disruption",
    ],
    seo: {
      pageTitle: "Legacy System Modernization — Modernize Business Technology | Yesp Corporation",
      description:
        "Yesp Corporation modernizes legacy software systems with phased migration, data migration and modern re-architecture. Legacy system modernization company in India serving global enterprises.",
      keywords:
        "legacy system modernization, modernize legacy software, legacy application migration, legacy system replacement, legacy IT modernization, software modernization India",
      canonical: "https://yespstudio.com/services/legacy-system-modernization",
      h1: "Legacy System Modernization — Modernize Your Business Technology",
    },
    faq: [
      {
        q: "What is legacy system modernization?",
        a: "Legacy system modernization is the process of updating or replacing outdated business software with modern technology — without losing the business data, logic and operational continuity that the legacy system contains. It can involve a full replacement, phased migration, API wrapping or re-architecture.",
      },
      {
        q: "How do you modernize a legacy system without disrupting the business?",
        a: "We use phased modernization approaches — starting with a modern layer alongside the legacy system, migrating data and workflows incrementally, running both systems in parallel until confidence is established, and then cutting over safely. Business continuity is the primary constraint.",
      },
      {
        q: "What legacy systems can Yesp modernize?",
        a: "We modernize outdated ERP systems, custom-built business applications, spreadsheet-based workflows, on-premise databases, aging web applications, legacy CRM systems and manual paper-based processes that need a digital replacement.",
      },
      {
        q: "How long does legacy system modernization take?",
        a: "It depends on the size and complexity of the legacy system. A focused module replacement takes 8–16 weeks. A full enterprise system replacement is phased over 6–18 months, with each phase delivering a working increment rather than a single long delivery.",
      },
    ],
    related: ["digital-transformation", "enterprise-software-development", "system-integration"],
  },

  // ─── AI Agents ────────────────────────────────────────────────────────────

  {
    slug: "ai-agents",
    name: "AI Agents",
    title: "AI Agent Development Company — Custom AI Agents for Business",
    body: "Custom AI agents for business workflows, sales operations, customer service and autonomous enterprise processes.",
    intro:
      "We design and build autonomous AI agents that handle structured business workflows end-to-end — qualifying leads, processing documents, routing cases, responding to customers and running operations without constant human intervention.",
    outcomes: [
      "AI agents that handle high-volume business workflows autonomously",
      "Reduced manual workload across sales, support, operations and HR",
      "24/7 autonomous operation on structured business processes",
      "Human-in-the-loop escalation for exceptions and edge cases",
    ],
    capabilities: [
      "AI agent design and autonomous workflow implementation",
      "Multi-step agent pipelines with tool use and decision logic",
      "AI sales agents for lead qualification and follow-up",
      "AI customer service and support agents",
      "AI recruitment and HR agents",
      "AI operations agents for monitoring and alerts",
      "AI workflow agents for internal process orchestration",
      "Agent evaluation, guardrails and reliability engineering",
    ],
    process: [
      "Define the target workflow, trigger conditions and success criteria",
      "Design the agent's decision logic, tool integrations and escalation paths",
      "Build and test the agent on real business data with human oversight",
      "Deploy, monitor accuracy and expand agent coverage systematically",
    ],
    seo: {
      pageTitle: "AI Agent Development Company — Custom AI Agents for Business | Yesp Corporation",
      description:
        "Yesp Corporation is an AI agent development company building custom AI agents for sales, customer service, operations and enterprise workflows. Enterprise AI agents, autonomous AI agents, AI workflow agents. Based in India.",
      keywords:
        "AI agent development company, AI agents for business, enterprise AI agents, autonomous AI agents, custom AI agents, AI agent automation, AI workflow agents, AI operations agents, AI sales agents, AI customer service agents, AI support agents, AI recruitment agents, business AI agents, AI agent solutions, AI agent company India",
      canonical: "https://yespstudio.com/services/ai-agents",
      h1: "AI Agent Development Company — Custom AI Agents for Business",
    },
    faq: [
      {
        q: "What is an AI agent?",
        a: "An AI agent is a software system that perceives inputs, makes decisions using predefined logic and AI models, executes actions and produces outputs — autonomously, without step-by-step human direction. Business AI agents handle structured workflows: qualifying leads, processing documents, routing support tickets, generating reports and orchestrating multi-step operations.",
      },
      {
        q: "What kinds of AI agents does Yesp build?",
        a: "Yesp builds AI sales agents (lead qualification, follow-up), AI customer service agents (support routing, response automation), AI operations agents (monitoring, alerting, reporting), AI recruitment agents, AI document processing agents and AI workflow orchestration agents for enterprise businesses.",
      },
      {
        q: "How is an AI agent different from a chatbot?",
        a: "A chatbot answers questions in a conversational interface. An AI agent takes actions — it can read emails, search databases, update CRM records, send responses, qualify leads, escalate to humans and run multi-step processes — not just converse. AI agents are action-oriented; chatbots are conversation-oriented.",
      },
      {
        q: "Do AI agents work without human supervision?",
        a: "Yes, for defined workflows within guardrails. Well-built AI agents handle the bulk of routine cases autonomously. We always design escalation paths for exceptions, edge cases and low-confidence decisions — so humans stay in control of what matters while agents handle volume.",
      },
      {
        q: "Is Yesp Corporation an AI agent development company in India?",
        a: "Yes. Yesp Corporation is an AI agent development company based in Coimbatore and Bengaluru, India. We build custom AI agents for enterprise businesses across India and globally.",
      },
    ],
    related: ["ai-labs", "ai-development", "ai-automation", "ai-voice-agents", "document-intelligence"],
  },

  // ─── Generative AI ────────────────────────────────────────────────────────

  {
    slug: "generative-ai",
    name: "Generative AI",
    title: "Generative AI Development Company — GenAI & LLM Solutions",
    body: "Custom generative AI applications, LLM integrations, RAG systems and enterprise GenAI solutions for business operations.",
    intro:
      "We build generative AI applications that create real business value — internal knowledge systems, AI-assisted workflows, document generation, intelligent search and LLM-powered operations tools — not technology demonstrations.",
    outcomes: [
      "GenAI-powered internal tools that reduce knowledge retrieval time",
      "Automated content, report and document generation workflows",
      "LLM-powered search and question-answering across business data",
      "AI-assisted decision support for operations and sales teams",
    ],
    capabilities: [
      "LLM application development and integration (GPT-4, Claude, Gemini)",
      "RAG (Retrieval-Augmented Generation) system development",
      "Enterprise knowledge base and AI search systems",
      "Generative AI for document drafting and content automation",
      "Private AI chatbot development on proprietary business data",
      "Prompt engineering, evaluation and output reliability",
      "Fine-tuning and model customization for domain-specific use",
      "GenAI integration with CRM, ERP and business databases",
    ],
    process: [
      "Identify the specific business problem and the data the AI will work with",
      "Design the GenAI architecture: model selection, RAG pipeline, guardrails",
      "Build a pilot system with accuracy evaluation on real business queries",
      "Refine reliability, integrate with business systems and scale deployment",
    ],
    seo: {
      pageTitle: "Generative AI Development Company — GenAI & LLM Solutions | Yesp Corporation",
      description:
        "Yesp Corporation builds generative AI applications, RAG systems, LLM integrations and enterprise GenAI solutions. Generative AI development company in India serving global businesses.",
      keywords:
        "generative AI development company, generative AI solutions, GenAI development, LLM development company, enterprise generative AI, generative AI consulting, RAG development, LLM application development, LLM integration, generative AI integration, generative AI automation, generative AI software development, private AI chatbot development, enterprise AI chatbot, AI knowledge base, enterprise LLM solutions, generative AI India",
      canonical: "https://yespstudio.com/services/generative-ai",
      h1: "Generative AI Development Company — GenAI & LLM Solutions",
    },
    faq: [
      {
        q: "What is generative AI development?",
        a: "Generative AI development is the process of building applications that use large language models (LLMs) like GPT-4, Claude or Gemini to generate text, answer questions, draft documents, summarize information and power intelligent business workflows — integrated with your business data and systems.",
      },
      {
        q: "What is RAG and why is it important for business?",
        a: "RAG (Retrieval-Augmented Generation) is a technique where an AI system retrieves relevant information from your business's documents, databases or knowledge base before generating an answer — instead of relying only on the AI model's training data. This means the AI gives accurate, up-to-date answers based on your actual business information, not generic knowledge.",
      },
      {
        q: "Can Yesp build a private AI chatbot on our company data?",
        a: "Yes. Building private AI chatbots and knowledge systems on proprietary company data is a core generative AI capability. We connect LLMs to your internal documents, CRM data, product documentation or knowledge base using RAG architecture — so your AI answers from your data, not from the internet.",
      },
      {
        q: "How does generative AI create business value?",
        a: "Generative AI creates value by accelerating information retrieval, automating document generation, enabling self-service knowledge access for teams and customers, generating first-draft content for sales and operations, and reducing the time teams spend on information-heavy, repetitive writing tasks.",
      },
    ],
    related: ["ai-labs", "ai-development", "ai-agents", "document-intelligence", "ai-automation"],
  },

  // ─── AI Voice Agents ─────────────────────────────────────────────────────

  {
    slug: "ai-voice-agents",
    name: "AI Voice Agents",
    title: "AI Voice Agent Development — Voice AI for Business",
    body: "AI voice agents for inbound and outbound calling, customer service automation, appointment booking and sales operations.",
    intro:
      "We design and deploy AI voice agents that handle phone calls, qualify leads, answer customer queries, book appointments and run outbound campaigns — operating 24/7 without call center overhead.",
    outcomes: [
      "AI voice agents handling inbound calls without human agents",
      "Automated outbound calling for lead qualification and follow-up",
      "24/7 availability for customer queries and appointment booking",
      "Seamless handoff to human agents when the AI reaches its limit",
    ],
    capabilities: [
      "Inbound AI voice agent development",
      "Outbound AI calling agent for lead qualification",
      "Appointment booking and scheduling AI agents",
      "AI customer service voice automation",
      "Natural language understanding for voice interactions",
      "Call recording, transcription and CRM integration",
      "Multilingual voice agent development",
      "Voice agent analytics and conversation quality monitoring",
    ],
    process: [
      "Define the call flow, intents, expected queries and edge cases",
      "Build the voice agent with natural language understanding and CRM integration",
      "Test on real call scenarios across common and edge-case conversations",
      "Deploy and monitor call quality, handoff rates and resolution rates",
    ],
    seo: {
      pageTitle: "AI Voice Agent Development — Voice AI for Business | Yesp Corporation",
      description:
        "Yesp Corporation builds AI voice agents for inbound calls, outbound calling, appointment booking and customer service automation. AI voice agent development company in India serving global businesses.",
      keywords:
        "AI voice agent, AI voice agent company, AI voice agent development, AI voice agent development company, voice AI development, voice AI company, AI calling agent, AI phone agent, AI customer service agent, AI call automation, conversational AI development, conversational AI company, AI receptionist, AI sales calling agent, AI outbound calling, AI inbound calling automation, AI appointment booking agent, AI voice automation India",
      canonical: "https://yespstudio.com/services/ai-voice-agents",
      h1: "AI Voice Agent Development — Voice AI for Business",
    },
    faq: [
      {
        q: "What is an AI voice agent?",
        a: "An AI voice agent is a software system that conducts natural telephone conversations using artificial intelligence — understanding what callers say, making decisions and responding verbally. It handles inbound customer calls, makes outbound sales calls, books appointments and answers queries without a human agent.",
      },
      {
        q: "What business problems do AI voice agents solve?",
        a: "AI voice agents solve the cost and coverage problem of phone-based customer operations: missed calls, long hold times, after-hours unavailability and the overhead of scaling call center teams. They handle high-volume routine calls — qualifying leads, booking appointments, answering FAQs — freeing human agents for complex conversations.",
      },
      {
        q: "Can an AI voice agent qualify sales leads by phone?",
        a: "Yes. AI sales calling agents are one of the most valuable use cases. The agent calls new leads immediately after they register, asks qualification questions, scores the lead, updates your CRM and schedules a human sales call for qualified prospects — all automatically.",
      },
      {
        q: "Does Yesp have experience building AI voice agents?",
        a: "Yes. Yesp AI Labs has delivered AI voice agent systems as documented in our case studies. We have hands-on experience with the architecture, conversation design, telephony integration and CRM connectivity that production voice AI requires.",
      },
    ],
    related: ["ai-labs", "ai-agents", "ai-automation", "sales-automation"],
  },

  // ─── Document Intelligence ────────────────────────────────────────────────

  {
    slug: "document-intelligence",
    name: "Document Intelligence",
    title: "Document Intelligence — AI Document Processing & Automation",
    body: "AI-powered document reading, extraction, classification, routing and automation for enterprise document workflows.",
    intro:
      "We build document intelligence systems that read, classify, extract and route business documents automatically — invoices, contracts, medical records, purchase orders, applications and reports — eliminating manual data entry and processing delays.",
    outcomes: [
      "Documents read, classified and data extracted automatically",
      "Elimination of manual data entry from high-volume document flows",
      "Faster invoice, contract and application processing",
      "Automated routing and approval triggers based on document content",
    ],
    capabilities: [
      "Document classification and categorization",
      "Data extraction from structured and unstructured documents",
      "Invoice and purchase order automation",
      "Contract reading and key term extraction",
      "Medical document and clinical record intelligence",
      "OCR and handwriting recognition integration",
      "Document routing, approval and workflow automation",
      "Integration with ERP, CRM and document management systems",
    ],
    process: [
      "Catalog the target document types and the data fields to extract",
      "Build and train the extraction pipeline on sample document corpus",
      "Validate extraction accuracy across document variations and edge cases",
      "Integrate with downstream systems and automate the routing workflow",
    ],
    seo: {
      pageTitle: "Document Intelligence — AI Document Processing & Automation | Yesp Corporation",
      description:
        "Yesp Corporation builds document intelligence systems for AI-powered document reading, data extraction, classification and routing. Intelligent document processing company in India serving global enterprises.",
      keywords:
        "document intelligence, intelligent document processing, AI document automation, document AI solutions, AI document extraction, document processing automation, AI document processing, medical document intelligence, invoice automation, contract intelligence, document classification, OCR automation, AI data extraction India",
      canonical: "https://yespstudio.com/services/document-intelligence",
      h1: "Document Intelligence — AI Document Processing & Automation",
    },
    faq: [
      {
        q: "What is document intelligence?",
        a: "Document intelligence is the use of AI to read, understand and extract structured data from business documents — invoices, contracts, medical records, applications, purchase orders and reports. It replaces manual data entry with automated extraction, classification and routing.",
      },
      {
        q: "What types of documents can document intelligence process?",
        a: "Document intelligence can process invoices, purchase orders, contracts and agreements, medical records and clinical documents, insurance forms, loan applications, tax documents, shipping manifests, HR forms and any other document type with consistent structure or variable unstructured content.",
      },
      {
        q: "How accurate is AI document extraction?",
        a: "Accuracy depends on document structure and quality. For well-formatted, consistent documents (invoices, forms), extraction accuracy of 95–99% is achievable. For variable unstructured documents (clinical notes, contracts), accuracy is lower and we always design human review paths for low-confidence extractions.",
      },
      {
        q: "Can document intelligence integrate with our ERP?",
        a: "Yes. ERP and business system integration is a core part of document intelligence deployment. Extracted data flows directly into your ERP, CRM, accounting system or document management system — eliminating the manual data entry step entirely.",
      },
    ],
    related: ["ai-labs", "ai-agents", "generative-ai", "business-process-automation"],
  },

  // ─── ERP Development ──────────────────────────────────────────────────────

  {
    slug: "erp-development",
    name: "ERP Development",
    title: "Custom ERP Development Company — ERP Software Solutions",
    body: "Custom ERP development: purpose-built enterprise resource planning systems, ERP integration, ERP automation and ERP modernization.",
    intro:
      "We design and build custom ERP systems built around how your business actually runs — not generic software that forces you to adapt. And for businesses with existing ERP, we integrate, extend and automate to close the gaps.",
    outcomes: [
      "An ERP that matches your exact business processes without workarounds",
      "Real-time visibility across sales, inventory, purchasing and finance",
      "Integration between ERP and all connected operational systems",
      "Elimination of manual data transfer between business tools",
    ],
    capabilities: [
      "Custom ERP system design and development",
      "ERP module development (sales, inventory, purchasing, finance, HR)",
      "ERP API integration with CRM, ecommerce and logistics",
      "ERP database architecture and migration",
      "ERP modernization and legacy ERP replacement",
      "ERP customization for off-the-shelf platforms",
      "ERP reporting, dashboards and analytics layers",
      "Cloud ERP deployment and infrastructure",
    ],
    process: [
      "Map all business processes the ERP must support across departments",
      "Design the ERP module architecture, data model and integration points",
      "Build core modules first (sales + inventory or finance + purchasing)",
      "Integrate, test and migrate data before full operational cutover",
    ],
    seo: {
      pageTitle: "Custom ERP Development Company — ERP Software Solutions | Yesp Corporation",
      description:
        "Yesp Corporation is a custom ERP development company building purpose-built ERP systems, ERP integration services and ERP modernization for enterprises. ERP development company in India.",
      keywords:
        "ERP development company, custom ERP development, custom ERP software, ERP software development, ERP development services, ERP solutions company, ERP integration company, ERP integration services, ERP system integration, ERP automation, ERP modernization, ERP API integration, ERP database integration, custom ERP solutions, enterprise ERP development, ERP software company India",
      canonical: "https://yespstudio.com/services/erp-development",
      h1: "Custom ERP Development Company — ERP Software Solutions",
    },
    faq: [
      {
        q: "Why build a custom ERP instead of using SAP or Oracle?",
        a: "Off-the-shelf ERP systems like SAP and Oracle are built for the average large enterprise and require significant configuration, customization and licensing cost. Custom ERP is built to match your exact business processes — no unused modules, no forced workarounds, no per-user license fees — and can be integrated with the specific tools your business uses.",
      },
      {
        q: "How long does custom ERP development take?",
        a: "A focused custom ERP covering 2–3 core modules (e.g. sales + inventory, or purchasing + finance) takes 16–28 weeks. A full multi-department ERP is delivered in phases of 3–6 months each, starting with the highest-priority operational area.",
      },
      {
        q: "Can Yesp integrate with our existing ERP?",
        a: "Yes. ERP integration is a separate capability — we connect existing SAP, Oracle, Microsoft Dynamics, Tally or custom ERP systems to CRM, inventory, ecommerce, logistics and third-party tools using API and database integration approaches.",
      },
      {
        q: "Does Yesp build ERP for manufacturing businesses?",
        a: "Yes. Manufacturing ERP development is one of our core use cases — covering production planning, inventory control, purchase order management, supplier management, shop floor tracking and quality control modules.",
      },
    ],
    related: ["enterprise-software-development", "system-integration", "business-process-automation", "legacy-system-modernization"],
  },

  // ─── Sales Automation ─────────────────────────────────────────────────────

  {
    slug: "sales-automation",
    name: "Sales & Lead Automation",
    title: "Sales Automation & Lead Automation — AI Sales Systems",
    body: "AI-powered sales automation, lead automation, lead qualification systems and CRM automation for high-growth businesses.",
    intro:
      "We build the sales automation and lead management systems that eliminate manual follow-up, automate lead qualification and connect new prospects to the right sales path — instantly, at scale.",
    outcomes: [
      "Automated lead capture, qualification and CRM routing",
      "Instant follow-up for every new lead without manual action",
      "Sales pipeline visibility with automated status updates",
      "Higher lead conversion through faster response and consistent follow-up",
    ],
    capabilities: [
      "AI lead qualification agent development",
      "Automated lead capture and CRM routing",
      "Sales email and follow-up automation",
      "AI outbound calling for lead qualification",
      "Sales pipeline and deal stage automation",
      "Lead scoring and priority routing",
      "CRM workflow automation (HubSpot, Salesforce, custom CRM)",
      "Sales reporting and conversion analytics",
    ],
    process: [
      "Map the current lead flow from capture to close and identify manual gaps",
      "Design the automation logic: qualification criteria, routing rules, follow-up sequences",
      "Build the automation connected to your CRM and communication tools",
      "Deploy, monitor conversion rates and optimize qualification accuracy",
    ],
    seo: {
      pageTitle: "Sales Automation & Lead Automation — AI Sales Systems | Yesp Corporation",
      description:
        "Yesp Corporation builds sales automation, lead automation and AI lead qualification systems for businesses. Automated lead generation, CRM automation, AI sales agents. Sales automation company in India.",
      keywords:
        "sales automation, sales automation company, sales automation software, AI sales automation, AI sales software, lead automation, lead generation automation, lead management automation, lead qualification automation, automated lead generation, automated lead qualification, automated follow up, sales workflow automation, CRM automation, CRM workflow automation, revenue automation, AI RevOps, sales process automation, sales automation India",
      canonical: "https://yespstudio.com/services/sales-automation",
      h1: "Sales Automation & Lead Automation — AI Sales Systems",
    },
    faq: [
      {
        q: "What is sales automation?",
        a: "Sales automation uses software and AI to handle the repetitive, manual parts of the sales process — capturing leads, qualifying them, routing to the right sales rep, sending follow-up emails and updating CRM records — without manual effort at each step.",
      },
      {
        q: "How does AI lead qualification work?",
        a: "An AI lead qualification system evaluates new leads against defined criteria — company size, industry, budget signals, behavior and query content — and assigns a qualification score. High-scoring leads are routed to sales immediately; lower-scoring leads go to nurture sequences. This replaces the manual qualification call for every lead.",
      },
      {
        q: "What is the ROI of sales automation?",
        a: "Sales automation typically improves lead response time from hours to seconds, increases follow-up consistency from ~40% to 100% of leads, and reduces manual sales administration by 60–80%. The combined effect is higher lead conversion with the same or smaller sales team.",
      },
      {
        q: "Can Yesp automate sales for our specific CRM?",
        a: "Yes. We build automation on top of HubSpot, Salesforce, custom CRM systems and Yesp-built CRM platforms. If you have no CRM, we can build one as part of the sales automation system.",
      },
      {
        q: "Does Yesp have a case study for sales automation?",
        a: "Yes. Yesp has delivered lead generation and sales automation systems as documented in our case studies — covering automated lead capture, AI qualification, CRM routing and follow-up automation.",
      },
    ],
    related: ["ai-agents", "ai-voice-agents", "crm-development", "ai-automation", "business-process-automation"],
  },

  // ─── CRM Development ─────────────────────────────────────────────────────

  {
    slug: "crm-development",
    name: "CRM Development",
    title: "Custom CRM Development Company — CRM Software Solutions",
    body: "Custom CRM software development: sales pipeline management, customer data management, CRM automation and CRM integration.",
    intro:
      "We design and build custom CRM systems built around your specific sales process, customer data model and business rules — not a generic platform that charges per seat and requires you to work around its limitations.",
    outcomes: [
      "A CRM built to match your exact sales workflow and data model",
      "Full pipeline visibility from lead to closed deal",
      "Automated follow-up, reminders and sales activity logging",
      "Integration with your communication, billing and operational tools",
    ],
    capabilities: [
      "Custom CRM system design and development",
      "Sales pipeline and deal stage management",
      "Contact and company management with activity tracking",
      "Automated sales workflow and follow-up sequences",
      "CRM reporting, dashboards and sales analytics",
      "Email, WhatsApp and communication tool integration",
      "CRM API integration with ERP, billing and support tools",
      "AI-assisted lead scoring and next-action recommendations",
    ],
    process: [
      "Map the sales process, pipeline stages and data fields the CRM must handle",
      "Design the CRM data model, user roles and workflow automation",
      "Build the CRM with pipeline, contacts, automation and reporting",
      "Integrate with existing tools and migrate historical sales data",
    ],
    seo: {
      pageTitle: "Custom CRM Development Company — CRM Software Solutions | Yesp Corporation",
      description:
        "Yesp Corporation builds custom CRM software for sales pipeline management, customer data and sales automation. CRM development company in India building tailored CRM systems for global businesses.",
      keywords:
        "custom CRM development, CRM development company, CRM software development, CRM software company, custom CRM software, CRM development services, CRM integration, CRM integration company, CRM automation, AI CRM, AI CRM solutions, sales CRM development, enterprise CRM development, CRM customization, CRM automation services, bespoke CRM development India",
      canonical: "https://yespstudio.com/services/crm-development",
      h1: "Custom CRM Development Company — CRM Software Solutions",
    },
    faq: [
      {
        q: "Why build a custom CRM instead of using Salesforce or HubSpot?",
        a: "Salesforce and HubSpot are built for the average sales team. A custom CRM is built around your exact sales process, data model and team structure — with no per-seat fees, no unused features and no forced workarounds. For businesses with unique sales flows, a custom CRM is often faster to use and cheaper to operate at scale.",
      },
      {
        q: "How long does custom CRM development take?",
        a: "A focused custom CRM with pipeline management, contact records, basic automation and reporting takes 8–14 weeks. A more complex CRM with advanced automation, AI-assisted features and multi-system integration takes 16–24 weeks.",
      },
      {
        q: "Can Yesp integrate with our existing CRM?",
        a: "Yes. If you already have a CRM (Salesforce, HubSpot, Zoho, Pipedrive or custom), we can extend it with automation, integrations and custom modules rather than replacing it. We assess whether to build new or extend based on the gap analysis.",
      },
      {
        q: "Can the custom CRM include AI features?",
        a: "Yes. We build AI into custom CRM systems — lead scoring, next-action recommendations, automated email drafting, call transcript summarization and anomaly detection in pipeline health. AI CRM features are implemented where they create measurable sales impact.",
      },
    ],
    related: ["sales-automation", "enterprise-software-development", "ai-agents", "system-integration"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const coreServices = services.filter((s) =>
  ["digital", "ai-labs", "growth"].includes(s.slug)
);

export const seoServices = services.filter((s) =>
  !["digital", "ai-labs", "growth"].includes(s.slug)
);
