const wallCalendars = [
  {
    name: "Custom Wall Calendars",
    slug: "custom-wall-calendars",
    description:
      "Stay organized and display your institute’s identity with Custom Wall Calendars. Personalize each calendar with your logo, name, or tagline to create a functional and branding visual for classrooms, offices, and common areas.",
    price: 279,
    salePrice: 259,
    images: [{ url: "/assets/wallcalendars/1.webp", altText: "Custom Wall Calendar" }],
    subImages: [
      { url: "/assets/wallcalendars/1.webp", altText: "Custom Wall Calendar Front" },
      { url: "/assets/wallcalendars/2.webp", altText: "Custom Wall Calendar Open" },
    ],
    stock: 800,
    sku: "WALLCAL-001",
    attributes: {
      color: ["Multicolor", "Custom Print"],
      size: ["A3", "A4"],
      material: "Glossy Paper + Metal Binding",
    },
    tags: ["custom", "calendar", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 210 },
    seo: {
      metaTitle: "Custom Wall Calendars",
      metaDescription:
        "Custom wall calendars with your logo and branding — perfect for classrooms, offices, and daily visibility.",
      keywords: ["custom wall calendars", "branding calendars", "personalized calendars"],
    },
  },

  {
    name: "Branding Wall Calendars",
    slug: "branding-wall-calendars",
    description:
      "Promote your institute’s professionalism with Branding Wall Calendars designed for classrooms, offices, and seminar halls. Durable and stylish, they ensure your brand remains visible throughout the year.",
    price: 249,
    salePrice: 229,
    images: [{ url: "/assets/wallcalendars/3.webp", altText: "Branding Wall Calendar" }],
    subImages: [
      { url: "/assets/wallcalendars/3.webp", altText: "Branding Wall Calendar Front" },
      { url: "/assets/wallcalendars/4.webp", altText: "Branding Wall Calendar Inside" },
    ],
    stock: 1000,
    sku: "WALLCAL-002",
    attributes: {
      color: ["White", "Custom Print"],
      size: ["A3", "A2"],
      material: "Art Paper + Wire Binding",
    },
    tags: ["branding", "calendar", "events"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.5, count: 190 },
    seo: {
      metaTitle: "Branding Wall Calendars",
      metaDescription:
        "Professional branding wall calendars for classrooms, offices, and institutions — durable and elegant.",
      keywords: ["branding wall calendars", "corporate calendars", "office wall calendar"],
    },
  },

  {
    name: "Personalized Wall Calendars",
    slug: "personalized-wall-calendars",
    description:
      "Create a memorable and practical gifting option with Personalized Wall Calendars featuring individual names, important dates, or institute branding. Ideal for students, faculty, and event participants.",
    price: 299,
    salePrice: 279,
    images: [{ url: "/assets/wallcalendars/5.webp", altText: "Personalized Wall Calendar" }],
    subImages: [
      { url: "/assets/wallcalendars/5.webp", altText: "Personalized Wall Calendar Front" },
      { url: "/assets/wallcalendars/6.webp", altText: "Personalized Wall Calendar Spread" },
    ],
    stock: 700,
    sku: "WALLCAL-003",
    attributes: {
      color: ["Multicolor", "Custom Print"],
      size: ["A3"],
      material: "Premium Gloss Paper",
    },
    tags: ["personalized", "custom", "calendar"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 230 },
    seo: {
      metaTitle: "Personalized Wall Calendars",
      metaDescription:
        "Personalized wall calendars featuring names, dates, and logos — perfect for gifts and staff use.",
      keywords: ["personalized calendars", "custom name calendars", "gift wall calendars"],
    },
  },

  {
    name: "Printed Wall Calendars",
    slug: "printed-wall-calendars",
    description:
      "Enhance your institute’s visibility with Printed Wall Calendars displaying logos, slogans, or yearly highlights. Perfect for events, annual functions, and everyday office or classroom use — combining utility with promotional appeal.",
    price: 229,
    salePrice: 209,
    images: [{ url: "/assets/wallcalendars/7.webp", altText: "Printed Wall Calendar" }],
    subImages: [
      { url: "/assets/wallcalendars/7.webp", altText: "Printed Wall Calendar Front" },
      { url: "/assets/wallcalendars/8.webp", altText: "Printed Wall Calendar Open" },
    ],
    stock: 1200,
    sku: "WALLCAL-004",
    attributes: {
      color: ["Multicolor", "White"],
      size: ["A4", "A3"],
      material: "Printed Gloss Paper + Binding Wire",
    },
    tags: ["printed", "branding", "calendar"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.4, count: 200 },
    seo: {
      metaTitle: "Printed Wall Calendars",
      metaDescription:
        "Printed wall calendars with vibrant designs and branding — ideal for daily display and events.",
      keywords: ["printed wall calendars", "logo calendars", "custom design calendars"],
    },
  },

  {
    name: "Designer Wall Calendars",
    slug: "designer-wall-calendars",
    description:
      "Add elegance to walls with Designer Wall Calendars made from premium-quality materials and creative layouts. Ideal for academic milestones, staff gifts, and institute events, reflecting style and professionalism.",
    price: 349,
    salePrice: 329,
    images: [{ url: "/assets/wallcalendars/9.webp", altText: "Designer Wall Calendar" }],
    subImages: [
      { url: "/assets/wallcalendars/9.webp", altText: "Designer Wall Calendar Front" },
      { url: "/assets/wallcalendars/10.webp", altText: "Designer Wall Calendar Detail" },
    ],
    stock: 500,
    sku: "WALLCAL-005",
    attributes: {
      color: ["Black", "Gold", "Custom Print"],
      size: ["A2"],
      material: "Matte Paper + Metal Coil",
    },
    tags: ["designer", "premium", "calendar"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 190 },
    seo: {
      metaTitle: "Designer Wall Calendars",
      metaDescription:
        "Elegant designer wall calendars made from premium paper and creative layouts — a stylish addition to any wall.",
      keywords: ["designer wall calendars", "luxury calendars", "premium wall planner"],
    },
  },
  {
    name: "Custom Logo Wall Calendars",
    slug: "custom-logo-wall-calendars",
    description:
      "Showcase your institute’s pride with Custom Logo Wall Calendars featuring high-quality printing or embossing. Perfect for gifting, events, or daily display — keeping your brand visible while adding a polished, professional touch.",
    price: 319,
    salePrice: 299,
    images: [{ url: "/assets/wallcalendars/11.webp", altText: "Custom Logo Wall Calendar" }],
    subImages: [
      { url: "/assets/wallcalendars/11.webp", altText: "Custom Logo Wall Calendar Front" },
      { url: "/assets/wallcalendars/12.webp", altText: "Custom Logo Wall Calendar Inside" },
    ],
    stock: 600,
    sku: "WALLCAL-006",
    attributes: {
      color: ["White", "Brown", "Custom Print"],
      size: ["A3"],
      material: "Embossed Board + Laminated Paper",
    },
    tags: ["logo", "branding", "calendar"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 210 },
    seo: {
      metaTitle: "Custom Logo Wall Calendars",
      metaDescription:
        "Custom logo wall calendars with embossing or foil print — ideal for professional branding and gifting.",
      keywords: ["logo wall calendars", "custom embossed calendars", "branding wall calendars"],
    },
  },
];

module.exports = wallCalendars;
