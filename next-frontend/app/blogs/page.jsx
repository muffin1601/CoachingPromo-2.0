import ReactPage from './ReactPage';
import { routeMetadata } from '@/lib/route-metadata';
import { getBlogs } from '@/lib/api';
export async function generateMetadata({ params }) { return routeMetadata("blogs", await params); }
export default async function Page() { return <ReactPage initialBlogs={await getBlogs()} />; }
