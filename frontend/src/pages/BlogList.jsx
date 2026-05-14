import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import "../styles/Blog.css";
import { ChevronRight } from "lucide-react";

/*  Lazy-loaded components */
const PageBanner = lazy(() => import("../components/PageBanner"));
const ExitIntentPopup = lazy(() => import("../components/ExitIntentPopup"));
const HiddenSEOContent = lazy(() => import("../components/HiddenSEOContent"));

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/blogs`)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);

  const goToPage = (num) => setCurrentPage(num);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <>
      <PageMeta
        title="Blogs | CoachingPromo"
        description="Explore CoachingPromo blogs for insights on Institute promotional products, customization tips, and branding ideas for schools, colleges, and universities."
        canonical={`${import.meta.env.VITE_FRONTEND_URL}/blogs`}
      />

      {/*  Lazy-loaded banner */}
      <Suspense fallback={null}>
        <PageBanner
          title="Blogs"
          background="/apparel.webp"
          breadcrumb={[{ label: "Blog" }]}
        />
      </Suspense>

      <div className="blg-list-container">
        {/* Header */}
        <div className="blg-list-header">
          <h2 className="blg-list-title">Latest Articles</h2>
          <Link to="/blogs/post" className="blg-create-button">
            + New Post
          </Link>
        </div>

        {/* Blog grid */}
        <div className="blg-list-grid">
          {currentBlogs.map((blog) => (
            <div className="blg-card" key={blog._id}>
              <div className="blg-card-top">
                <h3 className="blg-card-title">{blog.title}</h3>

                <div className="blg-card-meta">
                  <span className="blg-card-author">By {blog.author}</span> |{" "}
                  <span className="blg-card-date">
                    {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* Media */}
              {blog.media &&
                (blog.media.includes("mp4") ? (
                  <video
                    className="blg-card-media"
                    width="100%"
                    controls
                    preload="metadata"
                    src={`${import.meta.env.VITE_IMAGE_API_URL}/uploads/blogs/${blog.media}`}
                  />
                ) : (
                  <img
                    className="blg-card-media"
                    loading="lazy"
                    decoding="async"
                    src={`${import.meta.env.VITE_IMAGE_API_URL}/uploads/blogs/${blog.media}`}
                    alt={blog.title}
                    width={400}
                    height={250}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                ))}

              <p className="blg-card-content">
                {blog.content?.slice(0, 100)}...
              </p>

              <Link to={`/blogs/${blog._id}`} className="blg-readmore-link">
                READ MORE <ChevronRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="blg-pagination">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="blg-pagination-btn"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`blg-pagination-btn ${
                  currentPage === i + 1 ? "active" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="blg-pagination-btn"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Lazy-loaded footer extras */}
      <Suspense fallback={null}>
        {/* <ExitIntentPopup /> */}
        <HiddenSEOContent />
      </Suspense>
    </>
  );
};

export default BlogList;
