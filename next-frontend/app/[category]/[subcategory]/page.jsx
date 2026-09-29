import ReactPage from './ReactPage';
import { routeMetadata } from '@/lib/route-metadata';
import { getSubcategory } from '@/lib/api';
import { breadcrumbSchema, jsonLd } from '@/lib/seo';
import { notFound } from 'next/navigation';
export async function generateMetadata({ params }) { return routeMetadata("[category]/[subcategory]", await params); }
export default async function Page({ params }) {
  const { category, subcategory } = await params;
  const initialData = await getSubcategory(category, subcategory);
  if (!initialData?.subcategory) notFound();
  const breadcrumbs = breadcrumbSchema([['Home', '/'], [initialData.category?.name || category, `/categories/${category}`], [initialData.subcategory.name, `/${category}/${subcategory}`]]);
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} /><ReactPage initialData={initialData} /></>;
}
