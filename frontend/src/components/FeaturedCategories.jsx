import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/FeaturedCategories.css";

import {
  Grid3x3,
  Backpack,
  Gift,
  PencilRuler,
  ArrowRight,
} from "lucide-react";

// ----------------------------------
// STATIC CATEGORY LIST
// ----------------------------------
const staticCategories = [
  {
    title: "Custom Apparel for Institutes, Staff & Students",
    slug: "apparel-accessories",
    image: "/assets/category/apparel.webp",
    alt: "custom apparel for coaching institutes, staff uniforms and student clothing",
    items: 12,
  },
  {
    title: "Custom Logo Bags for Students & Faculty",
    slug: "bags",
    image: "/assets/category/bag.webp",
    alt: "coaching institute bags, student welcome kit bags, personalized backpacks",
    items: 8,
  },
  {
    title: "Promotional Products for Coaching Centers & Education Brands",
    slug: "promotional-items",
    image: "/assets/category/promotional-items.webp",
    alt: "promotional items for coaching centers, institute branding products and marketing merchandise",
    items: 15,
  },
  {
    title: "Customized Stationery for Coaching Institutes & Schools",
    slug: "stationery",
    image: "/assets/category/stationery.webp",
    alt: "custom stationery kits for coaching institutes, schools and student study centers",
    items: 20,
  },
];

// Icon map for slugs
const categoryIcons = {
  "apparel-accessories": <Grid3x3 />,
  bags: <Backpack />,
  "promotional-items": <Gift />,
  stationery: <PencilRuler />,
};

const FeaturedCategories = () => {
  // Merge icons into static categories
  const categories = staticCategories.map((cat) => ({
    ...cat,
    icon: categoryIcons[cat.slug] || <Grid3x3 />,
  }));

  return (
    <div id="categories" className="featured-wrapper">
      <h2 className="featured-title">
        Our Featured Categories for Coaching Institutes & Educational Organizations
      </h2>

      <p className="featured-subtitle">
        Explore a wide range of customizable products, merchandise, and promotional kits 
        designed exclusively for coaching centers, schools, colleges, and training institutes across India.
      </p>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="featured-slider"
        breakpoints={{
          320: { slidesPerView: 1.3, spaceBetween: 15 },
          480: { slidesPerView: 2, spaceBetween: 18 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 }
        }}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="featured-card">
              <div className="featured-card-2">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="featured-img"
                />

                <div className="featured-overlay">
                  <p className="overlay-items">{cat.items} Items</p>

                  <a href={`/categories/${cat.slug}`} className="overlay-btn">
                    Explore
                  </a>
                </div>
              </div>

              <div className="featured-icon">{cat.icon}</div>

              <h3 className="featured-label">{cat.title}</h3>

              <a href={`/categories/${cat.slug}`} className="featured-cta">
                View Products <ArrowRight size={16} />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCategories;
