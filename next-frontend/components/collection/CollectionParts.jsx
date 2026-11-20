import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { COLLECTION_BANNER, productImage, productPrice } from '@/lib/collections';

// Sales contact as already published in the site header and footer.
export const SALES_PHONE = { display: '87507 08222', tel: '+918750708222', whatsapp: '918750708222' };

const inr = value => `₹${Number(value).toLocaleString('en-IN')}`;

/** Opens the existing enquiry modal (falls back to the contact page without JS). */
export function QuoteLink({ requirement, item, className = 'cl-btn cl-btn-primary', children }) {
  return <a href="/contact?quote=1" className={className} data-quote={requirement} data-track="quote_click" data-item={item}>{children}</a>;
}

export function WhatsAppLink({ message, className = 'cl-btn cl-btn-ghost', item }) {
  return <a className={className} href={`https://wa.me/${SALES_PHONE.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-item={item}>
    <MessageCircle size={17} aria-hidden="true" /> WhatsApp us
  </a>;
}

export function Breadcrumbs({ items }) {
  return <nav className="cl-breadcrumbs" aria-label="Breadcrumb"><ol>
    {items.map(([label, href], index) => <li key={href}>{index < items.length - 1 ? <Link href={href}>{label}</Link> : <span aria-current="page">{label}</span>}</li>)}
  </ol></nav>;
}

/** Full banner with no cropping: the artwork already carries its own headline. */
export function HeroBanner({ alt, href }) {
  const image = <Image src={COLLECTION_BANNER.src} width={COLLECTION_BANNER.width} height={COLLECTION_BANNER.height} alt={alt} priority sizes="100vw" quality={80} className="cl-hero-image" />;
  return <div className="cl-hero-media">{href ? <a href={href} aria-label={`${alt} — jump to products`}>{image}</a> : image}</div>;
}

export function ProductCard({ product, collectionName }) {
  const image = productImage(product);
  const price = productPrice(product);
  const label = product.subcategory?.name || product.category?.name;
  return <article className="cl-card">
    <Link href={product.href} className="cl-card-media" data-track="select_item" data-item={product.name} tabIndex={-1} aria-hidden="true">
      {image && <Image src={image.src} alt="" width={480} height={480} sizes="(max-width: 600px) 46vw, (max-width: 1100px) 31vw, 280px" unoptimized={!image.local} loading="lazy" />}
    </Link>
    <div className="cl-card-body">
      {label && <p className="cl-card-label">{label}</p>}
      <h3 className="cl-card-title"><Link href={product.href} data-track="select_item" data-item={product.name}>{product.name}</Link></h3>
      {price && <p className="cl-card-price"><strong>{inr(price.current)}</strong>{price.original && <s aria-label={`Was ${inr(price.original)}`}>{inr(price.original)}</s>}</p>}
      <div className="cl-card-actions">
        <Link href={product.href} className="cl-btn cl-btn-outline cl-btn-sm" data-track="select_item" data-item={product.name}>View details</Link>
        <QuoteLink className="cl-btn cl-btn-primary cl-btn-sm" requirement={`${product.name} (${collectionName})`} item={product.name}>Request quote</QuoteLink>
      </div>
    </div>
  </article>;
}

export function ProductGroup({ group, collectionName, headingLevel = 'h3', columns = 4 }) {
  const Heading = headingLevel;
  return <section className="cl-group" id={`products-${group.key}`} aria-labelledby={`heading-${group.key}`}>
    <div className="cl-group-head">
      <div><Heading id={`heading-${group.key}`}>{group.name}</Heading><p>{group.blurb}</p></div>
      {group.links.length > 0 && <div className="cl-group-links">{group.links.map(link => <Link key={link.href} href={link.href}>
        {group.links.length > 1 ? link.name : 'View all'} <span>({link.count})</span> <ArrowRight size={14} aria-hidden="true" />
      </Link>)}</div>}
    </div>
    <div className={`cl-grid cl-grid-${columns}`}>{group.products.map(product => <ProductCard key={product._id} product={product} collectionName={collectionName} />)}</div>
  </section>;
}

export function CategoryTiles({ groups }) {
  return <ul className="cl-tiles">{groups.map(group => <li key={group.key}>
    <Link href={group.href} className="cl-tile" data-track="category_click" data-item={group.name}>
      <span className="cl-tile-media">{group.tileImage && <Image src={group.tileImage} alt={`${group.name} for coaching institutes`} width={360} height={360} sizes="(max-width: 600px) 46vw, (max-width: 1100px) 31vw, 240px" loading="lazy" />}</span>
      <span className="cl-tile-body"><strong>{group.name}</strong><span>{group.blurb}</span><em>Explore <ArrowUpRight size={15} aria-hidden="true" /></em></span>
    </Link>
  </li>)}</ul>;
}

export function SectionHead({ kicker, title, id, children }) {
  return <div className="cl-section-head">{kicker && <p className="cl-kicker">{kicker}</p>}<h2 id={id}>{title}</h2>{children && <p className="cl-lede">{children}</p>}</div>;
}

export function Benefits({ items }) {
  return <ul className="cl-benefits">{items.map(([title, text]) => <li key={title}><strong>{title}</strong><p>{text}</p></li>)}</ul>;
}

export function Steps({ steps }) {
  return <ol className="cl-steps">{steps.map(([title, text], index) => <li key={title}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>;
}

export function Faq({ faqs }) {
  return <div className="cl-faq">{faqs.map(faq => <details key={faq.q}><summary><h3>{faq.q}</h3></summary><p>{faq.a}</p></details>)}</div>;
}

export function FinalCta({ title, text, children }) {
  return <section className="cl-final" aria-labelledby="final-cta">
    <div><h2 id="final-cta">{title}</h2><p>{text}</p></div>
    <div className="cl-actions">{children}<a className="cl-final-phone" href={`tel:${SALES_PHONE.tel}`} data-track="phone_click"><Phone size={16} aria-hidden="true" /> {SALES_PHONE.display}</a></div>
  </section>;
}

export function ProductsUnavailable({ requirement }) {
  return <div className="cl-empty" role="status">
    <h3>Products are taking longer than usual to load</h3>
    <p>Our catalogue could not be reached just now. Refresh the page in a moment, or send us your requirement and our team will share matching options.</p>
    <QuoteLink requirement={requirement}>Request a quote</QuoteLink>
  </div>;
}

/** Quote-only showcase cards for static artwork that is not a catalogue product. */
export function ShowcaseGroup({ group, collectionName }) {
  return <section className="cl-group" id={group.id} aria-labelledby={`heading-${group.key}`}>
    <div className="cl-group-head"><div><h3 id={`heading-${group.key}`}>{group.name}</h3><p>{group.blurb}</p></div></div>
    <div className="cl-grid cl-grid-4">{group.items.map(item => <article className="cl-card" key={item.src}>
      <div className="cl-card-media cl-card-media-contain"><Image src={item.src} alt={item.name} width={480} height={480} sizes="(max-width: 600px) 46vw, (max-width: 1100px) 31vw, 280px" loading="lazy" /></div>
      <div className="cl-card-body">
        <p className="cl-card-label">{group.name.replace(/^2027 /, '2027 · ')}</p>
        <h4 className="cl-card-title">{item.name}</h4>
        <div className="cl-card-actions cl-card-actions-single">
          <QuoteLink className="cl-btn cl-btn-primary cl-btn-sm" requirement={`${item.name} (${collectionName})`} item={item.name}>Request quote</QuoteLink>
        </div>
      </div>
    </article>)}</div>
  </section>;
}
