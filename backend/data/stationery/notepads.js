const notepads = [
  {
    name: "Custom Notepads",
    slug: "custom-notepads",
    description:
      "Stay organized and enhance your institute’s identity with Custom Notepads. Personalize each notepad with your logo, name, or tagline to provide students, faculty, and staff with a practical, branding stationery companion.",
    price: 149,
    salePrice: 129,
    images: [{ url: "/assets/notepads/1.webp", altText: "Custom Notepad" }],
    subImages: [
      { url: "/assets/notepads/1.webp", altText: "Custom Notepad Front" },
      { url: "/assets/notepads/2.webp", altText: "Custom Notepad Inside" },
      { url: "/assets/notepads/3.webp", altText: "Custom Notepad Back" },
    ],
    stock: 1000,
    sku: "NP-001",
    attributes: {
      color: ["White", "Custom Print", "Multicolor"],
      size: ["A5", "A4"],
      material: "Paper + Card Cover",
    },
    tags: ["custom", "notepad", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.6, count: 240 },
    seo: {
      metaTitle: "Custom Notepads",
      metaDescription:
        "Custom printed notepads with logos, taglines, and branding — perfect for institutes and offices.",
      keywords: ["custom notepads", "personalized notepads", "branding stationery"],
    },
  },

  {
    name: "Branding Notepads",
    slug: "branding-notepads",
    description:
      "Promote your institute’s professionalism with Branding Notepads designed for classrooms, offices, and events. Durable and stylish, they ensure your brand remains visible while supporting daily note-taking and planning.",
    price: 129,
    salePrice: 109,
    images: [{ url: "/assets/notepads/4.webp", altText: "Branding Notepad" }],
    subImages: [
      { url: "/assets/notepads/4.webp", altText: "Branding Notepad Front" },
      { url: "/assets/notepads/5.webp", altText: "Branding Notepad Inside" },
      { url: "/assets/notepads/6.webp", altText: "Branding Notepad Back" },
    ],
    stock: 1200,
    sku: "NP-002",
    attributes: {
      color: ["Blue", "White", "Red"],
      size: ["A5"],
      material: "Soft Paper + Board Back",
    },
    tags: ["branding", "notepad", "office stationery"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.4, count: 200 },
    seo: {
      metaTitle: "Branding Notepads",
      metaDescription:
        "Branding notepads for classrooms, offices, and events — durable and stylish stationery for professional use.",
      keywords: ["branding notepads", "office stationery", "institute notepads"],
    },
  },

  {
    name: "Personalized Notepads",
    slug: "personalized-notepads",
    description:
      "Create a unique and memorable stationery item with Personalized Notepads featuring individual names, motivational quotes, or institute branding. Ideal for students, faculty, and event participants.",
    price: 169,
    salePrice: 149,
    images: [{ url: "/assets/notepads/7.webp", altText: "Personalized Notepad" }],
    subImages: [
      { url: "/assets/notepads/7.webp", altText: "Personalized Notepad Front" },
      { url: "/assets/notepads/8.webp", altText: "Personalized Notepad Inside" },
      { url: "/assets/notepads/9.webp", altText: "Personalized Notepad Back" },
    ],
    stock: 800,
    sku: "NP-003",
    attributes: {
      color: ["Custom Print", "White", "Blue"],
      size: ["A5", "A6"],
      material: "Premium Paper",
    },
    tags: ["personalized", "custom", "notepad"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 270 },
    seo: {
      metaTitle: "Personalized Notepads",
      metaDescription:
        "Personalized notepads with names, quotes, or logos — ideal for institutes, students, and staff gifting.",
      keywords: ["personalized notepads", "custom printed notepads", "gift stationery"],
    },
  },

  {
    name: "Printed Notepads",
    slug: "printed-notepads",
    description:
      "Boost your institute’s visibility with Printed Notepads showcasing logos, slogans, or custom designs. Perfect for workshops, seminars, classroom use, or giveaways — combining utility with promotional appeal.",
    price: 119,
    salePrice: 99,
    images: [{ url: "/assets/notepads/10.webp", altText: "Printed Notepad" }],
    subImages: [
      { url: "/assets/notepads/10.webp", altText: "Printed Notepad Front" },
      { url: "/assets/notepads/11.webp", altText: "Printed Notepad Inside" },
      { url: "/assets/notepads/12.webp", altText: "Printed Notepad Back" },
    ],
    stock: 1500,
    sku: "NP-004",
    attributes: {
      color: ["Multicolor", "White"],
      size: ["A5"],
      material: "Gloss Paper + Printed Cover",
    },
    tags: ["printed", "notepad", "logo print"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.3, count: 230 },
    seo: {
      metaTitle: "Printed Notepads",
      metaDescription:
        "Printed notepads with custom logos, slogans, and creative designs — perfect for promotional branding.",
      keywords: ["printed notepads", "custom logo notepads", "marketing stationery"],
    },
  },

  {
    name: "Designer Notepads",
    slug: "designer-notepads",
    description:
      "Add elegance and creativity to everyday note-taking with Designer Notepads made from premium-quality materials and stylish layouts. Perfect for staff gifts, student awards, or institute events.",
    price: 199,
    salePrice: 179,
    images: [{ url: "/assets/notepads/13.webp", altText: "Designer Notepad" }],
    subImages: [
      { url: "/assets/notepads/13.webp", altText: "Designer Notepad Front" },
      { url: "/assets/notepads/14.webp", altText: "Designer Notepad Inside" },
      { url: "/assets/notepads/15.webp", altText: "Designer Notepad Back" },
    ],
    stock: 400,
    sku: "NP-005",
    attributes: {
      color: ["Black", "Gold", "Maroon"],
      size: ["A5"],
      material: "PU Leather + Premium Paper",
    },
    tags: ["designer", "premium", "notepad"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 190 },
    seo: {
      metaTitle: "Designer Notepads",
      metaDescription:
        "Elegant designer notepads crafted from premium materials — ideal for events, staff gifts, or awards.",
      keywords: ["designer notepads", "premium stationery", "gift notepads"],
    },
  },

  {
    name: "Custom Logo Notepads",
    slug: "custom-logo-notepads",
    description:
      "Showcase your institute’s pride with Custom Logo Notepads featuring high-quality printing, embossing, or foil stamping. Ideal for gifting, events, or daily use — keeping your brand visible while adding a professional touch.",
    price: 159,
    salePrice: 139,
    images: [{ url: "/assets/notepads/16.webp", altText: "Custom Logo Notepad" }],
    subImages: [
      { url: "/assets/notepads/16.webp", altText: "Custom Logo Notepad Front" },
      { url: "/assets/notepads/17.webp", altText: "Custom Logo Notepad Inside" },
      { url: "/assets/notepads/18.webp", altText: "Custom Logo Notepad Back" },
    ],
    stock: 700,
    sku: "NP-006",
    attributes: {
      color: ["Custom Print", "Brown", "White"],
      size: ["A5", "A4"],
      material: "Card Cover + Emboss Printing",
    },
    tags: ["logo", "branding", "notepad"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 220 },
    seo: {
      metaTitle: "Custom Logo Notepads",
      metaDescription:
        "Custom logo notepads with foil or emboss printing — great for institutes, corporate branding, or daily use.",
      keywords: ["logo notepads", "emboss printed notepads", "branding stationery"],
    },
  },
];

module.exports = notepads;
