import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/yesp-footer-logo.png";
import { bookingUrl } from "@/lib/links";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { SiteInlineSearch } from "./SiteInlineSearch";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Brand Logo */}
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={logo} alt="Yesp Corporation logo" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-normal text-foreground sm:text-xl">
              Yesp
            </span>
            <span className="hidden text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted-foreground min-[380px]:block">
              Corporation
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-xs font-semibold text-muted-foreground lg:flex">
          <a href="/#solutions" className="transition-colors hover:text-foreground">Solutions</a>
          <a href="/#process" className="transition-colors hover:text-foreground">Process</a>
          <Link to="/about" className="transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-bold" }}>
            About
          </Link>
          <Link to="/case-studies" className="transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-bold" }}>
            Client Work
          </Link>
          <Link to="/careers" className="transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-bold" }}>
            Careers
          </Link>
          <Link to="/contact" className="transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-bold" }}>
            Contact
          </Link>
        </nav>

        {/* Inline Search, CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Clean Inline Search Bar */}
          <SiteInlineSearch />

          {/* Book a Call CTA */}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-brand px-3 py-1.5 text-[0.72rem] font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-xs"
          >
            Book a Call
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all md:hidden shrink-0 shadow-sm focus:outline-none ${
              mobileMenuOpen
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary/80 text-foreground hover:bg-secondary hover:border-primary/40"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-border/80 bg-background/95 backdrop-blur-lg md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-4 text-sm font-semibold text-foreground">
            <a
              href="/#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between border-b border-border/40 pb-3 hover:text-primary"
            >
              <span>Solutions & Capabilities</span>
              <ArrowRight className="h-4 w-4 opacity-50" />
            </a>
            <a
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between border-b border-border/40 pb-3 hover:text-primary"
            >
              <span>How We Work</span>
              <ArrowRight className="h-4 w-4 opacity-50" />
            </a>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between border-b border-border/40 pb-3 hover:text-primary"
            >
              <span>About Yesp Corporation</span>
              <ArrowRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/founder"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between border-b border-border/40 pb-3 hover:text-primary"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" /> Founder Profile
              </span>
              <ArrowRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/press"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between border-b border-border/40 pb-3 hover:text-primary"
            >
              <span>Press Center</span>
              <ArrowRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/articles"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between border-b border-border/40 pb-3 hover:text-primary"
            >
              <span>Executive Articles</span>
              <ArrowRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between border-b border-border/40 pb-3 hover:text-primary"
            >
              <span>Client Case Studies</span>
              <ArrowRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between border-b border-border/40 pb-3 hover:text-primary"
            >
              <span>Careers (Remote)</span>
              <ArrowRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between hover:text-primary pt-1"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4 opacity-50" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
