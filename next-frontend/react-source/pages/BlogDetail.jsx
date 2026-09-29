import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "@/lib/react-router";
import axios from "axios";
import PageMeta from "../components/PageMeta";
import PageBanner from "../components/PageBanner";
import "../styles/BlogDetail.css";
import { Loader2 } from "lucide-react";

/*  Lazy-loaded heavy components */
const BlogSection = lazy(() => import("../components/BlogSection"));
const CustomizationExperience = lazy(() =>
  import("../components/CustomizationExperience")
);

const BlogDetails = ({ initialBlog = null }) => {
  const { id } = useParams();

  const [blog, setBlog] = useState(initialBlog);
  const [comments, setComments] = useState(initialBlog?.comments || []);
  const [loading, setLoading] = useState(!initialBlog);

  // comment posting
  const [commentData, setCommentData] = useState({
    name: "",
    message: "",
  });

  // Fetch blog
  const fetchBlog = async () => {
    try {
      const res = await axios.get(
        `${(process.env.NEXT_PUBLIC_API_PATH || "/api")}/blogs/${id}`
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
        `${(process.env.NEXT_PUBLIC_API_PATH || "/api")}/blogs/${id}/comments`,
        {
          name: commentData.name,
          comment: commentData.message,
        }
      );

      fetchBlog(); // reload comments

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
      <PageMeta
        title={`${blog.title} | CoachingPromo`}
        description={blog.metaDescription || blog.excerpt || blog.content?.replace(/<[^>]*>/g, "").slice(0, 150)}
        canonical={`${(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")}/blogs/${id}`}
        type="article"
        image={blog.featuredImage || blog.media ? `${(process.env.NEXT_PUBLIC_IMAGE_API_URL || "")}/uploads/blogs/${blog.featuredImage || blog.media}` : undefined}
        imageAlt={blog.imageAlt || blog.title}
      />

      {/* BANNER */}
      <PageBanner
        title={blog.title}
        background="/apparel.webp"
        breadcrumb={[
          { label: "Blog", path: "/blogs" },
          { label: blog.title },
        ]}
      />

      {/* BLOG CONTENT */}
      <div className="blg-details-container">
        <div className="blg-two-col">
          {/* LEFT */}
          <div className="blg-left">
            <div className="blg-details-header">
              <h2>{blog.title}</h2>

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

            {/* MEDIA */}
            {blog.media && (
              <>
                {blog.media.includes("mp4") ? (
                  <video
                    className="blg-details-media"
                    controls
                    src={`${(process.env.NEXT_PUBLIC_IMAGE_API_URL || "")}/uploads/blogs/${blog.media}`}
                  />
                ) : (
                  <img
                    className="blg-details-media"
                    src={`${(process.env.NEXT_PUBLIC_IMAGE_API_URL || "")}/uploads/blogs/${blog.media}`}
                    alt={blog.title}
                    width={800}
                    height={500}
                    decoding="async"
                    loading="eager"
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
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

          {/* RIGHT — COMMENTS */}
          <div className="blg-right">
            <div className="blg-comments-section">
              <h2>Comments</h2>

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

              {/* FORM */}
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

                <button type="submit" aria-label="Post comment">
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*  Lazy Loaded Below-the-Fold Sections */}
      <Suspense fallback={null}>
        <CustomizationExperience />
        <BlogSection />
      </Suspense>
    </>
  );
};

export default BlogDetails;
