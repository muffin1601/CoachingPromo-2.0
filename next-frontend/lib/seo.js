import { siteUrl } from './api';

export const canonicalUrl = (path = '/') => new URL(path, `${siteUrl}/`).toString();

export const jsonLd = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

const imageUrl = (value) => {
  const src = value?.url || value;
  if (!src || typeof src !== 'string') return undefined;
  return /^https?:\/\//i.test(src) ? src : canonicalUrl(src);
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'Organization', '@id': `${siteUrl}/#organization`,
    name: 'CoachingPromo', url: canonicalUrl('/'), logo: canonicalUrl('/logo.webp'),
    contactPoint: [{ '@type': 'ContactPoint', telephone: '+91-8750708222', contactType: 'sales', areaServed: 'IN', availableLanguage: ['English', 'Hindi'] }],
  };
}

export function websiteSchema() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'CoachingPromo', url: canonicalUrl('/'), inLanguage: 'en-IN', publisher: { '@id': `${siteUrl}/#organization` } };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], index) => ({ '@type': 'ListItem', position: index + 1, name, item: canonicalUrl(path) })),
  };
}

export function productSchema(product, path) {
  const description = [product?.description?.short, product?.description?.long, product?.seo?.metaDescription]
    .find(value => typeof value === 'string' && value.trim());
  const images = (product?.images || []).map(imageUrl).filter(Boolean);
  const price = Number(product?.salePrice > 0 && product.salePrice < product.price ? product.salePrice : product?.price);
  const schema = {
    '@context': 'https://schema.org', '@type': 'Product', '@id': `${canonicalUrl(path)}#product`,
    name: product.name, url: canonicalUrl(path), brand: { '@type': 'Brand', name: 'CoachingPromo' },
    ...(description ? { description } : {}), ...(images.length ? { image: images } : {}),
    ...(product.sku ? { sku: product.sku } : {}),
  };
  if (Number.isFinite(price) && price > 0 && Number(product.stock) > 0) {
    schema.offers = { '@type': 'Offer', url: canonicalUrl(path), priceCurrency: 'INR', price,
      availability: 'https://schema.org/InStock', itemCondition: 'https://schema.org/NewCondition' };
  }
  return schema;
}

export function articleSchema(blog, path) {
  const datePublished = blog.publishedAt || blog.date || blog.createdAt;
  const dateModified = blog.updatedAt || datePublished;
  const content = typeof blog.content === 'string' ? blog.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : '';
  const media = blog.featuredImage || blog.media;
  const image = imageUrl(media ? (/^https?:\/\//i.test(media) || media.startsWith('/') ? media : `/uploads/blogs/${media}`) : undefined);
  return {
    '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `${canonicalUrl(path)}#article`,
    headline: blog.title, mainEntityOfPage: canonicalUrl(path), publisher: { '@id': `${siteUrl}/#organization` },
    ...(blog.author ? { author: { '@type': 'Person', name: blog.author } } : {}),
    ...(blog.excerpt || content ? { description: blog.excerpt || content.slice(0, 200) } : {}),
    ...(datePublished ? { datePublished } : {}), ...(dateModified ? { dateModified } : {}),
    ...(image ? { image: [image] } : {}),
  };
}
