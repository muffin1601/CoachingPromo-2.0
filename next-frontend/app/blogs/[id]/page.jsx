import ReactPage from './ReactPage';
import HoodieGuideArticle from '@/components/HoodieGuideArticle';
import { routeMetadata } from '@/lib/route-metadata';
import { getBlog } from '@/lib/api';
import { articleSchema, breadcrumbSchema, jsonLd } from '@/lib/seo';
import { hoodieGuideBySlug, hoodieGuides } from '@/lib/hoodie-guides';
import { notFound, permanentRedirect } from 'next/navigation';
import '@/styles/hoodie-guides.css';

export function generateStaticParams() {
  return hoodieGuides.map(post => ({ id: post.slug }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const guide = hoodieGuideBySlug[id];
  if (!guide) return routeMetadata("blogs/[id]", { id });
  const canonical = `/blogs/${guide.slug}`;
  return {
    title: `${guide.title} | CoachingPromo`,
    description: guide.description,
    alternates: { canonical },
    openGraph: { title: guide.title, description: guide.description, url: canonical, type: 'article', siteName: 'CoachingPromo', locale: 'en_IN' },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.description },
  };
}
export default async function Page({ params }) {
  const { id } = await params;
  const guide = hoodieGuideBySlug[id];
  if (guide) {
    const path = `/blogs/${guide.slug}`;
    const schemaPost = { ...guide, author: 'CoachingPromo Editorial Team', excerpt: guide.description, date: '2026-09-30T00:00:00.000Z' };
    const breadcrumbs = breadcrumbSchema([['Home', '/'], ['Blogs', '/blogs'], [guide.title, path]]);
    return <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema(schemaPost, path)) }} />
      <HoodieGuideArticle post={guide} />
    </>;
  }
  const initialBlog = await getBlog(id);
  if (!initialBlog || (initialBlog.status && initialBlog.status !== 'published')) notFound();
  if (initialBlog.slug && id !== initialBlog.slug) permanentRedirect(`/blogs/${initialBlog.slug}`);
  const path = `/blogs/${initialBlog.slug || initialBlog._id}`;
  const breadcrumbs = breadcrumbSchema([['Home', '/'], ['Blogs', '/blogs'], [initialBlog.title, path]]);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema(initialBlog, path)) }} />
    <ReactPage initialBlog={initialBlog} />
  </>;
}
