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
                By {b.author} &nbsp; • &nbsp; {b.date}
              </p>

              <h3 className="blog-heading">{b.title}</h3>

              <button className="blog-btn">
               <ArrowRight/>
              </button>
            </div>

            <div className="blog-right">
              <img src={`${import.meta.env.VITE_IMAGE_API_URL}/uploads/blogs/${b.media}`} alt={b.title} />
            </div>
          </div>
        ))}
      </div>
      <div className="cta-wrapper">
        <button className="cta-btn-blog" onClick={() => window.location.href = '/blogs'}>
          View All Blogs
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
