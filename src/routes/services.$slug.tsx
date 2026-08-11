import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import { getService } from "@/lib/services";
import { MapPin, Globe, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);

    if (!service) {
      throw notFound();
    }

    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData.service.name} — ${loaderData.service.title} | Yesp Corporation Global Team`,
      },
      {
        name: "description",
        content: `${loaderData.service.intro} Yesp Corporation Global Team delivers enterprise software, AI agents, and workflow automation across Erode, Coimbatore, Bengaluru, India and global markets.`,
      },
      {
        name: "keywords",
        content: `${loaderData.service.name}, ${loaderData.service.title}, Enterprise Software India, AI Agents Bengaluru, Systems Integration Coimbatore, Erode Engineering, Yesp Corporation Global, 100% Remote Delivery`,
      },
      { name: "geo.region", content: "IN-KA;IN-TN" },
      { name: "geo.placename", content: "Bengaluru, Coimbatore, Erode, India" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      {
        property: "og:title",
        content: `${loaderData.service.name} — ${loaderData.service.title} | Yesp Corporation Global Team`,
      },
      {
        property: "og:description",
        content: `${loaderData.service.intro} Engineered by Yesp Corporation Global Team.`,
      },
      {
        property: "og:image",
        content: "https://yespstudio.com/assets/yesp-footer-logo.png",
      },
      { property: "og:type", content: "website" },
      {
        name: "twitter:title",
        content: `${loaderData.service.name} — Yesp Corporation Global Team`,
      },
      {
        name: "twitter:description",
        content: loaderData.service.intro,
      },
      {
        name: "twitter:image",
        content: "https://yespstudio.com/assets/yesp-footer-logo.png",
      },
    ],
    links: [{ rel: "canonical", href: `/services/${loaderData.service.slug}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `https://yespstudio.com/services/${loaderData.service.slug}#service`,
              name: loaderData.service.name,
              serviceType: loaderData.service.title,
              description: loaderData.service.intro,
              provider: {
                "@type": "Corporation",
                name: "Yesp Corporation Global Team",
                slogan: "Make Better Happen.",
                url: "https://yespstudio.com",
                logo: "https://yespstudio.com/assets/yesp-footer-logo.png",
                email: "hello@yespstudio.com",
              },
              areaServed: [
                { "@type": "Country", name: "Global" },
                { "@type": "Country", name: "India" },
              ],
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: `https://yespstudio.com/services/${loaderData.service.slug}`,
                serviceLocation: {
                  "@type": "Place",
                  name: "Bengaluru, Karnataka, India",
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "12.9716",
                    longitude: "77.5946",
                  },
                },
              },
            },
          ],
        }),
      },
    ],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />
      <main className="overflow-x-hidden">
        {/* Service Hero Banner with GEO Location Pill */}
        <section className="relative overflow-hidden border-b border-border/60 py-12 sm:py-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-accent/70 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/"
                hash="solutions"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Services
              </Link>
              <span className="text-muted-foreground/40">·</span>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-3 py-1 text-[0.68rem] font-bold text-muted-foreground uppercase tracking-wider">
                <MapPin className="h-3 w-3 text-primary" /> Erode · Coimbatore · Bengaluru · 100% Remote
              </div>
            </div>

            <p className="animate-rise mt-5 text-sm font-bold text-primary">{service.name}</p>
            <h1 className="animate-rise mt-2 max-w-4xl text-3xl font-extrabold leading-tight [animation-delay:80ms] sm:text-5xl md:text-6xl">
              {service.title}
            </h1>
            <p className="animate-rise mt-5 max-w-2xl text-xs sm:text-base leading-relaxed text-muted-foreground [animation-delay:160ms] sm:text-lg">
              {service.intro}
            </p>

            <div className="animate-rise mt-8 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs sm:px-7 sm:py-3.5 sm:text-sm font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                Book a Call <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex justify-center items-center gap-2 rounded-full border border-border px-6 py-3 text-xs sm:px-7 sm:py-3.5 sm:text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                View Capabilities
              </a>
            </div>
          </div>
        </section>

        {/* Key Outcomes */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
            Expected Business Outcomes
          </h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {service.outcomes.map((outcome) => (
              <article key={outcome} className="rounded-3xl border border-border bg-card p-6 shadow-card space-y-3">
                <span className="block h-1.5 w-10 rounded-full bg-primary" />
                <p className="text-xs sm:text-sm font-bold leading-relaxed text-foreground flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="capabilities" className="border-y border-border/60 bg-secondary/30">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-widest text-primary">
                Technical Stack & Capabilities
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">What We Build</h2>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                We keep the scope practical: clear workflows, measurable outcomes, zero-latency integrations, and systems your team can actually operate.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="rounded-2xl border border-border bg-card px-4 py-3.5 text-xs font-bold text-foreground shadow-card flex items-center gap-2.5"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How It Works Process */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
          <p className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-widest text-primary">
            Execution Methodology
          </p>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold">How It Works</h2>
          <ol className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-4">
            {service.process.map((step, index) => (
              <li key={step} className="rounded-2xl border border-border bg-card p-5 shadow-card space-y-2">
                <span className="font-display text-xs font-extrabold text-primary bg-accent px-2.5 py-0.5 rounded-full">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Discovery Call CTA Banner */}
        <section className="border-t border-border/60 bg-secondary/50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
            <div className="flex flex-col items-start gap-5 rounded-3xl bg-brand p-6 sm:p-10 text-primary-foreground md:flex-row md:items-center md:justify-between">
              <div className="space-y-1.5 max-w-xl">
                <h2 className="text-xl font-extrabold sm:text-2xl">Need this inside your business?</h2>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Start with a 20–30 minute discovery call with Srinithin Somasundaram and the Yesp Corporation engineering team.
                </p>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center gap-2 rounded-full bg-background px-6 py-3 text-xs sm:px-7 sm:py-3.5 sm:text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5 shrink-0 shadow-elevated"
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
