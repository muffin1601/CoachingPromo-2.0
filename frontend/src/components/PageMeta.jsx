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
  image,
  imageAlt,
  type = "website",
  schema,
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
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, "content", type);
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, "content", image);
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }, "content", imageAlt || title);
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, "content", "CoachingPromo");
    upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, "content", "en_IN");
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "content", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, "content", ogTitle || title);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, "content", ogDescription || description);
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, "content", image);
    upsertMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt" }, "content", imageAlt || title);
    upsertCanonical(canonical);
    let script = document.head.querySelector('script[data-page-schema="true"]');
    if (schema) {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.dataset.pageSchema = "true";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else if (script) script.remove();
  }, [title, description, keywords, canonical, robots, ogTitle, ogDescription, ogUrl, image, imageAlt, type, schema]);

  return null;
};

export default PageMeta;
