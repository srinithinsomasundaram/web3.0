export type IndustrySlug =
  | "technology"
  | "healthcare"
  | "manufacturing"
  | "logistics"
  | "education"
  | "real-estate";

export type Industry = {
  slug: IndustrySlug;
  name: string;
  subtitle: string;
  tagline: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  capabilities: string[];
  highlights: string[];
  seo: {
    pageTitle: string;
    description: string;
    keywords: string;
    canonical: string;
    h1: string;
  };
  faq: { q: string; a: string }[];
  relatedServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "technology",
    name: "Technology & Software Platforms",
    subtitle: "Tech & SaaS",
    tagline: "Enterprise Software · SaaS Platforms · API Infrastructure · Multi-Tenant Architecture · AI Integration",
    intro:
      "Yesp Corporation builds the core software backbone for technology companies and SaaS platforms — multi-tenant architectures, API infrastructure, data pipelines and AI-integrated product systems that scale with your growth.",
    challenges: [
      "Scaling a SaaS product beyond the initial MVP architecture",
      "Managing data across multiple tenants securely and efficiently",
      "Integrating AI into existing product workflows",
      "Eliminating performance bottlenecks as user volume grows",
      "Building internal tools that keep engineering teams productive",
    ],
    solutions: [
      "Custom multi-tenant SaaS platform architecture and development",
      "API mesh design connecting product, data and third-party services",
      "AI agent and LLM integration into product workflows",
      "Performance-optimized database architecture and caching layers",
      "Internal developer tooling, admin portals and operations dashboards",
    ],
    capabilities: [
      "Multi-tenant SaaS architecture",
      "Zero-latency API development",
      "AI and LLM product integration",
      "Real-time data pipeline infrastructure",
      "Developer tooling and internal portals",
      "Cloud infrastructure and DevOps",
    ],
    highlights: [
      "Custom Multi-Tenant Backbones",
      "Zero-Latency API Mesh",
      "AI Product Integration",
      "High-Velocity Telemetry",
    ],
    seo: {
      pageTitle: "Enterprise Software & AI for Technology & SaaS Companies | Yesp Corporation",
      description:
        "Yesp Corporation builds enterprise software, SaaS platforms, API infrastructure and AI systems for technology and SaaS companies. Custom software development for tech companies in India and globally.",
      keywords:
        "enterprise software for technology companies, SaaS development company, software development for SaaS, AI integration for software products, tech company software development India",
      canonical: "https://yespstudio.com/industries/technology",
      h1: "Enterprise Software & AI for Technology & SaaS Companies",
    },
    faq: [
      {
        q: "What software does Yesp build for technology companies?",
        a: "For technology and SaaS companies, Yesp builds multi-tenant platform architecture, API infrastructure, internal developer tooling, admin portals, AI-integrated product features, data pipelines and operational systems that scale with product growth.",
      },
      {
        q: "Can Yesp help scale our SaaS platform beyond MVP?",
        a: "Yes. Post-MVP scaling is one of our core competencies for technology companies — re-architecting for multi-tenancy, improving database performance, building API infrastructure and integrating AI into existing product workflows.",
      },
      {
        q: "Do you integrate AI into existing software products?",
        a: "Yes. We integrate large language models, AI agents, document intelligence and conversational AI into existing software product architectures using API-based integrations and custom AI pipeline design.",
      },
    ],
    relatedServices: ["enterprise-software-development", "custom-saas-development", "ai-development", "system-integration"],
  },

  {
    slug: "healthcare",
    name: "Healthcare & Medical Systems",
    subtitle: "Medical & HealthTech",
    tagline: "Patient Workflow Automation · EMR/EHR Integration · Medical Document Intelligence · HIPAA-Compliant Systems",
    intro:
      "Yesp Corporation builds healthcare software, patient workflow automation and medical document intelligence systems for hospitals, health networks and HealthTech companies — with a focus on data security, regulatory awareness and operational precision.",
    challenges: [
      "Managing patient data across fragmented EMR/EHR systems",
      "High-volume document processing for medical records and reports",
      "Manual patient workflow bottlenecks across departments",
      "Integration between clinical, billing and administrative systems",
      "Building HealthTech platforms that scale with patient volume",
    ],
    solutions: [
      "EMR and EHR system integration and data synchronization",
      "Patient workflow automation and department coordination systems",
      "Medical document intelligence for processing clinical records",
      "Healthcare operational dashboards for administrators and clinicians",
      "Custom HealthTech platform and patient management software development",
    ],
    capabilities: [
      "EMR / EHR integration and sync",
      "Patient workflow automation",
      "Medical document intelligence",
      "Healthcare data dashboards",
      "Clinical and billing system integration",
      "HIPAA-aware data architecture",
    ],
    highlights: [
      "Patient Workflow Automation",
      "EMR / EHR Sync Engine",
      "Medical Document Intelligence",
      "Clinical Data Integration",
    ],
    seo: {
      pageTitle: "Healthcare Software Development & AI — Medical Technology | Yesp Corporation",
      description:
        "Yesp Corporation builds healthcare software, patient workflow automation, EMR/EHR integration and medical document intelligence for hospitals and HealthTech companies. Healthcare software company in India.",
      keywords:
        "healthcare software development, medical software company, HealthTech development, EMR EHR integration, patient workflow automation, healthcare AI, medical document intelligence India",
      canonical: "https://yespstudio.com/industries/healthcare",
      h1: "Healthcare Software Development & AI Solutions",
    },
    faq: [
      {
        q: "What healthcare software does Yesp Corporation build?",
        a: "Yesp builds patient management systems, EMR/EHR integration layers, medical document intelligence for processing clinical records, healthcare operational dashboards, appointment and workflow automation, and custom HealthTech platforms for hospitals and health networks.",
      },
      {
        q: "Can Yesp integrate with existing EMR or EHR systems?",
        a: "Yes. EHR and EMR integration is a core capability. We build integration layers that synchronize patient data, clinical records and administrative information across hospital information systems using API and database integration approaches.",
      },
      {
        q: "Does Yesp build HIPAA-aware systems?",
        a: "Yes. We design data architecture and access control with HIPAA awareness as a requirement — including encryption, audit logging, role-based data access and secure data transfer between healthcare systems.",
      },
    ],
    relatedServices: ["ai-automation", "system-integration", "enterprise-software-development", "business-process-automation"],
  },

  {
    slug: "manufacturing",
    name: "Industrial Manufacturing & Logistics",
    subtitle: "Manufacturing & Supply Chain",
    tagline: "ERP Integration · Shop Floor Automation · Inventory Control · Production Telemetry · Supply Chain Visibility",
    intro:
      "Yesp Corporation builds manufacturing software, ERP integrations, production monitoring systems and supply chain automation for industrial manufacturers — engineered for the real-time precision that manufacturing operations demand.",
    challenges: [
      "ERP data that doesn't reflect real-time shop floor status",
      "Manual inventory tracking leading to stockouts and overstock",
      "Disconnected production, quality and logistics data",
      "Lack of real-time visibility into production line performance",
      "Legacy manufacturing software that can't integrate with modern tools",
    ],
    solutions: [
      "Real-time ERP synchronization with shop floor operations",
      "Automated inventory tracking and replenishment systems",
      "Production monitoring dashboards with telemetry integration",
      "Supply chain visibility and vendor management systems",
      "Quality control workflow automation and reporting",
    ],
    capabilities: [
      "Real-time ERP sync (SAP, Oracle, custom ERP)",
      "Automated inventory control systems",
      "Shop floor production monitoring",
      "Supply chain and vendor management software",
      "Quality control automation",
      "Manufacturing data dashboards",
    ],
    highlights: [
      "Real-Time ERP Sync",
      "Shop Floor Telemetry",
      "Automated Inventory Control",
      "Supply Chain Visibility",
    ],
    seo: {
      pageTitle: "Manufacturing Software Development — Industrial Automation & AI | Yesp Corporation",
      description:
        "Yesp Corporation builds manufacturing software, ERP integrations, production monitoring and supply chain automation for industrial manufacturers. Manufacturing software development company in India.",
      keywords:
        "manufacturing software development, manufacturing automation, ERP integration manufacturing, supply chain automation, production monitoring software, industrial software development India",
      canonical: "https://yespstudio.com/industries/manufacturing",
      h1: "Manufacturing Software & Industrial Automation",
    },
    faq: [
      {
        q: "What manufacturing software does Yesp build?",
        a: "Yesp builds ERP integration layers for manufacturing, real-time production monitoring dashboards, automated inventory tracking and replenishment systems, supply chain visibility platforms, quality control automation and shop floor data collection systems.",
      },
      {
        q: "Can Yesp integrate with our existing manufacturing ERP?",
        a: "Yes. ERP integration for manufacturing is a core capability. We integrate with SAP, Oracle, Microsoft Dynamics, Tally-based systems and custom ERP platforms — connecting shop floor operations, inventory, purchasing and production data in real time.",
      },
      {
        q: "Does Yesp build AI for manufacturing?",
        a: "Yes. We apply AI to manufacturing use cases including predictive inventory management, quality inspection automation, production anomaly detection, document processing for supplier invoices and automated reporting across production lines.",
      },
    ],
    relatedServices: ["system-integration", "business-process-automation", "ai-automation", "enterprise-software-development"],
  },

  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    subtitle: "Logistics & Distribution",
    tagline: "Fleet Management · Shipment Tracking · Warehouse Automation · Last-Mile Operations · Supply Chain Visibility",
    intro:
      "Yesp Corporation builds logistics software, supply chain visibility platforms and warehouse automation systems for freight, distribution and last-mile logistics businesses operating at scale.",
    challenges: [
      "Manual tracking of shipments, fleets and warehouse inventory",
      "Fragmented data across carrier, WMS and ERP systems",
      "Last-mile delivery coordination and customer communication",
      "Lack of real-time supply chain visibility for operations teams",
      "Document-heavy operations: bills of lading, customs, invoices",
    ],
    solutions: [
      "Real-time shipment and fleet tracking dashboards",
      "Warehouse management system (WMS) development and integration",
      "Automated document processing for logistics documentation",
      "Supply chain visibility platform connecting carriers and customers",
      "Last-mile delivery coordination and notification automation",
    ],
    capabilities: [
      "Shipment and fleet tracking systems",
      "Warehouse management software (WMS)",
      "Logistics document automation",
      "Carrier and ERP integration",
      "Customer delivery notification systems",
      "Supply chain analytics dashboards",
    ],
    highlights: [
      "Real-Time Shipment Tracking",
      "Warehouse Automation",
      "Logistics Document AI",
      "Carrier Integration",
    ],
    seo: {
      pageTitle: "Logistics Software Development — Supply Chain Automation | Yesp Corporation",
      description:
        "Yesp Corporation builds logistics software, supply chain visibility systems, warehouse management platforms and freight automation for logistics businesses. Logistics software development company in India.",
      keywords:
        "logistics software development, supply chain software, warehouse management system development, freight software, logistics automation, supply chain visibility India",
      canonical: "https://yespstudio.com/industries/logistics",
      h1: "Logistics Software & Supply Chain Automation",
    },
    faq: [
      {
        q: "What logistics software does Yesp build?",
        a: "Yesp builds shipment tracking dashboards, warehouse management systems (WMS), automated logistics document processing, carrier integration layers, customer delivery notification systems and supply chain visibility platforms for freight and distribution businesses.",
      },
      {
        q: "Can Yesp integrate with our existing logistics systems?",
        a: "Yes. We integrate with logistics ERP systems, carrier APIs, WMS platforms and customs documentation systems — building a unified data layer across all logistics operations.",
      },
    ],
    relatedServices: ["system-integration", "business-process-automation", "enterprise-software-development"],
  },

  {
    slug: "education",
    name: "Education & EdTech",
    subtitle: "EdTech & Learning",
    tagline: "LMS Development · Student Management · Learning Automation · EdTech Platforms · Institutional Software",
    intro:
      "Yesp Corporation builds EdTech platforms, learning management systems (LMS), student management software and institutional automation for education businesses, universities and corporate learning programs.",
    challenges: [
      "Managing student lifecycle from enrollment to certification",
      "Building scalable learning content delivery systems",
      "Automating administrative workflows in educational institutions",
      "Integrating assessment, progress tracking and reporting",
      "Creating engaging digital learning experiences at scale",
    ],
    solutions: [
      "Custom learning management system (LMS) development",
      "Student information system (SIS) design and implementation",
      "Automated enrollment, assessment and certification workflows",
      "EdTech platform development with video, quizzes and progress tracking",
      "Institutional dashboards for administrators and faculty",
    ],
    capabilities: [
      "Learning Management System (LMS) development",
      "Student management software",
      "Assessment and certification automation",
      "EdTech platform and content delivery",
      "Faculty and admin portal development",
      "Integration with payment and communication systems",
    ],
    highlights: [
      "Custom LMS Development",
      "Student Lifecycle Automation",
      "EdTech Platform Engineering",
      "Institutional Dashboards",
    ],
    seo: {
      pageTitle: "EdTech Software Development — Education Technology Platforms | Yesp Corporation",
      description:
        "Yesp Corporation builds EdTech software, learning management systems (LMS), student management platforms and education automation for schools, universities and corporate training. EdTech development company in India.",
      keywords:
        "EdTech software development, LMS development company, education software development, student management system, learning platform development, EdTech company India",
      canonical: "https://yespstudio.com/industries/education",
      h1: "EdTech Software & Education Platform Development",
    },
    faq: [
      {
        q: "What education software does Yesp build?",
        a: "Yesp builds custom learning management systems (LMS), student information systems, automated enrollment and certification workflows, video-based EdTech platforms, assessment tools and institutional dashboards for education businesses and institutions.",
      },
      {
        q: "Can Yesp build a custom LMS?",
        a: "Yes. Custom LMS development is a service we provide for educational institutions, corporate training programs and EdTech businesses that need a learning platform built around their specific curriculum, user roles and assessment model.",
      },
    ],
    relatedServices: ["custom-saas-development", "enterprise-software-development", "business-process-automation"],
  },

  {
    slug: "real-estate",
    name: "Real Estate & PropTech",
    subtitle: "Real Estate & Property",
    tagline: "Property Management Software · CRM for Real Estate · PropTech Platforms · Lease Automation · Real Estate ERP",
    intro:
      "Yesp Corporation builds real estate software, property management systems and PropTech platforms for developers, agencies, property management companies and commercial real estate businesses.",
    challenges: [
      "Managing property listings, leases and tenant data across disconnected tools",
      "Manual lease and payment tracking leading to revenue leakage",
      "Lack of real-time portfolio visibility for property managers",
      "Disconnected sales pipeline and CRM for real estate agents",
      "Document-heavy compliance and contract management workflows",
    ],
    solutions: [
      "Custom property management software (PMS) development",
      "CRM and sales pipeline system for real estate agencies",
      "Automated lease management, renewal reminders and payment tracking",
      "Real estate portfolio dashboard for developers and investors",
      "PropTech platform development for listing, search and transactions",
    ],
    capabilities: [
      "Property management software (PMS)",
      "Real estate CRM development",
      "Lease and payment automation",
      "Property portfolio dashboards",
      "PropTech marketplace development",
      "Document and contract management",
    ],
    highlights: [
      "Property Management Software",
      "Lease Automation",
      "Real Estate CRM",
      "Portfolio Dashboards",
    ],
    seo: {
      pageTitle: "Real Estate Software Development — PropTech Platforms | Yesp Corporation",
      description:
        "Yesp Corporation builds real estate software, property management systems, PropTech platforms and CRM for real estate businesses. Real estate software development company in India.",
      keywords:
        "real estate software development, property management software, PropTech development, real estate CRM, lease management software, real estate technology India",
      canonical: "https://yespstudio.com/industries/real-estate",
      h1: "Real Estate Software & PropTech Development",
    },
    faq: [
      {
        q: "What real estate software does Yesp build?",
        a: "Yesp builds property management systems, real estate CRM and sales pipeline tools, lease automation and payment tracking, portfolio dashboards for developers and investors, and PropTech marketplace platforms for listing, search and transaction management.",
      },
      {
        q: "Can Yesp build a property management system?",
        a: "Yes. Custom property management software (PMS) development is a service we provide for property management companies, commercial real estate businesses and residential portfolio managers.",
      },
    ],
    relatedServices: ["enterprise-software-development", "custom-saas-development", "business-process-automation"],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
