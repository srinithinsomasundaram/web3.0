export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  category: string;
  featured: boolean;
  challenge: string;
  solution: string[];
  builtLabel: string;
  built: string[];
  approach?: string;
  value: string;
  capability: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-recruitment-platform",
    index: "01",
    title: "AI-Powered Recruitment Platform",
    category: "Enterprise Software · AI",
    featured: true,
    challenge:
      "Traditional recruitment workflows often involve multiple disconnected activities — collecting applications, managing candidates, communicating with applicants, coordinating hiring teams, and tracking recruitment progress. The client needed a centralized technology solution to make the recruitment process more structured and easier to manage.",
    solution: [
      "Yesp designed and developed HireFlow, an AI-enabled recruitment platform built to bring key hiring workflows into a single digital system.",
      "The platform was designed around the recruitment lifecycle, helping teams manage candidates and hiring activities through a centralized workflow.",
    ],
    builtLabel: "What We Built",
    built: [
      "Recruitment management platform",
      "Candidate management",
      "Hiring workflow management",
      "Digital recruitment processes",
      "AI-assisted recruitment capabilities",
      "Recruiter-facing interfaces",
      "Structured candidate workflows",
      "Communication capabilities",
      "Dashboard and management functionality",
    ],
    approach:
      "Yesp combined modern web application development with AI capabilities and cloud-based infrastructure to create a scalable recruitment platform.",
    value:
      "The project demonstrates Yesp's ability to take a complex business workflow and turn it into a purpose-built digital product rather than forcing the business to work around generic software.",
    capability: "Custom Software · AI · SaaS · Workflow Design · Product Development",
  },
  {
    slug: "automated-lead-generation-system",
    index: "02",
    title: "Automated Lead Generation System",
    category: "Automation · Revenue Workflows",
    featured: true,
    challenge:
      "The client needed a more structured approach to generating and managing business leads. Traditional lead-generation activities can create fragmented data, inconsistent follow-up, and unnecessary manual work.",
    solution: [
      "Yesp designed and implemented a lead generation system focused on capturing prospects, organizing lead information, and creating a more structured path from initial interest to sales follow-up.",
    ],
    builtLabel: "What We Built",
    built: [
      "Lead capture workflows",
      "Lead management",
      "Prospect organization",
      "Automated follow-up workflows",
      "Lead qualification processes",
      "Sales workflow automation",
      "Centralized lead information",
    ],
    value:
      "The system created a more structured foundation for managing the lead lifecycle and reducing dependency on disconnected manual processes.",
    capability:
      "Lead Generation · Workflow Automation · CRM Processes · Sales Automation · Custom Systems",
  },
  {
    slug: "ai-voice-agent",
    index: "03",
    title: "AI Voice Agent for Business Operations",
    category: "Applied AI · Customer Operations",
    featured: true,
    challenge:
      "Businesses frequently spend significant time handling repetitive customer and prospect conversations. This creates pressure on teams and can make it difficult to respond consistently and quickly.",
    solution: [
      "Yesp developed an AI-powered voice agent designed to handle business conversations through an automated voice interface.",
      "The solution combines conversational AI with workflow logic to create a more intelligent interaction layer between the business and its customers or prospects.",
    ],
    builtLabel: "What We Built",
    built: [
      "AI voice agent",
      "Conversational workflows",
      "Automated call handling",
      "AI-driven responses",
      "Lead interaction workflows",
      "Business-specific conversation logic",
      "Integration-ready architecture",
    ],
    value:
      "The solution demonstrates how AI can be incorporated into customer-facing operations to handle appropriate conversational workflows while allowing human teams to focus on interactions that require human judgment.",
    capability: "Voice AI · Conversational AI · AI Agents · Automation · Customer Operations",
  },
  {
    slug: "seo-geo-growth-system",
    index: "04",
    title: "SEO & GEO Growth System",
    category: "Organic Growth · Search Visibility",
    featured: false,
    challenge:
      "The client needed stronger organic visibility and a structured search strategy that could improve how the business is discovered through traditional search engines as well as emerging AI-driven search experiences.",
    solution: [
      "Yesp developed and executed an SEO + GEO strategy focused on improving the client's digital discoverability through structured content, technical optimization, location-focused search opportunities, and content designed for modern search environments.",
    ],
    builtLabel: "What We Worked On",
    built: [
      "Technical SEO",
      "On-page SEO",
      "Keyword strategy",
      "Location-based SEO",
      "Search-focused content",
      "Website optimization",
      "GEO strategy",
      "Search visibility improvements",
      "Content structure for AI-driven discovery",
    ],
    value:
      "The engagement established a structured organic-growth foundation designed to improve the client's visibility across traditional search and emerging generative search experiences.",
    capability: "SEO · Local SEO · GEO · Content Strategy · Technical SEO · Organic Growth",
  },
];