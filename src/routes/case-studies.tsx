
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { caseStudies } from "@/lib/case-studies";
import { bookingUrl } from "@/lib/links";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      <main className="overflow-x-hidden">
        {/* Top Hero Header with Glowing Gradient Background */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-card/50 to-background py-20 md:py-28">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-brand/15 blur-3xl opacity-70" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl opacity-60" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Selected Client Work
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Complex Workflows, Turned Into <span className="text-gradient-brand">Working Systems.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A deep look into how Yesp Corporation architects enterprise software, deploys practical AI agents, and eliminates operational friction.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {caseStudies.map((c) => (
                <a
                  key={c.slug}
                  href={`#${c.slug}`}
                  className="rounded-full border border-border/80 bg-card/80 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-muted-foreground transition-all hover:bg-secondary hover:text-foreground hover:border-primary/40"
                >
                  {c.index} — {c.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Case Study Sections with Alternating Ambient Mesh */}
        {caseStudies.map((c, i) => (
          <section
            key={c.slug}
            id={c.slug}
            className={`relative scroll-mt-24 border-b border-border/60 py-20 ${
              i % 2 === 1
                ? "bg-gradient-to-b from-secondary/40 via-card/30 to-secondary/40"
                : "bg-background"
            }`}
          >
            <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <div>
                  <span className="font-display text-xs font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    Case Study {c.index}
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl md:text-4xl text-foreground">
                    {c.title}
                  </h2>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {c.category}
                  </p>
                </div>

                <div className="rounded-3xl border border-border/80 bg-card/90 p-6 shadow-card backdrop-blur-sm space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5" /> Yesp Capability
                  </h3>
                  <p className="text-sm font-semibold text-foreground">{c.capability}</p>
                </div>

                <div className="rounded-3xl border border-border/80 bg-brand/10 p-6 space-y-2 text-foreground">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5" /> Client Outcome
                  </h3>
                  <p className="text-sm font-bold">{c.value}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-3xl border border-border/60 bg-card/60 p-6 sm:p-8 space-y-3">
                  <h3 className="text-base font-bold text-foreground">Client Challenge</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{c.challenge}</p>
                </div>

                <div className="rounded-3xl border border-border/60 bg-card/60 p-6 sm:p-8 space-y-3">
                  <h3 className="text-base font-bold text-foreground">The Yesp Solution</h3>
                  {c.solution.map((p) => (
                    <p key={p} className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-foreground">{c.builtLabel}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {c.built.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-border bg-secondary/80 px-3.5 py-1.5 text-xs font-semibold text-foreground"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA Banner */}
        <section className="bg-secondary/40 py-20 border-t border-border/60">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand p-8 sm:p-12 text-primary-foreground md:flex-row md:items-center">
              <div className="max-w-xl space-y-2">
                <h3 className="text-2xl font-extrabold sm:text-3xl">Want to see similar results for your business?</h3>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Book a discovery call with Yesp Corporation to evaluate your software architecture and automation opportunities.
                </p>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-xs sm:text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5 shrink-0 shadow-elevated"
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
