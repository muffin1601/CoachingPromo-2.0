import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import EnquiryModal from "../components/EnquiryModal";
import "../styles/SingleProductPage.css";
import {
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  ShoppingCart,
  Minus,
  Plus,
  Sparkles,
  Palette,
  Upload,
  Info,
  Tag,
  BadgeIndianRupee,
  Star,
} from "lucide-react";
import CustomizationExperience from "../components/CustomizationExperience";
import CategoryBanner from "../components/Category/CategoryBanner";
import SEO from "../components/Category/SEO";
import BlogSection from "../components/BlogSection";
import PopularSubcategories from "../components/PopularSubcategories";
import CatalogueCTA from "../components/CatalogueCTA";
import WhyChooseUsProduct from "../components/Category/WhyChooseUsProduct";
import ProductFAQ from "../components/Category/ProductFAQ";

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
    price,
    salePrice,
    description,
    images,
    subImages,
    sku,
    tags,
    ratings,
    attributes,
  } = product;

  const enquiryImage = images?.[0]?.url || "";

  const customizeRoutes = {
    "polo-t-shirts": `/customize/polotshirt`,
    "round-neck-t-shirts": `/customize/roundneck`,
    "institute-backpacks": `/customize/all`,
  };

  const shouldShowCustomize =
    subSlug === "polo-t-shirts" ||
    subSlug === "round-neck-t-shirts" ||
    subSlug === "institute-backpacks";

  return (
    <>
      {/* SEO BLOCK */}
      <SEO
        title={
          product?.seo?.metaTitle ||
          `${product?.name} | Custom Merchandise for Coaching Institutes`
        }
        description={
          product?.seo?.metaDescription ||
          `Order ${product?.name} for coaching institutes, training centers, universities and schools. Custom printing, logo branding and bulk pricing available.`
        }
        keywords={
          product?.seo?.keywords?.join(",") ||
          `${product?.name}, ${subcategory?.name}, ${category?.name}, custom institute products, coaching promo merchandise`
        }
        canonical={`https://coachingpromo.in/${categorySlug}/${subSlug}/${prodSlug}`}
      />

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

      <div className="product-page-container">
        {/* LEFT GALLERY */}
        <div className="product-gallery">
          <div className="product-thumb-list">
            {(subImages?.length ? subImages : images)?.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={img.altText || `${name} custom product image`}
                className={`thumb-img ${
                  activeImage === img.url ? "thumb-active" : ""
                }`}
                onClick={() => setActiveImage(img.url)}
              />
            ))}
          </div>

          <div className="product-main-img-wrapper">
            <img
              src={activeImage}
              alt={`${name} customized product for coaching institutes`}
              className="product-main-img"
            />
          </div>
        </div>

        {/* RIGHT PRODUCT DETAILS */}
        <div className="product-info">
          {/* META */}
          <div className="product-meta-line">
            <span className="product-tag">
              <Tag size={14} /> {tags?.join(", ")}
            </span>

            {ratings?.average > 0 && (
              <span className="product-rating">
                <Star size={14} /> {ratings.average} ({ratings.count})
              </span>
            )}
          </div>

          {/* TITLE */}
          <h1 className="product-title">{name}</h1>

          {/* PRICE */}
          <div className="product-price-block">
            {salePrice ? (
              <>
                <span className="sale-price">
                  <BadgeIndianRupee size={18} /> {salePrice}
                </span>
                <span className="main-price">₹{price}</span>
              </>
            ) : (
              <span className="regular-price">
                <BadgeIndianRupee size={18} /> {price}
              </span>
            )}
          </div>

          {/* DESCRIPTION */}
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
                if (subSlug === "polo-t-shirts") {
                  window.location.href = "/customize/polotshirt";
                  return;
                }
                if (subSlug === "round-neck-t-shirts") {
                  window.location.href = "/customize/roundneck";
                  return;
                }
                navigate("/customize/all", {
                  state: {
                    productImages: subImages?.map((i) => i.url) ?? images.map((i) => i.url),
                    productName: name,
                    subcategory: subSlug,
                  },
                });
              }}
            >
              <Sparkles size={18} /> Add Your Logo & Customize Now
            </button>
          )}

          {/* QTY + Quote */}
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

            <button onClick={() => setIsEnquiryOpen(true)} className="btn-add-cart">
              <ShoppingCart size={18} /> Get a Free Quote
            </button>

            <button className="btn-wishlist">
              <Heart size={18} />
            </button>
          </div>

          {/* SKU & TAGS */}
          <div className="product-extra-box">
            {sku && (
              <p>
                <Info size={16} /> <strong>SKU:</strong> {sku}
              </p>
            )}

            {tags?.length > 0 && (
              <p>
                <Tag size={16} /> <strong>Tags:</strong> {tags.join(", ")}
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
      {shouldShowCustomize && <CustomizationExperience />}
      <WhyChooseUsProduct
        productName={name}
        subcategoryName={subcategory?.name}
        categoryName={category?.name}
      />
      <CatalogueCTA />
      <PopularSubcategories />
      <ProductFAQ
        productName={name}
        subcategoryName={subcategory?.name}
      />
      <BlogSection />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        image={enquiryImage}
      />
    </>
  );
};

export default SingleProductPage;
