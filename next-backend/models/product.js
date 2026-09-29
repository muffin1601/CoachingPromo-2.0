const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },


    description: {
      short: String,
      long: String,
    },

    price: { type: Number, required: true },
    salePrice: { type: Number, default: null },

    images: [
      {
        url: String,
        altText: String,
        type: { type: String, enum: ["image", "video"], default: "image" },
      },
    ],

    subImages: [
      {
        url: String,
        altText: String,
        type: { type: String, enum: ["image", "video"], default: "image" },
      },
    ],

    stock: { type: Number, default: 0 },
    sku: { type: String, unique: true, sparse: true },

    attributes: {
      color: [String],
      size: [String],
      material: String,
    },

    //  Additional Info
    additionalInfo: [
      {
        label: String,
        value: String,
      },
    ],

    //  Specifications
    specifications: [
      {
        key: String,
        value: String,
      },
    ],

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

    // Relational Links
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    subcategory: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Subcategory",
    },
    gstRate: { type: Number, default: 0 },
    hsnCode: { type: String, default: "" },
    discount: { type: Number, default: 0 },
    isOfferProduct: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Historical product media was stored as absolute HTTP URLs on the old host.
// The exact files now live in the Next storefront's tracked public assets.
// Rewrite only API output, preserving MongoDB values for safe rollback.
const legacyProductMedia = /^http:\/\/coachingpromo\.in\/uploads\/products\/(\d+\.(?:webp|mp4))$/i;
productSchema.set('toJSON', {
  transform(_document, result) {
    for (const key of ['images', 'subImages']) {
      for (const image of result[key] || []) {
        const match = typeof image.url === 'string' && image.url.match(legacyProductMedia);
        if (match) image.url = `/assets/migrated-products/${match[1]}`;
      }
    }
    return result;
  },
});



module.exports = mongoose.model("Product", productSchema);
