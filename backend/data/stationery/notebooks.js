const notebooks = [
  {
    name: "Custom Notebooks",
    slug: "custom-notebooks",
    description:
      "Stay organized and promote your institute’s identity with Custom Notebooks. Personalize each notebook with your logo, name, or tagline to provide students, faculty, and staff with a practical and branding writing companion.",
    price: 199,
    salePrice: 179,
    images: [{ url: "/assets/notebooks/1.webp", altText: "Custom Notebook" }],
    subImages: [
      { url: "/assets/notebooks/1.webp", altText: "Custom Notebook Front" },
      { url: "/assets/notebooks/2.webp", altText: "Custom Notebook Inside" },
      { url: "/assets/notebooks/3.webp", altText: "Custom Notebook Back" },
    ],
    stock: 800,
    sku: "NB-001",
    attributes: {
      color: ["Blue", "Black", "Custom Print"],
      size: ["A5", "A4"],
      material: "Hardcover Paper",
    },
    tags: ["custom", "notebook", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 310 },
    seo: {
      metaTitle: "Custom Notebooks",
      metaDescription:
        "Custom notebooks with personalized logos, names, or taglines — ideal for institutes and corporate branding.",
      keywords: ["custom notebooks", "personalized notebooks", "branding stationery"],
    },
  },

  {
    name: "Branding Notebooks",
    slug: "branding-notebooks",
    description:
      "Enhance your institute’s visibility with Branding Notebooks designed for classrooms, offices, and events. Durable and stylish, they reflect your institute’s professionalism while keeping your brand in focus every day.",
    price: 179,
    salePrice: 159,
    images: [{ url: "/assets/notebooks/4.webp", altText: "Branding Notebook" }],
    subImages: [
      { url: "/assets/notebooks/4.webp", altText: "Branding Notebook Front" },
      { url: "/assets/notebooks/5.webp", altText: "Branding Notebook Inside" },
      { url: "/assets/notebooks/6.webp", altText: "Branding Notebook Back" },
    ],
    stock: 1000,
    sku: "NB-002",
    attributes: {
      color: ["Black", "Red", "White"],
      size: ["A5"],
      material: "Soft Cover + Ruled Pages",
    },
    tags: ["branding", "notebook", "office stationery"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.5, count: 250 },
    seo: {
      metaTitle: "Branding Notebooks",
      metaDescription:
        "Professional branding notebooks for classrooms, offices, and events — practical and stylish.",
      keywords: ["branding notebooks", "branding writing pads", "custom stationery"],
    },
  },

  {
    name: "Personalized Notebooks",
    slug: "personalized-notebooks",
    description:
      "Create a unique and memorable experience with Personalized Notebooks featuring individual names, motivational quotes, or institute branding. Perfect for students, faculty, and event participants.",
    price: 229,
    salePrice: 209,
    images: [{ url: "/assets/notebooks/7.webp", altText: "Personalized Notebook" }],
    subImages: [
      { url: "/assets/notebooks/7.webp", altText: "Personalized Notebook Front" },
      { url: "/assets/notebooks/8.webp", altText: "Personalized Notebook Inside" },
      { url: "/assets/notebooks/9.webp", altText: "Personalized Notebook Back" },
    ],
    stock: 600,
    sku: "NB-003",
    attributes: {
      color: ["Custom Print", "Blue", "Brown"],
      size: ["A5", "B5"],
      material: "Premium PU Leather + Paper",
    },
    tags: ["personalized", "custom", "notebook"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 280 },
    seo: {
      metaTitle: "Personalized Notebooks",
      metaDescription:
        "Personalized notebooks with names, motivational quotes, and institute branding for events and staff.",
      keywords: ["personalized notebooks", "custom printed notebooks", "gift notebooks"],
    },
  },

  {
    name: "Printed Notebooks",
    slug: "printed-notebooks",
    description:
      "Boost your institute’s branding with Printed Notebooks showcasing logos, slogans, or custom designs. Ideal for academic use, seminars, or giveaways — combining functionality with promotional value.",
    price: 159,
    salePrice: 139,
    images: [{ url: "/assets/notebooks/10.webp", altText: "Printed Notebook" }],
    subImages: [
      { url: "/assets/notebooks/10.webp", altText: "Printed Notebook Front" },
      { url: "/assets/notebooks/11.webp", altText: "Printed Notebook Inside" },
      { url: "/assets/notebooks/12.webp", altText: "Printed Notebook Back" },
    ],
    stock: 1200,
    sku: "NB-004",
    attributes: {
      color: ["Multicolor"],
      size: ["A5"],
      material: "Printed Cover + Ruled Paper",
    },
    tags: ["printed", "notebook", "logo print"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.4, count: 230 },
    seo: {
      metaTitle: "Printed Notebooks",
      metaDescription:
        "Printed notebooks with logos and slogans — ideal for workshops, academic sessions, and promotions.",
      keywords: ["printed notebooks", "logo notebooks", "custom printed stationery"],
    },
  },

  {
    name: "Designer Notebooks",
    slug: "designer-notebooks",
    description:
      "Add elegance and creativity to everyday writing with Designer Notebooks made from premium-quality materials and stylish layouts. Perfect for staff gifts, student awards, or institute events.",
    price: 279,
    salePrice: 259,
    images: [{ url: "/assets/notebooks/13.webp", altText: "Designer Notebook" }],
    subImages: [
      { url: "/assets/notebooks/13.webp", altText: "Designer Notebook Front" },
      { url: "/assets/notebooks/14.webp", altText: "Designer Notebook Inside" },
      { url: "/assets/notebooks/15.webp", altText: "Designer Notebook Back" },
    ],
    stock: 400,
    sku: "NB-005",
    attributes: {
      color: ["Black", "Maroon", "Gold"],
      size: ["A5"],
      material: "PU Leather + Premium Paper",
    },
    tags: ["designer", "premium", "notebook"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 210 },
    seo: {
      metaTitle: "Designer Notebooks",
      metaDescription:
        "Premium designer notebooks with stylish layouts and high-quality materials for elegant branding.",
      keywords: ["designer notebooks", "premium stationery", "gift notebooks"],
    },
  },

  {
    name: "Custom Logo Notebooks",
    slug: "custom-logo-notebooks",
    description:
      "Showcase your institute’s pride with Custom Logo Notebooks featuring high-quality printing, embossing, or foil stamping. Ideal for gifting, events, and daily use — keeping your brand visible while adding a professional touch.",
    price: 219,
    salePrice: 199,
    images: [{ url: "/assets/notebooks/16.webp", altText: "Custom Logo Notebook" }],
    subImages: [
      { url: "/assets/notebooks/16.webp", altText: "Custom Logo Notebook Front" },
      { url: "/assets/notebooks/17.webp", altText: "Custom Logo Notebook Inside" },
      { url: "/assets/notebooks/18.webp", altText: "Custom Logo Notebook Back" },
    ],
    stock: 700,
    sku: "NB-006",
    attributes: {
      color: ["Black", "Brown", "Custom Print"],
      size: ["A5", "A4"],
      material: "PU Leather + Foil Print",
    },
    tags: ["logo", "notebook", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 260 },
    seo: {
      metaTitle: "Custom Logo Notebooks",
      metaDescription:
        "Custom logo notebooks with foil stamping, embossing, and premium paper — ideal for corporate or institute branding.",
      keywords: ["logo notebooks", "foil print notebooks", "custom branding notebooks"],
    },
  },
];

module.exports = notebooks;
