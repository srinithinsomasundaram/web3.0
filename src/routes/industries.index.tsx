import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import { industries } from "@/lib/industries";
import { useSEO } from "@/hooks/useSEO";
import { ArrowRight } from "lucide-react";

export default function IndustriesIndexPage() {
  useSEO({
    title: "Industries — Enterprise Software & AI by Industry | Yesp Corporation",
    description:
      "Yesp Corporation builds enterprise software, AI automation and digital transformation solutions for Technology, Healthcare, Manufacturing, Logistics, Education and Real Estate industries.",
    keywords:
      "enterprise software by industry, software for manufacturing, healthcare software, technology SaaS software, logistics software, education software India, Yesp Corporation industries",
    canonical: "https://yespstudio.com/industries",
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 py-14 sm:py-24">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-accent/70 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Industry Expertise</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Enterprise Software & AI by Industry
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Yesp Corporation applies enterprise software, AI development and intelligent automation to the specific operational challenges of each industry — not generic solutions that require businesses to compromise.
            </p>
          </div>
        </section>

        {/* Industry Grid */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="group rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground mb-4">
                    {ind.subtitle}
                  </span>
                  <h2 className="text-lg font-bold text-foreground">{ind.name}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{ind.intro.slice(0, 120)}…</p>
                  <ul className="mt-5 space-y-1.5">
                    {ind.highlights.map((h) => (
                      <li key={h} className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
                        <span className="h-1 w-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline">
                  Explore Solutions <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60 bg-secondary/30 py-12 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-start gap-5 rounded-3xl bg-brand p-8 sm:p-12 text-primary-foreground md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 max-w-xl">
                <h2 className="text-2xl font-extrabold sm:text-3xl">Don't see your industry?</h2>
                <p className="text-sm opacity-90 leading-relaxed">
                  We work with businesses across many sectors. Book a discovery call and tell us about your operational challenges.
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
