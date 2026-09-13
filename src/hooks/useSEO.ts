import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  jsonLd?: object | object[];
}

function setMeta(selector: string, attrKey: string, attrVal: string, contentVal: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrKey, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute("content", contentVal);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({ title, description, keywords, canonical, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    if (keywords) {
      setMeta('meta[name="keywords"]', "name", "keywords", keywords);
    }
    if (canonical) {
      setLink("canonical", canonical);
      setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    }

    const schemaId = "__yesp_page_jsonld__";
    let script = document.getElementById(schemaId);
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = schemaId;
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      script.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    } else if (script) {
      script.remove();
    }
  }, [title, description, keywords, canonical, jsonLd]);
}
