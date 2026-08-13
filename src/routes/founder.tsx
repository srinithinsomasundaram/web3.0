import { Link } from "react-router-dom";
import logo from "@/assets/yesp-footer-logo.png";
import founderImage from "@/assets/founder-srinithin-somasundaram.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { bookingUrl } from "@/lib/links";
import {
  MapPin,
  Sparkles,
  Layers,
  Cpu,
  Globe,
  ArrowRight,
  ShieldCheck,
  Zap,
  User,
  Building2,
  Award,
  BookOpen,
  Linkedin,
  Instagram,
  Newspaper,
  ExternalLink,
  Mail,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-card to-background py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
              <User className="h-3.5 w-3.5 text-primary" /> Executive Leadership · Founder Profile
            </div>

            <div className="mt-8 grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
                  Srinithin <span className="text-gradient-brand">Somasundaram</span>
                </h1>
                <p className="mt-4 text-xl font-bold text-primary md:text-2xl">
                  Founder & Chief Executive Officer — Yesp Corporation
                </p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Building enterprise software, artificial intelligence systems, and intelligent automation that power real operational transformations for global businesses.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-accent-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary" /> Rooted in Erode
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-accent-foreground">
                    <Building2 className="h-3.5 w-3.5 text-primary" /> Built in Coimbatore
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-accent-foreground">
                    <Globe className="h-3.5 w-3.5 text-primary" /> Operating in Bengaluru
                  </span>
                </div>

                {/* Social Connect Links */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/srinithinsomasundaram/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 text-xs font-semibold text-white shadow-elevated transition-transform hover:-translate-y-0.5"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn Profile <ExternalLink className="h-3 w-3 opacity-80" />
                  </a>
                  <a
                    href="https://www.instagram.com/srinithin.somasundaram/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] px-5 py-2.5 text-xs font-semibold text-white shadow-elevated transition-transform hover:-translate-y-0.5"
                  >
                    <Instagram className="h-4 w-4" /> Instagram Profile <ExternalLink className="h-3 w-3 opacity-80" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center">
                <div className="relative rounded-3xl border border-border bg-card p-6 shadow-elevated text-center max-w-sm w-full group">
                  {/* Portrait Image Container */}
                  <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-2xl border-2 border-primary/20 bg-secondary/40 shadow-inner">
                    <img
                      src={founderImage}
                      alt="Srinithin Somasundaram — Founder & CEO of Yesp Corporation"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 rounded-full bg-background/90 p-1.5 backdrop-blur-md border border-border shadow-md">
                      <img src={logo} alt="Yesp Logo" className="h-5 w-5 object-contain" />
                    </div>
                  </div>

                  <div className="mt-5 space-y-1">
                    <div className="inline-flex items-center gap-1 text-xs font-bold text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5 fill-primary text-primary-foreground" /> Verified Founder & CEO
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Srinithin Somasundaram</h3>
                    <p className="text-xs text-muted-foreground">Founder & CEO, Yesp Corporation</p>
                  </div>
                  
                  <div className="mt-4 flex justify-center items-center gap-3 border-t border-border/60 pt-4">
                    <a
                      href="https://www.linkedin.com/in/srinithinsomasundaram/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-foreground hover:bg-[#0A66C2] hover:text-white transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/srinithin.somasundaram/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-foreground hover:bg-[#E1306C] hover:text-white transition-colors"
                      aria-label="Instagram Profile"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mt-3 text-[0.72rem] text-muted-foreground">
                    <p className="font-bold text-foreground">Yesp Corporation</p>
                    <p className="text-primary font-semibold">Make Better Happen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Story & Philosophy */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> The Founder's Vision
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                "Technology should simplify operations, not complicate them."
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Under the leadership of Srinithin Somasundaram, Yesp Corporation was built on a foundational standard: technology must solve concrete operational challenges, connect fragmented workflows, and deliver measurable business velocity.
              </p>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-3">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" /> The Standard of Better
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  "Make Better Happen. is not just a marketing tagline — it is the engineering standard behind every system, AI model, and workflow engine we architect."
                </p>
                <p className="text-xs font-bold text-primary">— Srinithin Somasundaram</p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-8">
              <article className="rounded-3xl border border-border bg-card p-8 shadow-card space-y-6">
                <h3 className="text-xl font-bold text-foreground">
                  About Srinithin Somasundaram
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Srinithin Somasundaram is an enterprise technology strategist, software architect, and founder who advocates for practical, high-impact business systems. Recognizing that enterprise growth is frequently bottlenecked by disconnected software, legacy manual entry, and fragmented tools, he established Yesp Corporation to engineer custom enterprise platforms, intelligent AI agents, and automated data pipelines.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 pt-2">
                  <div className="rounded-xl border border-border/80 bg-secondary/40 p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Enterprise Software
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Building core operational backbones tailored to exact business workflows.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/80 bg-secondary/40 p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                      AI & Automation
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Integrating autonomous AI agents and automated cross-system pipelines.
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Whether building custom ERP extensions, AI decision support systems, or automated revenue operations, Srinithin ensures every project combines deep domain understanding with world-class engineering execution.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PR & Media Press Section */}
        <section className="border-t border-border/60 bg-gradient-to-b from-card to-background py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Newspaper className="h-3.5 w-3.5 text-primary" /> Press & Media Relations
                </div>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                  Public Relations & Executive Announcements
                </h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                  Media inquiries, speaking engagements, executive quotes, and press kit resources regarding Srinithin Somasundaram and Yesp Corporation.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5 w-fit"
              >
                <Mail className="h-3.5 w-3.5" /> Media Contact
              </Link>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Executive Press Releases</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Official corporate announcements regarding enterprise AI deployments, product launches, and strategic technology developments.
                </p>
                <a
                  href="https://www.linkedin.com/in/srinithinsomasundaram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-2"
                >
                  Follow LinkedIn Releases <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Thought Leadership</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Keynotes, technical commentary, and articles by Srinithin Somasundaram on AI automation, system integrations, and modern enterprise software.
                </p>
                <a
                  href="https://www.instagram.com/srinithin.somasundaram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-2"
                >
                  View Instagram Insights <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <User className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Media & Press Enquiries</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  For interview requests, podcast appearances, or media statements with Srinithin Somasundaram, please contact our PR desk.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-2"
                >
                  Submit PR Request <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Location Lineage */}
        <section className="border-t border-border/60 bg-secondary/30 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Geographical & Cultural Roots
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
                Rooted in Erode · Built in Coimbatore · Operating in Bengaluru
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Srinithin Somasundaram's journey reflects a unique combination of regional grit, engineering discipline, and global operational ambition.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-7 shadow-card space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-foreground">Rooted in Erode</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Ground-level values, resilience, and a deep appreciation for authentic business operations. The foundation of discipline and endurance that defines Srinithin's approach.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-card space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-foreground">Built in Coimbatore</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  The engineering forge. Influenced by Coimbatore's industrial heritage of manufacturing precision, craft, and building resilient systems engineered to last.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-card space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-foreground">Operating in Bengaluru</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  The global technology capital. Headquartered in Bengaluru to partner with scaling enterprises worldwide and build technology for global markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Principles */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Core Leadership Convictions
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Principles guiding Srinithin Somasundaram and the engineering teams at Yesp Corporation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Make Systems Communicate",
                desc: "Eliminate data silos by ensuring software platforms exchange data fluidly.",
                icon: Layers,
              },
              {
                title: "Automate Repetitive Work",
                desc: "Free human talent from manual tasks through intelligent automation.",
                icon: Zap,
              },
              {
                title: "Amplify Capability with AI",
                desc: "Embed AI models into day-to-day operations to boost team decision speed.",
                icon: Cpu,
              },
              {
                title: "Build Around Real Operations",
                desc: "Never force businesses into generic templates — build around actual business logic.",
                icon: ShieldCheck,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Executive Insights & FAQ Section */}
        <section className="border-t border-border/60 bg-secondary/20 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5 text-primary" /> Executive Insights & FAQ
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                Frequently Asked Questions about Srinithin Somasundaram
              </h2>
            </div>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-base font-bold text-foreground">
                  Who is Srinithin Somasundaram?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Srinithin Somasundaram is the Founder & CEO of <strong>Yesp Corporation</strong>, an enterprise technology company headquartered in Bengaluru, India. He leads the company's strategic vision, engineering custom enterprise software, AI systems, and intelligent automation solutions for international businesses.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-base font-bold text-foreground">
                  Where can I connect with Srinithin Somasundaram online?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  You can connect with Srinithin Somasundaram on LinkedIn (<a href="https://www.linkedin.com/in/srinithinsomasundaram/" target="_blank" rel="noopener noreferrer" className="text-primary underline">linkedin.com/in/srinithinsomasundaram/</a>) and Instagram (<a href="https://www.instagram.com/srinithin.somasundaram/" target="_blank" rel="noopener noreferrer" className="text-primary underline">instagram.com/srinithin.somasundaram/</a>).
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-base font-bold text-foreground">
                  What is the origin story and lineage of Srinithin Somasundaram?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Srinithin Somasundaram's technical journey is summarized by the lineage: <em>Rooted in Erode, built in Coimbatore, operating in Bengaluru for global clients</em>. This represents foundational values in Erode, industrial engineering craftsmanship in Coimbatore, and global technology deployment from Bengaluru.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-base font-bold text-foreground">
                  What is Srinithin Somasundaram's slogan for Yesp Corporation?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Srinithin established the official company slogan: <strong>"Make Better Happen."</strong> It serves as the standard for how Yesp Corporation approaches enterprise software, automation, and AI integrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-brand p-10 text-primary-foreground md:flex-row">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold md:text-3xl">Get connected with Yesp Corporation.</h2>
              <p className="mt-2 text-sm opacity-90">
                Explore how Srinithin Somasundaram and the Yesp engineering team can modernize your business software and AI workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                Get Connected <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
