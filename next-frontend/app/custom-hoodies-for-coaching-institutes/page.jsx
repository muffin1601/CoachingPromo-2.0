import Link from 'next/link';
import { breadcrumbSchema, faqSchema, jsonLd } from '@/lib/seo';
import { subcategorySeoContent } from '@/lib/seo-content';
import { hoodieGuides } from '@/lib/hoodie-guides';
import '@/styles/hoodie-guides.css';

const content = subcategorySeoContent['hoodies-jackets'];
const canonical = '/custom-hoodies-for-coaching-institutes';

export const metadata = {
  title: 'Custom Hoodies for Coaching Institutes | Bulk Logo Printing India',
  description: 'Order custom hoodies and winter jackets for coaching institutes, schools and colleges. Logo printing, embroidery, bulk pricing and Pan-India delivery.',
  keywords: content.keywords,
  alternates: { canonical },
  openGraph: { title: 'Custom Hoodies for Coaching Institutes | Bulk Logo Printing India', description: content.metaDescription, url: canonical, type: 'website', siteName: 'CoachingPromo', locale: 'en_IN' },
  twitter: { card: 'summary_large_image', title: 'Custom Hoodies for Coaching Institutes', description: content.metaDescription },
};

export default function CustomInstituteHoodiesPage() {
  const breadcrumbs = breadcrumbSchema([['Home', '/'], ['Custom Hoodies for Coaching Institutes', canonical]]);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(content.faqs)) }} />
    <article className="hoodie-guide hoodie-landing">
      <header className="hoodie-guide-hero">
        <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Custom Hoodies for Coaching Institutes</span></nav>
        <p className="hoodie-guide-kicker">BULK INSTITUTE WINTER WEAR · INDIA</p>
        <h1>Custom Hoodies and Winter Jackets for Coaching Institutes</h1>
        <p>{content.metaDescription}</p>
        <div className="hoodie-guide-actions"><Link href="/contact">Request a bulk quote</Link><Link href="/apparel-accessories/hoodies-jackets">View hoodie products</Link></div>
      </header>
      <div className="hoodie-guide-layout">
        <div className="hoodie-guide-content">
          {content.intro.map(paragraph => <p className="hoodie-guide-intro" key={paragraph}>{paragraph}</p>)}
          {content.sections.map(section => <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
          </section>)}
          <section><h2>Custom hoodie ordering guides</h2><div className="hoodie-guide-cards">{hoodieGuides.map(post => <Link href={`/blogs/${post.slug}`} key={post.slug}><strong>{post.title}</strong><span>{post.description}</span></Link>)}</div></section>
          <section><h2>Frequently asked questions</h2>{content.faqs.map(faq => <details className="hoodie-landing-faq" key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</section>
        </div>
        <aside className="hoodie-guide-aside"><strong>Explore winter wear</strong><Link href="/apparel-accessories/hoodies-jackets">Bulk hoodies and jackets</Link><Link href="/apparel-accessories/uniform-jackets">Staff uniform jackets</Link><Link href="/apparel-accessories/polo-t-shirts">Institute polo T-shirts</Link><Link href="/contact">Discuss your requirement</Link></aside>
      </div>
    </article>
  </>;
}
