import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/FeaturedCategories.css";


import { Grid3x3, Backpack, Gift, PencilRuler, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Apparel & Accessories",
    slug: "apparel-accessories",
    items: 18,
    icon: <Grid3x3 />,
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress",
  },
  {
    title: "Bags & Backpacks",
    slug: "bags",
    items: 12,
    icon: <Backpack />,
    image:
      "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress",
  },
  {
    title: "Promotional Items",
    slug: "promotional-items",
    items: 21,
    icon: <Gift />,
    image:
      "https://images.pexels.com/photos/1858197/pexels-photo-1858197.jpeg?auto=compress",
  },
  {
    title: "Stationery",
    slug: "stationery",
    items: 14,
    icon: <PencilRuler />,
    image:
      "https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress",
  },
];

const FeaturedCategories = () => {
  return (
    <div className="featured-wrapper">
      <h2 className="featured-title">Our Featured Categories</h2>
      <p className="featured-subtitle">
        Explore a wide range of customizable products for your corporate gifting
      </p>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="featured-slider"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="featured-card">
              {/* IMAGE + OVERLAY */}
              <div className="featured-card-2">
                <img src={cat.image} alt={cat.title} className="featured-img" />

                <div className="featured-overlay">
                  <p className="overlay-items">{cat.items} Items</p>
                  <a href={`/categories/${cat.slug}`} className="overlay-btn">
                    Explore
                  </a>
                </div>
              </div>

              {/* ICON */}
              <div className="featured-icon">{cat.icon}</div>

              {/* LABEL */}
              <h3 className="featured-label">{cat.title}</h3>

              {/* CTA */}
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
