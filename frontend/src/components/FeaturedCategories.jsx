import React, { useEffect, useState } from "react";
import axios from "axios";

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

// ✅ Icon map for slugs
const categoryIcons = {
  "apparel-accessories": <Grid3x3 />,
  bags: <Backpack />,
  "promotional-items": <Gift />,
  stationery: <PencilRuler />,

  // ✅ You can add more slugs here
};

const FeaturedCategories = () => {
  const [dbCategories, setDbCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/categories/all`
        );
        setDbCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // ✅ Merge backend categories with UI additions
  const categories = dbCategories.map((cat) => ({
    title: cat.name,
    slug: cat.slug,
    image: cat.image, // comes from backend
    items: cat.subcategories?.length || 0, // count subcategories
    icon: categoryIcons[cat.slug] || <Grid3x3 />, // default icon
  }));

  return (
    <div className="featured-wrapper">
      <h2 className="featured-title">Our Featured Categories</h2>
      <p className="featured-subtitle">
        Explore a wide range of customizable products for your corporate
        gifting
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
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="featured-img"
                />

                <div className="featured-overlay">
                  <p className="overlay-items">{cat.items} Items</p>
                  <a
                    href={`/categories/${cat.slug}`}
                    className="overlay-btn"
                  >
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
