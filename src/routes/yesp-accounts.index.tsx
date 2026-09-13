import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import { useSEO } from "@/hooks/useSEO";
import { accountsFeaturePages, accountsGeoPages } from "@/lib/yesp-accounts";
import {
  ShieldCheck, Key, Fingerprint, Building2, Code2, Layers,
  Globe, ArrowRight, CheckCircle2, Zap, Users, Lock
} from "lucide-react";

const featureIcons: Record<string, typeof ShieldCheck> = {
  "single-sign-on": Zap,
  "multi-factor-authentication": ShieldCheck,
  "passkeys": Fingerprint,
  "organization-management": Building2,
  "oauth-api": Code2,
  "session-management": Lock,
  "smart-login": Layers,
};

const highlights = [
  { icon: ShieldCheck, title: "Enterprise Security", desc: "MFA, passkeys, adaptive auth, and session control — production-grade from day one." },
  { icon: Key, title: "Open Standards", desc: "OAuth2, OIDC, WebAuthn — no proprietary lock-in. Any framework, any language." },
  { icon: Fingerprint, title: "Passwordless Ready", desc: "Passkeys, biometrics and hardware keys — eliminate passwords entirely." },
  { icon: Building2, title: "Multi-Tenant Built-In", desc: "Full organisation isolation, per-org SSO, and RBAC for B2B SaaS applications." },
  { icon: Globe, title: "Self-Hostable", desc: "Deploy in your own cloud. Full data sovereignty. No third-party auth vendor dependency." },
  { icon: Users, title: "Self-Service Console", desc: "Users manage their own MFA, sessions, passkeys, and security from a clean dashboard." },
];

const markets = [
  "Indian SaaS & startups",
  "UK businesses (GDPR)",
  "US enterprises (SOC2-ready)",
  "Dubai & UAE (PDPL)",
  "Australian businesses (Privacy Act)",
  "Singapore companies (PDPA/MAS)",
];

export default function YespAccountsIndexPage() {
  useSEO({
    title: "Yesp Accounts — Authentication & Identity Platform | Yesp Corporation",
    description:
      "Yesp Accounts is an open-standards authentication platform — SSO, MFA, passkeys, OAuth2, multi-tenant organisations, session management. Self-hostable. Built by Yesp Corporation.",
    keywords:
      "authentication platform, identity management, SSO platform, MFA platform, passkey authentication, OAuth2 OIDC provider, multi-tenant auth, auth0 alternative, self-hosted authentication, enterprise identity platform India",
    canonical: "https://yespstudio.com/yesp-accounts",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Yesp Accounts",
        applicationCategory: "SecurityApplication",
        operatingSystem: "Web, Self-hosted, Cloud",
        url: "https://yespstudio.com/yesp-accounts",
        description:
          "Yesp Accounts is an enterprise authentication and identity management platform — providing SSO, MFA, passkeys, OAuth2/OIDC, multi-tenant organisations and session management. Self-hostable and open-standards compliant.",
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
        featureList: [
          "Single Sign-On (SSO) with OIDC and OAuth2",
          "Multi-Factor Authentication (TOTP, email OTP, SMS OTP)",
          "Passkeys — WebAuthn and FIDO2",
          "Multi-tenant Organization Management",
          "OAuth2 and OIDC API",
          "Session Management and Revocation",
          "Smart Login — Adaptive Authentication",
          "Self-hostable deployment",
        ],
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://yespstudio.com" },
          { "@type": "ListItem", position: 2, name: "Yesp Accounts", item: "https://yespstudio.com/yesp-accounts" },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Yesp Accounts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yesp Accounts is an enterprise authentication and identity management platform built by Yesp Corporation. It provides Single Sign-On (SSO), Multi-Factor Authentication (MFA), passkeys, OAuth2/OIDC APIs, multi-tenant organisation management, and session management — and can be self-hosted on your own infrastructure.",
            },
          },
          {
            "@type": "Question",
            name: "Is Yesp Accounts an Auth0 alternative?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Yesp Accounts provides the same core authentication features as Auth0 — SSO, MFA, passkeys, OAuth2/OIDC, multi-tenant organisations — as a self-hostable platform. This eliminates per-MAU pricing and gives full data sovereignty, making it a cost-effective alternative for growing SaaS products.",
            },
          },
          {
            "@type": "Question",
            name: "Is Yesp Accounts self-hostable?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Yesp Accounts is fully self-hostable — deployable on AWS, Azure, GCP, or your own servers in any country. Self-hosting gives full data residency, compliance control, and eliminates third-party auth vendor dependency.",
            },
          },
          {
            "@type": "Question",
            name: "What authentication standards does Yesp Accounts support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yesp Accounts is built on open standards — OAuth 2.0, OpenID Connect (OIDC), WebAuthn/FIDO2, and TOTP (RFC 6238). These are the same standards used by Google, Microsoft, and Apple — ensuring compatibility with any framework or auth client library.",
            },
          },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />
      <main className="overflow-x-hidden">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 py-16 sm:py-24">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/60 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              <ShieldCheck className="h-3.5 w-3.5" />
              Yesp Accounts
            </div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl">
              Authentication &amp; Identity<br className="hidden sm:inline" />
              <span className="text-gradient-brand"> Built Right</span>
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              SSO. MFA. Passkeys. OAuth2. Multi-tenant organisations. Session control.
              Open standards. Self-hostable. Production-grade from day one.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/yesp-accounts/single-sign-on"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2 text-center">Platform Capabilities</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">Everything authentication. Nothing unnecessary.</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-card transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-bold text-foreground mb-1">{title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Pages */}
        <section className="border-y border-border/60 bg-secondary/20 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Features</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">Deep-dive into each capability</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {accountsFeaturePages.map((f) => {
                const Icon = featureIcons[f.slug] || ShieldCheck;
                return (
                  <Link
                    key={f.slug}
                    to={`/yesp-accounts/${f.slug}`}
                    className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-card transition-all"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 mb-3">
                      <Icon className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[0.65rem] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                      {f.badge}
                    </div>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors">{f.seo.h1}</p>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">{f.seo.subheading}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-bold text-primary">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Standards */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-card">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Standards</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Built on open standards.<br />No lock-in.</h2>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  Every protocol in Yesp Accounts is an open, ratified standard. Your engineering team uses the same OAuth2 and OIDC client libraries they already know — no proprietary SDKs required.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["OAuth 2.0", "OpenID Connect", "WebAuthn / FIDO2", "TOTP (RFC 6238)", "PKCE (RFC 7636)", "JWT (RFC 7519)", "JWKS", "OIDC Discovery"].map((s) => (
                    <span key={s} className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Authorization code flow + PKCE for web & mobile",
                  "Client credentials for machine-to-machine auth",
                  "Token introspection and revocation endpoints",
                  "JWKS public key discovery",
                  "OpenID Connect Discovery (/.well-known/openid-configuration)",
                  "WebAuthn Level 2 passkey registration and assertion",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GEO Markets */}
        <section className="border-t border-border/60 bg-secondary/20 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Global Markets</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Yesp Accounts — built for global compliance</h2>
            <p className="text-sm text-muted-foreground max-w-xl mb-10">
              Self-hostable in any cloud region. GDPR, PDPA, Privacy Act, DPDP, PDPL — deploy within your jurisdiction and meet every data residency obligation.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {accountsGeoPages.map((g) => (
                <Link
                  key={g.slug}
                  to={`/yesp-accounts/${g.slug}`}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-sm hover:border-primary/40 hover:shadow-card transition-all flex items-start gap-3"
                >
                  <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[0.62rem] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                      {g.badge}
                    </div>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{g.seo.h1}</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">{g.seo.subheading}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-start gap-6 rounded-3xl bg-brand p-8 sm:p-12 text-primary-foreground md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 max-w-xl">
                <h2 className="text-2xl font-extrabold sm:text-3xl">Ready to add authentication?</h2>
                <p className="text-sm opacity-90 leading-relaxed">
                  Book a 30-minute demo with the Yesp Corporation team. We'll walk through Yesp Accounts and scope an implementation for your application.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {markets.map((m) => (
                    <span key={m} className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">{m}</span>
                  ))}
                </div>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5 shrink-0 shadow-elevated"
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
