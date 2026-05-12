import React from "react";
import "../styles/FeaturedCategories.css";
import {
  Grid3x3,
  Backpack,
  Gift,
  PencilRuler,
  ArrowRight,
} from "lucide-react";

const staticCategories = [
  {
    title: "Custom Apparel for Institutes, Staff & Students",
    slug: "apparel-accessories",
    image: "/assets/category/apparel.webp",
    alt: "custom apparel for Coaching institutes, staff uniforms and student clothing",
  },
  {
    title: "Custom Logo Bags for Students & Faculty",
    slug: "bags",
    image: "/assets/category/bag.webp",
    alt: "Coaching Institute bags, student welcome kit bags, personalized backpacks",
  },
  {
    title: "Promotional Products for Coaching Centers & Education Brands",
    slug: "promotional-items",
    image: "/assets/category/promotional-items.webp",
    alt: "promotional items for Coaching centers, Institute branding products and marketing merchandise",
  },
  {
    title: "Customized Stationery for Coaching Institutes & Schools",
    slug: "stationery",
    image: "/assets/category/stationery.webp",
    alt: "custom stationery kits for Coaching institutes, schools and student study centers",
  },
];

const categoryIcons = {
  "apparel-accessories": <Grid3x3 />,
  bags: <Backpack />,
  "promotional-items": <Gift />,
  stationery: <PencilRuler />,
};

const FeaturedCategories = () => {
  const categories = staticCategories.map((category) => ({
    ...category,
    icon: categoryIcons[category.slug] || <Grid3x3 />,
  }));

  return (
    <section id="categories" className="featured-wrapper">
      <h2 className="featured-title">
        Our Featured Categories for Coaching Institutes & Educational Organizations
      </h2>

      <p className="featured-subtitle">
        Explore a wide range of customizable products, merchandise, and promotional kits
        designed exclusively for Coaching centers, schools, colleges, and training institutes across India.
      </p>

      <div className="featured-slider" role="list">
        {categories.map((category) => (
          <article key={category.slug} className="featured-card" role="listitem">
            <div className="featured-card-2">
              <img
                src={category.image}
                alt={category.alt}
                className="featured-img"
                loading="lazy"
                decoding="async"
                width={250}
                height={250}
                sizes="(max-width: 420px) 165px, (max-width: 576px) 200px, (max-width: 992px) 45vw, 250px"
              />
            </div>

            <div className="featured-icon">{category.icon}</div>
            <h3 className="featured-label">{category.title}</h3>

            <a href={`/categories/${category.slug}`} className="featured-cta">
              View Products <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
