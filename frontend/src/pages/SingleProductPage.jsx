import React, { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/SingleProductPage.css";
import SubcategoryStaticContent from "../components/Category/SubcategoryStaticContent";


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
} from "lucide-react";

/*  Lazy Load Heavy Components */
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

/*  Keep SEO component non-lazy */
import SEO from "../components/Category/SEO";

const SingleProductPage = () => {
  const { categorySlug, subSlug, prodSlug } = useParams();

  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [qty, setQty] = useState(1);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const navigate = useNavigate();

  const fetchProduct = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${prodSlug}`
    );
    setProduct(data.product);
    setActiveImage(data.product?.images?.[0]?.url);
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
          image="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
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
              <img
                key={i}
                src={img.url}
                alt={img.altText || `${name} - product view`}
                className={`thumb-img ${
                  activeImage === img.url ? "thumb-active" : ""
                }`}
                loading="lazy"
                onClick={() => setActiveImage(img.url)}
              />
            ))}
          </div>

          <div className="product-main-img-wrapper">
            <img
              src={activeImage}
              loading="eager"
              alt={`${name} - main product`}
              className="product-main-img"
            />
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

            {ratings?.average > 0 && (
              <span className="product-rating">
                <Star size={14} /> {ratings.average} ({ratings.count})
              </span>
            )}
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
              onClick={() => setIsEnquiryOpen(true)}
              className="btn-add-cart"
            >
              <ShoppingCart size={18} /> Get Free Quote
            </button>

            <button className="btn-wishlist">
              <Heart size={18} />
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
            {attributes?.material && (
              <p>
                <Palette size={16} /> <strong>Material:</strong>{" "}
                {attributes.material}
              </p>
            )}

            {!!attributes?.size?.length && (
              <p>
                <strong>Sizes:</strong> {attributes.size.join(", ")}
              </p>
            )}

            {!!attributes?.color?.length && (
              <p>
                <strong>Colors:</strong> {attributes.color.join(", ")}
              </p>
            )}
          </div>

          {/* SHARE */}
          <div className="product-share">
            <span>Share:</span>
            <Facebook size={18} />
            <Twitter size={18} />
            <Linkedin size={18} />
          </div>
        </div>
      </div>

      {/* ========= Lazy Loaded Page Extras ========= */}

      <Suspense fallback={<div></div>}>
      <SubcategoryStaticContent subSlug={subSlug} />

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
