import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import HomePage from "./routes/index";
import YespOnePage from "./routes/yesp-one";
import AboutPage from "./routes/about";
import ContactPage from "./routes/contact";
import CareersPage from "./routes/careers";
import CaseStudiesPage from "./routes/case-studies";
import TechExpertisePage from "./routes/tech-expertise";
import FounderPage from "./routes/founder";

import PressIndexPage from "./routes/press.index";
import PressAiAutomationPage from "./routes/press.ai-automation-launch";
import PressGlobalExpansionPage from "./routes/press.global-expansion-bengaluru";
import PressMakeBetterPage from "./routes/press.make-better-happen-initiative";
import PressKeynotePage from "./routes/press.srinithin-somasundaram-keynote-future-of-ai";
import PressAiInfraPage from "./routes/press.yesp-corp-global-expansion-and-ai-infrastructure";

import ArticlesIndexPage from "./routes/articles.index";
import ArticleSaasPage from "./routes/articles.building-custom-enterprise-software-vs-saas";
import ArticleIntegrationsPage from "./routes/articles.eliminating-data-silos-with-zero-latency-integrations";
import ArticleLineagePage from "./routes/articles.eroded-coimbatore-bengaluru-tech-lineage";
import ArticleAiAgentsPage from "./routes/articles.practical-ai-agents-in-enterprise-workflows";
import ArticleFrameworkPage from "./routes/articles.the-make-better-happen-engineering-framework";
import ArticleAiDeliveryPage from "./routes/articles.yesp-corp-global-engineering-and-ai-delivery";

import ServicesIndexPage from "./routes/services.index";
import ServiceDetailPage from "./routes/services.$slug";
import YespAccountsIndexPage from "./routes/yesp-accounts.index";
import YespAccountsDetailPage from "./routes/yesp-accounts.$slug";
import VisionPage from "./routes/vision";
import IndustriesIndexPage from "./routes/industries.index";
import IndustryDetailPage from "./routes/industries.$slug";
import LocationDetailPage from "./routes/locations.$slug";
import SolutionsPage from "./routes/solutions";
import SearchPage from "./routes/search";
import CookiesPage from "./routes/cookies";
import SitelinksPage from "./routes/sitelinks";

import { CookieConsent } from "./components/site/CookieConsent";
import { FloatingSloganTag } from "./components/site/FloatingSloganTag";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yesp-one" element={<YespOnePage />} />
        <Route path="/yesp-core" element={<YespOnePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/tech-expertise" element={<TechExpertisePage />} />
        <Route path="/founder" element={<FounderPage />} />

        {/* Services */}
        <Route path="/services" element={<ServicesIndexPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />

        {/* Yesp Accounts */}
        <Route path="/yesp-accounts" element={<YespAccountsIndexPage />} />
        <Route path="/yesp-accounts/:slug" element={<YespAccountsDetailPage />} />

        {/* Solutions hub */}
        <Route path="/solutions" element={<SolutionsPage />} />

        {/* Industries */}
        <Route path="/industries" element={<IndustriesIndexPage />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />

        {/* Locations / GEO */}
        <Route path="/locations/:slug" element={<LocationDetailPage />} />
        <Route path="/india" element={<LocationDetailPage />} />
        <Route path="/united-kingdom" element={<LocationDetailPage />} />
        <Route path="/usa" element={<LocationDetailPage />} />
        <Route path="/australia" element={<LocationDetailPage />} />
        <Route path="/singapore" element={<LocationDetailPage />} />
        <Route path="/canada" element={<LocationDetailPage />} />
        <Route path="/dubai" element={<LocationDetailPage />} />

        {/* Press Center */}
        <Route path="/press" element={<PressIndexPage />} />
        <Route path="/press/ai-automation-launch" element={<PressAiAutomationPage />} />
        <Route path="/press/global-expansion-bengaluru" element={<PressGlobalExpansionPage />} />
        <Route path="/press/make-better-happen-initiative" element={<PressMakeBetterPage />} />
        <Route path="/press/srinithin-somasundaram-keynote-future-of-ai" element={<PressKeynotePage />} />
        <Route path="/press/yesp-corp-global-expansion-and-ai-infrastructure" element={<PressAiInfraPage />} />

        {/* Executive Articles */}
        <Route path="/articles" element={<ArticlesIndexPage />} />
        <Route path="/articles/building-custom-enterprise-software-vs-saas" element={<ArticleSaasPage />} />
        <Route path="/articles/eliminating-data-silos-with-zero-latency-integrations" element={<ArticleIntegrationsPage />} />
        <Route path="/articles/eroded-coimbatore-bengaluru-tech-lineage" element={<ArticleLineagePage />} />
        <Route path="/articles/practical-ai-agents-in-enterprise-workflows" element={<ArticleAiAgentsPage />} />
        <Route path="/articles/the-make-better-happen-engineering-framework" element={<ArticleFrameworkPage />} />
        <Route path="/articles/yesp-corp-global-engineering-and-ai-delivery" element={<ArticleAiDeliveryPage />} />

        {/* Search & Utility Pages */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/sitelinks" element={<SitelinksPage />} />

        {/* Catch-all fallback to Home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <FloatingSloganTag />
      <CookieConsent />
    </Router>
  );
}
