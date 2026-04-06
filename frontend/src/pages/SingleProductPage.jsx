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
const CategoryBanner = lazy(() =>
  import("../components/Category/CategoryBanner")
);
const BlogSection = lazy(() => import("../components/BlogSection"));
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

   const categoryBannerImages = {
  "apparel-accessories": "/apparel.webp",
  bags: "/bags.webp",
  stationery: "/stationary.webp",
  "promotional-items": "/promo.webp",
};

const bannerImage =
  categoryBannerImages[categorySlug] ||
  "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg";

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

      {/* Lazy Loaded Components Below */}
      <Suspense fallback={<div></div>}>
        <CategoryBanner
          name={product?.name}
          image={bannerImage}
          subtitle={
            typeof product?.description === "string"
              ? product.description
              : product?.description?.short
          }
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: category?.name, href: `/categories/${categorySlug}` },
            { label: subcategory?.name, href: `/${categorySlug}/${subSlug}` },
            { label: product?.name },
          ]}
        />
      </Suspense>

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

        {shouldShowCustomize && <CustomizationExperience />}

        <WhyChooseUsProduct
          productName={name}
          subcategoryName={subcategory?.name}
          categoryName={category?.name}
        />
        
        <CatalogueCTA />
        <PopularSubcategories />

        <ProductFAQ productName={name} subcategoryName={subcategory?.name} />

        <BlogSection />
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
