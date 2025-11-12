const tableCalendars = [
  {
    name: "Custom Table Calendars",
    slug: "custom-table-calendars",
    description:
      "Stay organized and showcase your institute’s identity with Custom Table Calendars. Personalize each calendar with your logo, name, or tagline to provide students, staff, and visitors with a practical yet branding daily companion.",
    price: 299,
    salePrice: 279,
    images: [{ url: "/assets/tablecalendars/1.webp", altText: "Custom Table Calendar" }],
    subImages: [
      { url: "/assets/tablecalendars/1.webp", altText: "Custom Table Calendar Front" },
      { url: "/assets/tablecalendars/2.webp", altText: "Custom Table Calendar Side" },
    ],
    stock: 800,
    sku: "CAL-001",
    attributes: {
      color: ["Black", "White", "Custom Print"],
      size: ["6x8 inches"],
      material: "Cardboard + Gloss Paper",
    },
    tags: ["custom", "calendar", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 220 },
    seo: {
      metaTitle: "Custom Table Calendars",
      metaDescription:
        "Custom table calendars with personalized logos and names — perfect for office desks, events, and promotions.",
      keywords: ["custom calendars", "table calendars", "branding desk calendars"],
    },
  },

  {
    name: "Branding Table Calendars",
    slug: "branding-table-calendars",
    description:
      "Enhance your institute’s visibility with Branding Table Calendars designed for events, seminars, and promotions. Durable and stylish, they reflect your institute’s professionalism while keeping your brand in focus all year.",
    price: 259,
    salePrice: 239,
    images: [{ url: "/assets/tablecalendars/3.webp", altText: "Branding Table Calendar" }],
    subImages: [
      { url: "/assets/tablecalendars/3.webp", altText: "Branding Table Calendar Front" },
      { url: "/assets/tablecalendars/4.webp", altText: "Branding Table Calendar Side" },
    ],
    stock: 1000,
    sku: "CAL-002",
    attributes: {
      color: ["White", "Custom Print"],
      size: ["7x9 inches"],
      material: "Art Paper + Wire Binding",
    },
    tags: ["branding", "calendar", "events"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.5, count: 180 },
    seo: {
      metaTitle: "Branding Table Calendars",
      metaDescription:
        "Branding table calendars for offices, classrooms, and events — perfect for year-round institute branding.",
      keywords: ["branding calendars", "desk calendars", "corporate calendars"],
    },
  },

  {
    name: "Personalized Table Calendars",
    slug: "personalized-table-calendars",
    description:
      "Create a unique gifting experience with Personalized Table Calendars featuring individual names, important dates, or institute branding. Perfect for faculty, students, and event participants, they leave a lasting impression.",
    price: 329,
    salePrice: 309,
    images: [{ url: "/assets/tablecalendars/5.webp", altText: "Personalized Table Calendar" }],
    subImages: [
      { url: "/assets/tablecalendars/5.webp", altText: "Personalized Table Calendar Front" },
      { url: "/assets/tablecalendars/6.webp", altText: "Personalized Table Calendar Inside" },
    ],
    stock: 600,
    sku: "CAL-003",
    attributes: {
      color: ["Multicolor", "Custom Print"],
      size: ["6x9 inches"],
      material: "Glossy Paper + Standee Cardboard",
    },
    tags: ["personalized", "calendar", "custom gift"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 240 },
    seo: {
      metaTitle: "Personalized Table Calendars",
      metaDescription:
        "Personalized table calendars with custom names and institute branding — ideal for faculty and staff gifting.",
      keywords: ["personalized calendars", "custom table calendars", "name calendars"],
    },
  },

  {
    name: "Printed Table Calendars",
    slug: "printed-table-calendars",
    description:
      "Boost your institute’s branding with Printed Table Calendars showcasing logos, slogans, or yearly highlights. Ideal for seminars, student gifts, or staff desks — combining practicality with promotional appeal.",
    price: 219,
    salePrice: 199,
    images: [{ url: "/assets/tablecalendars/7.webp", altText: "Printed Table Calendar" }],
    subImages: [
      { url: "/assets/tablecalendars/7.webp", altText: "Printed Table Calendar Front" },
      { url: "/assets/tablecalendars/8.webp", altText: "Printed Table Calendar Side" },
    ],
    stock: 1200,
    sku: "CAL-004",
    attributes: {
      color: ["Multicolor", "White"],
      size: ["7x8 inches"],
      material: "Printed Cardboard + Wire Binding",
    },
    tags: ["printed", "calendar", "branding"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.4, count: 200 },
    seo: {
      metaTitle: "Printed Table Calendars",
      metaDescription:
        "Printed table calendars with logos and slogans — perfect for branding, gifting, and daily use.",
      keywords: ["printed calendars", "promotional desk calendars", "logo calendars"],
    },
  },

  {
    name: "Designer Table Calendars",
    slug: "designer-table-calendars",
    description:
      "Add elegance to daily planning with Designer Table Calendars made from premium materials and creative layouts. Perfect for academic events, staff gifts, or institute milestones, they reflect sophistication and style.",
    price: 399,
    salePrice: 379,
    images: [{ url: "/assets/tablecalendars/9.webp", altText: "Designer Table Calendar" }],
    subImages: [
      { url: "/assets/tablecalendars/9.webp", altText: "Designer Table Calendar Front" },
      { url: "/assets/tablecalendars/10.webp", altText: "Designer Table Calendar Inside" },
      
    ],
    stock: 450,
    sku: "CAL-005",
    attributes: {
      color: ["Black", "Gold", "Custom Print"],
      size: ["6x10 inches"],
      material: "Premium PU Stand + Gloss Paper",
    },
    tags: ["designer", "premium", "calendar"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 210 },
    seo: {
      metaTitle: "Designer Table Calendars",
      metaDescription:
        "Premium designer table calendars made from high-quality materials — stylish, functional, and professional.",
      keywords: ["designer calendars", "premium desk calendars", "luxury calendars"],
    },
  },

  {
    name: "Custom Logo Table Calendars",
    slug: "custom-logo-table-calendars",
    description:
      "Showcase your institute’s pride with Custom Logo Table Calendars featuring high-quality printing or embossing. Ideal for gifting, events, and everyday use — keeping your institute’s brand visible while adding a professional touch.",
    price: 349,
    salePrice: 329,
    images: [{ url: "/assets/tablecalendars/11.webp", altText: "Custom Logo Table Calendar" }],
    subImages: [
      { url: "/assets/tablecalendars/11.webp", altText: "Custom Logo Table Calendar Front" },
      { url: "/assets/tablecalendars/12.webp", altText: "Custom Logo Table Calendar Inside" },
      { url: "/assets/tablecalendars/13.webp", altText: "Custom Logo Table Calendar Back" },
    ],
    stock: 700,
    sku: "CAL-006",
    attributes: {
      color: ["White", "Brown", "Custom Print"],
      size: ["7x9 inches"],
      material: "Embossed Board + Laminated Sheets",
    },
    tags: ["custom logo", "calendar", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 190 },
    seo: {
      metaTitle: "Custom Logo Table Calendars",
      metaDescription:
        "Custom logo table calendars with foil stamping or emboss printing — perfect for branding and gifting.",
      keywords: ["logo table calendars", "custom embossed calendars", "desk calendars"],
    },
  },
    {
    name: "Eco Table Calendars",
    slug: "eco-table-calendars",
    description:
      "Go green with Eco Table Calendars crafted from recycled materials. Promote sustainability while keeping your institute’s branding front and center all year long.",
    price: 319,
    salePrice: 299,
    images: [{ url: "/assets/tablecalendars/14.webp", altText: "Eco Table Calendar" }],
    subImages: [
      { url: "/assets/tablecalendars/14.webp", altText: "Eco Table Calendar Front" },
      { url: "/assets/tablecalendars/15.webp", altText: "Eco Table Calendar Inside" },
      { url: "/assets/tablecalendars/16.webp", altText: "Eco Table Calendar Stand" },
    ],
    stock: 500,
    sku: "CAL-007",
    attributes: {
      color: ["Natural Brown", "Green", "Custom Print"],
      size: ["6x8 inches"],
      material: "Recycled Kraft Paper + Board",
    },
    tags: ["eco", "sustainable", "calendar"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 160 },
    seo: {
      metaTitle: "Eco Table Calendars",
      metaDescription:
        "Eco-friendly table calendars made from recycled paper — sustainable, stylish, and customizable.",
      keywords: ["eco calendars", "recycled calendars", "sustainable desk calendars"],
    },
  },
];

module.exports = tableCalendars;
