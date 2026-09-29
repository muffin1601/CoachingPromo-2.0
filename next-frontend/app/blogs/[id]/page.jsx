import ReactPage from './ReactPage';
import { routeMetadata } from '@/lib/route-metadata';
import { getBlog } from '@/lib/api';
import { articleSchema, breadcrumbSchema, jsonLd } from '@/lib/seo';
import { notFound, permanentRedirect } from 'next/navigation';
export async function generateMetadata({ params }) { return routeMetadata("blogs/[id]", await params); }
export default async function Page({ params }) {
  const { id } = await params;
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
