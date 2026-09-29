import ReactPage from './ReactPage';
import { routeMetadata } from '@/lib/route-metadata';
import { jsonLd, organizationSchema, websiteSchema } from '@/lib/seo';
export async function generateMetadata({ params }) { return routeMetadata("", await params); }
export default function Page() { return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema()) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema()) }} />
  <ReactPage />
</>; }
