import React from "react";
import "../styles/PopularSubcategories.css";

import {
  Shirt,
  ShoppingBag,
  PenLine,
  Notebook,
  Award,
  ArrowRight,
  PackageCheck,
  BookOpen,
} from "lucide-react";

const baseSubcategories = [
  {
    name: "Polo T-Shirts",
    category: "Apparel",
    image: "/assets/home-subcat/polo.webp",
    catslug: "apparel-accessories",
    slug: "polo-t-shirts",
    productCount: 152,
    icon: Shirt,
  },
  {
    name: "Round Neck T-Shirts",
    category: "Apparel",
    image: "/assets/home-subcat/round.webp",
    catslug: "apparel-accessories",
    slug: "round-neck-t-shirts",
    productCount: 189,
    icon: Shirt,
  },
  {
    name: "Hoodies / Jackets",
    category: "Apparel",
    image: "/assets/home-subcat/hoodie.webp",
    catslug: "apparel-accessories",
    slug: "hoodies-jackets",
    productCount: 121,
    icon: PackageCheck,
  },
  {
    name: "Institute Backpacks",
    category: "Bags",
    image: "/assets/home-subcat/bag.webp",
    catslug: "bags",
    slug: "institute-backpacks",
    productCount: 143,
    icon: ShoppingBag,
  },
  {
    name: "Tote Bag",
    category: "Bags",
    image: "/assets/home-subcat/tote.webp",
    catslug: "bags",
    slug: "tote-bag",
    productCount: 97,
    icon: ShoppingBag,
  },
  {
    name: "Water Bottle",
    category: "Promotional Items",
    image: "/assets/home-subcat/bottle.webp",
    catslug: "promotional-items",
    slug: "water-bottle",
    productCount: 202,
    icon: PenLine,
  },
  {
    name: "Diary Set",
    category: "Promotional Items",
    image: "/assets/home-subcat/diary.webp",
    catslug: "promotional-items",
    slug: "diary-set",
    productCount: 111,
    icon: BookOpen,
  },
  {
    name: "Trophy",
    category: "Promotional Items",
    image: "/assets/home-subcat/trophy.webp",
    catslug: "promotional-items",
    slug: "trophy",
    productCount: 85,
    icon: Award,
  },
  {
    name: "Notebook",
    category: "Stationery",
    image: "/assets/home-subcat/notbook.webp",
    catslug: "stationery",
    slug: "notebook",
    productCount: 164,
    icon: Notebook,
  },
  {
    name: "Customized Pens",
    category: "Stationery",
    image: "/assets/home-subcat/pen.webp",
    catslug: "stationery",
    slug: "customized-pens",
    productCount: 138,
    icon: PenLine,
  },
];

const popularSubcategories = baseSubcategories
  .map((item) => ({
    ...item,
    href: `/${item.catslug}/${item.slug}`,
  }))
  .sort((a, b) => b.productCount - a.productCount)
  .slice(0, 10);

const PopularSubcategories = () => {
  return (
    <section className="popsub-wrapper">
      <h2 className="popsub-title">
        Popular Products Preferred by Coaching Institutes & Educational Centers
      </h2>

      <p className="popsub-subtext">
        Explore high-demand apparel, bags, promotional items & stationery used by
        leading Coaching institutes, schools, colleges & training centers across India.
      </p>

      <div className="popsub-slider" role="list">
        {popularSubcategories.map((sub) => {
          const Icon = sub.icon;

          return (
            <article key={sub.href} className="popsub-card" role="listitem">
              <div className="popsub-img-wrap">
                <img
                  src={sub.image}
                  className="popsub-img"
                  alt={`${sub.name} for Coaching institutes, schools and educational organizations`}
                  loading="lazy"
                  decoding="async"
                  width={320}
                  height={220}
                  sizes="(max-width: 420px) 180px, (max-width: 576px) 220px, (max-width: 992px) 45vw, (max-width: 1200px) 30vw, 280px"
                />
                <span className="parent-chip">{sub.category}</span>
              </div>

              <div className="popsub-content">
                <div className="icon-wrap">
                  <Icon size={22} />
                </div>

                <h3 className="popsub-name">{sub.name}</h3>

                <p className="popsub-count">
                  {sub.productCount}+ custom products for institutes
                </p>

                <a href={sub.href} className="popsub-btn">
                  View Products <ArrowRight size={16} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PopularSubcategories;
