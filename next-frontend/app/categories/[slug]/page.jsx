import ReactPage from './ReactPage';
import { routeMetadata } from '@/lib/route-metadata';
import { getCategory } from '@/lib/api';
import { breadcrumbSchema, jsonLd } from '@/lib/seo';
import { notFound } from 'next/navigation';
export async function generateMetadata({ params }) { return routeMetadata("categories/[slug]", await params); }
export default async function Page({ params }) {
  const { slug } = await params;
  const initialData = await getCategory(slug);
  if (!initialData?.category) notFound();
  const breadcrumbs = breadcrumbSchema([['Home', '/'], [initialData.category.name, `/categories/${slug}`]]);
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} /><ReactPage initialData={initialData} /></>;
}
