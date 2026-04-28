import React, { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/SingleProductPage.css";
import SubcategoryStaticContent from "../components/Category/SubcategoryStaticContent";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

import {
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  ShoppingCart,
  Minus,
  Plus,
  Sparkles,
  Tag,
  BadgeIndianRupee,
  Star,
  Info,
  Palette,
  Play,
} from "lucide-react";


const EnquiryModal = lazy(() => import("../components/EnquiryModal"));
const CustomizationExperience = lazy(() =>
  import("../components/CustomizationExperience")
);
const RelatedProducts = lazy(() => import("../components/RelatedProducts"));
const PopularSubcategories = lazy(() =>
  import("../components/PopularSubcategories")
);
const CatalogueCTA = lazy(() => import("../components/CatalogueCTA"));
const WhyChooseUsProduct = lazy(() =>
  import("../components/Category/WhyChooseUsProduct")
);
const ProductFAQ = lazy(() =>
  import("../components/Category/ProductFAQ")
);
const RecentlyViewedProducts = lazy(() => import("../components/RecentlyViewedProducts"));
const CTASection = lazy(() => import("../components/CTASection"));
const HiddenSEOContent = lazy(() =>
  import("../components/HiddenSEOContent")
);


import SEO from "../components/Category/SEO";

const SingleProductPage = () => {
  const { categorySlug, subSlug, prodSlug } = useParams();

  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [activeMedia, setActiveMedia] = useState(null);
  const [qty, setQty] = useState(1);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite } = useFavorites();

  const navigate = useNavigate();

  const fetchProduct = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${prodSlug}`
    );
    setProduct(data.product);
    setActiveMedia(data.product?.images?.[0]);
  };

  const getCategoryData = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/categories/${categorySlug}`
    );
    setCategory(res.data.category);
  };

  const getSubcategoryData = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/subcategories/${categorySlug}/${subSlug}`
    );
    setSubcategory(res.data.subcategory);
  };

  useEffect(() => {
    fetchProduct();
    getCategoryData();
    getSubcategoryData();
  }, [prodSlug]);

  useEffect(() => {
    if (product) {
      const trackRecentlyViewed = () => {
        const stored = localStorage.getItem("recentlyViewed");
        let viewed = [];
        if (stored) {
          try {
            viewed = JSON.parse(stored);
          } catch (e) {
            console.error("Error parsing recently viewed", e);
          }
        }

        // Remove if already exists to move to top
        viewed = viewed.filter(p => p.slug !== product.slug);

        // Add current product with minimal required data
        const productData = {
          id: product._id || product.id,
          name: product.name,
          slug: product.slug,
          images: product.images,
          price: product.price,
          categorySlug,
          subSlug
        };

        viewed.unshift(productData);

        // Keep only top 10
        const limited = viewed.slice(0, 10);
        localStorage.setItem("recentlyViewed", JSON.stringify(limited));
      };

      trackRecentlyViewed();
    }
  }, [product, categorySlug, subSlug]);

  if (!product) return <div>Loading...</div>;

const {
  name,
  description,
  images,
  subImages,
  tags,
  ratings,
  sku,
  attributes,
  specifications,
  additionalInfo,
} = product;

  const enquiryImage = images?.[0]?.url || "";

  const shouldShowCustomize =
    subSlug === "polo-t-shirts" ||
    subSlug === "round-neck-t-shirts" ||
    subSlug === "institute-backpacks";

  return (
    <>
      {/* SEO (Not Lazy Loaded) */}
      <SEO
        title={
          product?.seo?.metaTitle ||
          `${product?.name} | Custom Merchandise for Coaching Institutes`
        }
        description={
          product?.seo?.metaDescription ||
          `Order ${product?.name} for Coaching institutes, schools and colleges. Custom printing and bulk pricing available.`
        }
        keywords={
          product?.seo?.keywords?.join(",") ||
          `${product?.name}, ${subcategory?.name}, ${category?.name}`
        }
        canonical={`https://coachingpromo.in/${categorySlug}/${subSlug}/${prodSlug}`}
      />

      {/* ========== BREADCRUMBS ========== */}
      <div className="product-breadcrumb">
        <div className="breadcrumb-container">
          <a href="/">Home</a>
          <span className="breadcrumb-divider">/</span>
          <a href={`/categories/${categorySlug}`}>{category?.name}</a>
          <span className="breadcrumb-divider">/</span>
          <a href={`/${categorySlug}/${subSlug}`}>{subcategory?.name}</a>
          <span className="breadcrumb-divider">/</span>
          <span className="breadcrumb-current">{product?.name}</span>
        </div>
      </div>

      {/* ========== MAIN PRODUCT PAGE ========== */}
      <div className="product-page-container">
        {/* LEFT GALLERY */}
        <div className="product-gallery">
          <div className="product-thumb-list">
            {(subImages?.length ? subImages : images)?.map((img, i) => (
              <div
                key={i}
                className={`thumb-item ${
                  activeMedia?.url === img.url ? "thumb-active" : ""
                }`}
                onClick={() => setActiveMedia(img)}
              >
                {img.type === "video" ? (
                  <div className="thumb-video-wrapper">
                    <video src={img.url} muted className="thumb-img" />
                    <div className="play-overlay">
                      <Play size={12} fill="white" />
                    </div>
                  </div>
                ) : (
                  <img
                    src={img.url}
                    alt={img.altText || `${name} - product view`}
                    className="thumb-img"
                    loading="lazy"
                    decoding="async"
                    width={100}
                    height={100}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="product-main-img-wrapper">
            {activeMedia?.type === "video" ? (
              <video
                src={activeMedia.url}
                autoPlay
                loop
                muted
                playsInline
                className="product-main-img"
              />
            ) : (
              <img
                src={activeMedia?.url}
                loading="eager"
                alt={`${name} - main product`}
                className="product-main-img"
                width={600}
                height={600}
                decoding="async"
              />
            )}
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="product-info">
          {/* META */}
          <div className="product-meta-line">
            {tags?.length > 0 && (
              <span className="product-tag">
                <Tag size={14} /> {tags.join(", ")}
              </span>
            )}

            {/* {ratings?.average > 0 && (
              <span className="product-rating">
                <Star size={14} /> {ratings.average} ({ratings.count})
              </span>
            )} */}
          </div>

          <h1 className="product-title">{name}</h1>

          <p className="product-desc">
            {typeof description === "string"
              ? description
              : description?.short || description?.long}
          </p>

          {/* CUSTOMIZATION CTA */}
          {shouldShowCustomize && (
            <button
              className="btn-customize"
              onClick={() => {
                if (subSlug === "polo-t-shirts")
                  return (window.location.href = "/customize/polotshirt");
                if (subSlug === "round-neck-t-shirts")
                  return (window.location.href = "/customize/roundneck");

                navigate("/customize/all", {
                  state: {
                    productImages:
                      subImages?.map((i) => i.url) ??
                      images.map((i) => i.url),
                    productName: name,
                    subcategory: subSlug,
                  },
                });
              }}
            >
              <Sparkles size={18} /> Customize with Logo
            </button>
          )}

          {/* qty + quote */}
          <div className="product-actions">
            <div className="qty-box">
              <button onClick={() => qty > 1 && setQty(qty - 1)}>
                <Minus size={16} />
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>
                <Plus size={16} />
              </button>
            </div>

            <button
              onClick={() => {
                addToCart(product, qty, attributes?.color?.[0] || "Default", attributes?.size?.[0] || "Default");
                navigate("/cart");
              }}
              className="btn-add-cart"
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>

            <button 
              className="btn-wishlist"
              onClick={() => addToFavorites({ ...product, href: `/${categorySlug}/${subSlug}/${prodSlug}` })}
              style={{ color: isFavorite(product._id || product.id) ? "#ff4d4f" : "var(--neutral-gray)" }}
            >
              <Heart size={18} fill={isFavorite(product._id || product.id) ? "#ff4d4f" : "none"} />
            </button>
          </div>

          {/* EXTRA INFO */}
          <div className="product-extra-box">
            {sku && (
              <p>
                <Info size={16} /> <strong>SKU:</strong> {sku}
              </p>
            )}
          </div>

          {/* ATTRIBUTES */}
          <div className="product-attributes">
            {(attributes || specifications?.length || additionalInfo?.length) && (
  <div className="product-specifications-box">
    <h3 className="product-spec-heading">Product Specifications</h3>

    <table className="product-spec-table">
      <tbody>
        {/* ATTRIBUTES */}
        {attributes?.material && (
          <tr>
            <td>Material</td>
            <td>{attributes.material}</td>
          </tr>
        )}

        {!!attributes?.size?.length && (
          <tr>
            <td>Available Sizes</td>
            <td>{attributes.size.join(", ")}</td>
          </tr>
        )}

        {!!attributes?.color?.length && (
          <tr>
            <td>Available Colors</td>
            <td>{attributes.color.join(", ")}</td>
          </tr>
        )}

        {/* SPECIFICATIONS */}
        {specifications?.map((spec, index) => (
          <tr key={`spec-${index}`}>
            <td>{spec.key}</td>
            <td>{spec.value}</td>
          </tr>
        ))}

        {/* ADDITIONAL INFO */}
        {additionalInfo?.map((info, index) => (
          <tr key={`info-${index}`}>
            <td>{info.label}</td>
            <td>{info.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
          </div>

          {/* SHARE */}
          {/* <div className="product-share">
            <span>Share:</span>
            <Facebook size={18} />
            <Twitter size={18} />
            <Linkedin size={18} />
          </div> */}
        </div>
      </div>

      {/* ========= Lazy Loaded Page Extras ========= */}

      <Suspense fallback={<div></div>}>
      <SubcategoryStaticContent subSlug={subSlug} productName={product?.name} />

        {/* {shouldShowCustomize && <CustomizationExperience />} */}

        <WhyChooseUsProduct
          productName={name}
          subcategoryName={subcategory?.name}
          categoryName={category?.name}
        />
        
        <CatalogueCTA />
        <RelatedProducts 
          categorySlug={categorySlug} 
          subSlug={subSlug} 
          currentProdSlug={prodSlug} 
          onEnquiryClick={() => setIsEnquiryOpen(true)}
        />

        <ProductFAQ productName={name} subcategoryName={subcategory?.name} />

        <RecentlyViewedProducts 
          currentProdSlug={prodSlug} 
          onEnquiryClick={() => setIsEnquiryOpen(true)}
        />
        <CTASection />
        <HiddenSEOContent />

        {/* Modal */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
          image={enquiryImage}
        />
      </Suspense>
    </>
  );
};

export default SingleProductPage;
