import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import { coreServices, seoServices } from "@/lib/services";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesIndexPage() {
  useSEO({
    title: "Services — Enterprise Software, AI & Automation | Yesp Corporation",
    description:
      "Yesp Corporation provides enterprise software development, AI development, AI automation, system integration, digital transformation and custom SaaS development. Based in India, serving global clients.",
    keywords:
      "enterprise software development, AI development, AI automation, system integration, digital transformation, SaaS development, business process automation, Yesp Corporation",
    canonical: "https://yespstudio.com/services",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      provider: {
        "@type": "Organization",
        name: "Yesp Corporation",
        url: "https://yespstudio.com",
      },
      name: "Enterprise Software, AI & Automation Services",
      description:
        "Custom enterprise software development, AI development, AI automation, system integration and digital transformation services for global businesses.",
      areaServed: "Worldwide",
    },
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 py-14 sm:py-24">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-accent/70 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">All Services</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Enterprise Software, AI & Automation
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Yesp Corporation builds custom enterprise software, AI systems, intelligent automation and digital transformation solutions for businesses that need technology built around their operations — not off-the-shelf compromises.
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

        {/* Core Service Divisions */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Service Divisions</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Three Core Capabilities</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {coreServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-4">
                    {s.name}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* SEO Service Pages */}
        <section className="border-t border-border/60 bg-secondary/20 py-12 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Specific Services</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">What We Build</h2>
            <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
              Detailed capability pages for the specific services that enterprises most commonly need.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {seoServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated flex flex-col justify-between"
                >
                  <div>
                    <span className="block h-1 w-8 rounded-full bg-primary mb-3" />
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Yesp */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Why Businesses Work With Yesp</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Enterprise-grade engineering without enterprise overhead",
              "Custom software built around your workflow, not a template",
              "AI and automation grounded in measurable business outcomes",
              "Zero-latency integrations across ERP, CRM and business systems",
              "100% remote delivery for global clients",
              "Founder-led team with direct engineering accountability",
            ].map((r) => (
              <div
                key={r}
                className="rounded-2xl border border-border bg-card px-5 py-4 text-xs font-semibold text-foreground shadow-sm flex items-start gap-2.5"
              >
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{r}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60 bg-secondary/30 py-12 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-start gap-5 rounded-3xl bg-brand p-8 sm:p-12 text-primary-foreground md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 max-w-xl">
                <h2 className="text-2xl font-extrabold sm:text-3xl">Ready to start?</h2>
                <p className="text-sm opacity-90 leading-relaxed">
                  Book a 20–30 minute discovery call with Srinithin Somasundaram and the Yesp Corporation team.
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
