import { useState, useRef, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, X, ChevronRight, Sparkles } from "lucide-react";

export interface SearchItem {
  id: string;
  title: string;
  category: "Pages" | "Services" | "Articles" | "Press";
  path: string;
  description: string;
  keywords: string;
}

const SEARCH_INDEX: SearchItem[] = [
  // Core Pages
  {
    id: "home",
    title: "Homepage",
    category: "Pages",
    path: "/",
    description: "Main corporate portal, core industries, and active pipeline.",
    keywords: "home yesp corporation executive portal make better happen solutions process",
  },
  {
    id: "tech-expertise",
    title: "Technical Expertise & Technology Stack",
    category: "Pages",
    path: "/tech-expertise",
    description: "Core technical capabilities across Backend, Autonomous AI, Cloud Infra, Frontend, and Data Pipelines.",
    keywords: "tech expertise stack architecture node typescript python go postgresql react aws docker AI microservices",
  },
  {
    id: "about",
    title: "About Yesp Corporation",
    category: "Pages",
    path: "/about",
    description: "Corporate slogan 'Make Better Happen.', brand story, and regional lineage.",
    keywords: "about brand principles story lineage erode coimbatore bengaluru global team",
  },
  {
    id: "founder",
    title: "Founder Profile (Srinithin Somasundaram)",
    category: "Pages",
    path: "/founder",
    description: "Founder biography, leadership principles, vision for applied AI agents, and software.",
    keywords: "founder srinithin somasundaram profile ceo biography vision leadership",
  },
  {
    id: "case-studies",
    title: "Selected Client Work & Proof",
    category: "Pages",
    path: "/case-studies",
    description: "Enterprise case studies, benchmark performance stats, and zero-latency system proof.",
    keywords: "client work case studies portfolio proof metrics enterprise success stories",
  },
  {
    id: "careers",
    title: "Careers (100% Remote)",
    category: "Pages",
    path: "/careers",
    description: "Global engineering and AI career opportunities and application portal.",
    keywords: "careers jobs remote hiring software engineer ai engineer apply culture",
  },
  {
    id: "contact",
    title: "Contact & Discovery Call",
    category: "Pages",
    path: "/contact",
    description: "Executive contact details, office hub locations, email contacts, and call booking.",
    keywords: "contact talk to us reach out booking schedule call email office erode coimbatore bengaluru",
  },
  {
    id: "sitelinks",
    title: "Sitelinks Directory & Sitemap",
    category: "Pages",
    path: "/sitelinks",
    description: "Complete sitemap directory indexing all 24 site pages.",
    keywords: "sitelinks sitemap directory navigation index list all pages crawler",
  },
  {
    id: "cookies",
    title: "Cookie & Privacy Policy",
    category: "Pages",
    path: "/cookies",
    description: "Enterprise data protection policy, cookie directives, and privacy standards.",
    keywords: "cookies privacy policy legal data protection terms consent",
  },

  // Services
  {
    id: "service-digital",
    title: "Yesp Digital (Enterprise Software)",
    category: "Services",
    path: "/services/digital",
    description: "Custom core software backbones, business portals, ERPs, and APIs.",
    keywords: "services digital custom enterprise software backend erp portals api integration core backbone",
  },
  {
    id: "service-ai-labs",
    title: "Yesp AI Labs (Applied AI Agents)",
    category: "Services",
    path: "/services/ai-labs",
    description: "Autonomous AI agents, document intelligence, voice AI, and workflow automation.",
    keywords: "services ai labs artificial intelligence autonomous agents workflow automation document intelligence voice ai",
  },
  {
    id: "service-growth",
    title: "Yesp Growth (Lead Systems & GEO)",
    category: "Services",
    path: "/services/growth",
    description: "High-conversion web platforms, search engine optimization (SEO), and GEO.",
    keywords: "services growth lead engine conversion geo generative engine optimization search seo web design",
  },

  // Executive Articles
  {
    id: "article-index",
    title: "Executive Articles Index",
    category: "Articles",
    path: "/articles",
    description: "Directory of technology essays, architectural blueprints, and engineering standards.",
    keywords: "articles insights essays directory research engineering framework software architecture",
  },
  {
    id: "article-global-delivery",
    title: "Yesp Corp Global: Engineering & AI Delivery",
    category: "Articles",
    path: "/articles/yesp-corp-global-engineering-and-ai-delivery",
    description: "Global delivery model from Erode, Coimbatore, and Bengaluru to international scale.",
    keywords: "article yesp corp global delivery model erode coimbatore bengaluru international clients software scale",
  },
  {
    id: "article-framework",
    title: "The 'Make Better Happen' Framework",
    category: "Articles",
    path: "/articles/the-make-better-happen-engineering-framework",
    description: "Operational engineering standard for zero-complexity core software backbones.",
    keywords: "article framework engineering standard make better happen simplicity performance reliability",
  },
  {
    id: "article-data-silos",
    title: "Eliminating Data Silos with Zero-Latency ERP",
    category: "Articles",
    path: "/articles/eliminating-data-silos-with-zero-latency-integrations",
    description: "Blueprint for real-time cross-system synchronization and database integration.",
    keywords: "article data silos zero latency erp database synchronization integration event streaming",
  },
  {
    id: "article-tech-lineage",
    title: "The Erode – Coimbatore – Bengaluru Lineage",
    category: "Articles",
    path: "/articles/eroded-coimbatore-bengaluru-tech-lineage",
    description: "Manufacturing grit and software scale across Erode, Coimbatore, and Bengaluru.",
    keywords: "article tech lineage erode coimbatore bengaluru manufacturing engineering software scale",
  },
  {
    id: "article-practical-ai",
    title: "Practical AI Agents in Enterprise Workflows",
    category: "Articles",
    path: "/articles/practical-ai-agents-in-enterprise-workflows",
    description: "Deploying ROI-driven autonomous AI agents in real enterprise operations.",
    keywords: "article practical ai agents enterprise workflows automation roi llm integrations",
  },
  {
    id: "article-custom-vs-saas",
    title: "Custom Software Backbones vs SaaS Bloat",
    category: "Articles",
    path: "/articles/building-custom-enterprise-software-vs-saas",
    description: "Why scaling companies replace fragmented SaaS subscriptions with custom backbones.",
    keywords: "article custom software vs saas bloat cost reduction enterprise tech architecture",
  },

  // Press Center
  {
    id: "press-index",
    title: "Official Press Center Index",
    category: "Press",
    path: "/press",
    description: "Corporate announcements, newsroom releases, and executive statements.",
    keywords: "press center newsroom media releases corporate announcements news statements",
  },
  {
    id: "press-global-expansion",
    title: "Yesp Corp Global Expansion & AI Infrastructure",
    category: "Press",
    path: "/press/yesp-corp-global-expansion-and-ai-infrastructure",
    description: "Press release on international AI & enterprise software operations expansion.",
    keywords: "press global expansion ai infrastructure autonomous agents enterprise software announcement",
  },
  {
    id: "press-keynote",
    title: "Srinithin Somasundaram Keynote on Future of AI",
    category: "Press",
    path: "/press/srinithin-somasundaram-keynote-future-of-ai",
    description: "Keynote address on practical AI agent deployment and software architecture.",
    keywords: "press keynote srinithin somasundaram future of ai address presentation speech",
  },
  {
    id: "press-make-better-standard",
    title: "'Make Better Happen' Operational Initiative",
    category: "Press",
    path: "/press/make-better-happen-initiative",
    description: "Announcement of zero-complexity integration framework across enterprise clients.",
    keywords: "press make better happen initiative operational standard announcement corporate strategy",
  },
  {
    id: "press-bengaluru-hub",
    title: "Global Expansion in Bengaluru Tech Corridor",
    category: "Press",
    path: "/press/global-expansion-bengaluru",
    description: "Strategic expansion connecting Erode and Coimbatore with Bengaluru tech corridor.",
    keywords: "press bengaluru expansion tech corridor hub office software growth",
  },
  {
    id: "press-ai-launch",
    title: "Autonomous Enterprise AI Platform Release",
    category: "Press",
    path: "/press/ai-automation-launch",
    description: "Launch of Yesp AI Labs autonomous agent engine for enterprise operations.",
    keywords: "press ai automation launch product release engine agent platform autonomous",
  },
];

export function SiteInlineSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredResults = query.trim()
    ? SEARCH_INDEX.filter((item) => {
        const q = query.toLowerCase().trim();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.keywords.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      })
    : [];

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (path: string) => {
    setIsOpen(false);
    setQuery("");
    navigate({ to: path });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsOpen(false);
      navigate({
        to: "/search",
        search: { q: query },
      });
      return;
    }

    if (!isOpen || filteredResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredResults.length - 1));
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Services":
        return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20";
      case "Articles":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case "Press":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      default:
        return "bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/20";
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Inline Search Bar */}
      <div className="relative flex items-center">
        <Search className="absolute left-2.5 sm:left-3 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onClick={() => {
            if (!query.trim()) {
              navigate({ to: "/search", search: { q: "" } });
            }
          }}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className="h-8 w-20 focus:w-36 min-[380px]:w-24 min-[380px]:focus:w-44 sm:h-8.5 sm:w-44 sm:focus:w-64 rounded-full border border-border bg-secondary/70 pl-7 sm:pl-8 pr-6 sm:pr-7 text-[0.72rem] sm:text-xs font-semibold text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:bg-background focus:border-primary/50 focus:outline-none shadow-sm cursor-pointer"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute right-2 p-0.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Popup Cards on Mobile Responsive / Dropdown Desktop */}
      {isOpen && query.trim() !== "" && (
        <div className="fixed inset-x-3 top-16 max-h-[75vh] sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-2 sm:w-96 sm:max-h-none rounded-2xl border border-border bg-card/98 backdrop-blur-2xl shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150 flex flex-col justify-between">
          {/* Mobile Header Bar */}
          <div className="flex sm:hidden items-center justify-between border-b border-border/60 pb-2 mb-2 px-1 text-xs font-bold text-foreground">
            <span>Results for "{query}"</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full bg-secondary text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {filteredResults.length > 0 ? (
            <div className="max-h-[55vh] sm:max-h-72 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
              {filteredResults.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item.path)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`group flex items-center justify-between gap-2.5 rounded-xl p-2.5 transition-all cursor-pointer border ${
                      isSelected
                        ? "border-primary/40 bg-secondary text-foreground font-medium"
                        : "border-transparent bg-secondary/30 hover:bg-secondary/70 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`text-[0.6rem] font-extrabold uppercase tracking-wider rounded px-1.5 py-0.5 border shrink-0 ${getCategoryBadgeClass(
                          item.category
                        )}`}
                      >
                        {item.category}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                          {item.title}
                        </p>
                        <p className="text-[0.7rem] text-muted-foreground truncate leading-tight">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className={`h-3.5 w-3.5 shrink-0 transition-transform ${
                        isSelected ? "translate-x-0.5 text-primary opacity-100" : "opacity-40 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                );
              })}

              {/* Open full search page link */}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  navigate({ to: "/search", search: { q: query } });
                }}
                className="w-full mt-2 flex items-center justify-between rounded-xl bg-brand/10 px-3 py-2 text-xs font-bold text-primary hover:bg-brand/20 transition-colors border border-brand/20"
              >
                <span>View all search results on Search page</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <div className="py-6 text-center space-y-2 px-3">
              <Sparkles className="h-4 w-4 text-primary mx-auto opacity-70" />
              <p className="text-xs font-bold text-foreground">No matches for "{query}"</p>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  navigate({ to: "/search", search: { q: query } });
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Search all 25 pages <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
