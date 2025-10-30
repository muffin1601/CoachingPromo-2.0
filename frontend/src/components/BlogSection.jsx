import React from "react";
import "../styles/BlogSection.css";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    tag: "Gifting Ideas",
    author: "Admin",
    date: "20 Oct, 2024",
    title: "Top 10 Annual Function T-Shirt Ideas",
    thumb: "/assets/blog/b1.webp",
  },
  {
    tag: "Corporate",
    author: "Admin",
    date: "10 Oct, 2024",
    title: "Best Polo T-Shirt Designs for Coaching Institutes",
    thumb: "/assets/blog/b2.webp",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">

      <p className="blog-top-tag">READ BLOG</p>
      <h2 className="blog-title">Recent Blogs</h2>

      <div className="blog-wrapper">
        {blogs.map((b, i) => (
          <div className="blog-card" key={i}>
            <div className="blog-left">
              <span className="blog-chip">{b.tag}</span>

              <p className="blog-meta">
                By {b.author} &nbsp; • &nbsp; {b.date}
              </p>

              <h3 className="blog-heading">{b.title}</h3>

              <button className="blog-btn">
               <ArrowRight/>
              </button>
            </div>

            <div className="blog-right">
              <img src={b.thumb} alt={b.title} />
            </div>
          </div>
        ))}
      </div>
      <div className="cta-wrapper">
        <button className="cta-btn-blog" onClick={() => window.location.href = '/all-blogs'}>
          View All Blogs
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
