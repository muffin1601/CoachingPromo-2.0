import Link from 'next/link';

export default function HoodieGuideArticle({ post }) {
  return (
    <article className="hoodie-guide">
      <header className="hoodie-guide-hero">
        <nav aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><Link href="/blogs">Blogs</Link><span>/</span><span>{post.title}</span>
        </nav>
        <p className="hoodie-guide-kicker">INSTITUTE WINTER-WEAR GUIDE</p>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <div className="hoodie-guide-meta">By CoachingPromo Editorial Team · Updated 30 September 2026 · {post.intent}</div>
      </header>

      <div className="hoodie-guide-layout">
        <div className="hoodie-guide-content">
          <p className="hoodie-guide-intro">{post.intro}</p>
          {post.sections.map(([heading, content]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>{content}</p>
            </section>
          ))}
          <section>
            <h2>Request advice for your institute order</h2>
            <p>Share your quantity, size split, preferred style, logo, delivery city and required date. CoachingPromo can recommend an appropriate garment and branding method for your use case.</p>
            <div className="hoodie-guide-actions">
              <Link href="/custom-hoodies-for-coaching-institutes">Explore custom institute hoodies</Link>
              <Link href="/contact">Request a bulk quote</Link>
            </div>
          </section>
        </div>
        <aside className="hoodie-guide-aside">
          <strong>Continue reading</strong>
          <Link href="/blogs/how-to-order-custom-hoodies-in-bulk">Bulk ordering checklist</Link>
          <Link href="/blogs/best-gsm-for-winter-hoodies-in-india">Hoodie GSM guide</Link>
          <Link href="/blogs/hoodie-printing-vs-embroidery-for-institute-logos">Printing vs embroidery</Link>
          <Link href="/apparel-accessories/hoodies-jackets">View hoodies and jackets</Link>
        </aside>
      </div>
    </article>
  );
}
