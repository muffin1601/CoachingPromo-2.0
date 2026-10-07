import Link from 'next/link';
import { breadcrumbSchema, faqSchema, jsonLd, canonicalUrl } from '@/lib/seo';
import '@/styles/seo-editorial.css';

export function seoPageMetadata(page, path) {
  return {
    title: page.metaTitle,
    description: page.description,
    alternates: { canonical: path },
    openGraph: { title: page.metaTitle, description: page.description, url: path, siteName: 'CoachingPromo', locale: 'en_IN', type: page.type === 'guide' ? 'article' : 'website' },
    twitter: { card: 'summary_large_image', title: page.metaTitle, description: page.description },
  };
}

export default function SeoEditorialPage({ page, path }) {
  const breadcrumbs = breadcrumbSchema([
    ['Home', '/'],
    [page.type === 'guide' ? 'Guides' : page.type === 'industry' ? 'Industries' : 'Solutions', `/${page.type === 'guide' ? 'guides' : page.type === 'industry' ? 'industries' : 'solutions'}/${page.slug}`],
    [page.title, path],
  ]);
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': page.type === 'guide' ? 'Article' : 'WebPage',
    '@id': `${canonicalUrl(path)}#${page.type === 'guide' ? 'article' : 'webpage'}`,
    headline: page.title,
    name: page.title,
    description: page.description,
    url: canonicalUrl(path),
    inLanguage: 'en-IN',
    publisher: { '@id': `${canonicalUrl('/')}#organization` },
    isPartOf: { '@id': `${canonicalUrl('/')}#website` },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(pageSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(page.faqs)) }} />
    <main className="seo-editorial">
      <header className="seo-editorial-hero">
        <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{page.title}</span></nav>
        <p className="seo-editorial-kicker">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="seo-editorial-lead">{page.intro}</p>
        <div className="seo-editorial-actions"><Link href="/contact">Request a quote</Link><Link href="/categories/promotional-items">Browse products</Link></div>
      </header>
      <div className="seo-editorial-grid">
        <article className="seo-editorial-content">
          {page.sections.map(item => <section key={item.heading}>
            <h2>{item.heading}</h2><p>{item.text}</p>
            {item.items?.length > 0 && <ul>{item.items.map(value => <li key={value}>{value}</li>)}</ul>}
          </section>)}
          <section><h2>Related products and planning pages</h2><div className="seo-editorial-links">{page.links.map(([href, label]) => <Link href={href} key={href}>{label}<span aria-hidden="true">→</span></Link>)}</div></section>
          <section><h2>Frequently asked questions</h2><div className="seo-editorial-faqs">{page.faqs.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
        </article>
        <aside className="seo-editorial-aside">
          <strong>Prepare your enquiry</strong>
          <p>Share the product or programme, approximate quantity, branding artwork, delivery city and required date.</p>
          <Link href="/contact">Discuss your requirement</Link>
          <Link href="/categories/apparel-accessories">Apparel</Link>
          <Link href="/categories/bags">Bags</Link>
          <Link href="/categories/stationery">Stationery</Link>
        </aside>
      </div>
    </main>
  </>;
}
