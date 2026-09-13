import { Link, useParams, Navigate } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import { getAccountsFeature, accountsFeaturePages, accountsGeoPages } from "@/lib/yesp-accounts";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, CheckCircle2, ChevronDown, ShieldCheck, Globe } from "lucide-react";
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
        <ChevronDown className={`h-4 w-4 text-primary shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}

export default function YespAccountsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const feature = getAccountsFeature(slug || "");

  if (!feature) return <Navigate to="/yesp-accounts" replace />;

  const isGeo = feature.category === "geo";

  useSEO({
    title: feature.seo.pageTitle,
    description: feature.seo.description,
    keywords: feature.seo.keywords,
    canonical: feature.seo.canonical,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: `Yesp Accounts — ${feature.seo.h1}`,
        applicationCategory: "SecurityApplication",
        url: feature.seo.canonical,
        description: feature.seo.description,
        author: {
          "@type": "Organization",
          name: "Yesp Corporation",
          url: "https://yespstudio.com",
          founder: {
            "@type": "Person",
            name: "Srinithin Somasundaram",
            url: "https://yespstudio.com/founder",
          },
        },
        featureList: feature.bullets,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://yespstudio.com" },
          { "@type": "ListItem", position: 2, name: "Yesp Accounts", item: "https://yespstudio.com/yesp-accounts" },
          { "@type": "ListItem", position: 3, name: feature.seo.h1, item: feature.seo.canonical },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: feature.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  });

  const relatedPages = isGeo ? accountsFeaturePages.slice(0, 4) : accountsGeoPages.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />
      <main className="overflow-x-hidden">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 py-12 sm:py-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
              <Link to="/yesp-accounts" className="hover:text-primary transition-colors font-semibold">Yesp Accounts</Link>
              <span>/</span>
              <span className="text-foreground font-semibold">{feature.badge}</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[0.68rem] font-bold text-primary uppercase tracking-wider mb-5">
              {isGeo ? <Globe className="h-3 w-3" /> : <ShieldCheck className="h-3 w-3" />}
              {feature.badge}
            </div>
            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              {feature.seo.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              {feature.seo.subheading}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/yesp-accounts"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                All Features
              </Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Overview</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">How it works</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.overview}</p>
              <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Why it matters</p>
                <p className="text-sm leading-relaxed text-foreground">{feature.whyItMatters}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Capabilities</p>
              <div className="space-y-3">
                {feature.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-foreground">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border/60 bg-secondary/20 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Common Questions</h2>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
              {feature.faq.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* Yesp entity clarity */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Product</p>
              <p className="text-sm font-bold text-foreground">Yesp Accounts</p>
              <p className="text-xs text-muted-foreground mt-1">Authentication &amp; Identity Platform</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Built by</p>
              <Link to="/founder" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                Srinithin Somasundaram
              </Link>
              <p className="text-xs text-muted-foreground mt-1">Founder & CEO, Yesp Corporation</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Standards</p>
              <p className="text-sm font-bold text-foreground">OAuth2 · OIDC · WebAuthn</p>
              <p className="text-xs text-muted-foreground mt-1">Open standards. No vendor lock-in.</p>
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section className="border-t border-border/60 bg-secondary/20 py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-5">
              {isGeo ? "Explore Features" : "Available in Your Market"}
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedPages.map((p) => (
                <Link
                  key={p.slug}
                  to={`/yesp-accounts/${p.slug}`}
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary/50 hover:text-primary transition-colors shadow-sm"
                >
                  {p.badge}
                </Link>
              ))}
              <Link
                to="/yesp-accounts"
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary/50 hover:text-primary transition-colors shadow-sm"
              >
                All of Yesp Accounts
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-start gap-5 rounded-3xl bg-brand p-8 sm:p-10 text-primary-foreground md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 max-w-xl">
                <h2 className="text-xl font-extrabold sm:text-2xl">Add this to your application</h2>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Book a 30-minute demo with Yesp Corporation. We'll scope a Yesp Accounts implementation for your specific application and compliance requirements.
                </p>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5 shrink-0 shadow-elevated"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
