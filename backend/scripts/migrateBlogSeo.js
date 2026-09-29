require("dotenv").config();
const mongoose = require("mongoose");
const Blog = require("../models/blog");

async function migrate() {
  await mongoose.connect(process.env.MONGO_URI);
  const blogs = await Blog.find({ $or: [{ slug: { $exists: false } }, { slug: "" }, { status: { $exists: false } }] });
  for (const blog of blogs) {
    if (!blog.status) blog.status = "published";
    if (!blog.publishedAt && blog.status === "published") blog.publishedAt = blog.date || blog.createdAt;
    if (!blog.excerpt && blog.content) blog.excerpt = blog.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 320);
    if (!blog.featuredImage && blog.media) blog.featuredImage = blog.media;
    await blog.save(); // model hook creates a unique slug without changing content
  }
  console.log(`Migrated ${blogs.length} blog records.`);
  await mongoose.disconnect();
}
migrate().catch(async (error) => { console.error(error); await mongoose.disconnect(); process.exitCode = 1; });
