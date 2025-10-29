import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/FeaturedCategories.css";

const categories = [
  {
    title: "Apparel & Accessories",
    slug: "apparel-accessories",
    items: 18,
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress",
  },
  {
    title: "Bags & Backpacks",
    slug: "bags-backpacks",
    items: 12,
    image:
      "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress",
  },
  {
    title: "Promotional Items",
    slug: "promotional-items",
    items: 21,
    image:
      "https://images.pexels.com/photos/1858197/pexels-photo-1858197.jpeg?auto=compress",
  },
  {
    title: "Stationery",
    slug: "stationery",
    items: 14,
    image:
      "https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress",
  },
 
];

const FeaturedCategories = () => {
  return (
    <div className="featured-wrapper">
      <h2 className="featured-title">Our Featured Categories</h2>
      <p className="featured-subtitle">
        Make Easy Customizing Choices from Our Popular Categories
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
              {/*  image + overlay wrapper */}
              <div className="featured-card-2">
                <img src={cat.image} alt={cat.title} className="featured-img" />

                <div className="featured-overlay">
                  {/* <span className="overlay-heart">♡</span> */}
                  <p className="overlay-items">{cat.items} Items</p>
                  <a href={`/${cat.slug}`} className="overlay-btn">Explore</a>
                </div>
              </div>

              {/* label outside image */}
              <h3 className="featured-label">{cat.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCategories;
