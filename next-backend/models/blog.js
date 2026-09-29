const mongoose = require('mongoose');

const slugify = (value = "") => value.toString().toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const CommentSchema = new mongoose.Schema(
  {
    name: String,
    comment: String,
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }  
);

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, trim: true, lowercase: true, unique: true, sparse: true, match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/ },
    excerpt: { type: String, trim: true, maxlength: 320 },
    content: String,
    author: String,
    media: String,
    featuredImage: String,
    imageAlt: { type: String, trim: true, maxlength: 180 },
    seoTitle: { type: String, trim: true, maxlength: 70 },
    metaDescription: { type: String, trim: true, maxlength: 170 },
    status: { type: String, enum: ["draft", "published", "archived"], default: "published" },
    publishedAt: Date,
    category: { type: String, trim: true, maxlength: 80 },
    tags: [{ type: String, trim: true, maxlength: 50 }],
    date: { type: Date, default: Date.now },
    comments: [CommentSchema]
  },
  { timestamps: true }   
);

BlogSchema.pre("validate", async function setSeoDefaults(next) {
  if (!this.slug && this.title) {
    const base = slugify(this.title) || "article";
    let candidate = base;
    let sequence = 2;
    while (await this.constructor.exists({ slug: candidate, _id: { $ne: this._id } })) candidate = `${base}-${sequence++}`;
    this.slug = candidate;
  }
  if (!this.publishedAt && this.status === "published") this.publishedAt = this.date || new Date();
  next();
});

module.exports = mongoose.model('Blog', BlogSchema);
