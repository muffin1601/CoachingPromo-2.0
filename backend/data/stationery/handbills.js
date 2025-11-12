const handbills = [
  {
    name: "Custom Handbills",
    slug: "custom-handbills",
    description:
      "Effectively communicate and enhance your institute’s identity with Custom Handbills. Personalize each handbill with your logo, name, or tagline to provide students, parents, and staff with a visually appealing, branding message.",
    price: 29,
    salePrice: 24,
    images: [{ url: "/assets/handbills/1.webp", altText: "Custom Handbill" }],
    subImages: [
      { url: "/assets/handbills/1.webp", altText: "Custom Handbill Front" },
      { url: "/assets/handbills/2.webp", altText: "Custom Handbill Back" },
    ],
    stock: 5000,
    sku: "HB-001",
    attributes: {
      color: ["Full Color", "Monochrome"],
      size: ["A5", "A4"],
      material: "Glossy Paper 130 GSM",
    },
    tags: ["custom", "handbill", "flyer", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 320 },
    seo: {
      metaTitle: "Custom Handbills & Flyers",
      metaDescription:
        "Custom handbills and flyers with institute logos, taglines, and colors — perfect for promotions and announcements.",
      keywords: ["custom handbills", "personalized flyers", "printed pamphlets"],
    },
  },

  {
    name: "Personalized Handbills",
    slug: "personalized-handbills",
    description:
      "Create a memorable and impactful communication tool with Personalized Handbills featuring individual messages, motivational quotes, or institute branding. Ideal for students, faculty, and event participants.",
    price: 35,
    salePrice: 30,
    images: [{ url: "/assets/handbills/3.webp", altText: "Personalized Handbill" }],
    subImages: [
      { url: "/assets/handbills/3.webp", altText: "Personalized Handbill Front" },
      { url: "/assets/handbills/4.webp", altText: "Personalized Handbill Back" },
    ],
    stock: 4000,
    sku: "HB-002",
    attributes: {
      color: ["Custom Print", "Multicolor"],
      size: ["A5", "A4"],
      material: "Matte Finish 150 GSM",
    },
    tags: ["personalized", "custom", "flyer", "pamphlet"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 250 },
    seo: {
      metaTitle: "Personalized Handbills & Pamphlets",
      metaDescription:
        "Personalized handbills and pamphlets with names, messages, and motivational quotes — perfect for events and promotions.",
      keywords: ["personalized handbills", "custom flyers", "event pamphlets"],
    },
  },

  {
    name: "Custom Logo Handbills",
    slug: "custom-logo-handbills",
    description:
      "Showcase your institute’s pride with Custom Logo Handbills featuring high-quality printing, embossing, or foil stamping. Ideal for admissions, events, and promotions — keeping your brand visible while adding a professional touch.",
    price: 39,
    salePrice: 34,
    images: [{ url: "/assets/handbills/5.webp", altText: "Custom Logo Handbill" }],
    subImages: [
      { url: "/assets/handbills/5.webp", altText: "Custom Logo Handbill Front" },
      { url: "/assets/handbills/6.webp", altText: "Custom Logo Handbill Back" },
    ],
    stock: 3000,
    sku: "HB-003",
    attributes: {
      color: ["Full Color", "Gold Foil", "Embossed"],
      size: ["A5", "A4"],
      material: "Premium Glossy Paper 170 GSM",
    },
    tags: ["logo", "flyer", "handbill", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.6, count: 180 },
    seo: {
      metaTitle: "Custom Logo Handbills & Flyers",
      metaDescription:
        "Custom logo handbills with foil stamping, embossing, or vibrant printing — ideal for institutes and event promotions.",
      keywords: ["logo handbills", "foil printed flyers", "branding pamphlets"],
    },
  },
];

module.exports = handbills;
