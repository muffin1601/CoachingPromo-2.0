import { notFound } from 'next/navigation';
import SeoEditorialPage, { seoPageMetadata } from '@/components/SeoEditorialPage';
import { solutionPages } from '@/lib/seo-pages';

export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(solutionPages).map(slug => ({ slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const page = solutionPages[slug]; return page ? seoPageMetadata(page, `/solutions/${slug}`) : {}; }
export default async function Page({ params }) { const { slug } = await params; const page = solutionPages[slug]; if (!page) notFound(); return <SeoEditorialPage page={{ ...page, slug }} path={`/solutions/${slug}`} />; }
