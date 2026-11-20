import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { COLLECTION_BANNER, collections, getCollectionData } from '@/lib/collections';
import { hoodieGuides } from '@/lib/hoodie-guides';
import { breadcrumbSchema, canonicalUrl, curatedCollectionSchema, faqSchema, jsonLd } from '@/lib/seo';
import CollectionInteractions from '@/components/collection/CollectionInteractions';
import { Benefits, Breadcrumbs, CategoryTiles, Faq, FinalCta, HeroBanner, ProductGroup, ProductsUnavailable, QuoteLink, SectionHead, Steps, WhatsAppLink } from '@/components/collection/CollectionParts';
import '@/styles/collections.css';

const config = collections.winter;
const ogImage = { url: COLLECTION_BANNER.src, width: COLLECTION_BANNER.width, height: COLLECTION_BANNER.height, alt: config.bannerAlt };

export const metadata = {
  title: config.title,
  description: config.description,
  keywords: config.keywords,
  alternates: { canonical: config.path },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', siteName: 'CoachingPromo', locale: 'en_IN', url: config.path, title: config.title, description: config.description, images: [ogImage] },
  twitter: { card: 'summary_large_image', title: config.title, description: config.description, images: [COLLECTION_BANNER.src] },
};

const faqs = [
  { q: 'Can coaching institutes customize hoodies with their logo?', a: 'Yes. Hoodies in this collection can carry your institute logo, name or batch details, typically on the chest, back or sleeve. The branding method and placement are confirmed in your quotation, based on the hoodie fabric and your artwork.' },
  { q: 'Are bulk hoodie orders available?', a: 'Yes. The collection is built for institutional orders, whether that is one batch, several branches or your entire staff. Share your approximate quantity and size split when you request a quote, and pricing for that quantity is confirmed in the quotation.' },
  { q: 'Can I order matching T-shirts and hoodies?', a: 'Yes. You can combine hoodies with polo or round-neck T-shirts from the catalogue in a single enquiry and ask for the same logo and colour scheme across every item, so students and staff look coordinated.' },
  { q: 'How can I request a quotation?', a: 'Select Request quote on any product, or Get Bulk Quotation on this page. A short three-step form asks for your requirement, quantity, branding preference and contact details. You can also call our sales desk on 87507 08222 or message us on WhatsApp.' },
  { q: 'What branding options are available?', a: 'Logo printing and embroidery are the most common options for winter apparel. Depending on the garment and your artwork, the team may suggest a specific printing method such as screen printing or a transfer. The options available for your chosen products are confirmed during quotation.' },
];

const steps = [
  ['Select products', 'Shortlist hoodies, jackets and T-shirts from this collection, or tell us the style you have in mind.'],
  ['Share logo and requirements', 'Send your logo, quantity, size split, colours and preferred branding position.'],
  ['Review your quotation', 'Check the quoted products, branding method and customisation details before you decide.'],
  ['Confirm your order', 'Approve the quotation and artwork, and our team takes the order forward with you.'],
];

export default async function WinterCollectionPage() {
  const data = await getCollectionData(config.key);
  const { groups, productCount } = data;
  const breadcrumbs = [['Home', '/'], [config.name, config.path]];
  const benefits = [
    ['Logo printing and embroidery', 'Choose the branding method that suits the fabric and artwork: printing for bold designs, embroidery for compact chest logos.'],
    ['Built for bulk institutional orders', 'Brief us once for a full batch, several branches or a whole staff team.'],
    ['Coordinated branding', 'Keep logo placement and colours consistent across hoodies, jackets and T-shirts.'],
    ['For students and staff', 'Hoodies for student batches, jackets for faculty and front-desk teams, tees for everyday wear.'],
    [productCount ? `${productCount} winter-ready products` : 'Multiple apparel options', `Compare ${groups.length > 1 ? `${groups.length} apparel categories` : 'apparel styles'} with live prices before you enquire.`],
    ['Customisation through enquiry', 'Every order starts from your requirement, so the quotation reflects exactly what you need.'],
  ];

  return <CollectionInteractions collection={config.key} listName={config.name} productCount={productCount}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema(breadcrumbs, `${canonicalUrl(config.path)}#breadcrumb`)) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(curatedCollectionSchema({ name: config.name, description: config.description, path: config.path, image: COLLECTION_BANNER.src, products: data.allProducts })) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faqs)) }} />

    <HeroBanner alt={config.bannerAlt} href="#featured-products" />

    <header className="cl-intro-band">
      <div className="cl-wrap">
        <Breadcrumbs items={breadcrumbs} />
        <p className="cl-kicker">Winter wear · Bulk institute orders</p>
        <h1>{config.h1}</h1>
        <p className="cl-lede">Branded hoodies, jackets and matching T-shirts for coaching institutes, schools and colleges, all from our live catalogue.</p>
        <div className="cl-actions">
          <a className="cl-btn cl-btn-primary" href="#featured-products">Explore Winter Collection <ArrowRight size={17} aria-hidden="true" /></a>
          <QuoteLink className="cl-btn cl-btn-outline" requirement="Winter Collection: bulk hoodies / winter apparel" item="Winter Collection hero">Get Bulk Quotation</QuoteLink>
          <WhatsAppLink message="Hi CoachingPromo, I would like a bulk quote for the Winter Collection." item="Winter Collection hero" />
        </div>
      </div>
    </header>

    <section className="cl-section cl-wrap cl-intro" aria-labelledby="intro-heading">
      <div>
        <h2 id="intro-heading">Custom Winter Wear for Coaching Institutes</h2>
        <p>When the temperature drops, the layer your students and faculty reach for every morning becomes your most visible piece of branding. Custom hoodies and jackets carrying your institute’s logo keep batches warm on early commutes and make your name recognisable at test centres, seminars and outdoor events.</p>
        <p>CoachingPromo helps coaching institutes, schools and colleges source winter apparel in bulk from one catalogue: <Link href="/apparel-accessories/hoodies-jackets">custom hoodies</Link> for student batches, <Link href="/apparel-accessories/uniform-jackets">Nehru-style uniform jackets</Link> for faculty and front-desk teams, and matching <Link href="/apparel-accessories/polo-t-shirts">polo</Link> and <Link href="/apparel-accessories/round-neck-t-shirts">round-neck T-shirts</Link> for layering. Share your logo, quantity and size split, and our team will suggest a suitable branding method for each garment.</p>
      </div>
      <aside className="cl-intro-aside" aria-label="Collection at a glance">
        {productCount > 0 && <p><strong>{productCount}</strong> live products</p>}
        {groups.length > 0 && <p><strong>{groups.length}</strong> apparel categories</p>}
        <p><strong>Logo</strong> printing &amp; embroidery</p>
      </aside>
    </section>

    {groups.length > 0 && <section className="cl-section cl-band" aria-labelledby="categories-heading">
      <div className="cl-wrap">
        <SectionHead kicker="Shop by category" title="Shop by Winter Category" id="categories-heading">Start with the garment, then brand it for your institute.</SectionHead>
        <CategoryTiles groups={groups} />
      </div>
    </section>}

    <section className="cl-section cl-wrap" id="featured-products" aria-labelledby="products-heading">
      <SectionHead kicker="From the catalogue" title="Featured Winter Products" id="products-heading">Live products and prices. Select any item to see full details, or request a quote with your logo and quantity.</SectionHead>
      {groups.length ? groups.map(group => <ProductGroup key={group.key} group={group} collectionName={config.name} />) : <ProductsUnavailable requirement="Winter Collection: bulk hoodies / winter apparel" />}
    </section>

    <section className="cl-section cl-band" aria-labelledby="why-heading">
      <div className="cl-wrap">
        <SectionHead kicker="Why CoachingPromo" title="Why Choose CoachingPromo for Winter Merchandise?" id="why-heading" />
        <Benefits items={benefits} />
      </div>
    </section>

    <section className="cl-section cl-wrap" aria-labelledby="process-heading">
      <SectionHead kicker="How it works" title="Custom Branding Process" id="process-heading">From shortlist to confirmed order in four clear steps.</SectionHead>
      <Steps steps={steps} />
      <div className="cl-actions cl-actions-center"><QuoteLink requirement="Winter Collection: custom branded apparel" item="Winter process">Start your winter quote</QuoteLink></div>
    </section>

    <section className="cl-section cl-band" aria-labelledby="related-heading">
      <div className="cl-wrap cl-related">
        <div>
          <h2 id="related-heading">Planning Your Winter Merchandise</h2>
          <p>Compare fabrics, branding methods and order planning before you finalise your hoodie order.</p>
          <ul className="cl-link-list">
            <li><Link href="/custom-hoodies-for-coaching-institutes">Custom hoodies for coaching institutes: complete guide</Link></li>
            {hoodieGuides.slice(0, 4).map(post => <li key={post.slug}><Link href={`/blogs/${post.slug}`}>{post.title}</Link></li>)}
          </ul>
        </div>
        <Link href="/new-year-collection" className="cl-crosslink" data-track="collection_crosslink" data-item="New Year Collection">
          <span className="cl-kicker">Also explore</span>
          <strong>New Year Collection</strong>
          <span>T-shirts, bags, ID cards, notebooks and pens for new admissions and welcome kits.</span>
          <em>View the collection <ArrowRight size={16} aria-hidden="true" /></em>
        </Link>
      </div>
    </section>

    <section className="cl-section cl-wrap cl-narrow" aria-labelledby="faq-heading">
      <SectionHead kicker="FAQ" title="Winter Merchandise FAQs" id="faq-heading" />
      <Faq faqs={faqs} />
    </section>

    <div className="cl-wrap">
      <FinalCta title="Upgrade Your Institute's Winter Merchandise" text="Tell us what you need, how many, and how you want it branded. We will come back with a clear quotation.">
        <QuoteLink requirement="Winter Collection: bulk hoodies / winter apparel" item="Winter final CTA">Request Bulk Quote</QuoteLink>
        <Link className="cl-btn cl-btn-light" href="/categories/apparel-accessories">Explore All Products</Link>
      </FinalCta>
    </div>
  </CollectionInteractions>;
}
