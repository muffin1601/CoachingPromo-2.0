import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

/*  Lazy-load heavy components */
const CategoryBanner = lazy(() =>
  import("../components/Category/CategoryBanner")
);
const SubcategoryGrid = lazy(() =>
  import("../components/Category/SubcategoryGrid")
);
const CatalogueCTA = lazy(() => import("../components/CatalogueCTA"));
const WhyChooseUsCategory = lazy(() =>
  import("../components/Category/WhyChooseUsCategory")
);
const CategoryFAQ = lazy(() =>
  import("../components/Category/CategoryFAQ")
);
const HiddenSEOContent = lazy(() =>
  import("../components/HiddenSEOContent")
);

/*  Keep SEO immediate (should NOT be lazy) */
import SEO from "../components/Category/SEO";

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
    Stationery: "Custom Stationery, Notebooks & Writing Essentials",
  };

  const loadCategory = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/categories/${slug}`,
        { params: { page, sort } }
      );

      setCategory(res.data.category);
      setSubcategories(res.data.subcategories || []);
      setProducts(res.data.products || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCategory();
  }, [slug, page, sort]);

  if (loading || !category) return <div>Loading...</div>;

  /** Breadcrumbs */
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: category.name },
  ];

  /**  SEO Setup */
  const metaTitle =
    category?.seo?.metaTitle ||
    `${category.name} – Custom Printed & Promotional Products | CoachingPromo`;

  const metaDescription =
    category?.seo?.metaDescription ||
    `Explore premium ${category.name} at CoachingPromo. Custom printing, branded merchandise, and promotional gifts for Coaching institutes, schools, and colleges.`;

  const metaKeywords =
    category?.seo?.keywords?.length > 0
      ? category.seo.keywords.join(",")
      : `${category.name}, promotional products, customized gifts`;

  const canonicalURL = `https://coachingpromo.in/categories/${slug}`;

  return (
    <>
      {/* ✔ Non-lazy SEO (critical) */}
      <SEO
        title={metaTitle}
        description={metaDescription}
        keywords={metaKeywords}
        canonical={canonicalURL}
      />

      {/* Lazy-loaded content wrapper */}
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryBanner
          name={categoryTitles[category.name] || category.name}
          image="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
          subtitle={category.description}
          breadcrumbs={breadcrumbs}
        />

        <SubcategoryGrid subcategories={subcategories} catSlug={slug} />

        <WhyChooseUsCategory categoryName={category.name} />
        <CatalogueCTA />
        <CategoryFAQ categoryName={category.name} />

        {/* extra SEO text */}
        <HiddenSEOContent />
      </Suspense>
    </>
  );
};

export default CategoryPage;
