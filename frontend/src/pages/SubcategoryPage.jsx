
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CategoryBanner from "../components/Category/CategoryBanner";
import ProductGrid from "../components/Category/ProductGrid";

import SEO from "../components/Category/SEO";
import CatalogueCTA from "../components/CatalogueCTA";
import axios from "axios";
import CustomizationExperience from "../components/CustomizationExperience";
import BlogSection from "../components/BlogSection";
import { subcategoryTitles } from "../data/subcategories";
import SubcategoryFAQ from "../components/Category/SubcategoryFAQ";
import WhyChooseUsSubcategory from "../components/Category/WhyChooseUsSubcategory";
import DynamicSEOContent from "../components/Category/DynamicSEOContent";
import HiddenSEOContent from "../components/HiddenSEOContent";

const SubcategoryPage = () => {
  const { categorySlug, subSlug } = useParams();

  const [subcategory, setSubcategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);

  const getSubcategoryData = async (categorySlug, subSlug, page, sort) => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/subcategories/${categorySlug}/${subSlug}`,
      { params: { page, sort } }
    );
    return res.data;
  };

  const getCategoryData = async (categorySlug, page = 1, sort = "default") => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/categories/${categorySlug}`,
      { params: { page, sort } }
    );
    return res.data;
  };

  useEffect(() => {
    getCategoryData(categorySlug).then((data) => {
      setCategory(data.category);
    });
  }, [categorySlug]);

  useEffect(() => {
    fetchSubCategory();
  }, [categorySlug, subSlug, page, sort]);

  const fetchSubCategory = async () => {
    setLoading(true);
    try {
      const data = await getSubcategoryData(categorySlug, subSlug, page, sort);
      setSubcategory(data.subcategory);
      setProducts(data.products || []);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  if (loading || !subcategory) return <div>Loading...</div>;

  /** Breadcrumb Data */
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: category?.name, href: `/categories/${categorySlug}` },
    { label: subcategory.name }
  ];

  /** Canonical URL */
  const canonicalURL = `https://coachingpromo.in/${categorySlug}/${subSlug}`;

  /** SEO Fallbacks */
  const metaTitle =
    subcategory?.seo?.metaTitle ||
    `${subcategory.name} – Custom ${subcategory.name} for Institutes | CoachingPromo`;

  const metaDescription =
    subcategory?.seo?.metaDescription ||
    `Discover premium ${subcategory.name} under ${category?.name}. Perfect for coaching institutes, schools, colleges, and events with custom branding options.`;

  const metaKeywords =
    subcategory?.seo?.keywords?.length > 0
      ? subcategory.seo.keywords.join(",")
      : `${subcategory.name}, ${category?.name}, custom merchandise, promotional items, branded products`;

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title={metaTitle}
        description={metaDescription}
        keywords={metaKeywords}
        canonical={canonicalURL}
        ogTitle={metaTitle}
        ogDescription={metaDescription}
        ogUrl={canonicalURL}
      />

      {/* Banner */}
      <CategoryBanner
        name={subcategoryTitles[subSlug] || subcategory.name}
        image="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
        subtitle={subcategory?.description}
        breadcrumbs={breadcrumbs}
      />

      {/* Products */}
      <ProductGrid
        products={products}
        catSlug={categorySlug}
        subSlug={subSlug}
      />
      {["round-neck-t-shirts", "polo-t-shirts"].includes(subSlug) && (
        <CustomizationExperience />
      )}
      <WhyChooseUsSubcategory subcategoryName={subcategory.name} />
      <CatalogueCTA />
      {/* <PopularSubcategories /> */}
      <DynamicSEOContent slug={subSlug} />
      <SubcategoryFAQ subcategoryName={subcategory.name} />
      <BlogSection />
      <HiddenSEOContent/>
    </>
  );
};

export default SubcategoryPage;
