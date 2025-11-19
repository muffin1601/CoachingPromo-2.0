import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

//  Base Data
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

//  Final sorted, top 10 list with redirect
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
        leading coaching institutes, schools, colleges & training centers across India.
      </p>

      <div className="popsub-slider">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 16 },
            450: { slidesPerView: 1.6, spaceBetween: 18 },
            576: { slidesPerView: 2, spaceBetween: 18 },
            768: { slidesPerView: 2.8, spaceBetween: 20 },
            992: { slidesPerView: 3.2, spaceBetween: 22 },
            1200: { slidesPerView: 4, spaceBetween: 22 },
          }}
          navigation={{
            nextEl: ".popsub-next",
            prevEl: ".popsub-prev",
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {popularSubcategories.map((sub, i) => {
            const Icon = sub.icon;
            return (
              <SwiperSlide key={i}>
                <div className="popsub-card">
                  <div className="popsub-img-wrap">
                    <img
                      src={sub.image}
                      className="popsub-img"
                      alt={`${sub.name} for coaching institutes, schools and educational organizations`}
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
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/*  Custom Navigation Buttons */}
        <button className="popsub-prev nav-btn-2">
          <ChevronLeft size={20} />
        </button>

        <button className="popsub-next nav-btn-2">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default PopularSubcategories;
