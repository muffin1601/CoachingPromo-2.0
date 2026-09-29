import React, { useEffect, useId, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "@/lib/react-router";

const productHref = (product) => {
  const category = product.category?.slug || "category";
  const subcategory = product.subcategory?.slug || "subcategory";
  return `/${category}/${subcategory}/${product.slug}`;
};

const SearchBox = ({ mobile = false }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const requestRef = useRef(null);
  const listId = useId();
  const navigate = useNavigate();

  useEffect(() => {
    const term = query.trim();
    if (term.length < 2) {
      setResults([]);
      setOpen(false);
      return undefined;
    }

    const timer = window.setTimeout(async () => {
      requestRef.current?.abort();
      requestRef.current = new AbortController();
      try {
        setLoading(true);
        const response = await fetch(`${(process.env.NEXT_PUBLIC_API_PATH || "/api")}/products-search/search?q=${encodeURIComponent(term)}`, { signal: requestRef.current.signal });
        if (!response.ok) throw new Error("Search request failed");
        const data = await response.json();
        setResults((data.results || []).slice(0, 6));
        setOpen(true);
      } catch (error) {
        if (error.name !== "AbortError") setResults([]);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => () => requestRef.current?.abort(), []);

  const submitSearch = (event) => {
    event.preventDefault();
    const term = query.trim();
    if (!term) return;
    setOpen(false);
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <div className={`site-search ${mobile ? "site-search-mobile" : ""}`} onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setOpen(false)}>
      <form className="site-search-form" role="search" onSubmit={submitSearch}>
        <Search size={18} aria-hidden="true" />
        <input
          type="search"
          aria-label="Search products"
          aria-controls={listId}
          aria-expanded={open}
          autoComplete="off"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => query.trim().length >= 2 && setOpen(true)}
          placeholder="Search products and categories"
        />
        <button type="submit">Search</button>
      </form>

      {open && (
        <div className="search-suggestions" id={listId} role="listbox">
          <div className="search-suggestions-label">{loading ? "Searching…" : results.length ? "Suggested products" : "No products found"}</div>
          {results.map((product) => (
            <button key={product._id || product.slug} type="button" role="option" aria-selected="false" onClick={() => { setOpen(false); navigate(productHref(product)); }}>
              {product.images?.[0]?.url ? <img src={product.images[0].url} alt="" width="48" height="48" loading="lazy" /> : <span className="search-suggestion-placeholder" aria-hidden="true" />}
              <span><strong>{product.name}</strong><small>{product.category?.name || "Product"}</small></span>
            </button>
          ))}
          <button className="search-all-results" type="button" onClick={submitSearch}>View all results for “{query.trim()}”</button>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
