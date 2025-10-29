import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/searchresults.css"; // Your shared CSS file with subproduct styles


const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      setHasSearched(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/search?query=${query}`);
        setResults(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Search error:", err);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <>
      
      <div className="results-page">
        <h2 className="product-heading">Search Results for "{query}"</h2>
        <div className="subproduct-container">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div className="subproduct-card" key={index}>
                <img src={item.image} loading="lazy" alt={item.name} />
                <div className="subproduct-text">
                  <h3>{item.name}</h3>
                  <p>{item.content}</p>
                  {/* <p>₹{item.price}</p> if needed */}
                  <button
                    className="view-button"
                    onClick={() =>
                      window.location.href = `/${encodeURIComponent(item.category)}/${encodeURIComponent(item.subcategory)}/${encodeURIComponent(item.name)}`
                    }
                  >
                    View
                  </button>
                </div>
              </div>
            ))
          ) : (
            hasSearched && <p className="no-results">No items found.</p>
          )}
        </div>
      </div>
      
    </>
  );
};

export default SearchResults;
