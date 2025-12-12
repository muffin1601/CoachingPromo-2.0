import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={ogUrl || canonical} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
