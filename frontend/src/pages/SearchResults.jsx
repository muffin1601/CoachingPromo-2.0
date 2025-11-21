import React, { useEffect, useState, lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

/*  Lazy-loaded components */
const CategoryBanner = lazy(() =>
  import("../components/Category/CategoryBanner")
);
const SearchGrid = lazy(() =>
  import("../components/Category/SearchGrid")
);
const CatalogueCTA = lazy(() =>
  import("../components/CatalogueCTA")
);
const PopularSubcategories = lazy(() =>
  import("../components/PopularSubcategories")
);
const BlogSection = lazy(() =>
  import("../components/BlogSection")
);

/* DO NOT lazy-load SEO for Google */
import SEO from "../components/Category/SEO";

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
      {/* ---- SEO ---- */}
      <SEO
        title={`Search results for "${query}"`}
        description={`Search results for ${query}`}
        keywords={query}
      />

      {/* ---- Lazy-loaded content ---- */}
      <Suspense fallback={<div></div>}>
        <CategoryBanner
          name="Search Results"
          subtitle={`Showing results for "${query}"`}
          image="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Search", href: `/search?q=${query}` },
          ]}
        />

        {/* Products */}
        <SearchGrid products={products} />

        {/* Extra Components */}
        <CatalogueCTA />
        <PopularSubcategories />
        <BlogSection />
      </Suspense>
    </>
  );
};

export default SearchPage;
