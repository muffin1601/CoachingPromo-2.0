import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import CategoryBanner from "../components/Category/CategoryBanner";
import SearchGrid from "../components/Category/SearchGrid";

import SEO from "../components/Category/SEO";
import CatalogueCTA from "../components/CatalogueCTA";
import PopularSubcategories from "../components/PopularSubcategories";
import BlogSection from "../components/BlogSection";

const SearchPage = () => {
  const [params] = useSearchParams();
  const query = params.get("q") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSearchResults = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/products-search/search?q=${query}`
      );
      setProducts(res.data.results);
    } catch (err) {
      console.log("Search error", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (query) fetchSearchResults();
  }, [query]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/* SEO */}
      <SEO
        title={`Search results for "${query}"`}
        description={`Search results for ${query}`}
        keywords={query}
      />

      {/* Banner */}
      <CategoryBanner
        name={`Search Results`}
        subtitle={`Showing results for "${query}"`}
        image="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Search", href: `/search?q=${query}` },
        ]}
      />

      {/* Products */}
      <SearchGrid products={products} />

      <CatalogueCTA />
      <PopularSubcategories />
      <BlogSection />
    </>
  );
};

export default SearchPage;
