const graduationHoods = [
  {
    name: "Custom Graduation Hoods",
    slug: "custom-graduation-hoods",
    description:
      "Celebrate your Coaching Institute’s achievements with Custom Graduation Hoods. Personalize them with your logo, name, or brand colors to give students, faculty, and staff a polished, professional, and memorable look during graduation and award ceremonies.",
    price: 499,
    salePrice: 459,
    images: [{ url: "/assets/graduationhoods/1.webp", altText: "Custom Graduation Hood" }],
    subImages: [
      { url: "/assets/graduationhoods/1.webp", altText: "Custom Hood Front" },
      { url: "/assets/graduationhoods/2.webp", altText: "Custom Hood Detail" },
      { url: "/assets/graduationhoods/3.webp", altText: "Custom Hood Back" }
    ],
    stock: 300,
    sku: "GHO-001",
    attributes: {
      color: ["Black", "Maroon", "Custom Color"],
      size: ["Standard"],
      material: "Satin + Polyester",
    },
    tags: ["custom", "graduation hood", "convocation"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 180 },
    seo: {
      metaTitle: "Custom Graduation Hoods",
      metaDescription:
        "Custom-designed graduation hoods personalized with Institute branding and colors.",
      keywords: ["custom graduation hoods", "convocation hood", "graduation wear"],
    },
  },

  {
    name: "Branding Graduation Hoods",
    slug: "branding-graduation-hoods",
    description:
      "Enhance your Institute’s identity with Branding Graduation Hoods designed for students, teachers, and staff. These elegant hoods add a touch of class and professionalism, reflecting your Institute’s pride and reputation.",
    price: 469,
    salePrice: 439,
    images: [{ url: "/assets/graduationhoods/4.webp", altText: "Branding Graduation Hood" }],
    subImages: [
      { url: "/assets/graduationhoods/4.webp", altText: "Branding Hood Front" },
      { url: "/assets/graduationhoods/5.webp", altText: "Branding Hood Trim" },
      { url: "/assets/graduationhoods/6.webp", altText: "Branding Hood Back" }
    ],
    stock: 350,
    sku: "GHO-002",
    attributes: {
      color: ["Royal Blue", "Black", "Gold"],
      size: ["Standard"],
      material: "Premium Satin",
    },
    tags: ["branding", "graduation", "hood"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.6, count: 160 },
    seo: {
      metaTitle: "Branding Graduation Hoods",
      metaDescription:
        "High-quality branding graduation hoods for Institutes and universities.",
      keywords: ["branding hoods", "graduation ceremony wear"],
    },
  },

  {
    name: "Printed Graduation Hoods",
    slug: "printed-graduation-hoods",
    description:
      "Promote your Coaching Institute’s brand with Printed Graduation Hoods featuring your logo or event design. Ideal for graduation days, farewell events, and photography sessions.",
    price: 449,
    salePrice: 419,
    images: [{ url: "/assets/graduationhoods/7.webp", altText: "Printed Graduation Hood" }],
    subImages: [
      { url: "/assets/graduationhoods/7.webp", altText: "Printed Hood Front" },
      { url: "/assets/graduationhoods/8.webp", altText: "Printed Hood Design" },
      { url: "/assets/graduationhoods/9.webp", altText: "Printed Hood Back" }
    ],
    stock: 420,
    sku: "GHO-003",
    attributes: {
      color: ["Black", "Custom Print"],
      size: ["Standard"],
      material: "Satin + Printed Panel",
    },
    tags: ["printed", "graduation hood", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.5, count: 150 },
    seo: {
      metaTitle: "Printed Graduation Hoods",
      metaDescription:
        "Printed graduation hoods with Institute logos and themed designs.",
      keywords: ["printed hoods", "graduation print wear"],
    },
  }
];

module.exports = graduationHoods;
