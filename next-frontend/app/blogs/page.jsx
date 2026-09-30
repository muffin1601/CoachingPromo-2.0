import ReactPage from './ReactPage';
import { routeMetadata } from '@/lib/route-metadata';
import { getBlogs } from '@/lib/api';
import { hoodieGuideSummaries } from '@/lib/hoodie-guides';
export async function generateMetadata({ params }) { return routeMetadata("blogs", await params); }
export default async function Page() {
  const databaseBlogs = await getBlogs();
  const slugs = new Set(hoodieGuideSummaries.map(post => post.slug));
  return <ReactPage initialBlogs={[...hoodieGuideSummaries, ...databaseBlogs.filter(post => !slugs.has(post.slug))]} />;
}
