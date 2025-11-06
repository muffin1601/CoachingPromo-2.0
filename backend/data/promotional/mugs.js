const mugs = [
  {
    name: "Custom Mugs",
    slug: "custom-mugs",
    description:
      "Celebrate your coaching institute’s identity with Custom Mugs that combine style and branding. Personalize each mug with your logo, name, or brand colors to create a professional and memorable impression for students, faculty, and staff.",
    price: 249,
    salePrice: 199,
    images: [{ url: "/assets/mug/mug (13).webp", altText: "Custom Mugs" }],
    subImages: [{ url: "/assets/mug/mug (13).webp", altText: "Custom Mugs Side View" },{ url: "/assets/mug/mug (14).webp", altText: "Custom Mugs" },{ url: "/assets/mug/mug (15).webp", altText: "Custom Mugs" }],
    stock: 200,
    sku: "MUG-001",
    attributes: {
      color: ["White", "Black"],
      size: ["300 ml"],
      material: "Ceramic",
    },
    tags: ["custom mugs", "branding", "personalized"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.4, count: 180 },
    seo: {
      metaTitle: "Custom Mugs",
      metaDescription:
        "Personalized mugs printed with your coaching institute logo and color theme.",
      keywords: ["custom mug", "branding", "personalized mugs"],
    },
  },

  {
    name: "Branded Mugs",
    slug: "branded-mugs",
    description:
      "Enhance your institute’s visibility with Branded Mugs designed for daily use, events, and gifting. These high-quality mugs feature elegant printing and smooth finishes that reflect your coaching institute’s pride and professionalism.",
    price: 279,
    salePrice: 239,
    images: [{ url: "/assets/mug/mug (11).webp", altText: "Branded Mugs" }],
    subImages: [
      { url: "/assets/mug/mug (11).webp", altText: "Branded Mugs Side View" },
      { url: "/assets/mug/mug (10).webp", altText: "Branded Mugs Top View" },
      { url: "/assets/mug/mug (12).webp", altText: "Branded Mugs Angle View" }
    ],
    stock: 160,
    sku: "MUG-002",
    attributes: {
      color: ["White"],
      size: ["330 ml"],
      material: "Ceramic",
    },
    tags: ["branded mug", "gift", "corporate"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.6, count: 210 },
    seo: {
      metaTitle: "Branded Mugs",
      metaDescription:
        "Premium branded mugs featuring high-quality print for promotion & gifting.",
      keywords: ["branded mugs", "corporate gift", "print mugs"],
    },
  },

  {
    name: "Personalized Mugs",
    slug: "personalized-mugs",
    description:
      "Make every event special with Personalized Mugs crafted exclusively for your coaching institute. Add names, logos, or motivational quotes to create thoughtful gifts for students, teachers, and visitors.",
    price: 320,
    salePrice: 280,
    images: [{ url: "/assets/mug/mug (1).webp", altText: "Personalized Mug" }],
    subImages: [
      { url: "/assets/mug/mug (1).webp", altText: "Personalized Mug Side View" },
      { url: "/assets/mug/mug (2).webp", altText: "Personalized Mug Top View" },
      { url: "/assets/mug/mug (4).webp", altText: "Personalized Mug Angle View" }
    ],
    stock: 150,
    sku: "MUG-003",
    attributes: {
      color: ["White"],
      size: ["300 ml"],
      material: "Ceramic",
    },
    tags: ["personalized mug", "motivation", "gift"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.5, count: 220 },
    seo: {
      metaTitle: "Personalized Mugs",
      metaDescription:
        "Customized mugs with names, quotes & logos for gifting and events.",
      keywords: ["personalized mug", "gift mugs", "printed mugs"],
    },
  },

  {
    name: "Printed Mugs",
    slug: "printed-mugs",
    description:
      "Promote your coaching institute with Printed Mugs showcasing your brand design, logo, or slogan in vibrant colors. Ideal for seminars, farewell events, and staff gifts.",
    price: 299,
    salePrice: 249,
    images: [{ url: "/assets/mug/mug (3).webp", altText: "Printed Mug" }],
    subImages: [
      { url: "/assets/mug/mug (3).webp", altText: "Printed Mug Side View" },
      { url: "/assets/mug/mug (7).webp", altText: "Printed Mug Top View" },
      { url: "/assets/mug/mug (9).webp", altText: "Printed Mug Angle View" }
    ],
    stock: 140,
    sku: "MUG-004",
    attributes: {
      color: ["White", "Blue"],
      size: ["330 ml"],
      material: "Ceramic",
    },
    tags: ["printed mug", "vibrant design", "branding"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.3, count: 160 },
    seo: {
      metaTitle: "Printed Mugs",
      metaDescription:
        "Promotional printed mugs with colorful branding & designs.",
      keywords: ["printed mugs", "logo mugs", "promotional mug"],
    },
  },

  {
    name: "Ceramic Mugs",
    slug: "ceramic-mugs",
    description:
      "Enjoy elegance and comfort with Premium Ceramic Mugs made of durable glossy material. Perfect for classrooms, offices, or giveaways.",
    price: 349,
    salePrice: 299,
    images: [{ url: "/assets/mug/mug (5).webp", altText: "Ceramic Mug" }],
    subImages: [
      { url: "/assets/mug/mug (5).webp", altText: "Ceramic Mug Side View" },
      { url: "/assets/mug/mug (6).webp", altText: "Ceramic Mug Top View" },
      { url: "/assets/mug/mug (8).webp", altText: "Ceramic Mug Angle View" }
    ],
    stock: 180,
    sku: "MUG-005",
    attributes: {
      color: ["White", "Red", "Blue"],
      size: ["300 ml"],
      material: "Ceramic",
    },
    tags: ["ceramic mug", "premium", "office"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.4, count: 170 },
    seo: {
      metaTitle: "Premium Ceramic Mugs",
      metaDescription:
        "Glossy ceramic mugs ideal for corporate gifting & institute branding.",
      keywords: ["ceramic mugs", "premium mug", "gift"],
    },
  },

  // {
  //   name: "Custom Logo Mugs",
  //   slug: "custom-logo-mugs",
  //   description:
  //     "Showcase your institute’s pride with Custom Logo Mugs featuring sharp, long-lasting prints or embossed designs. Ideal for branding, corporate gifting, and daily use.",
  //   price: 399,
  //   salePrice: 349,
  //   images: [{ url: "/assets/mug/mug (1).webp", altText: "Custom Logo Mug" }],
  //   subImages: [{ url: "/assets/mug/mug (1).webp", altText: "Custom Logo Mug Side View" }],
  //   stock: 120,
  //   sku: "MUG-006",
  //   attributes: {
  //     color: ["White", "Black"],
  //     size: ["300 ml"],
  //     material: "Ceramic",
  //   },
  //   tags: ["logo mug", "corporate gift", "professional"],
  //   isFeatured: true,
  //   isActive: true,
  //   ratings: { average: 4.2, count: 140 },
  //   seo: {
  //     metaTitle: "Custom Logo Mugs",
  //     metaDescription:
  //       "Long-lasting printed mugs featuring institute logo & branding.",
  //     keywords: ["logo mug", "brand mug", "corporate gifting"],
  //   },
  // },
];

module.exports = mugs;
