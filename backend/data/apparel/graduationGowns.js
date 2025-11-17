const graduationGowns = [
  {
    name: "Custom Graduation Gowns",
    slug: "custom-graduation-gowns",
    description:
      "Celebrate your coaching institute’s success with Custom Graduation Gowns. Personalize them with your institute’s logo, name, or brand colors to give students and faculty a polished, professional, and memorable look during convocation ceremonies.",
    price: 899,
    salePrice: 849,
    images: [{ url: "/assets/graduationgowns/1.webp", altText: "Custom Graduation Gown" }],
    subImages: [
      { url: "/assets/graduationgowns/1.webp", altText: "Front View" },
      { url: "/assets/graduationgowns/2.webp", altText: "Side View" },
      { url: "/assets/graduationgowns/3.webp", altText: "Back View" },
      { url: "/assets/graduationgowns/4.webp", altText: "Embroidery Close-up" }
    ],
    stock: 400,
    sku: "GG-001",
    attributes: {
      color: ["Black", "Maroon", "Custom Color"],
      size: ["M", "L", "XL"],
      material: "Polyester + Satin",
    },
    tags: ["custom", "graduation gown", "convocation"],
    isFeatured: true,
    isActive: true,
  },

  {
    name: "Branding Graduation Gowns",
    slug: "branding-graduation-gowns",
    description:
      "Enhance your institute’s identity with Branding Graduation Gowns designed for students, teachers, and staff. These elegant gowns add a touch of class and professionalism to graduation ceremonies.",
    price: 849,
    salePrice: 799,
    images: [{ url: "/assets/graduationgowns/5.webp", altText: "Branding Graduation Gown" }],
    subImages: [
      { url: "/assets/graduationgowns/5.webp", altText: "Front View" },
      { url: "/assets/graduationgowns/6.webp", altText: "Sleeve Detail" },
      { url: "/assets/graduationgowns/7.webp", altText: "Collar Detail" },
      { url: "/assets/graduationgowns/8.webp", altText: "Back View" }
    ],
    stock: 450,
    sku: "GG-002",
    attributes: {
      color: ["Black", "Royal Blue", "Navy"],
      size: ["L", "XL", "XXL"],
      material: "Premium Polyester",
    },
    tags: ["branding", "gown", "graduation", "ceremony"],
    isFeatured: false,
    isActive: true,
  },

  {
    name: "Customized Graduation Gowns",
    slug: "customized-graduation-gowns",
    description:
      "Make every ceremony special with Customized Graduation Gowns crafted exclusively for your institute. Add embroidery, logos, or institute colors for a unified and elegant appearance during convocation and award events.",
    price: 929,
    salePrice: 879,
    images: [{ url: "/assets/graduationgowns/9.webp", altText: "Customized Graduation Gown" }],
    subImages: [
      { url: "/assets/graduationgowns/9.webp", altText: "Front View" },
      { url: "/assets/graduationgowns/10.webp", altText: "Embroidery Detail" },
      { url: "/assets/graduationgowns/11.webp", altText: "Sleeve Design" }
    ],
    stock: 380,
    sku: "GG-003",
    attributes: {
      color: ["Black", "Custom Embroidery"],
      size: ["M", "L", "XL"],
      material: "Polyester + Cotton Blend",
    },
    tags: ["customized", "graduation", "embroidery"],
    isFeatured: true,
    isActive: true,
  },

  {
    name: "Printed Graduation Gowns",
    slug: "printed-graduation-gowns",
    description:
      "Promote your coaching institute’s brand with Printed Graduation Gowns featuring your logo or event design. Ideal for convocation days, farewell events, and photo sessions.",
    price: 799,
    salePrice: 749,
    images: [{ url: "/assets/graduationgowns/12.webp", altText: "Printed Graduation Gown" }],
    subImages: [
      { url: "/assets/graduationgowns/12.webp", altText: "Front" },
      { url: "/assets/graduationgowns/13.webp", altText: "Printed Detail" },
      { url: "/assets/graduationgowns/14.webp", altText: "Side View" }
    ],
    stock: 500,
    sku: "GG-004",
    attributes: {
      color: ["Black", "Custom Print"],
      size: ["Standard", "XL"],
      material: "Lightweight Fabric",
    },
    tags: ["printed", "graduation gown", "branding"],
    isFeatured: false,
    isActive: true,
  },

  {
    name: "Custom Logo Graduation Gowns",
    slug: "custom-logo-graduation-gowns",
    description:
      "Showcase your institute’s pride with Custom Logo Graduation Gowns featuring premium embroidery or printing. Designed for a refined, professional look during important milestones.",
    price: 969,
    salePrice: 899,
    images: [{ url: "/assets/graduationgowns/15.webp", altText: "Custom Logo Graduation Gown" }],
    subImages: [
      { url: "/assets/graduationgowns/15.webp", altText: "Front" },
      { url: "/assets/graduationgowns/16.webp", altText: "Logo Embroidery" },
      { url: "/assets/graduationgowns/17.webp", altText: "Back View" }
    ],
    stock: 420,
    sku: "GG-005",
    attributes: {
      color: ["Black", "Custom Logo"],
      size: ["M", "L", "XL", "XXL"],
      material: "Premium Polyester + Embroidery",
    },
    tags: ["custom logo", "graduation gown", "ceremony wear"],
    isFeatured: true,
    isActive: true,
  },
];

module.exports = graduationGowns;
