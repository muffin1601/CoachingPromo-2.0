import React, { useEffect, useState, Suspense, lazy } from "react";
import axios from "axios";
import PageBanner from "../components/PageBanner";

const ProductGrid = lazy(() => import("../components/Category/ProductGrid"));
const CatalogueCTA = lazy(() => import("../components/CatalogueCTA"));

const OffersPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiscountedProducts = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL || ""}/api/products/discounted`);
        setProducts(data.products || []);
      } catch (err) {
        setError("Failed to load offers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDiscountedProducts();
  }, []);

  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Special Offers" }];

  return (
    <div className="offers-page">
      <PageBanner
        title="Exclusive Offers & Discounts"
        subtitle="Grab premium custom printed products at unbeatable prices."
        background="/bags.webp"
        breadcrumbs={breadcrumbs}
      />

      <div style={containerStyle}>
        {loading ? (
          <div style={loadingStyle}>Loading exclusive deals...</div>
        ) : error ? (
          <div style={errorStyle}>{error}</div>
        ) : products.length === 0 ? (
          <div style={emptyStyle}>
            <h3>No active offers at the moment!</h3>
            <p>Check back later or contact us for custom bulk pricing.</p>
          </div>
        ) : (
          <Suspense fallback={<div>Loading grid...</div>}>
             <div style={gridHeaderStyle}>
                <h2>Limited Time Deals</h2>
                <p>Flat discounts on our most popular promotional items for institutes.</p>
             </div>
             <ProductGrid products={products} />
          </Suspense>
        )}
      </div>

      <Suspense fallback={null}>
        <CatalogueCTA />
      </Suspense>
    </div>
  );
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "60px auto",
  padding: "0 20px",
  minHeight: "400px",
};

const loadingStyle = {
  textAlign: "center",
  fontSize: "1.2rem",
  color: "#666",
  padding: "100px 0",
};

const errorStyle = {
  textAlign: "center",
  color: "#d32f2f",
  padding: "50px",
  fontSize: "1.1rem",
};

const emptyStyle = {
  textAlign: "center",
  padding: "100px 0",
  color: "#555",
};

const gridHeaderStyle = {
    marginBottom: "40px",
    textAlign: "center",
};

export default OffersPage;
