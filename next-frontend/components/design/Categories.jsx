import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
const collections = [
  ['Apparel', 'Custom Apparel for Institutes, Staff & Students', 'apparel-accessories', 'apparel.webp'],
  ['Bags', 'Custom Logo Bags for Students & Faculty', 'bags', 'bag.webp'],
  ['Promotional products', 'Promotional Products for Coaching Centers & Education Brands', 'promotional-items', 'promotional-items.webp'],
  ['Stationery', 'Customized Stationery for Coaching Institutes & Schools', 'stationery', 'stationery.webp'],
];
export default function Categories() {
  return <section className="cp-collections" id="collections">
    <div className="cp-section-top"><div><p className="cp-kicker">THE COLLECTIONS</p><h2>Our Featured Categories for Coaching Institutes & Educational Organizations</h2></div><p>Explore a wide range of customizable products, merchandise, and promotional kits designed exclusively for Coaching centers, schools, colleges, and training institutes across India.</p></div>
    <div className="cp-collection-grid">{collections.map(([label, title, slug, image], index) => <Link href={`/categories/${slug}`} className="cp-collection" key={slug}>
      <div className="cp-collection-photo"><img src={`/assets/category/${image}`} alt={title} width="350" height="350" loading="lazy" /><span className="cp-collection-number">0{index + 1}</span><span className="cp-collection-arrow"><ArrowUpRight size={22} /></span></div>
      <div className="cp-collection-copy"><h3>{label}</h3><p>{title}</p><span>View Products</span></div>
    </Link>)}</div>
  </section>;
}
