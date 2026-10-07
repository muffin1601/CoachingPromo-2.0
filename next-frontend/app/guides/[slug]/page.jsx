import { notFound } from 'next/navigation';
import SeoEditorialPage, { seoPageMetadata } from '@/components/SeoEditorialPage';
import { guidePages } from '@/lib/seo-pages';

export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(guidePages).map(slug => ({ slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const page = guidePages[slug]; return page ? seoPageMetadata(page, `/guides/${slug}`) : {}; }
export default async function Page({ params }) { const { slug } = await params; const page = guidePages[slug]; if (!page) notFound(); return <SeoEditorialPage page={{ ...page, slug }} path={`/guides/${slug}`} />; }
