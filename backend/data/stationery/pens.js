const pens = [
  {
    name: "Custom Metal Pen",
    slug: "custom-metal-pen",
    description:
      "Enhance writing and promote your institute’s identity with Custom Metal Pens. Personalize each pen with your logo, name, or tagline to provide students, faculty, and staff with a practical, branding writing tool.",
    price: 99,
    salePrice: 89,
    images: [{ url: "/assets/pens/1.webp", altText: "Custom Metal Pen" }],
    subImages: [
      { url: "/assets/pens/1.webp", altText: "Custom Metal Pen Front" },
      { url: "/assets/pens/2.webp", altText: "Custom Metal Pen Clip" },
      { url: "/assets/pens/3.webp", altText: "Custom Metal Pen Engraved" },
    ],
    stock: 800,
    sku: "PEN-001",
    attributes: {
      color: ["Black", "Silver", "Gold"],
      size: ["Standard"],
      material: "Metal",
    },
    tags: ["custom", "metal pen", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 310 },
    seo: {
      metaTitle: "Custom Metal Pens",
      metaDescription:
        "Premium custom metal pens with engraved logos and names — perfect for branding, staff gifts, and corporate events.",
      keywords: ["custom metal pens", "engraved pens", "executive pens"],
    },
  },

  {
    name: "Branding Plastic Pen",
    slug: "branding-plastic-pen",
    description:
      "Showcase your institute’s professionalism with Branding Plastic Pens designed for classrooms, offices, and events. Sleek and durable, they keep your brand visible while supporting daily writing tasks.",
    price: 49,
    salePrice: 39,
    images: [{ url: "/assets/pens/4.webp", altText: "Branding Plastic Pen" }],
    subImages: [
      { url: "/assets/pens/4.webp", altText: "Branding Plastic Pen Front" },
      { url: "/assets/pens/5.webp", altText: "Branding Plastic Pen Grip" },
      { url: "/assets/pens/6.webp", altText: "Branding Plastic Pen Tip" },
    ],
    stock: 2000,
    sku: "PEN-002",
    attributes: {
      color: ["Blue", "Red", "White"],
      size: ["Standard"],
      material: "Plastic",
    },
    tags: ["branding", "plastic pen", "giveaway"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.5, count: 280 },
    seo: {
      metaTitle: "Branding Plastic Pens",
      metaDescription:
        "Durable branding plastic pens — ideal for seminars, events, and institutional giveaways.",
      keywords: ["branding plastic pens", "promotional pens", "logo pens"],
    },
  },

  {
    name: "Custom Logo Plastic Pen",
    slug: "custom-logo-plastic-pen",
    description:
      "Showcase your institute’s pride with Custom Logo Plastic Pens featuring high-quality printing and logo detailing. Ideal for gifting, events, or daily use — keeping your brand visible every day.",
    price: 69,
    salePrice: 59,
    images: [{ url: "/assets/pens/7.webp", altText: "Custom Logo Plastic Pen" }],
    subImages: [
      { url: "/assets/pens/7.webp", altText: "Custom Logo Plastic Pen Front" },
      { url: "/assets/pens/8.webp", altText: "Custom Logo Plastic Pen Clip" },
      { url: "/assets/pens/9.webp", altText: "Custom Logo Plastic Pen Side" },
      { url: "/assets/pens/10.webp", altText: "Custom Logo Plastic Pen Set" },
    ],
    stock: 1600,
    sku: "PEN-003",
    attributes: {
      color: ["White", "Blue", "Black"],
      size: ["Standard"],
      material: "ABS Plastic",
    },
    tags: ["custom logo", "plastic pen", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 260 },
    seo: {
      metaTitle: "Custom Logo Plastic Pens",
      metaDescription:
        "Affordable custom logo plastic pens with vibrant printing — great for institutions and events.",
      keywords: ["logo plastic pens", "custom printed pens", "corporate giveaways"],
    },
  },

  {
    name: "Printed Paper Pen",
    slug: "printed-paper-pen",
    description:
      "Go eco-friendly with Printed Paper Pens crafted from recyclable paper. Personalize each pen with your logo or slogan — perfect for environmentally conscious institutes and events.",
    price: 79,
    salePrice: 69,
    images: [{ url: "/assets/pens/11.webp", altText: "Printed Paper Pen" }],
    subImages: [
      { url: "/assets/pens/11.webp", altText: "Printed Paper Pen Front" },
      { url: "/assets/pens/12.webp", altText: "Printed Paper Pen Logo" },
      { url: "/assets/pens/13.webp", altText: "Printed Paper Pen Close-up" },
      { url: "/assets/pens/14.webp", altText: "Printed Paper Pen Set" },
    ],
    stock: 1200,
    sku: "PEN-004",
    attributes: {
      color: ["Natural Brown", "Custom Print"],
      size: ["Standard"],
      material: "Recycled Paper + Cardboard Tip",
    },
    tags: ["eco", "paper pen", "sustainable"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.6, count: 210 },
    seo: {
      metaTitle: "Printed Paper Pens",
      metaDescription:
        "Eco-friendly printed paper pens — perfect for sustainable branding and educational events.",
      keywords: ["paper pens", "eco stationery", "sustainable pens"],
    },
  },

  {
    name: "Eco Bamboo Pen",
    slug: "eco-bamboo-pen",
    description:
      "Write with purpose using Eco Bamboo Pens crafted from natural bamboo wood. A sustainable and elegant way to promote your institute’s commitment to eco-conscious practices.",
    price: 99,
    salePrice: 89,
    images: [{ url: "/assets/pens/15.webp", altText: "Eco Bamboo Pen" }],
    subImages: [
      { url: "/assets/pens/15.webp", altText: "Eco Bamboo Pen Front" },
      { url: "/assets/pens/16.webp", altText: "Eco Bamboo Pen Close-up" },
      { url: "/assets/pens/17.webp", altText: "Eco Bamboo Pen Engraving" },
      { url: "/assets/pens/18.webp", altText: "Eco Bamboo Pen Set" },
    ],
    stock: 500,
    sku: "PEN-005",
    attributes: {
      color: ["Natural Wood", "Custom Engraved"],
      size: ["Standard"],
      material: "Bamboo Wood + Metal Clip",
    },
    tags: ["eco", "bamboo pen", "engraved"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 190 },
    seo: {
      metaTitle: "Eco Bamboo Pens",
      metaDescription:
        "Natural bamboo eco pens with logo engraving — sustainable, stylish, and professional.",
      keywords: ["bamboo pens", "eco wooden pens", "engraved eco pens"],
    },
  },

  {
    name: "Custom Eco Corn Pens",
    slug: "custom-eco-corn-pens",
    description:
      "Promote sustainability with Custom Eco Corn Pens made from biodegradable cornstarch. Personalize them with your institute’s name or logo — the perfect green giveaway item.",
    price: 89,
    salePrice: 79,
    images: [{ url: "/assets/pens/19.webp", altText: "Custom Eco Corn Pen" }],
    subImages: [
      { url: "/assets/pens/19.webp", altText: "Custom Eco Corn Pen Front" },
      { url: "/assets/pens/20.webp", altText: "Custom Eco Corn Pen Side" },
      { url: "/assets/pens/21.webp", altText: "Custom Eco Corn Pen Set" },
      { url: "/assets/pens/22.webp", altText: "Custom Eco Corn Pen Close-up" },
    ],
    stock: 900,
    sku: "PEN-006",
    attributes: {
      color: ["Beige", "Green", "Custom Print"],
      size: ["Standard"],
      material: "Cornstarch Bioplastic",
    },
    tags: ["eco", "biodegradable", "corn pen"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 220 },
    seo: {
      metaTitle: "Custom Eco Corn Pens",
      metaDescription:
        "Custom eco pens made from biodegradable cornstarch — sustainable and affordable promotional writing tools.",
      keywords: ["eco pens", "biodegradable pens", "corn plastic pens"],
    },
  },
];

module.exports = pens;
