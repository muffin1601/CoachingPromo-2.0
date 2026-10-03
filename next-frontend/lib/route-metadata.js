import { encodePathSegment, siteUrl } from './api';
import { getSubcategorySeoContent } from './seo-content';
const titles = {
  '': 'Promotional Products for Coaching Institutes | CoachingPromo',
  about: 'About Our Custom Merchandise Team | CoachingPromo',
  contact: 'Contact CoachingPromo for Bulk Merchandise Orders',
  blogs: 'Branding & Merchandise Ideas for Institutes | CoachingPromo',
  offers: 'Bulk Merchandise Offers | CoachingPromo', search: 'Search Products', login: 'Login',
  register: 'Register', profile: 'My Profile', cart: 'Your Cart', checkout: 'Checkout', favorites: 'Favorites',
};
const descriptions = {
  '': 'Custom promotional products, apparel, student kits and stationery for coaching institutes, schools and colleges. Explore logo branding and bulk orders across India.',
  about: 'Learn how CoachingPromo helps education teams source custom apparel, student bags, stationery and branded gifts for institutes across India.',
  contact: 'Contact CoachingPromo in New Delhi about custom merchandise, logo branding and bulk orders for coaching institutes, schools and colleges.',
  blogs: 'Ideas and guides for institute branding, custom apparel, promotional products and student merchandise from CoachingPromo.',
  offers: 'Explore available promotional merchandise offers and bulk-order options for institutes, schools and education teams.',
};
const categorySeo = {
  'apparel-accessories': {
    title: 'Custom Apparel for Coaching Institutes | T-Shirts & Jackets',
    description: 'Browse custom T-shirts, hoodies, teacher jackets and graduation wear for coaching institutes, schools and colleges. Request bulk logo branding.',
  },
  bags: {
    title: 'Custom Bags for Coaching Institutes | Bulk Logo Printing',
    description: 'Browse custom backpacks, tote bags and messenger bags for student kits, institute staff and events. Request logo branding and bulk pricing.',
  },
  'promotional-items': {
    title: 'Promotional Products for Coaching Institutes | Bulk India',
    description: 'Explore branded promotional products for coaching institutes, schools and education teams, including diaries, bottles, awards and desk items.',
  },
  stationery: {
    title: 'Custom Stationery for Coaching Institutes | Bulk Printing',
    description: 'Custom notebooks, attendance registers, degree folders, pens and academic stationery for schools, colleges and coaching institutes.',
  },
};
export async function routeMetadata(route, params = {}) {
  const pathname = '/' + route.replace(/\[([^\]]+)\]/g, (_, key) => encodeURIComponent(params[key] || ''));
  let canonicalPath = pathname;
  let title = titles[route] || 'CoachingPromo';
  let description = descriptions[route] || descriptions[''];
  const privateRoute = /^(admin|customize|login|register|profile|cart|checkout|favorites|search|forgot-password|resetpassword|blogs\/post)/.test(route);
  let endpoint;
  if (route === 'categories/[slug]') endpoint = `/categories/${encodePathSegment(params.slug)}`;
  if (route === '[category]/[subcategory]') endpoint = `/subcategories/${encodePathSegment(params.category)}/${encodePathSegment(params.subcategory)}`;
  if (route.endsWith('[product]')) endpoint = `/products/${encodePathSegment(params.product)}`;
  if (route === 'blogs/[id]') endpoint = `/blogs/${encodePathSegment(params.id)}`;
  let image = '/logo.webp';
  let publishedTime;
  let modifiedTime;
  if (endpoint) {
    try {
      const backend = (process.env.BACKEND_URL || 'http://127.0.0.1:5001').replace(/\/$/, '');
      const response = await fetch(`${backend}/api${endpoint}`, { next: { revalidate: 120 }, signal: AbortSignal.timeout(5000) });
      if (response.ok) {
        const data = await response.json();
        const entity = data.product || data.subcategory || data.category || data;
        const entityDescription = typeof entity.description === 'string' ? entity.description
          : entity.description?.short || entity.description?.long;
        const content = typeof entity.content === 'string' ? entity.content.replace(/<[^>]*>/g, ' ') : '';
        title = entity.seo?.metaTitle || entity.seoTitle || entity.title || entity.name || title;
        description = entity.seo?.metaDescription || entity.metaDescription || entity.excerpt || entityDescription || content || description;
        image = entity.images?.[0]?.url || entity.featuredImage || entity.media || image;
        if (route === 'blogs/[id]' && image && !/^https?:|^\//.test(image)) image = `/uploads/blogs/${image}`;
        if (route.endsWith('[product]') && entity.category?.slug && entity.subcategory?.slug && entity.slug) {
          canonicalPath = `/${encodePathSegment(entity.category.slug)}/${encodePathSegment(entity.subcategory.slug)}/${encodePathSegment(entity.slug)}`;
        }
        if (route === 'blogs/[id]' && entity.slug) canonicalPath = `/blogs/${encodePathSegment(entity.slug)}`;
        publishedTime = entity.publishedAt || entity.date || entity.createdAt;
        modifiedTime = entity.updatedAt;
      }
    } catch { /* The React page retains its existing API error UI. */ }
  }
  const editorialSeo = route === '[category]/[subcategory]'
    ? getSubcategorySeoContent(params.category, params.subcategory)
    : null;
  if (editorialSeo) {
    title = editorialSeo.categoryMetaTitle || editorialSeo.metaTitle;
    description = editorialSeo.categoryMetaDescription || editorialSeo.metaDescription;
  }
  if (route === 'categories/[slug]' && categorySeo[params.slug]) {
    title = categorySeo[params.slug].title;
    description = categorySeo[params.slug].description;
  }
  description = String(description).replace(/\s+/g, ' ').trim().slice(0, 170);
  const url = `${siteUrl}${canonicalPath}`;
  const openGraph = { title, description, url, siteName: 'CoachingPromo', locale: 'en_IN',
    type: route === 'blogs/[id]' ? 'article' : 'website', images: [image] };
  if (route === 'blogs/[id]') {
    if (publishedTime) openGraph.publishedTime = publishedTime;
    if (modifiedTime) openGraph.modifiedTime = modifiedTime;
  }
  return { title, description, ...(editorialSeo?.keywords ? { keywords: editorialSeo.keywords } : {}), alternates: { canonical: canonicalPath }, robots: { index: !privateRoute, follow: !privateRoute },
    openGraph, twitter: { card: 'summary_large_image', title, description, images: [image] } };
}
