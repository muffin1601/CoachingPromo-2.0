import ReactPage from './ReactPage';
import { routeMetadata } from '@/lib/route-metadata';
import { getSubcategory } from '@/lib/api';
import { breadcrumbSchema, collectionPageSchema, faqSchema, jsonLd } from '@/lib/seo';
import { getSubcategorySeoContent } from '@/lib/seo-content';
import { notFound } from 'next/navigation';
export async function generateMetadata({ params }) { return routeMetadata("[category]/[subcategory]", await params); }
export default async function Page({ params }) {
  const { category, subcategory } = await params;
  const initialData = await getSubcategory(category, subcategory);
  if (!initialData?.subcategory) notFound();
  const editorialSeo = getSubcategorySeoContent(category, subcategory);
  const canonicalPath = `/${category}/${subcategory}`;
  const breadcrumbs = breadcrumbSchema([['Home', '/'], [initialData.category?.name || category, `/categories/${category}`], [initialData.subcategory.name, `/${category}/${subcategory}`]]);
  const collection = editorialSeo && collectionPageSchema({
    name: editorialSeo.title,
    description: editorialSeo.metaDescription,
    path: canonicalPath,
    products: initialData.products,
  });
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
    {collection && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(collection) }} />}
    {editorialSeo?.faqs && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(editorialSeo.faqs)) }} />}
    <ReactPage initialData={initialData} />
  </>;
}
