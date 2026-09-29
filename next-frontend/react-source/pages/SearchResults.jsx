import React, { useEffect, useState, lazy, Suspense } from "react";
import { useSearchParams } from "@/lib/react-router";
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
        `${(process.env.NEXT_PUBLIC_API_PATH || "/api")}/products-search/search?q=${query}`
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

  if (loading) return <main className="search-loading" role="status">Searching the catalogue…</main>;

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
          image="/apparel.webp"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Search", href: `/search?q=${query}` },
          ]}
        />

        {/* Products */}
        {products.length ? (
          <SearchGrid products={products} />
        ) : (
          <section className="search-empty-state" aria-live="polite">
            <p className="editorial-eyebrow">NO MATCHES FOUND</p>
            <h2>We couldn’t find “{query}”</h2>
            <p>Try a broader product name or browse the catalogue by category.</p>
            <a href="/">Explore the catalogue</a>
          </section>
        )}

        {/* Extra Components */}
        <CatalogueCTA />
        <PopularSubcategories />
        <BlogSection />
      </Suspense>
    </>
  );
};

export default SearchPage;
