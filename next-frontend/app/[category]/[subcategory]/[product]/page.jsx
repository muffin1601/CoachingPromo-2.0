import ReactPage from './ReactPage';
import { routeMetadata } from '@/lib/route-metadata';
import { getProduct, getSubcategory, productHref } from '@/lib/api';
import { breadcrumbSchema, jsonLd, productSchema } from '@/lib/seo';
import { notFound, permanentRedirect } from 'next/navigation';
export async function generateMetadata({ params }) { return routeMetadata("[category]/[subcategory]/[product]", await params); }
export default async function Page({ params }) {
  const { category, subcategory, product: slug } = await params;
  const [initialData, relatedData] = await Promise.all([
    getProduct(slug),
    getSubcategory(category, subcategory),
  ]);
  const product = initialData?.product;
  if (!product || product.isActive === false || !product.category?.slug || !product.subcategory?.slug) notFound();
  const canonicalPath = productHref(product);
  if (category !== product.category.slug || subcategory !== product.subcategory.slug) permanentRedirect(canonicalPath);
  const breadcrumbs = breadcrumbSchema([['Home', '/'], [product.category.name, `/categories/${category}`], [product.subcategory.name, `/${category}/${subcategory}`], [product.name, canonicalPath]]);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(productSchema(product, canonicalPath)) }} />
    <ReactPage initialData={{
      product,
      category: product.category,
      subcategory: product.subcategory,
      relatedProducts: (relatedData?.products || []).filter(item => item.slug !== product.slug).slice(0, 4),
    }} />
  </>;
}
