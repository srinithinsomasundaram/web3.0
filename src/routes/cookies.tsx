
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const categories = [
  {
    t: "Strictly necessary",
    d: "Required for the website to function, including remembering your cookie choice. These cannot be switched off.",
  },
  {
    t: "Analytics",
    d: "Help us understand which pages are useful so we can improve the site. Set only if you accept cookies.",
  },
  {
    t: "Functional",
    d: "Remember preferences such as forms you have already submitted, to avoid asking twice.",
  },
];

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-extrabold md:text-5xl">Cookie Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date().getFullYear()}
        </p>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          This policy explains how Yesp Corporation uses cookies and similar technologies on this
          website. A cookie is a small text file stored on your device when you visit a site.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Categories of cookies we use</h2>
        <div className="mt-6 space-y-4">
          {categories.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-bold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold">Managing your choice</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          You can accept or decline non-essential cookies using the banner shown on your first
          visit. Your choice is stored locally in your browser. To change it, clear this site's
          data in your browser settings and reload the page — the banner will appear again.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Questions</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Write to{" "}
          <a href="mailto:hello@yespstudio.com" className="font-semibold text-primary">
            hello@yespstudio.com
          </a>{" "}
          and we'll respond.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}