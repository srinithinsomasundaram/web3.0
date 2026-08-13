import { Link } from "react-router-dom";
import logo from "@/assets/yesp-footer-logo.png";
import { bookingUrl } from "@/lib/links";
import { MapPin, Mail, ArrowUpRight, Linkedin, Instagram } from "lucide-react";
import { MakeBetterHappenLogo } from "@/components/brand/MakeBetterHappenLogo";

export function SiteFooter() {
  return (
    <footer className="surface-ink border-t border-white/10 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12 md:gap-8">
          {/* Brand Info Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Yesp Corporation logo" className="h-10 w-10 object-contain" />
              <span className="font-display text-xl font-extrabold tracking-tight">Yesp Corporation</span>
            </div>
            
            {/* Official Brand Slogan Graphic */}
            <div className="py-1">
              <MakeBetterHappenLogo size="sm" theme="dark" />
            </div>

            <p className="text-xs opacity-75 max-w-sm leading-relaxed">
              Custom software backbones, practical AI agents, and intelligent workflow automation built for global enterprises.
            </p>
            <div className="space-y-2 pt-1 text-xs opacity-70 font-medium">
              <p className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0 opacity-90" /> Erode · Coimbatore · Bengaluru
              </p>
              <a
                href="mailto:hello@yespstudio.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-primary shrink-0 opacity-90" /> hello@yespstudio.com
              </a>
            </div>

            {/* Official Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/yespstudio"
                target="_blank"
                rel="noreferrer"
                aria-label="Yesp LinkedIn Profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/yespstudio"
                target="_blank"
                rel="noreferrer"
                aria-label="Yesp Instagram Profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column 1: Company */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Company</p>
            <ul className="space-y-2.5 text-sm opacity-80 font-medium">
              <li>
                <Link to="/about" className="hover:opacity-100 transition-opacity">About Yesp</Link>
              </li>
              <li>
                <Link to="/founder" className="hover:opacity-100 transition-opacity">Founder Profile</Link>
              </li>
              <li>
                <Link to="/press" className="hover:opacity-100 transition-opacity">Press Center</Link>
              </li>
              <li>
                <Link to="/articles" className="hover:opacity-100 transition-opacity">Executive Articles</Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Work & Talent */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Solutions & Work</p>
            <ul className="space-y-2.5 text-sm opacity-80 font-medium">
              <li>
                <Link to="/yesp-core" className="hover:opacity-100 transition-opacity font-bold text-primary">Yesp Core</Link>
              </li>
              <li>
                <Link to="/tech-expertise" className="hover:opacity-100 transition-opacity">Technical Expertise</Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:opacity-100 transition-opacity">Selected Client Work</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:opacity-100 transition-opacity">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:opacity-100 transition-opacity">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Action */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Action</p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs opacity-60">
          <p>© {new Date().getFullYear()} Yesp Corporation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/sitelinks" className="hover:opacity-100 hover:underline transition-opacity font-semibold text-primary">Sitelinks Directory</Link>
            <span>·</span>
            <span>Yesp Corp Global Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
