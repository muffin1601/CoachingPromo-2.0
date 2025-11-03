import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import PageBanner from "../components/PageBanner";
import "../styles/BlogDetail.css";
import { Loader2 } from "lucide-react";

import BlogSection from "../components/BlogSection";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // comment posting
  const [commentData, setCommentData] = useState({
    name: "",
    message: "",
  });

  // Fetch blog
  const fetchBlog = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/blogs/${id}`
      );
      setBlog(res.data);
      setComments(res.data.comments || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlog();
  }, [id]);

  // Submit comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentData.name || !commentData.message) return;

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/blogs/${id}/comments`,
        {
          name: commentData.name,
          comment: commentData.message,
        }
      );

      // Re-fetch updated comments
      fetchBlog();

      setCommentData({
        name: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading)
    return (
      <div className="blg-loader">
        <Loader2 size={28} className="spin" />
      </div>
    );

  if (!blog) return <h2 className="blg-not-found">Blog Not Found</h2>;

  return (
    <>
      {/* SEO Friendly Helmet */}
      <Helmet>
        <title>{blog.title} | CoachingPromo</title>
        <meta
          name="description"
          content={blog.metaDesc || blog.content?.slice(0, 150)}
        />
        <link rel="canonical" href={`https://coachingpromo.in/blogs/${id}`} />
      </Helmet>

      {/* BANNER */}
      <PageBanner
        title={blog.title}
        background="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
        breadcrumb={[
          { label: "Blog", path: "/blogs" },
          { label: blog.title },
        ]}
      />

      <div className="blg-details-container">
        <div className="blg-two-col">
          {/* LEFT - Blog Content */}
          <div className="blg-left">
            {/* HEADER */}
            <div className="blg-details-header">
              <h1>{blog.title}</h1>

              <div className="blg-details-meta">
                <span className="blg-author">By {blog.author}</span> •{" "}
                <span className="blg-date">
                  {new Date(blog.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* COVER IMAGE / MEDIA */}
            {blog.media && (
              <>
                {blog.media.includes("mp4") ? (
                  <video
                    className="blg-details-media"
                    controls
                    src={`${import.meta.env.VITE_IMAGE_API_URL}/uploads/blogs/${blog.media}`}
                  />
                ) : (
                  <img
                    className="blg-details-media"
                    src={`${import.meta.env.VITE_IMAGE_API_URL}/uploads/blogs/${blog.media}`}
                    alt={blog.title}
                  />
                )}
              </>
            )}

            {/* CONTENT */}
            <div
              className="blg-details-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
          </div>

          {/* RIGHT - Comments */}
          <div className="blg-right">
            <div className="blg-comments-section">
              <h2>Comments</h2>

              {/* Existing Comments */}
              <div className="blg-comments-list">
                {comments.length > 0 ? (
                  comments.map((c, i) => (
                    <div className="blg-comment" key={i}>
                      <h4>{c.name}</h4>
                      <p>{c.comment}</p>
                      <span>
                        {new Date(c.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  ))
                ) : (
                  <p>No comments yet. Be the first!</p>
                )}
              </div>

              {/* Comment Form */}
              <form className="blg-comment-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={commentData.name}
                  onChange={(e) =>
                    setCommentData({ ...commentData, name: e.target.value })
                  }
                  required
                />

                <textarea
                  placeholder="Write your comment..."
                  rows={5}
                  value={commentData.message}
                  onChange={(e) =>
                    setCommentData({ ...commentData, message: e.target.value })
                  }
                  required
                ></textarea>

                <button type="submit">Post Comment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <BlogSection />
    </>
  );
};

export default BlogDetails;
