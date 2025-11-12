const examPads = [
  {
    name: "Custom Exam Pads",
    slug: "custom-exam-pads",
    description:
      "Stay organized and enhance exam preparation with Custom Exam Pads. Personalize each pad with your logo, name, or tagline to provide students, faculty, and staff with a practical and branding tool for note-taking and practice.",
    price: 199,
    salePrice: 179,
    images: [{ url: "/assets/exampads/1.webp", altText: "Custom Exam Pad" }],
    subImages: [
      { url: "/assets/exampads/1.webp", altText: "Custom Exam Pad Front" },
      { url: "/assets/exampads/2.webp", altText: "Custom Exam Pad Back" },
      { url: "/assets/exampads/3.webp", altText: "Custom Exam Pad Side" },
      { url: "/assets/exampads/4.webp", altText: "Custom Exam Pad Close-up" },
    ],
    stock: 1000,
    sku: "EXAM-001",
    attributes: {
      color: ["Blue", "Black", "Custom Print"],
      size: ["A4", "A5"],
      material: "Hardboard + Paper Clip",
    },
    tags: ["custom", "exam pad", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 220 },
    seo: {
      metaTitle: "Custom Exam Pads",
      metaDescription:
        "Custom exam pads with your logo and branding — perfect for student exams, workshops, and daily use.",
      keywords: ["custom exam pads", "branding exam pads", "institute exam boards"],
    },
  },

  {
    name: "Branding Exam Pads",
    slug: "branding-exam-pads",
    description:
      "Promote your institute’s professionalism with Branding Exam Pads designed for classrooms, offices, and examination sessions. Durable and functional, they keep your brand visible while supporting daily study and exam preparation.",
    price: 179,
    salePrice: 159,
    images: [{ url: "/assets/exampads/5.webp", altText: "Branding Exam Pad" }],
    subImages: [
      { url: "/assets/exampads/5.webp", altText: "Branding Exam Pad Front" },
      { url: "/assets/exampads/6.webp", altText: "Branding Exam Pad Side" },
      { url: "/assets/exampads/7.webp", altText: "Branding Exam Pad Back" },
      { url: "/assets/exampads/8.webp", altText: "Branding Exam Pad Clip" },
    ],
    stock: 800,
    sku: "EXAM-002",
    attributes: {
      color: ["Red", "Blue", "Custom Print"],
      size: ["A4"],
      material: "PVC + Metal Clip",
    },
    tags: ["branding", "exam pad", "stationery"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.6, count: 180 },
    seo: {
      metaTitle: "Branding Exam Pads",
      metaDescription:
        "Branding exam pads with printed logos and names — durable and professional for schools and institutes.",
      keywords: ["branding writing pads", "exam pads", "logo exam boards"],
    },
  },

  {
    name: "Personalized Exam Pads",
    slug: "personalized-exam-pads",
    description:
      "Create a unique and memorable experience with Personalized Exam Pads featuring individual names, motivational quotes, or institute branding. Perfect for students, faculty, and event participants.",
    price: 229,
    salePrice: 209,
    images: [{ url: "/assets/exampads/9.webp", altText: "Personalized Exam Pad" }],
    subImages: [
      { url: "/assets/exampads/9.webp", altText: "Personalized Exam Pad Front" },
      { url: "/assets/exampads/10.webp", altText: "Personalized Exam Pad Side" },
      { url: "/assets/exampads/11.webp", altText: "Personalized Exam Pad Detail" },
      { url: "/assets/exampads/12.webp", altText: "Personalized Exam Pad Logo" },
    ],
    stock: 600,
    sku: "EXAM-003",
    attributes: {
      color: ["Black", "Brown", "Custom Print"],
      size: ["A4"],
      material: "Laminated Board + Clip",
    },
    tags: ["personalized", "custom", "exam pad"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 240 },
    seo: {
      metaTitle: "Personalized Exam Pads",
      metaDescription:
        "Personalized exam pads featuring names, quotes, or logos — ideal for students and faculty gifting.",
      keywords: ["personalized exam pads", "name exam boards", "custom exam pads"],
    },
  },

  {
    name: "Printed Exam Pads",
    slug: "printed-exam-pads",
    description:
      "Boost your institute’s branding with Printed Exam Pads showcasing logos, slogans, or custom designs. Ideal for exams, workshops, or giveaways — combining functionality with promotional value.",
    price: 159,
    salePrice: 139,
    images: [{ url: "/assets/exampads/13.webp", altText: "Printed Exam Pad" }],
    subImages: [
      { url: "/assets/exampads/13.webp", altText: "Printed Exam Pad Front" },
      { url: "/assets/exampads/14.webp", altText: "Printed Exam Pad Side" },
      { url: "/assets/exampads/15.webp", altText: "Printed Exam Pad Logo" },
      { url: "/assets/exampads/16.webp", altText: "Printed Exam Pad Clip" },
    ],
    stock: 1500,
    sku: "EXAM-004",
    attributes: {
      color: ["Multicolor"],
      size: ["A4", "Legal"],
      material: "Cardboard + Printed Laminate",
    },
    tags: ["printed", "branding", "exam pad"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.4, count: 190 },
    seo: {
      metaTitle: "Printed Exam Pads",
      metaDescription:
        "Printed exam pads with vibrant logos and slogans — great for events, exams, and classroom use.",
      keywords: ["printed exam pads", "logo exam boards", "branding stationery"],
    },
  },

  {
    name: "Designer Exam Pads",
    slug: "designer-exam-pads",
    description:
      "Add elegance and creativity to daily exam preparation with Designer Exam Pads made from premium-quality paper and stylish layouts. Perfect for student use, faculty evaluations, or institute events.",
    price: 249,
    salePrice: 229,
    images: [{ url: "/assets/exampads/17.webp", altText: "Designer Exam Pad" }],
    subImages: [
      { url: "/assets/exampads/17.webp", altText: "Designer Exam Pad Front" },
      { url: "/assets/exampads/18.webp", altText: "Designer Exam Pad Detail" },
      { url: "/assets/exampads/19.webp", altText: "Designer Exam Pad Clip" },
      { url: "/assets/exampads/20.webp", altText: "Designer Exam Pad Edge" },
    ],
    stock: 450,
    sku: "EXAM-005",
    attributes: {
      color: ["Blue", "Black", "Custom Design"],
      size: ["A4"],
      material: "PU Coated Hardboard + Metal Clip",
    },
    tags: ["designer", "premium", "exam pad"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 160 },
    seo: {
      metaTitle: "Designer Exam Pads",
      metaDescription:
        "Designer exam pads with elegant finishes — perfect for staff, students, and professional events.",
      keywords: ["designer exam pads", "premium exam boards", "luxury exam clipboards"],
    },
  },

  {
    name: "Custom Logo Exam Pads",
    slug: "custom-logo-exam-pads",
    description:
      "Showcase your institute’s pride with Custom Logo Exam Pads featuring high-quality printing, embossing, or foil stamping. Ideal for gifting, exams, or everyday use — keeping your brand visible while adding a professional touch.",
    price: 189,
    salePrice: 169,
    images: [{ url: "/assets/exampads/21.webp", altText: "Custom Logo Exam Pad" }],
    subImages: [
      { url: "/assets/exampads/21.webp", altText: "Custom Logo Exam Pad Front" },
      { url: "/assets/exampads/22.webp", altText: "Custom Logo Exam Pad Back" },
    ],
    stock: 700,
    sku: "EXAM-006",
    attributes: {
      color: ["White", "Brown", "Custom Print"],
      size: ["A4", "Legal"],
      material: "Embossed Board + Lamination",
    },
    tags: ["logo", "branding", "exam pad"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 200 },
    seo: {
      metaTitle: "Custom Logo Exam Pads",
      metaDescription:
        "Custom logo exam pads with emboss printing — perfect for institutional exams and promotions.",
      keywords: ["custom logo exam pads", "foil stamped exam boards", "branding clipboards"],
    },
  },
];

module.exports = examPads;
