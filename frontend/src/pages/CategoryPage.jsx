import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CategoryBanner from "../components/Category/CategoryBanner";
import SubcategoryGrid from "../components/Category/SubcategoryGrid";
import CatalogueCTA from "../components/CatalogueCTA";

import SEO from "../components/Category/SEO"; 
import axios from "axios";
import WhyChooseUsCategory from "../components/Category/WhyChooseUsCategory";
import CategoryFAQ from "../components/Category/CategoryFAQ";


const CategoryPage = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);

  const categoryTitles = {
  Apparel: "Custom Apparel & Branded Clothing for Institutes",
  Bags: "Custom Bags, Backpacks & Corporate Gift Bags",
  "Promotional Items": "Promotional Products & Branding Merchandise",
  Stationery: "Custom Stationery, Notebooks & Writing Essentials"
};


  const getCategoryData = async (slug, page = 1, sort = "default") => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/categories/${slug}`,
      { params: { page, sort } }
    );
    return res.data;
  };

  useEffect(() => {
    fetchCategory();
  }, [slug, page, sort]);

  const fetchCategory = async () => {
    setLoading(true);
    try {
      const data = await getCategoryData(slug, page, sort);
      setCategory(data.category);
      setSubcategories(data.subcategories || []);
      setProducts(data.products || []);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  if (loading || !category) return <div>Loading...</div>;

  /** Breadcrumbs */
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: category.name }
  ];

  /** Dynamic SEO values with fallback */
  const metaTitle =
    category?.seo?.metaTitle ||
    `${category.name} – Custom Printed & Promotional Products | CoachingPromo`;

  const metaDescription =
    category?.seo?.metaDescription ||
    `Explore premium ${category.name} at CoachingPromo. Custom printing, branded merchandise, and promotional gifts for coaching institutes, schools, and colleges.`;

  const metaKeywords =
    category?.seo?.keywords?.length > 0
      ? category.seo.keywords.join(",")
      : `${category.name}, promotional products, customized gifts`;

  /**  Dynamic Canonical URL */
  const canonicalURL = `https://coachingpromo.in/categories/${slug}`;


  return (
    <>
      {/*  Full SEO Helmet */}
      <SEO
        title={metaTitle}
        description={metaDescription}
        keywords={metaKeywords}
        canonical={canonicalURL}
      />

      <CategoryBanner
        name={categoryTitles[category.name] || category.name}
        image="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
        subtitle={category?.description}
        breadcrumbs={breadcrumbs}
      />


      {/* SEO Supporting Text */}
      {/* <p className="subcat-description">
        Discover our wide range of <strong>{category.name}</strong>   
        products designed for coaching institutes, schools, colleges, and universities. 
        Choose a subcategory below to explore customized merchandise, branding solutions, 
        and promotional items tailored for educational organizations across India.
      </p> */}

      <SubcategoryGrid subcategories={subcategories} catSlug={slug} />
     <WhyChooseUsCategory categoryName={category.name} />
      <CatalogueCTA />
      <CategoryFAQ categoryName={category.name} />

    </>
  );
};

export default CategoryPage;
