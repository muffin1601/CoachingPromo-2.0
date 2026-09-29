import ReactPage from './ReactPage';
import { routeMetadata } from '@/lib/route-metadata';
export async function generateMetadata({ params }) { return routeMetadata("admin/banners", await params); }
export default function Page() { return <ReactPage />; }
