import { Link, useParams, Navigate } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import { getLocation } from "@/lib/locations";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, CheckCircle2, MapPin, ChevronDown } from "lucide-react";
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
        <ChevronDown
          className={`h-4 w-4 text-primary shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{a}</p>
      )}
    </div>
  );
}

export default function LocationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocation(slug || "");

  if (!location) return <Navigate to="/" replace />;

  const ukSlugs = ["united-kingdom", "london", "manchester", "birmingham"];
  const usaSlugs = ["usa", "new-york", "san-francisco"];
  const auSlugs = ["australia", "sydney"];
  const caSlugs = ["canada", "toronto"];
  const sgSlugs = ["singapore"];
  const aeSlugs = ["dubai"];

  const isUK = ukSlugs.includes(location.slug);
  const isUS = usaSlugs.includes(location.slug);
  const isAU = auSlugs.includes(location.slug);
  const isCA = caSlugs.includes(location.slug);
  const isSG = sgSlugs.includes(location.slug);
  const isAE = aeSlugs.includes(location.slug);

  const nationalSlugs = ["india", "united-kingdom", "tamil-nadu", "usa", "australia", "canada", "singapore", "dubai"];
  const isNational = nationalSlugs.includes(location.slug);
  const schemaType = isNational ? "Organization" : "LocalBusiness";

  const addressCountry = isUK ? "GB"
    : isUS ? "US"
    : isAU ? "AU"
    : isCA ? "CA"
    : isSG ? "SG"
    : isAE ? "AE"
    : "IN";

  useSEO({
    title: location.seo.pageTitle,
    description: location.seo.description,
    keywords: location.seo.keywords,
    canonical: location.seo.canonical,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": schemaType,
        name: "Yesp Corporation",
        url: "https://yespstudio.com",
        description: location.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: location.city,
          addressRegion: location.region,
          addressCountry: addressCountry,
        },
        areaServed: [
          "India", "United Kingdom", "United States", "Canada",
          "Australia", "Singapore", "United Arab Emirates", "Worldwide",
        ],
        founder: {
          "@type": "Person",
          name: "Srinithin Somasundaram",
          jobTitle: "Founder & CEO",
          url: "https://yespstudio.com/founder",
        },
        knowsAbout: [
          "Enterprise Software Development",
          "AI Development",
          "AI Automation",
          "Business Process Automation",
          "System Integration",
          "Digital Transformation",
          "Generative AI",
          "AI Agents",
          "SaaS Development",
          "ERP Integration",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@yespstudio.com",
          contactType: "customer service",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
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
          { "@type": "ListItem", position: 2, name: "Locations", item: "https://yespstudio.com/locations" },
          { "@type": "ListItem", position: 3, name: location.city, item: location.seo.canonical },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: location.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 py-12 sm:py-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-accent/70 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3 py-1 text-[0.68rem] font-bold text-muted-foreground uppercase tracking-wider mb-5">
              <MapPin className="h-3 w-3 text-primary" />
              {location.city}{location.region !== location.city && `, ${location.region}`} · {location.country}
            </div>
            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              {location.seo.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              {location.seo.subheading}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {location.context}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                Book a Discovery Call <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                About Yesp
              </Link>
            </div>
          </div>
        </section>

        {/* Services in this location */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">What We Do</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Services for {location.city} Businesses</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {location.services.map((s) => (
              <div key={s} className="rounded-2xl border border-border bg-card px-5 py-4 text-xs font-bold text-foreground shadow-sm flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="border-y border-border/60 bg-secondary/20 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Industry Focus</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Industries We Serve in {location.city}</h2>
            <div className="flex flex-wrap gap-3">
              {location.industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Local context */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Regional Context</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              {location.city} — Why It Matters to Yesp
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{location.localContext}</p>
          </div>
        </section>

        {/* Why Yesp */}
        <section className="border-t border-border/60 bg-secondary/20 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Advantage</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Why {location.city} Businesses Work With Yesp</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {location.whyYesp.map((w) => (
                <div key={w} className="rounded-2xl border border-border bg-card px-5 py-4 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-foreground">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Yesp entity clarity */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Company</p>
              <p className="text-sm font-bold text-foreground">Yesp Corporation</p>
              <p className="text-xs text-muted-foreground mt-1">Enterprise Software, AI & Automation</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Founded By</p>
              <Link to="/founder" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                Srinithin Somasundaram
              </Link>
              <p className="text-xs text-muted-foreground mt-1">Founder & CEO</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Headquarters</p>
              <p className="text-sm font-bold text-foreground">Erode · Coimbatore · Bengaluru</p>
              <p className="text-xs text-muted-foreground mt-1">Tamil Nadu & Karnataka, India</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Common Questions</h2>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
            {location.faq.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        {/* Explore links */}
        <section className="border-t border-border/60 bg-secondary/20 py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-5">Explore</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/services" className="rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary/50 hover:text-primary transition-colors shadow-sm">
                All Services
              </Link>
              <Link to="/industries" className="rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary/50 hover:text-primary transition-colors shadow-sm">
                Industries
              </Link>
              <Link to="/case-studies" className="rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary/50 hover:text-primary transition-colors shadow-sm">
                Case Studies
              </Link>
              <Link to="/about" className="rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary/50 hover:text-primary transition-colors shadow-sm">
                About Yesp
              </Link>
              <Link to="/founder" className="rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary/50 hover:text-primary transition-colors shadow-sm">
                Founder Profile
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-start gap-5 rounded-3xl bg-brand p-8 sm:p-10 text-primary-foreground md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 max-w-xl">
                <h2 className="text-xl font-extrabold sm:text-2xl">
                  Working with a business in {location.city}?
                </h2>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Book a 20–30 minute discovery call with the Yesp Corporation engineering team.
                </p>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5 shrink-0 shadow-elevated"
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
