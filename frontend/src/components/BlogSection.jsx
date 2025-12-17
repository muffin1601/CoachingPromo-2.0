import React, { useEffect, useState } from "react";
import "../styles/BlogSection.css";
import { ArrowRight } from "lucide-react";
import axios from "axios";

const BlogSection = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/blogs/home/fetch`)
      .then((res) => setblogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};


  return (
    <section className="blog-section">

      <p className="blog-top-tag">READ BLOG</p>
      <h2 className="blog-title">Recent Blogs</h2>

      <div className="blog-wrapper">
        {blogs.map((b, i) => (
          <div className="blog-card" key={i}>
            <div className="blog-left">
              <span className="blog-chip">{b.tag || "Promotional Branding"}</span>

              <p className="blog-meta">
                By {b.author} &nbsp; • &nbsp; {formatDate(b.date)}
              </p>

              <h3 className="blog-heading">{b.title}</h3>

              {/* READ BLOG BUTTON — WITH ARIA LABEL */}
              <button
                className="blog-btn"
                onClick={() => window.location.href = `/blogs/${b._id}`}
                aria-label={`Read blog: ${b.title}`}
              >
                <ArrowRight />
              </button>
            </div>

            <div className="blog-right">
              <img
                src={`${import.meta.env.VITE_IMAGE_API_URL}/uploads/blogs/${b.media}`}
                alt={b.title}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="cta-wrapper-2">
        {/* VIEW ALL BLOGS BUTTON — WITH ARIA LABEL */}
        <button
          className="cta-btn-blog-2"
          onClick={() => window.location.href = '/blogs'}
          aria-label="View all blogs"
        >
          View All Blogs
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
