import { notFound } from 'next/navigation';
import SeoEditorialPage, { seoPageMetadata } from '@/components/SeoEditorialPage';
import { industryPages } from '@/lib/seo-pages';

export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(industryPages).map(slug => ({ slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const page = industryPages[slug]; return page ? seoPageMetadata(page, `/industries/${slug}`) : {}; }
export default async function Page({ params }) { const { slug } = await params; const page = industryPages[slug]; if (!page) notFound(); return <SeoEditorialPage page={{ ...page, slug }} path={`/industries/${slug}`} />; }
