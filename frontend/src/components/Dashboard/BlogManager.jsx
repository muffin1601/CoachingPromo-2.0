import React, { useEffect, useState } from "react";
import { Plus, Edit, Trash2, Search, FileText } from "lucide-react";
import axios from "axios";
import AdminLayout from "../../components/Dashboard/AdminLayout";
import Modal from "../../components/Dashboard/Modal";
import FormInput from "../../components/Dashboard/FormInput";
import "../../styles/admin/HeroManager.css"; // Reuse existing styles

const emptyForm = {
  title: "",
  author: "",
  content: "",
};

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [media, setMedia] = useState(null);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const openAdd = () => {
    setForm(emptyForm);
    setEditId(null);
    setMedia(null);
    setIsModalOpen(true);
  };

  const handleEdit = (blog) => {
    setEditId(blog._id);
    setForm({
      title: blog.title,
      author: blog.author,
      content: blog.content,
    });
    setMedia(null);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/blogs/${id}`);
      alert("Blog deleted successfully ✅");
      fetchBlogs();
    } catch (err) {
      alert("Delete failed ❌");
    }
  };

  const handleSave = async () => {
    if (!form.title || !form.author || !form.content) {
      alert("Please fill in all required fields.");
      return;
    }

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    if (media) data.append("media", media);

    try {
      if (editId) {
        await axios.put(`${import.meta.env.VITE_API_URL}/blogs/${editId}`, data);
        alert("Blog updated successfully ✅");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/blogs/post-blogs`, data);
        alert("Blog created successfully ✅");
      }
      setIsModalOpen(false);
      fetchBlogs();
    } catch (err) {
      alert("Save failed ❌");
    }
  };

  const filteredBlogs = blogs.filter((b) =>
    (b.title?.toLowerCase() || "").includes(search.toLowerCase()) ||
    (b.author?.toLowerCase() || "").includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="hm-wrapper">
        <div className="hm-header">
          <h3 className="hm-title"><FileText size={18} /> Blog Manager</h3>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                placeholder="Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="hm-select"
                style={{ width: 260 }}
              />
            </div>
            <button className="hm-add-btn" onClick={openAdd}>
              <Plus size={16}/> Add New Blog
            </button>
          </div>
        </div>

        <p className="hm-description">Manage your institute blogs, articles and branding tips.</p>

        <ul className="hm-slide-list">
          {filteredBlogs.length === 0 ? (
            <li className="hm-empty">No blogs found.</li>
          ) : filteredBlogs.map((blog) => (
            <li className="hm-slide-item" key={blog._id}>
              <div className="hm-slide-info">
                <strong className="hm-slide-title">{blog.title}</strong>
                <div className="hm-slide-sub">By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}</div>
              </div>

              <div className="hm-slide-actions">
                <button className="hm-edit-btn" onClick={() => handleEdit(blog)}>
                  <Edit size={16}/> Edit
                </button>
                <button className="hm-delete-btn" onClick={() => handleDelete(blog._id)}>
                  <Trash2 size={16}/> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editId ? "Edit Blog" : "Add Blog"}
      >
        <FormInput label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}/>
        <FormInput label="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })}/>
        
        <div className="hm-form-group">
          <label className="hm-input-label">Content</label>
          <textarea
            rows={8}
            className="hm-select"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />
        </div>

        <div className="hm-upload-group" style={{ marginTop: 16 }}>
          <label className="hm-input-label">Media (Image/Video)</label>
          <input type="file" accept="image/*,video/*" onChange={(e) => setMedia(e.target.files[0])}/>
          {editId && !media && <p style={{ fontSize: 12, color: "#666" }}>Leave empty to keep existing media.</p>}
        </div>

        <button className="hm-save-btn" style={{ marginTop: 20 }} onClick={handleSave}>
          {editId ? "Update Blog" : "Publish Blog"}
        </button>
      </Modal>
    </AdminLayout>
  );
};

export default BlogManager;
