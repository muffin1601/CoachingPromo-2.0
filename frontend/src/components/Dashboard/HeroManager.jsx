import React, { useEffect, useState } from "react";
import { Plus, Image as ImageIcon, Trash2, Edit } from "lucide-react";
import axios from "axios";
import Modal from "../../components/Dashboard/Modal";
import FormInput from "../../components/Dashboard/FormInput";
import AdminLayout from "../../components/Dashboard/AdminLayout";
import "../../styles/admin/HeroManager.css";

const HeroManager = () => {
  const [slides, setSlides] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    type: "image",
    src: "",
  });
  const [editId, setEditId] = useState(null);
 

  // Fetch slides
  const fetchSlides = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/slides/get-all`);
      setSlides(res.data);
    } catch (err) {
      console.error("Error fetching slides:", err);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  //  Open Add Modal
  const openAddModal = () => {
    setForm({ title: "", subtitle: "", type: "image", src: "" });
    setEditId(null);
    setIsModalOpen(true);
  };

  //  Handle Save (Add or Edit)
  const handleSave = async () => {
    try {
      if (editId) {
        await axios.put(`${import.meta.env.VITE_API_URL}/slides/update/${editId}`, form);
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/slides/post-all`, form);
      }
      fetchSlides();
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error saving slide:", err);
    }
  };

  //  Handle Edit
  const handleEdit = (slide) => {
    setForm(slide);
    setEditId(slide.id);
    setIsModalOpen(true);
  };

  //  Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this slide?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/slides/delete/${id}`);
      fetchSlides();
    } catch (err) {
      console.error("Error deleting slide:", err);
    }
  };

  return (
    <AdminLayout>
      <div className="glass-card">
        <div className="card-header">
          <h3>
            <ImageIcon size={18} /> Hero Section Manager
          </h3>
          <button className="admin-btn" onClick={openAddModal}>
            <Plus size={16} /> Add Slide
          </button>
        </div>

        <p>Manage homepage banners (image or video).</p>

        <ul className="hero-slide-list">
          {slides.length === 0 ? (
            <li>No banners available.</li>
          ) : (
            slides.map((slide) => (
              <li key={slide.id} className="slide-item">
                <div className="slide-info">
                  <strong>{slide.title || "Untitled"}</strong> — {slide.type}
                  <div className="slide-sub">{slide.subtitle}</div>
                </div>

                <div className="slide-actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(slide)}
                  >
                    <Edit size={16} /> Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(slide.id)}
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editId ? "Edit Slide" : "Add New Slide"}
      >
        <FormInput
          label="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <FormInput
          label="Subtitle"
          value={form.subtitle}
          onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
        />
        <div className="form-group">
          <label>Type</label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </div>
        <FormInput
          label="Image/Video URL"
          value={form.src}
          onChange={(e) => setForm({ ...form, src: e.target.value })}
        />

        {/* Image/Video Preview */}
        {form.src && (
          <div className="preview">
            {form.type === "image" ? (
              <img src={form.src} alt="Preview" />
            ) : (
              <video controls width="100%">
                <source src={form.src} />
              </video>
            )}
          </div>
        )}

        <button className="admin-btn" onClick={handleSave}>
          {editId ? "Update" : "Save"}
        </button>
      </Modal>
    </AdminLayout>
  );
};

export default HeroManager;
