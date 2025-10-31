import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/blog.css";
import PageBanner from "../components/PageBanner";
import { ChevronRight } from "lucide-react";

const blogList = () => {
  const [blogs, setblogs] = useState([]);

  // ⬇ pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/blogs`)
      .then((res) => setblogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  //  Pagination Calculation
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentblgs = blogs.slice(indexOfFirst, indexOfLast);

  const goToPage = (num) => setCurrentPage(num);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Helmet>
        <title>blogs | CoachingPromo</title>
        <meta
          name="description"
          content="Explore CoachingPromo blogs for insights on institute promotional products, customization tips, and branding ideas for schools, colleges, and universities."
        />
        <link rel="canonical" href="https://coachingpromo.in/blogs" />
      </Helmet>
<PageBanner
        title="Blogs"
        background="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
        breadcrumb={[{ label: "Blog" }]}
      />
      <div className="blg-list-container">
        
        {/* HEADER */}
        <div className="blg-list-header">
          <h2 className="blg-list-title">Latest Articles</h2>
          <Link to="/blogs/post" className="blg-create-button">
            + New Post
          </Link>
        </div>

        {/* blg GRID */}
        <div className="blg-list-grid">
          {currentblgs.map((blog) => (
            <div className="blg-card" key={blog._id}>
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

              {blog.media &&
                (blog.media.includes("mp4") ? (
                  <video
                    className="blg-card-media"
                    width="100%"
                    controls
                    src={`${import.meta.env.VITE_IMAGE_API_URL}/uploads/blogs/${blog.media}`}
                  />
                ) : (
                  <img
                    className="blg-card-media"
                    loading="lazy"
                    src={`${import.meta.env.VITE_IMAGE_API_URL}/uploads/blogs/${blog.media}`}
                    alt={blog.title}
                    width="100%"
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

        {/*  PAGINATION */}
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

        {/* EXTRA INFO
        <div className="blg-list-extra-content">
          <p>
            Discover how promotional items like custom t-shirts, bags, diaries,
            and stationery can help boost your institute or business branding.
            Our latest blgs share creative ideas, real client stories, and
            trending corporate gifting solutions for 2025. Stay updated, grow
            organically, and make your brand memorable.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default blogList;
