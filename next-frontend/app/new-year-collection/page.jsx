import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { COLLECTION_BANNER, collections, getCollectionData, newYear2027Showcase, productImage } from '@/lib/collections';
import { breadcrumbSchema, canonicalUrl, curatedCollectionSchema, faqSchema, jsonLd } from '@/lib/seo';
import CollectionInteractions from '@/components/collection/CollectionInteractions';
import { Benefits, Breadcrumbs, CategoryTiles, Faq, FinalCta, HeroBanner, ProductGroup, ProductsUnavailable, QuoteLink, SectionHead, ShowcaseGroup, Steps, WhatsAppLink } from '@/components/collection/CollectionParts';
import '@/styles/collections.css';

const config = collections.newYear;
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

const CORE_TILES = ['tshirts', 'hoodies', 'jackets', 'bags', 'idcards', 'notebooks', 'pens'];

const allFaqs = [
  { q: 'Can we combine different products in one bulk quote?', a: 'Yes. You can request T-shirts, hoodies, bags, ID cards, notebooks, pens and other catalogue items in a single enquiry. Mention the quantity for each item and the quotation will cover the full combination.' },
  { q: 'What should a New Year student welcome kit include?', a: 'Most institutes start with everyday items students will actually use, such as a notebook, a pen and a T-shirt, and add a bag or ID card for new admissions. The kit ideas on this page are starting points; you can build any combination from the catalogue.' },
  { q: 'Can every item in a kit carry our institute logo?', a: 'Products in this collection are offered for custom branding. Apparel, bags, notebooks and pens can carry your logo, and ID cards and lanyards can be personalised. The branding method for each item is confirmed in the quotation.' },
  { q: 'Is New Year merchandise suitable for faculty and staff gifting?', a: 'Yes. Hoodies, diaries, planners and notebooks are practical gifts for teachers, counsellors and support staff, and can be branded to match the student merchandise.' },
  { q: 'How do I request a quote for New Year merchandise?', a: 'Select Request quote on a product or kit, or use the Get Your Custom Bulk Quote button. The short form asks for your requirement, quantities, branding preference and contact details. You can also call 87507 08222 or message us on WhatsApp.' },
  { q: 'Do you offer branded calendars and diaries for the new year?', a: 'Yes. Wall calendars, table calendars, diary sets and planners from the catalogue can be customised with your institute’s branding, making them useful for both student and staff gifting.', requires: ['calendars', 'diaries'] },
];

const steps = [
  ['Choose products or a kit', 'Pick individual items or start from one of the welcome kit ideas.'],
  ['Share logo and quantities', 'Send your artwork, quantity per item, sizes for apparel and any packaging needs.'],
  ['Review your quotation', 'Check products, branding methods and customisation details for every item.'],
  ['Confirm your order', 'Approve the quotation and artwork, and our team takes it forward with you.'],
];

function KitCard({ kit, byKey }) {
  const items = kit.groups.map(key => byKey[key]);
  const label = items.map(group => group.short).join(' + ');
  return <li className="cl-kit">
    <div className="cl-kit-media" aria-hidden="true">
      {items.map(group => { const image = productImage(group.products[0]); return image && <Image key={group.key} src={image.src} alt="" width={160} height={160} sizes="80px" unoptimized={!image.local} loading="lazy" />; })}
    </div>
    <h3>{kit.name}</h3>
    <p className="cl-kit-items">{label}</p>
    <p>{kit.use}</p>
    <ul>{items.map(group => <li key={group.key}><Check size={15} aria-hidden="true" /><a href={`#products-${group.key}`}>{group.name}</a></li>)}</ul>
    <QuoteLink className="cl-btn cl-btn-primary cl-btn-sm" requirement={`New Year kit: ${label}`} item={kit.name}>Request Custom Kit Quote</QuoteLink>
  </li>;
}

export default async function NewYearCollectionPage() {
  const data = await getCollectionData(config.key);
  const { groups, byKey, productCount } = data;
  const breadcrumbs = [['Home', '/'], [config.name, config.path]];
  const tiles = CORE_TILES.map(key => byKey[key]).filter(Boolean);
  const rows = config.rows.map(row => ({ ...row, groups: row.groups.map(key => byKey[key]).filter(Boolean) })).filter(row => row.groups.length);
  const kits = config.kits.filter(kit => kit.groups.every(key => byKey[key]?.products.length));
  const faqs = allFaqs.filter(faq => !faq.requires || faq.requires.some(key => byKey[key])).map(({ q, a }) => ({ q, a }));
  const customisation = [
    ['Logo printing', 'On T-shirts, hoodies, bags, notebooks and pens, matched to each product’s material.'],
    ['Embroidery', 'For hoodies and apparel where a stitched chest logo gives a premium finish.'],
    ['Personalised ID cards', 'ID cards and lanyards set up with your institute’s name and branding.'],
    ['Custom packaging', 'Ask for packaging requirements for kits and gifts in your enquiry.'],
  ];
  const benefits = [
    ['One supplier, every category', productCount ? `${productCount} products across apparel, bags and stationery in this collection.` : 'Apparel, bags and stationery from a single catalogue.'],
    ['Made for education buyers', 'For coaching institutes, schools, colleges and training centres planning admissions and events.'],
    ['Consistent branding', 'One logo and colour scheme across every item in your kit.'],
    ['Flexible combinations', 'Mix products and quantities freely; the quote reflects your exact combination.'],
    ['Students and staff', 'Welcome kits for new batches and practical gifts for faculty and teams.'],
    ['Direct sales support', 'Talk to our sales desk by phone or WhatsApp while you plan.'],
  ];

  return <CollectionInteractions collection={config.key} listName={config.name} productCount={productCount}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema(breadcrumbs, `${canonicalUrl(config.path)}#breadcrumb`)) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(curatedCollectionSchema({ name: config.name, description: config.description, path: config.path, image: COLLECTION_BANNER.src, products: data.allProducts })) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faqs)) }} />

    <HeroBanner alt={config.bannerAlt} href="#featured-products" />

    <header className="cl-intro-band">
      <div className="cl-wrap">
        <Breadcrumbs items={breadcrumbs} />
        <p className="cl-kicker">New Year 2027 · Gifts &amp; welcome kits</p>
        <h1>{config.h1}</h1>
        <p className="cl-lede">T-shirts, hoodies, jackets, bags, ID cards, notebooks and pens, branded for your institute and ready to quote in bulk.</p>
        <div className="cl-actions">
          <a className="cl-btn cl-btn-primary" href="#featured-products">Explore the Collection <ArrowRight size={17} aria-hidden="true" /></a>
          <QuoteLink className="cl-btn cl-btn-outline" requirement="New Year Collection: bulk merchandise" item="New Year hero">Get Bulk Quotation</QuoteLink>
          <WhatsAppLink message="Hi CoachingPromo, I would like a bulk quote for the New Year Collection." item="New Year hero" />
        </div>
      </div>
    </header>

    <section className="cl-section cl-wrap cl-intro" aria-labelledby="intro-heading">
      <div>
        <h2 id="intro-heading">New Year Promotional Gifts for Coaching Institutes</h2>
        <p>The start of a new year is a natural moment to welcome new batches, launch an admissions campaign and thank the faculty who carried your students through the last session. Branded merchandise turns each of those moments into something people keep using long after the event.</p>
        <p>A <Link href="/stationery/notebook">printed notebook</Link> and <Link href="/stationery/customized-pens">promotional pen</Link> in a welcome kit, a T-shirt worn to orientation, a <Link href="/bags/institute-backpacks">backpack</Link> carried to class every day or an <Link href="/stationery/lanyard-and-id-card">ID card and lanyard</Link> with your logo all keep your institute in view. CoachingPromo brings these products together in one catalogue, so you can plan student welcome kits, faculty gifts and campaign giveaways with a single bulk enquiry and one consistent brand look.</p>
      </div>
      <aside className="cl-intro-aside" aria-label="Collection at a glance">
        {productCount > 0 && <p><strong>{productCount}</strong> live products</p>}
        {groups.length > 0 && <p><strong>{groups.length}</strong> product categories</p>}
        {kits.length > 0 && <p><strong>{kits.length}</strong> welcome kit ideas</p>}
      </aside>
    </section>

    {tiles.length > 0 && <section className="cl-section cl-band" aria-labelledby="categories-heading">
      <div className="cl-wrap">
        <SectionHead kicker="Shop by category" title="Shop New Year & Winter by Category" id="categories-heading">Explore winter apparel, gifts and essentials for new admissions and New Year events.</SectionHead>
        <CategoryTiles groups={tiles} />
      </div>
    </section>}

    <section className="cl-section cl-wrap" id="featured-products" aria-labelledby="products-heading">
      <SectionHead kicker="From the catalogue" title="Featured New Year & Winter Products" id="products-heading">Live products and prices, organised by category. Open any product for full details or request a quote straight from the card.</SectionHead>
      {rows.length ? rows.map(row => <div className="cl-row" key={row.title}>
        <p className="cl-row-title">{row.title}</p>
        <div className={`cl-row-groups${row.groups.length > 1 ? ' cl-row-split' : ''}`}>{row.groups.map(group => <ProductGroup key={group.key} group={group} collectionName={config.name} columns={row.groups.length > 1 ? 2 : 4} />)}</div>
      </div>) : <ProductsUnavailable requirement="New Year Collection: bulk merchandise" />}
    </section>

    <section className="cl-section cl-band" id="calendars-diaries-2027" aria-labelledby="showcase-heading">
      <div className="cl-wrap">
        <SectionHead kicker="New for 2027" title="2027 Calendars &amp; Diaries" id="showcase-heading">Fresh 2027 designs for the new year. Pick a design and request a quote with your logo and quantity.</SectionHead>
        {newYear2027Showcase.map(group => <ShowcaseGroup key={group.key} group={group} collectionName={config.name} />)}
        <p className="cl-note">Browse more: <Link href="/stationery/table-calendar">table calendars</Link> · <Link href="/stationery/wall-calendar">wall calendars</Link> · <Link href="/promotional-items/diary-set">diary sets</Link> · <Link href="/promotional-items/planner">planners</Link></p>
      </div>
    </section>

    {kits.length > 0 && <section className="cl-section cl-band" id="welcome-kits" aria-labelledby="kits-heading">
      <div className="cl-wrap">
        <SectionHead kicker="Student welcome kits" title="New Year Student Welcome Kits" id="kits-heading">Suggested combinations built from products in our catalogue. Mix, swap or scale any kit; your quotation reflects exactly what you choose.</SectionHead>
        <ul className="cl-kits">{kits.map(kit => <KitCard key={kit.name} kit={kit} byKey={byKey} />)}</ul>
        <p className="cl-note">See also: <Link href="/solutions/student-welcome-kits">student welcome kits</Link> · <Link href="/guides/student-welcome-kit-checklist">welcome kit checklist</Link> · <Link href="/guides/admission-and-orientation-merchandise-ideas">admission and orientation merchandise ideas</Link></p>
      </div>
    </section>}

    <section className="cl-section cl-wrap" aria-labelledby="custom-heading">
      <SectionHead kicker="Bulk customisation" title="Bulk Customisation for Every Item" id="custom-heading">Each product is branded to suit its material. Share your artwork and we confirm the right method for every item in your quotation.</SectionHead>
      <Benefits items={customisation} />
      <p className="cl-note">Learn more: <Link href="/guides/custom-merchandise-branding-methods">custom merchandise branding methods</Link> · <Link href="/guides/notebook-printing-guide">notebook printing guide</Link> · <Link href="/guides/custom-t-shirt-printing-guide">T-shirt printing guide</Link></p>
    </section>

    <section className="cl-section cl-band" aria-labelledby="why-heading">
      <div className="cl-wrap">
        <SectionHead kicker="Why CoachingPromo" title="Why Institutes Choose CoachingPromo" id="why-heading">For coaching institutes, schools, colleges and training centres.</SectionHead>
        <Benefits items={benefits} />
      </div>
    </section>

    <section className="cl-section cl-wrap" aria-labelledby="process-heading">
      <SectionHead kicker="How it works" title="How to Order New Year Merchandise" id="process-heading" />
      <Steps steps={steps} />
    </section>

    <section className="cl-section cl-band" aria-labelledby="related-heading">
      <div className="cl-wrap cl-related">
        <div>
          <h2 id="related-heading">More Ideas for Your Institute</h2>
          <p>Plan merchandise around admissions, events and everyday student life.</p>
          <ul className="cl-link-list">
            <li><Link href="/guides/promotional-product-planning-for-coaching-institutes">Promotional product planning for coaching institutes</Link></li>
            <li><Link href="/solutions/corporate-gifting-for-educational-institutions">Gifting for educational institutions</Link></li>
            <li><Link href="/industries/training-institutes">Merchandise for training institutes</Link></li>
            <li><Link href="/apparel-accessories/round-neck-t-shirts">Custom round neck T-shirts</Link></li>
          </ul>
        </div>
        <Link href="/custom-hoodies-for-coaching-institutes" className="cl-crosslink">
          <span className="cl-kicker">Winter wear guide</span>
          <strong>Custom Hoodies for Institutes</strong>
          <span>Explore fabrics, branding and bulk ordering for students and staff.</span>
          <em>Read the guide <ArrowRight size={16} aria-hidden="true" /></em>
        </Link>
      </div>
    </section>

    <section className="cl-section cl-wrap cl-narrow" aria-labelledby="faq-heading">
      <SectionHead kicker="FAQ" title="New Year & Winter Merchandise FAQs" id="faq-heading" />
      <Faq faqs={faqs} />
    </section>

    <div className="cl-wrap">
      <FinalCta title="Start the New Year With Your Institute's Brand" text="Share the products, quantities and branding you need. We will reply with a clear quotation for your institute.">
        <QuoteLink requirement="New Year Collection: bulk merchandise" item="New Year final CTA">Get Your Custom Bulk Quote</QuoteLink>
        <WhatsAppLink className="cl-btn cl-btn-light" message="Hi CoachingPromo, I would like a bulk quote for the New Year Collection." item="New Year final CTA" />
      </FinalCta>
    </div>
  </CollectionInteractions>;
}
