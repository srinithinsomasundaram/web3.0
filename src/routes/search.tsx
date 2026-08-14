import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  Search,
  X,
  Building2,
  Layers,
  BookOpen,
  Newspaper,
  ArrowRight,
  Sparkles,
  Globe,
  Compass,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";

export interface SearchPageItem {
  id: string;
  title: string;
  category: "Pages" | "Services" | "Articles" | "Press";
  path: string;
  description: string;
  keywords: string;
}

const SEARCH_DATABASE: SearchPageItem[] = [
  // Core Pages
  {
    id: "yesp-one",
    title: "Yesp One — Built around your business.",
    category: "Pages",
    path: "https://one.yespstudio.com/",
    description: "Flexible business technology service: understand → build → manage → improve.",
    keywords: "yesp one core erp custom software business core system inventory sales finance automation",
  },
  {
    id: "home",
    title: "Homepage (Executive Portal)",
    category: "Pages",
    path: "/",
    description: "Main corporate portal, 3 core industries (Tech, Medical, Manufacturing), active pipeline, and methodology.",
    keywords: "home yesp corporation executive portal make better happen solutions process industries tech medical manufacturing",
  },
  {
    id: "tech-expertise",
    title: "Technical Expertise & Architecture Stack",
    category: "Pages",
    path: "/tech-expertise",
    description: "Core technical stack across Backend, Autonomous AI, Cloud Infra, Frontend, and Real-Time Data Sync.",
    keywords: "tech expertise stack architecture node typescript python go postgresql react aws docker AI microservices kafka redis",
  },
  {
    id: "about",
    title: "About Yesp Corporation",
    category: "Pages",
    path: "/about",
    description: "Corporate slogan 'Make Better Happen.', brand story, principles, and regional tech lineage across Erode, Coimbatore, and Bengaluru.",
    keywords: "about brand principles story lineage erode coimbatore bengaluru global team make better happen",
  },
  {
    id: "founder",
    title: "Founder Profile (Srinithin Somasundaram)",
    category: "Pages",
    path: "/founder",
    description: "Founder biography, leadership principles, vision for applied AI agents, and custom enterprise software backbones.",
    keywords: "founder srinithin somasundaram profile ceo biography vision leadership CEO entrepreneur",
  },
  {
    id: "case-studies",
    title: "Selected Client Work & Proof",
    category: "Pages",
    path: "/case-studies",
    description: "Enterprise case studies, benchmark performance stats, zero-latency system proof, and client transformation impact.",
    keywords: "client work case studies portfolio proof metrics enterprise success stories benchmarks ROI",
  },
  {
    id: "careers",
    title: "Careers (100% Remote)",
    category: "Pages",
    path: "/careers",
    description: "Global engineering and AI career opportunities, candidate application portal, and remote team culture.",
    keywords: "careers jobs remote hiring software engineer ai engineer apply culture jobs full time India",
  },
  {
    id: "contact",
    title: "Contact & Discovery Call",
    category: "Pages",
    path: "/contact",
    description: "Direct executive contact form, office hub locations, email contacts, and consultation call booking.",
    keywords: "contact talk to us reach out booking schedule call email office erode coimbatore bengaluru inquiry",
  },
  {
    id: "sitelinks",
    title: "Sitelinks Directory & HTML Sitemap",
    category: "Pages",
    path: "/sitelinks",
    description: "Complete navigation directory indexing all site pages, XML sitemap link, and technical crawler directives.",
    keywords: "sitelinks sitemap directory navigation index list all pages crawler technical SEO XML",
  },
  {
    id: "cookies",
    title: "Cookie & Privacy Policy",
    category: "Pages",
    path: "/cookies",
    description: "Enterprise data protection policy, cookie directives, consent preferences, and privacy standards.",
    keywords: "cookies privacy policy legal data protection terms consent GDPR compliance",
  },

  // Services
  {
    id: "service-digital",
    title: "Yesp Digital (Enterprise Software)",
    category: "Services",
    path: "/services/digital",
    description: "Custom core software backbones, business portals, ERP integrations, and zero-latency API architectures.",
    keywords: "services digital custom enterprise software backend erp portals api integration core backbone SaaS replacement",
  },
  {
    id: "service-ai-labs",
    title: "Yesp AI Labs (Applied AI Agents)",
    category: "Services",
    path: "/services/ai-labs",
    description: "Autonomous AI agents, document intelligence engines, voice AI assistants, and workflow automation.",
    keywords: "services ai labs artificial intelligence autonomous agents workflow automation document intelligence voice ai LLM RAG",
  },
  {
    id: "service-growth",
    title: "Yesp Growth (Lead Systems & GEO)",
    category: "Services",
    path: "/services/growth",
    description: "High-conversion web platforms, search engine optimization (SEO), and generative engine optimization (GEO).",
    keywords: "services growth lead engine conversion geo generative engine optimization search seo web design performance",
  },

  // Executive Articles
  {
    id: "article-index",
    title: "Executive Articles Index",
    category: "Articles",
    path: "/articles",
    description: "Full directory of technology essays, architectural blueprints, and engineering leadership articles.",
    keywords: "articles insights essays directory research engineering framework software architecture leadership",
  },
  {
    id: "article-global-delivery",
    title: "Yesp Corp Global: Engineering & AI Delivery",
    category: "Articles",
    path: "/articles/yesp-corp-global-engineering-and-ai-delivery",
    description: "How Yesp Corp Global delivers enterprise software and applied AI systems from India to international clients.",
    keywords: "article yesp corp global delivery model erode coimbatore bengaluru international clients software scale",
  },
  {
    id: "article-framework",
    title: "The 'Make Better Happen' Engineering Framework",
    category: "Articles",
    path: "/articles/the-make-better-happen-engineering-framework",
    description: "Operational engineering standard for building zero-complexity core software backbones.",
    keywords: "article framework engineering standard make better happen simplicity performance reliability quality",
  },
  {
    id: "article-data-silos",
    title: "Eliminating Data Silos with Zero-Latency ERP",
    category: "Articles",
    path: "/articles/eliminating-data-silos-with-zero-latency-integrations",
    description: "Architectural blueprint for real-time cross-system synchronization and eliminating fragmented software silos.",
    keywords: "article data silos zero latency erp database synchronization integration event streaming CDC Kafka",
  },
  {
    id: "article-tech-lineage",
    title: "The Erode – Coimbatore – Bengaluru Lineage",
    category: "Articles",
    path: "/articles/eroded-coimbatore-bengaluru-tech-lineage",
    description: "How Erode discipline, Coimbatore manufacturing grit, and Bengaluru tech scale power Yesp Corporation.",
    keywords: "article tech lineage erode coimbatore bengaluru manufacturing engineering software scale India tech hubs",
  },
  {
    id: "article-practical-ai",
    title: "Deploying Practical AI Agents in Enterprise Workflows",
    category: "Articles",
    path: "/articles/practical-ai-agents-in-enterprise-workflows",
    description: "Moving past hype to deploy ROI-driven autonomous AI agents in real enterprise operations.",
    keywords: "article practical ai agents enterprise workflows automation roi llm integrations production AI",
  },
  {
    id: "article-custom-vs-saas",
    title: "Custom Software Backbones vs SaaS Bloat",
    category: "Articles",
    path: "/articles/building-custom-enterprise-software-vs-saas",
    description: "Why scaling enterprises are replacing fragmented SaaS subscriptions with owned custom backbones.",
    keywords: "article custom software vs saas bloat cost reduction enterprise tech architecture ownership",
  },

  // Press Center
  {
    id: "press-index",
    title: "Official Press Center Index",
    category: "Press",
    path: "/press",
    description: "Corporate announcements, product launches, media assets, and executive statements.",
    keywords: "press center newsroom media releases corporate announcements news statements PR media kit",
  },
  {
    id: "press-global-expansion",
    title: "Yesp Corp Global Expansion & AI Infrastructure",
    category: "Press",
    path: "/press/yesp-corp-global-expansion-and-ai-infrastructure",
    description: "Official press release announcing the international expansion of Yesp Corp autonomous AI & software operations.",
    keywords: "press global expansion ai infrastructure autonomous agents enterprise software announcement global operations",
  },
  {
    id: "press-keynote",
    title: "Srinithin Somasundaram Keynote on Future of AI",
    category: "Press",
    path: "/press/srinithin-somasundaram-keynote-future-of-ai",
    description: "Executive keynote address on practical AI agent deployment and core software engineering.",
    keywords: "press keynote srinithin somasundaram future of ai address presentation speech technology trends",
  },
  {
    id: "press-make-better-standard",
    title: "'Make Better Happen' Operational Initiative",
    category: "Press",
    path: "/press/make-better-happen-initiative",
    description: "Corporate announcement of zero-complexity integration standards across enterprise clients.",
    keywords: "press make better happen initiative operational standard announcement corporate strategy release",
  },
  {
    id: "press-bengaluru-hub",
    title: "Global Expansion in Bengaluru Tech Corridor",
    category: "Press",
    path: "/press/global-expansion-bengaluru",
    description: "Strategic expansion connecting Erode and Coimbatore engineering hubs with Bengaluru international platform.",
    keywords: "press bengaluru expansion tech corridor hub office software growth tech hub expansion",
  },
  {
    id: "press-ai-launch",
    title: "Autonomous Enterprise AI Platform Release",
    category: "Press",
    path: "/press/ai-automation-launch",
    description: "Official product launch of Yesp AI Labs autonomous agent engine for enterprise operations.",
    keywords: "press ai automation launch product release engine agent platform autonomous launch release",
  },
];

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const categories = ["All", "Pages", "Services", "Articles", "Press"];

  const filteredItems = SEARCH_DATABASE.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    if (!query.trim()) return matchesCategory;

    const q = query.toLowerCase().trim();
    const matchesQuery =
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);

    return matchesCategory && matchesQuery;
  });

  const handleQueryChange = (val: string) => {
    setQuery(val);
    if (val) {
      setSearchParams({ q: val }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Services":
        return Layers;
      case "Articles":
        return BookOpen;
      case "Press":
        return Newspaper;
      case "Pages":
      default:
        return Building2;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      <main className="overflow-x-hidden">
        {/* Clean Hero & Search Control */}
        <section className="border-b border-border/60 bg-gradient-to-b from-background via-card/50 to-background py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-sm">
                <Search className="h-3.5 w-3.5 text-primary" /> Corporate Directory & Capabilities Index
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl text-foreground">
                Executive <span className="text-gradient-brand">Directory Search.</span>
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Explore Yesp Corporation's enterprise capabilities, applied AI frameworks, executive articles, and official news announcements.
              </p>
            </div>

            {/* High-Contrast Clean Search Input Bar */}
            <div className="relative max-w-3xl">
              <div className="relative flex items-center rounded-2xl border border-border bg-card p-2.5 shadow-elevated focus-within:border-primary/80 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <Search className="h-5 w-5 text-primary shrink-0 ml-3 mr-3" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleQueryChange(e.target.value)}
                  placeholder="Search 25 directory pages, AI capabilities, services..."
                  className="w-full bg-transparent text-sm sm:text-base font-medium text-foreground placeholder:text-muted-foreground focus:outline-none"
                  autoFocus
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => handleQueryChange("")}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors mr-1"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none border-t border-border/40">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-2 shrink-0 flex items-center gap-1">
                <SlidersHorizontal className="h-3.5 w-3.5 text-primary" /> Filter:
              </span>
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? SEARCH_DATABASE.length
                    : SEARCH_DATABASE.filter((i) => i.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                      selectedCategory === cat
                        ? "bg-brand text-primary-foreground shadow-sm"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground border border-border"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-[0.65rem] opacity-75 font-mono">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Directory List Results */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16 space-y-8">
          {/* Status Counter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-4 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-bold text-foreground tracking-tight">
                Showing {filteredItems.length} results in directory
              </span>
              {query.trim() && (
                <span className="text-muted-foreground">
                  for query <span className="text-primary font-semibold">"{query}"</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-foreground font-semibold">
                <Globe className="h-3.5 w-3.5 text-primary" /> Active Pages Indexed
              </span>
            </div>
          </div>

          {/* Directory Cards Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => {
                const IconComp = getCategoryIcon(item.category);
                return (
                  <a
                    key={item.id}
                    href={item.path}
                    className="group rounded-2xl border border-border/80 border-l-4 border-l-transparent hover:border-l-primary bg-card p-6 shadow-card transition-all hover:bg-secondary/50 hover:shadow-elevated flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      {/* Eyebrow Header */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-primary flex items-center gap-1.5">
                          <IconComp className="h-3.5 w-3.5 text-primary shrink-0" />
                          {item.category}
                        </span>
                        <span className="text-[0.65rem] font-mono text-muted-foreground opacity-60">
                          {item.path}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow CTA */}
                    <div className="pt-2 flex items-center justify-between border-t border-border/40 text-xs font-bold text-primary">
                      <span>Explore Capability</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </a>
                );
              })
            ) : (
              <div className="col-span-full py-20 text-center space-y-3 rounded-3xl border border-border bg-card p-8 shadow-card">
                <Sparkles className="h-8 w-8 text-primary mx-auto opacity-70" />
                <h3 className="text-lg font-bold text-foreground">No directory results found for "{query}"</h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Try searching for keywords like "Yesp Core", "AI", "Digital", "Press", "Founder", "Tech", or "About".
                </p>
              </div>
            )}
          </div>

          {/* Sitelinks Banner */}
          <div className="mt-14 rounded-3xl border border-border bg-secondary/30 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-card">
            <div className="space-y-1 max-w-xl">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <Compass className="h-4 w-4 text-primary" /> Technical Crawler Sitemap & Directory
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Access structured sitemap grids, raw XML sitemap files, and crawler standards.
              </p>
            </div>
            <a
              href="/sitelinks"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-bold text-foreground hover:bg-secondary transition-colors shrink-0 shadow-sm"
            >
              View Sitelinks Directory <ArrowRight className="h-3.5 w-3.5 text-primary" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
