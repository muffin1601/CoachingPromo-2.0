import { Suspense } from 'react';
import ReactShell from '@/components/ReactShell';
import '@/react-source/styles/global.css';
import '@/react-source/styles/experience.css';
import '@/styles/storefront.css';
import '@/styles/square.css';
import { siteUrl } from '@/lib/api';
export const dynamic = 'force-dynamic';
export const metadata = { metadataBase: new URL(siteUrl), title: 'CoachingPromo', icons: { icon: '/favicon-32.png' } };
export default function Layout({ children }) {
  return <html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </head><body><Suspense fallback={<p role="status">Loading CoachingPromo…</p>}>
    <ReactShell>{children}</ReactShell>
  </Suspense></body></html>;
}
