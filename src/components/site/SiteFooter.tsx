import { Link } from "react-router-dom";
import logo from "@/assets/yesp-footer-logo.png";
import { bookingUrl } from "@/lib/links";
import { MapPin, Mail, ArrowUpRight, Linkedin, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="surface-ink border-t border-white/10 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12 md:gap-8">
          {/* Brand Info Column */}
          <div className="md:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Yesp Corporation logo" className="h-10 w-10 object-contain" />
              <span className="font-display text-xl font-extrabold tracking-tight">Yesp Corporation</span>
            </div>
            <p className="text-sm opacity-75 max-w-sm leading-relaxed">
              Make Better Happen. Enterprise Software, AI & Automation for global businesses.
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

          {/* Company */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Company</p>
            <ul className="space-y-2.5 text-sm opacity-80 font-medium">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Yesp</Link></li>
              <li><Link to="/founder" className="hover:opacity-100 transition-opacity">Founder Profile</Link></li>
              <li><Link to="/press" className="hover:opacity-100 transition-opacity">Press Center</Link></li>
              <li><Link to="/articles" className="hover:opacity-100 transition-opacity">Executive Articles</Link></li>
              <li><Link to="/case-studies" className="hover:opacity-100 transition-opacity">Case Studies</Link></li>
              <li><Link to="/careers" className="hover:opacity-100 transition-opacity">Careers</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Services</p>
            <ul className="space-y-2.5 text-sm opacity-80 font-medium">
              <li><Link to="/services/enterprise-software-development" className="hover:opacity-100 transition-opacity">Enterprise Software</Link></li>
              <li><Link to="/services/ai-development" className="hover:opacity-100 transition-opacity">AI Development</Link></li>
              <li><Link to="/services/ai-agents" className="hover:opacity-100 transition-opacity">AI Agents</Link></li>
              <li><Link to="/services/ai-automation" className="hover:opacity-100 transition-opacity">AI Automation</Link></li>
              <li><Link to="/services/generative-ai" className="hover:opacity-100 transition-opacity">Generative AI</Link></li>
              <li><Link to="/services/ai-voice-agents" className="hover:opacity-100 transition-opacity">AI Voice Agents</Link></li>
              <li><Link to="/services/document-intelligence" className="hover:opacity-100 transition-opacity">Document Intelligence</Link></li>
              <li><Link to="/services/sales-automation" className="hover:opacity-100 transition-opacity">Sales Automation</Link></li>
              <li><Link to="/services/erp-development" className="hover:opacity-100 transition-opacity">ERP Development</Link></li>
              <li><Link to="/services/crm-development" className="hover:opacity-100 transition-opacity">CRM Development</Link></li>
              <li><Link to="/services/system-integration" className="hover:opacity-100 transition-opacity">System Integration</Link></li>
              <li><Link to="/services/digital-transformation" className="hover:opacity-100 transition-opacity">Digital Transformation</Link></li>
              <li><Link to="/services/custom-saas-development" className="hover:opacity-100 transition-opacity">SaaS Development</Link></li>
              <li><Link to="/services/business-process-automation" className="hover:opacity-100 transition-opacity">Business Automation</Link></li>
              <li><Link to="/services/legacy-system-modernization" className="hover:opacity-100 transition-opacity">Legacy Modernization</Link></li>
              <li><Link to="/solutions" className="hover:opacity-100 transition-opacity font-bold text-primary/90">Solutions Hub</Link></li>
            </ul>
          </div>

          {/* Yesp Accounts */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Yesp Accounts</p>
            <ul className="space-y-2.5 text-sm opacity-80 font-medium">
              <li><Link to="/yesp-accounts" className="hover:opacity-100 transition-opacity font-bold text-primary/90">Platform Overview</Link></li>
              <li><Link to="/yesp-accounts/single-sign-on" className="hover:opacity-100 transition-opacity">Single Sign-On</Link></li>
              <li><Link to="/yesp-accounts/multi-factor-authentication" className="hover:opacity-100 transition-opacity">MFA</Link></li>
              <li><Link to="/yesp-accounts/passkeys" className="hover:opacity-100 transition-opacity">Passkeys</Link></li>
              <li><Link to="/yesp-accounts/organization-management" className="hover:opacity-100 transition-opacity">Organisations</Link></li>
              <li><Link to="/yesp-accounts/oauth-api" className="hover:opacity-100 transition-opacity">OAuth2 API</Link></li>
              <li><Link to="/yesp-accounts/session-management" className="hover:opacity-100 transition-opacity">Sessions</Link></li>
              <li><Link to="/yesp-accounts/smart-login" className="hover:opacity-100 transition-opacity">Smart Login</Link></li>
              <li><Link to="/yesp-accounts/india" className="hover:opacity-100 transition-opacity">For India</Link></li>
              <li><Link to="/yesp-accounts/uk" className="hover:opacity-100 transition-opacity">For UK</Link></li>
              <li><Link to="/yesp-accounts/usa" className="hover:opacity-100 transition-opacity">For USA</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Industries</p>
            <ul className="space-y-2.5 text-sm opacity-80 font-medium">
              <li><Link to="/industries/technology" className="hover:opacity-100 transition-opacity">Technology & SaaS</Link></li>
              <li><Link to="/industries/healthcare" className="hover:opacity-100 transition-opacity">Healthcare</Link></li>
              <li><Link to="/industries/manufacturing" className="hover:opacity-100 transition-opacity">Manufacturing</Link></li>
              <li><Link to="/industries/logistics" className="hover:opacity-100 transition-opacity">Logistics</Link></li>
              <li><Link to="/industries/education" className="hover:opacity-100 transition-opacity">Education</Link></li>
              <li><Link to="/industries/real-estate" className="hover:opacity-100 transition-opacity">Real Estate</Link></li>
            </ul>
          </div>

          {/* Locations India */}
          <div className="md:col-span-1 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">India</p>
            <ul className="space-y-2.5 text-sm opacity-80 font-medium">
              <li><Link to="/locations/india" className="hover:opacity-100 transition-opacity">India</Link></li>
              <li><Link to="/locations/tamil-nadu" className="hover:opacity-100 transition-opacity">Tamil Nadu</Link></li>
              <li><Link to="/locations/coimbatore" className="hover:opacity-100 transition-opacity">Coimbatore</Link></li>
              <li><Link to="/locations/erode" className="hover:opacity-100 transition-opacity">Erode</Link></li>
              <li><Link to="/locations/bengaluru" className="hover:opacity-100 transition-opacity">Bengaluru</Link></li>
              <li><Link to="/locations/chennai" className="hover:opacity-100 transition-opacity">Chennai</Link></li>
              <li><Link to="/locations/mumbai" className="hover:opacity-100 transition-opacity">Mumbai</Link></li>
              <li><Link to="/locations/delhi" className="hover:opacity-100 transition-opacity">Delhi NCR</Link></li>
              <li><Link to="/locations/hyderabad" className="hover:opacity-100 transition-opacity">Hyderabad</Link></li>
              <li><Link to="/locations/pune" className="hover:opacity-100 transition-opacity">Pune</Link></li>
            </ul>
          </div>

          {/* Locations Global + Action */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">United Kingdom</p>
              <ul className="space-y-2.5 text-sm opacity-80 font-medium">
                <li><Link to="/locations/united-kingdom" className="hover:opacity-100 transition-opacity">United Kingdom</Link></li>
                <li><Link to="/locations/london" className="hover:opacity-100 transition-opacity">London</Link></li>
                <li><Link to="/locations/manchester" className="hover:opacity-100 transition-opacity">Manchester</Link></li>
                <li><Link to="/locations/birmingham" className="hover:opacity-100 transition-opacity">Birmingham</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Americas</p>
              <ul className="space-y-2.5 text-sm opacity-80 font-medium">
                <li><Link to="/locations/usa" className="hover:opacity-100 transition-opacity">United States</Link></li>
                <li><Link to="/locations/new-york" className="hover:opacity-100 transition-opacity">New York</Link></li>
                <li><Link to="/locations/san-francisco" className="hover:opacity-100 transition-opacity">San Francisco</Link></li>
                <li><Link to="/locations/canada" className="hover:opacity-100 transition-opacity">Canada</Link></li>
                <li><Link to="/locations/toronto" className="hover:opacity-100 transition-opacity">Toronto</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">APAC &amp; UAE</p>
              <ul className="space-y-2.5 text-sm opacity-80 font-medium">
                <li><Link to="/locations/dubai" className="hover:opacity-100 transition-opacity">Dubai, UAE</Link></li>
                <li><Link to="/locations/singapore" className="hover:opacity-100 transition-opacity">Singapore</Link></li>
                <li><Link to="/locations/australia" className="hover:opacity-100 transition-opacity">Australia</Link></li>
                <li><Link to="/locations/sydney" className="hover:opacity-100 transition-opacity">Sydney</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
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
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs opacity-60">
          <p>© {new Date().getFullYear()} Yesp Corporation. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <Link to="/sitelinks" className="hover:opacity-100 hover:underline transition-opacity font-semibold text-primary">Sitelinks Directory</Link>
            <span>·</span>
            <Link to="/cookies" className="hover:opacity-100 transition-opacity">Cookie Policy</Link>
            <span>·</span>
            <span>Yesp Corp Global Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
