const apiUrl = process.env.BACKEND_URL || "http://127.0.0.1:5001";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.coachingpromo.in").replace(/\/$/, "");
export const api = (path) => `${apiUrl}${path}`;
export const mediaUrl = (value) => {
  if (!value) return null;
  if (/^https?:\/\//.test(value)) return value;
  return api(value.startsWith("/") ? value : `/uploads/${value}`);
};
async function get(path, options = {}) {
  const response = await fetch(api(path), { next: { revalidate: 120 }, signal: AbortSignal.timeout(5000), ...options });
  if (!response.ok) return null;
  return response.json();
}
export async function getCategories() { return (await get("/api/categories/all")) || []; }
export async function getCategory(slug) { return get(`/api/categories/${encodeURIComponent(slug)}`); }
export async function getSubcategory(category, subcategory) { return get(`/api/subcategories/${encodeURIComponent(category)}/${encodeURIComponent(subcategory)}`); }
export async function getProduct(slug) { return get(`/api/products/${encodeURIComponent(slug)}`); }
export async function searchProducts(query) { return get(`/api/products-search/search?q=${encodeURIComponent(query)}`); }
export async function getBlogs() { return (await get("/api/blogs")) || []; }
export async function getBlog(slug) { return get(`/api/blogs/${encodeURIComponent(slug)}`); }
export const productHref = (product) => product?.category?.slug && product?.subcategory?.slug ? `/${product.category.slug}/${product.subcategory.slug}/${product.slug}` : `/product/${product?.slug || ""}`;
