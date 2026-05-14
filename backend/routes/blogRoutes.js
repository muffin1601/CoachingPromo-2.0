const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Blog = require('../models/blog');
const multer = require('multer');
const Comment = require('../models/comment');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/blogs'); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Route to post blog with file upload
router.post('/post-blogs', upload.single('media'), async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const media = req.file ? req.file.filename : ''; 

    const newBlog = new Blog({ title, content, media, author });
    await newBlog.save();

    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1});
        res.json(blogs);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// GET latest 2 blogs
router.get("/home/fetch", async (req, res) => {
  try {
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })   // latest first
      .limit(2);                 // only 2
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const saved = await blog.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ➤ GET SINGLE BLOG BY ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➤ ADD COMMENT
router.post("/:id/comments", async (req, res) => {
  try {
    const { name, comment } = req.body;

    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Not found" });

    blog.comments.push({ name, comment });
    await blog.save();

    res.json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ➤ UPDATE BLOG
router.put("/:id", upload.single('media'), async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const updateData = { title, content, author };
    
    if (req.file) {
      updateData.media = req.file.filename;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedBlog) return res.status(404).json({ message: "Not found" });
    
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ➤ DELETE BLOG
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;