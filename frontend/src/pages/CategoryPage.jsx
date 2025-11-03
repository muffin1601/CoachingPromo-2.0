import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import CategoryBanner from "../components/Category/CategoryBanner";
import SubcategoryGrid from "../components/Category/SubcategoryGrid";


import SEO from "../components/Category/SEO";


import axios from "axios";
import CatalogueCTA from "../components/CatalogueCTA";

const CategoryPage = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);

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

  /**  Breadcrumb Data */
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: category.name }
  ];

  return (
    <>
      <SEO
        title={category?.seo?.metaTitle || category.name}
        description={category?.seo?.metaDescription}
        keywords={category?.seo?.keywords?.join(",")}
      />

      <CategoryBanner
        name={category.name}
        image= "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
        subtitle={category?.description}
        breadcrumbs={breadcrumbs}
      />

      <SubcategoryGrid subcategories={subcategories} />

     
      <CatalogueCTA/>
    </>
  );
};

export default CategoryPage;
