import ReactShell from '@/components/ReactShell';
import Script from 'next/script';
import '@/react-source/styles/global.css';
import '@/react-source/styles/experience.css';
import '@/styles/storefront.css';
import '@/styles/square.css';
import { siteUrl } from '@/lib/api';
export const dynamic = 'force-dynamic';
export const metadata = { metadataBase: new URL(siteUrl), title: 'CoachingPromo', icons: { icon: '/favicon-32.png' } };
export default function Layout({ children }) {
  return <html lang="en"><head>
    <link rel="ai-catalog" href="/.well-known/ai-catalog.json" type="application/json" />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-S1QFD31EER" />
    <Script id="google-analytics">
      {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-S1QFD31EER');`}
    </Script>
  </head><body><ReactShell>{children}</ReactShell></body></html>;
}
