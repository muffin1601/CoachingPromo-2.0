const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },

    description: String,

    price: { type: Number, required: true },
    salePrice: { type: Number, default: null },

    // MAIN IMAGES
    images: [
      {
        url: String,
        altText: String,
      },
    ],

    //  ADDED: SUB / GALLERY IMAGES
    subImages: [
      {
        url: String,
        altText: String,
      },
    ],

    stock: { type: Number, default: 0 },

    sku: { type: String, unique: true, sparse: true },

    attributes: {
      color: [String],
      size: [String],
      material: String,
    },

    tags: [String],

    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },

    ratings: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },

    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },
  },
  { timestamps: true }
);

const subCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    slug: {
      type: String,
      required: true,
      lowercase: true,
    },

    description: { type: String, default: "" },

    image: { type: String, default: "" },

    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },

    products: [productSchema],   
  },
  { timestamps: true }
);

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    description: { type: String, default: "" },

    image: { type: String, default: "" }, 

    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },

    subcategories: [subCategorySchema],  
  },
  { timestamps: true }
);
module.exports = mongoose.model("Subproduct", categorySchema);


