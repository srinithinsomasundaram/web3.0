import { Link, useParams, Navigate } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import { getIndustry } from "@/lib/industries";
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

export default function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = getIndustry(slug || "");

  if (!industry) return <Navigate to="/industries" replace />;

  useSEO({
    title: industry.seo.pageTitle,
    description: industry.seo.description,
    keywords: industry.seo.keywords,
    canonical: industry.seo.canonical,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        provider: {
          "@type": "Organization",
          name: "Yesp Corporation",
          url: "https://yespstudio.com",
        },
        name: industry.seo.h1,
        description: industry.seo.description,
        areaServed: "Worldwide",
        serviceType: industry.name,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: industry.faq.map((item) => ({
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
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Link
                to="/industries"
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Industries
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-3 py-1 text-[0.68rem] font-bold text-muted-foreground uppercase tracking-wider">
                <MapPin className="h-3 w-3 text-primary" /> Erode · Coimbatore · Bengaluru · 100% Remote
              </div>
            </div>

            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground mb-3">
              {industry.subtitle}
            </span>
            <h1 className="mt-2 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              {industry.seo.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              {industry.intro}
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
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Common Challenges</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Problems We Solve in {industry.name}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {industry.challenges.map((c) => (
              <div key={c} className="rounded-2xl border border-border bg-card p-5 shadow-sm flex items-start gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions */}
        <section className="border-y border-border/60 bg-secondary/20 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">What We Build</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Solutions for {industry.subtitle}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {industry.solutions.map((s) => (
                <div key={s} className="rounded-2xl border border-border bg-card px-5 py-4 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-foreground">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Technical Capabilities</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">How We Deliver</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industry.capabilities.map((c) => (
              <div key={c} className="rounded-2xl border border-border bg-card px-4 py-3.5 text-xs font-bold text-foreground shadow-sm flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                {c}
              </div>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="border-t border-border/60 bg-secondary/20 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Related Services</p>
            <h2 className="text-2xl font-bold mb-8">Services We Apply in {industry.subtitle}</h2>
            <div className="flex flex-wrap gap-3">
              {industry.relatedServices.map((slug) => (
                <Link
                  key={slug}
                  to={`/services/${slug}`}
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary/50 hover:text-primary transition-colors shadow-sm"
                >
                  {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
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
            {industry.faq.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60 bg-secondary/30 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-start gap-5 rounded-3xl bg-brand p-8 sm:p-10 text-primary-foreground md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 max-w-xl">
                <h2 className="text-xl font-extrabold sm:text-2xl">Ready to modernize your {industry.subtitle} operations?</h2>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Start with a 20–30 minute discovery call with the Yesp Corporation engineering team.
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
