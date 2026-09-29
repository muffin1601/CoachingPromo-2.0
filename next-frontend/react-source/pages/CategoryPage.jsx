import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "@/lib/react-router";
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

/*  Keep SEO immediate (should NOT be lazy) */
import SEO from "../components/Category/SEO";

const CategoryPage = ({ initialData = null }) => {
  const { slug } = useParams();
  const [category, setCategory] = useState(initialData?.category || null);
  const [subcategories, setSubcategories] = useState(initialData?.subcategories || []);
  const [, setProducts] = useState(initialData?.products || []);
  const [page] = useState(1);
  const [sort] = useState("default");
  const [loading, setLoading] = useState(!initialData);

  const categoryTitles = {
    Apparel: "Custom Apparel & Branded Clothing for Institutes",
    Bags: "Custom Bags, Backpacks & Corporate Gift Bags",
    "Promotional Items": "Promotional Products & Branding Merchandise",
    Stationery: "Custom Stationery, Notebooks & Writing Essentials",
  };

  const categoryBannerImages = {
  "apparel-accessories": "/apparel.webp",
  bags: "/bags.webp",
  stationery: "/stationary.webp",
  "promotional-items": "/promo.webp",
};

const bannerImage =
  categoryBannerImages[slug] ||
  "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg";

  const loadCategory = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${(process.env.NEXT_PUBLIC_API_PATH || "/api")}/categories/${slug}`,
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

  const canonicalURL = `${(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")}/categories/${slug}`;

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
          image={bannerImage}
          subtitle={category.description}
          breadcrumbs={breadcrumbs}
        />

        <SubcategoryGrid subcategories={subcategories} catSlug={slug} />

        <WhyChooseUsCategory categoryName={category.name} />
        <CatalogueCTA />
        <CategoryFAQ categoryName={category.name} />

      </Suspense>
    </>
  );
};

export default CategoryPage;
