import { useEffect } from "react";

const upsertMeta = (selector, createAttrs, valueAttr, value) => {
  if (!value) return;

  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(createAttrs).forEach(([key, attrValue]) => {
      element.setAttribute(key, attrValue);
    });
    document.head.appendChild(element);
  }
  element.setAttribute(valueAttr, value);
};

const upsertCanonical = (href) => {
  if (!href) return;

  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const PageMeta = ({
  title,
  description,
  keywords,
  canonical,
  robots,
  ogTitle,
  ogDescription,
  ogUrl,
}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    upsertMeta('meta[name="description"]', { name: "description" }, "content", description);
    upsertMeta('meta[name="keywords"]', { name: "keywords" }, "content", keywords);
    upsertMeta('meta[name="robots"]', { name: "robots" }, "content", robots);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, "content", ogTitle || title);
    upsertMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      "content",
      ogDescription || description
    );
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, "content", ogUrl || canonical);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, "content", "website");
    upsertCanonical(canonical);
  }, [title, description, keywords, canonical, robots, ogTitle, ogDescription, ogUrl]);

  return null;
};

export default PageMeta;
