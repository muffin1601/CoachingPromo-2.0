import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import PageBanner from "../components/PageBanner";
import { ArrowRight } from "lucide-react";
import "../styles/BlogForm.css";   // new css

const BlogFormCTA = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
  });

  const [media, setMedia] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    if (media) data.append("media", media);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/blogs/post-blogs`,
        data
      );

      alert("✅ Blog Posted Successfully!");

      setForm({ title: "", content: "", author: "" });
      setMedia(null);
    } catch (err) {
      console.error("❌ Error posting blog:", err);
      alert("Failed to post blog.");
    }
  };

  return (
    <>
     <Helmet>
        <title>Create Blog | CoachingPromo</title>
        <meta
          name="description"
          content="Write and publish a new blog on CoachingPromo."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://coachingpromo.in/blogs/new" />
      </Helmet>
      <PageBanner
        title="New Blog Post"
        background="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"
        breadcrumb={[{ label: "New Blog" }]}
      />

    <section className="blogcta-section">
      <div className="blogcta-wrapper">
        
        {/* LEFT — IMAGE */}
        <div className="blogcta-left">
          <img
            src="/assets/blog/b2.webp"
            alt="Post a Blog"
            className="blogcta-img"
          />
        </div>

        {/* RIGHT — FORM */}
        <div className="blogcta-right">
          <h2 className="blogcta-title">Write a Blog</h2>
          <p className="blogcta-subtitle">
            Publish your ideas and reach thousands
          </p>

          <form className="blogcta-form" onSubmit={handleSubmit}>

            <div className="blogform-grid">
              <input
                type="text"
                name="title"
                placeholder="Blog Title*"
                value={form.title}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="author"
                placeholder="Author Name*"
                value={form.author}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="content"
              placeholder="Write your content..."
              rows="6"
              value={form.content}
              onChange={handleChange}
              required
            />
<div className="blogcta-file-wrapper">
  <label htmlFor="blogcta-file" className="blogcta-file-label">
    Upload Image / Video
  </label>

  <input
    id="blogcta-file"
    type="file"
    accept="image/*,video/*"
    onChange={(e) => setMedia(e.target.files[0])}
  />

  {media && (
    <p className="blogcta-file-name">{media.name}</p>
  )}
</div>

            <button type="submit" className="blogcta-btn">
              Post Blog <ArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section></>
  );
};

export default BlogFormCTA;
