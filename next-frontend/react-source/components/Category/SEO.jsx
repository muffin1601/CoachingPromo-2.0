import PageMeta from "../PageMeta";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  image,
  imageAlt,
  type,
  schema,
}) => (
  <PageMeta
    title={title}
    description={description}
    keywords={keywords}
    canonical={canonical}
    ogTitle={ogTitle}
    ogDescription={ogDescription}
    ogUrl={ogUrl}
    image={image}
    imageAlt={imageAlt}
    type={type}
    schema={schema}
  />
);

export default SEO;
