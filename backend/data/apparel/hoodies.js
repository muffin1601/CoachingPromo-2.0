const hoodies = [
  {
    name: "Promotional Hoodies for Coaching",
    slug: "promotional-hoodies-for-Coaching",
    description:
      "Create a unique look for your Coaching Institute with Promotional Hoodies. Add logos, colors, or branding to give your students and staff a professional and stylish appearance.",
    price: 899,
    salePrice: 849,
    images: [{ url: "/assets/hoodies/1.webp", altText: "Promotional Coaching Hoodie" }],
    subImages: [
      { url: "/assets/hoodies/1.webp", altText: "Front View" },
      { url: "/assets/hoodies/2.webp", altText: "Back View" },
      { url: "/assets/hoodies/3.webp", altText: "Sleeve Detail" },
      { url: "/assets/hoodies/4.webp", altText: "Hood & Zip Close-up" }
    ],
    stock: 500,
    sku: "HD-001",
    attributes: {
      color: ["Black", "Navy Blue", "Grey"],
      size: ["S", "M", "L", "XL", "XXL"],
      material: "Cotton Fleece",
    },
    tags: ["promotional", "hoodie", "branding"],
    isFeatured: true,
    isActive: true,
  },

  {
    name: "Branding Hoodies",
    slug: "branding-hoodies",
    description:
      "Enhance your Institute’s visibility with Branding Hoodies perfect for events, seminars, or daily wear. Stylish, warm, and durable for a cohesive team identity.",
    price: 849,
    salePrice: 799,
    images: [{ url: "/assets/hoodies/6.webp", altText: "Branding Hoodie" }],
    subImages: [
      { url: "/assets/hoodies/6.webp", altText: "Front" },
      { url: "/assets/hoodies/7.webp", altText: "Back" },
      { url: "/assets/hoodies/8.webp", altText: "Pocket Detail" },
      { url: "/assets/hoodies/9.webp", altText: "Logo Print Close-up" }
    ],
    stock: 600,
    sku: "HD-002",
    attributes: {
      color: ["Black", "Red", "White"],
      size: ["S", "M", "L", "XL"],
      material: "Poly-Cotton Blend",
    },
    tags: ["branding hoodie", "Institute wear", "team"],
    isFeatured: false,
    isActive: true,
  },

  {
    name: "Customized Hoodies",
    slug: "customized-hoodies",
    description:
      "Stand out with Customized Hoodies tailored for your Coaching Institute. Add embroidery, printed logos, or Institute colors for a personalized and stylish uniform.",
    price: 999,
    salePrice: 949,
    images: [{ url: "/assets/hoodies/10.webp", altText: "Customized Hoodie" }],
    subImages: [
      { url: "/assets/hoodies/10.webp", altText: "Front" },
      { url: "/assets/hoodies/11.webp", altText: "Back" },
      { url: "/assets/hoodies/12.webp", altText: "Embroidery Close-up" },
      { url: "/assets/hoodies/13.webp", altText: "Fabric Close-up" }
    ],
    stock: 450,
    sku: "HD-003",
    attributes: {
      color: ["Black", "Grey", "Blue"],
      size: ["M", "L", "XL", "XXL"],
      material: "Premium Fleece",
    },
    tags: ["customized", "hoodie", "embroidery"],
    isFeatured: true,
    isActive: true,
  },

  {
    name: "Logo Printed Hoodies",
    slug: "logo-printed-hoodies",
    description:
      "Make a statement with Logo Printed Hoodies featuring your Institute’s branding. Ideal for workshops, admission drives, and promotional events.",
    price: 899,
    salePrice: 829,
    images: [{ url: "/assets/hoodies/14.webp", altText: "Logo Printed Hoodie" }],
    subImages: [
      { url: "/assets/hoodies/14.webp", altText: "Front" },
      { url: "/assets/hoodies/15.webp", altText: "Back" },
      { url: "/assets/hoodies/16.webp", altText: "Print Detail" },
      { url: "/assets/hoodies/17.webp", altText: "Pocket Detail" }
    ],
    stock: 520,
    sku: "HD-004",
    attributes: {
      color: ["Black", "Yellow", "White"],
      size: ["S", "M", "L", "XL"],
      material: "Cotton Rich",
    },
    tags: ["printed hoodie", "logo hoodie", "branding"],
    isFeatured: false,
    isActive: true,
  },

  // NUMBER 5 (skip using hoodie image 5)
  {
    name: "Promotional Men Hoodies",
    slug: "promotional-men-hoodies",
    description:
      "Keep your staff and students comfortable with Promotional Men Hoodies made from soft, breathable fabric—perfect for daily wear and Institute events.",
    price: 949,
    salePrice: 899,
    images: [{ url: "/assets/hoodies/18.webp", altText: "Men Promotional Hoodie" }],
    subImages: [
      { url: "/assets/hoodies/18.webp", altText: "Front" },
      { url: "/assets/hoodies/19.webp", altText: "Back" },
      { url: "/assets/hoodies/20.webp", altText: "Sleeve Pattern" },
      { url: "/assets/hoodies/21.webp", altText: "Fabric Texture" }
    ],
    stock: 400,
    sku: "HD-005",
    attributes: {
      color: ["Dark Blue", "Black", "White"],
      size: ["M", "L", "XL"],
      material: "Soft Cotton",
    },
    tags: ["men hoodie", "promotional hoodie", "cotton"],
    isFeatured: false,
    isActive: true,
  },

  {
    name: "Cotton Hoodies",
    slug: "cotton-hoodies",
    description:
      "Lightweight, breathable, and durable—Cotton Hoodies are perfect for staff and students during seminars, Coaching sessions, or daily campus wear.",
    price: 799,
    salePrice: 749,
    images: [{ url: "/assets/hoodies/22.webp", altText: "Cotton Hoodie" }],
    subImages: [
      { url: "/assets/hoodies/22.webp", altText: "Front" },
      { url: "/assets/hoodies/23.webp", altText: "Back" },
      { url: "/assets/hoodies/24.webp", altText: "Fabric Close-up" },
      { url: "/assets/hoodies/25.webp", altText: "Stitching Detail" }
    ],
    stock: 550,
    sku: "HD-006",
    attributes: {
      color: ["Grey", "Blue", "Black"],
      size: ["S", "M", "L", "XL", "XXL"],
      material: "100% Cotton",
    },
    tags: ["cotton hoodie", "daily wear", "Institute"],
    isFeatured: false,
    isActive: true,
  },

  {
    name: "Custom Logo Hoodies",
    slug: "custom-logo-hoodies",
    description:
      "Promote your brand with Custom Logo Hoodies featuring embroidery or printing — perfect for events, team wear, and daily use.",
    price: 999,
    salePrice: 949,
    images: [{ url: "/assets/hoodies/26.webp", altText: "Custom Logo Hoodie" }],
    subImages: [
      { url: "/assets/hoodies/26.webp", altText: "Front" },
      { url: "/assets/hoodies/27.webp", altText: "Back" },
      { url: "/assets/hoodies/28.webp", altText: "Logo Close-up" },
      { url: "/assets/hoodies/29.webp", altText: "Fabric Detail" }
    ],
    stock: 380,
    sku: "HD-007",
    attributes: {
      color: ["Black", "Red", "White"],
      size: ["M", "L", "XL", "XXL"],
      material: "Cotton Fleece",
    },
    tags: ["custom logo", "hoodie", "branding"],
    isFeatured: true,
    isActive: true,
  },

  // LAST 3 (3 subimages each)
  {
    name: "Warm Branding Hoodies",
    slug: "warm-branding-hoodies",
    description:
      "Stay cozy and professional with Warm Branding Hoodies designed for faculty, students, and staff. Ensures full-season warmth and durability.",
    price: 1099,
    salePrice: 1049,
    images: [{ url: "/assets/hoodies/30.webp", altText: "Warm Branding Hoodie" }],
    subImages: [
      { url: "/assets/hoodies/30.webp", altText: "Front" },
      { url: "/assets/hoodies/31.webp", altText: "Back" },
      { url: "/assets/hoodies/32.webp", altText: "Inner Fleece View" }
    ],
    stock: 420,
    sku: "HD-008",
    attributes: {
      color: ["Black", "Grey"],
      size: ["M", "L", "XL"],
      material: "Heavy Fleece",
    },
    tags: ["warm hoodie", "branding", "winter wear"],
    isFeatured: false,
    isActive: true,
  },

  {
    name: "Winter Custom Hoodies",
    slug: "winter-custom-hoodies",
    description:
      "Premium Winter Custom Hoodies for Institutes — thick, warm, and stylish with custom prints or embroidery.",
    price: 1149,
    salePrice: 1099,
    images: [{ url: "/assets/hoodies/33.webp", altText: "Winter Custom Hoodie" }],
    subImages: [
      { url: "/assets/hoodies/33.webp", altText: "Front" },
      { url: "/assets/hoodies/34.webp", altText: "Back" },
      { url: "/assets/hoodies/35.webp", altText: "Hood Close-up" }
    ],
    stock: 350,
    sku: "HD-009",
    attributes: {
      color: ["Navy Blue", "Black"],
      size: ["L", "XL", "XXL"],
      material: "Warm Fleece",
    },
    tags: ["winter hoodie", "custom hoodie", "warm"],
    isFeatured: false,
    isActive: true,
  },

  {
    name: "Premium Institute Hoodies",
    slug: "premium-Institute-hoodies",
    description:
      "Premium Institute Hoodies designed with ultra-soft fleece, strong stitching, and classy branding — ideal for faculty and star students.",
    price: 1199,
    salePrice: 1150,
    images: [{ url: "/assets/hoodies/36.webp", altText: "Premium Institute Hoodie" }],
    subImages: [
      { url: "/assets/hoodies/36.webp", altText: "Front" },
      { url: "/assets/hoodies/37.webp", altText: "Back" },
      { url: "/assets/hoodies/38.webp", altText: "Premium Stitching Close-up" }
    ],
    stock: 300,
    sku: "HD-010",
    attributes: {
      color: ["Black", "Maroon"],
      size: ["M", "L", "XL"],
      material: "Ultra Soft Fleece",
    },
    tags: ["premium hoodie", "Institute wear", "branding"],
    isFeatured: true,
    isActive: true,
  },
];

module.exports = hoodies;
