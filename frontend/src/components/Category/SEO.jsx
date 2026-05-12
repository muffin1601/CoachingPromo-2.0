import PageMeta from "../PageMeta";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
}) => (
  <PageMeta
    title={title}
    description={description}
    keywords={keywords}
    canonical={canonical}
    ogTitle={ogTitle}
    ogDescription={ogDescription}
    ogUrl={ogUrl}
  />
);

export default SEO;
