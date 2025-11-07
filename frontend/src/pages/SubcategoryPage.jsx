// ✅ src/pages/SubcategoryPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CategoryBanner from "../components/Category/CategoryBanner";
import ProductGrid from "../components/Category/ProductGrid";

import SEO from "../components/Category/SEO";
import CatalogueCTA from "../components/CatalogueCTA";
import axios from "axios";
import PopularSubcategories from "../components/PopularSubcategories";
import BlogSection from "../components/BlogSection";

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

  /**   Breadcrumb Data */
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: category?.name, href: `/categories/${categorySlug}` },
    { label: subcategory.name }
  ];

  return (
    <>
      {/*  SEO Meta Injection */}
      <SEO
        title={subcategory?.seo?.metaTitle || subcategory.name}
        description={subcategory?.seo?.metaDescription}
        keywords={subcategory?.seo?.keywords?.join(",")}
      />

      {/*  Banner */}
      <CategoryBanner
        name={subcategory.name}
        image= "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
        subtitle={subcategory?.description}
        breadcrumbs={breadcrumbs}
      />

      {/*  Products */}
      <ProductGrid products={products}  catSlug= {categorySlug} subSlug ={subSlug} />

      <CatalogueCTA />
      <PopularSubcategories/>
      <BlogSection/>
    </>
  );
};

export default SubcategoryPage;
