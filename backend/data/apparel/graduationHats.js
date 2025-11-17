const graduationHats = [
  {
    name: "Custom Graduation Hats",
    slug: "custom-graduation-hats",
    description:
      "Celebrate your coaching institute’s success with Custom Graduation Hats. Personalize them with your institute’s logo, colors, or name to give students and faculty a memorable and professional convocation look.",
    price: 249,
    salePrice: 229,
    images: [{ url: "/assets/graduationhats/1.webp", altText: "Custom Graduation Hat" }],
    subImages: [
      { url: "/assets/graduationhats/1.webp", altText: "Front View" },
      { url: "/assets/graduationhats/2.webp", altText: "Side View" },
      { url: "/assets/graduationhats/3.webp", altText: "Top View" }
    ],
    stock: 600,
    sku: "GH-001",
    attributes: {
      color: ["Black", "Navy Blue", "Custom Print"],
      size: ["Standard"],
      material: "Polyester + Satin Tassel",
    },
    tags: ["graduation", "custom", "convocation"],
    isFeatured: true,
    isActive: true,
  },

  {
    name: "Branding Graduation Hats",
    slug: "branding-graduation-hats",
    description:
      "Enhance your institute’s brand image with Branding Graduation Hats designed for students, faculty, and staff. These elegant caps add a professional touch to graduation ceremonies.",
    price: 229,
    salePrice: 209,
    images: [{ url: "/assets/graduationhats/4.webp", altText: "Branding Graduation Hat" }],
    subImages: [
      { url: "/assets/graduationhats/4.webp", altText: "Front" },
      { url: "/assets/graduationhats/5.webp", altText: "Side" },
      { url: "/assets/graduationhats/6.webp", altText: "Tassel Close-up" }
    ],
    stock: 550,
    sku: "GH-002",
    attributes: {
      color: ["Black", "Royal Blue", "Maroon"],
      size: ["Standard"],
      material: "Premium Fabric",
    },
    tags: ["branding graduation hat", "convocation wear"],
    isFeatured: false,
    isActive: true,
  },

  {
    name: "Customized Graduation Hats",
    slug: "customized-graduation-hats",
    description:
      "Make every graduation special with Customized Graduation Hats crafted for your institute. Add embroidery, logos, and brand colors for a unique and unified convocation appearance.",
    price: 269,
    salePrice: 249,
    images: [{ url: "/assets/graduationhats/7.webp", altText: "Customized Graduation Hat" }],
    subImages: [
      { url: "/assets/graduationhats/7.webp", altText: "Front" },
      { url: "/assets/graduationhats/8.webp", altText: "Side" },
      { url: "/assets/graduationhats/9.webp", altText: "Logo Embroidery" }
    ],
    stock: 500,
    sku: "GH-003",
    attributes: {
      color: ["Black", "Custom"],
      size: ["Standard"],
      material: "Cotton Blend + Embroidery",
    },
    tags: ["customized", "graduation", "branding"],
    isFeatured: true,
    isActive: true,
  },

  {
    name: "Printed Graduation Hats",
    slug: "printed-graduation-hats",
    description:
      "Promote your institute’s identity with Printed Graduation Hats featuring your logo or custom designs — perfect for ceremonies, photoshoots, and farewell events.",
    price: 239,
    salePrice: 219,
    images: [{ url: "/assets/graduationhats/10.webp", altText: "Printed Graduation Hat" }],
    subImages: [
      { url: "/assets/graduationhats/10.webp", altText: "Front" },
      { url: "/assets/graduationhats/11.webp", altText: "Design Close-up" },
      { url: "/assets/graduationhats/12.webp", altText: "Side Angle" }
    ],
    stock: 700,
    sku: "GH-004",
    attributes: {
      color: ["Black", "Custom Print"],
      size: ["Standard"],
      material: "Polyester + Printed Fabric",
    },
    tags: ["printed", "graduation", "convocation accessories"],
    isFeatured: false,
    isActive: true,
  },

  // LAST 2 (ONLY 2 SUBIMAGES)
  {
    name: "Sleek Graduation Hats",
    slug: "sleek-graduation-hats",
    description:
      "Enjoy comfort and style with Sleek Graduation Hats made from lightweight, breathable cotton fabric — perfect for long ceremonies.",
    price: 259,
    salePrice: 239,
    images: [{ url: "/assets/graduationhats/13.webp", altText: "Sleek Graduation Hat" }],
    subImages: [
      { url: "/assets/graduationhats/13.webp", altText: "Front" },
      { url: "/assets/graduationhats/14.webp", altText: "Side" }
    ],
    stock: 480,
    sku: "GH-005",
    attributes: {
      color: ["Black", "Blue"],
      size: ["Standard"],
      material: "Cotton",
    },
    tags: ["sleek", "graduation hat", "ceremony"],
    isFeatured: false,
    isActive: true,
  },

  {
    name: "Custom Logo Graduation Hats",
    slug: "custom-logo-graduation-hats",
    description:
      "Showcase your institute’s branding with Custom Logo Graduation Hats featuring premium printing or embroidery — ideal for polished convocation events.",
    price: 279,
    salePrice: 259,
    images: [{ url: "/assets/graduationhats/15.webp", altText: "Custom Logo Graduation Hat" }],
    subImages: [
      { url: "/assets/graduationhats/15.webp", altText: "Front" },
      { url: "/assets/graduationhats/16.webp", altText: "Embroidery Close-up" }
    ],
    stock: 520,
    sku: "GH-006",
    attributes: {
      color: ["Black", "Custom Logo"],
      size: ["Standard"],
      material: "Premium Polyester",
    },
    tags: ["custom logo", "graduation", "branding"],
    isFeatured: true,
    isActive: true,
  },
];

module.exports = graduationHats;
