const instituteBackpacks = [
  {
    name: "Custom Institute Backpacks",
    slug: "custom-institute-backpacks",
    description:
      "Carry your coaching institute’s brand with pride using Custom Institute Backpacks. Personalize them with your logo, name, or colors to give students and staff a polished, uniform, and professional look.",
    price: 899,
    salePrice: 849,
    images: [{ url: "/assets/backpacks/1.webp", altText: "Custom Institute Backpack" }],
    subImages: [
      { url: "/assets/backpacks/1.webp", altText: "Custom Institute Backpack Front" },
      { url: "/assets/backpacks/2.webp", altText: "Custom Institute Backpack Side" },
      { url: "/assets/backpacks/3.webp", altText: "Custom Institute Backpack Back" },
      { url: "/assets/backpacks/4.webp", altText: "Custom Institute Backpack Logo" },
    ],
    stock: 500,
    sku: "BAG-001",
    attributes: {
      color: ["Black", "Navy Blue", "Custom Print"],
      size: ["Medium", "Large"],
      material: "Polyester + Nylon",
    },
    tags: ["custom", "backpack", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 260 },
    seo: {
      metaTitle: "Custom Institute Backpacks",
      metaDescription:
        "Custom institute backpacks with printed or embroidered logos — perfect for students, staff, and events.",
      keywords: ["custom institute backpacks", "school backpacks", "branded bags"],
    },
  },

  {
    name: "Branded Institute Backpacks",
    slug: "branded-institute-backpacks",
    description:
      "Promote your coaching institute wherever you go with Branded Backpacks featuring your logo and tagline. Ideal for students, workshops, and events — a perfect mix of utility and branding.",
    price: 849,
    salePrice: 799,
    images: [{ url: "/assets/backpacks/5.webp", altText: "Branded Institute Backpack" }],
    subImages: [
      { url: "/assets/backpacks/5.webp", altText: "Branded Institute Backpack Front" },
      { url: "/assets/backpacks/6.webp", altText: "Branded Institute Backpack Side" },
      { url: "/assets/backpacks/7.webp", altText: "Branded Institute Backpack Pocket" },
      { url: "/assets/backpacks/8.webp", altText: "Branded Institute Backpack Back" },
    ],
    stock: 800,
    sku: "BAG-002",
    attributes: {
      color: ["Blue", "Red", "Black"],
      size: ["Medium"],
      material: "Waterproof Nylon",
    },
    tags: ["branded", "backpack", "student bag"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.6, count: 190 },
    seo: {
      metaTitle: "Branded Institute Backpacks",
      metaDescription:
        "Durable branded backpacks with institute logo — stylish and professional for daily use and promotions.",
      keywords: ["branded backpacks", "college bags", "logo backpacks"],
    },
  },

  {
    name: "Customized Institute Backpacks",
    slug: "customized-institute-backpacks",
    description:
      "Make your coaching institute stand out with Customized Backpacks that reflect your brand’s personality. Add embroidery, printing, or institute colors for a smart and cohesive appearance.",
    price: 999,
    salePrice: 949,
    images: [{ url: "/assets/backpacks/9.webp", altText: "Customized Institute Backpack" }],
    subImages: [
      { url: "/assets/backpacks/9.webp", altText: "Customized Institute Backpack Front" },
      { url: "/assets/backpacks/10.webp", altText: "Customized Institute Backpack Side" },
      { url: "/assets/backpacks/11.webp", altText: "Customized Institute Backpack Strap" },
      { url: "/assets/backpacks/12.webp", altText: "Customized Institute Backpack Logo" },
    ],
    stock: 600,
    sku: "BAG-003",
    attributes: {
      color: ["Gray", "Navy", "Custom Embroidery"],
      size: ["Medium", "Large"],
      material: "Poly Canvas",
    },
    tags: ["customized", "backpack", "printing"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 240 },
    seo: {
      metaTitle: "Customized Institute Backpacks",
      metaDescription:
        "Customized backpacks for institutes — available with embroidery, print, or logo personalization.",
      keywords: ["customized backpacks", "embroidered bags", "personalized institute bags"],
    },
  },

  {
    name: "Printed Institute Backpacks",
    slug: "printed-institute-backpacks",
    description:
      "Promote your coaching institute wherever you go with Printed Backpacks featuring your logo and tagline. Ideal for students, workshops, and events — a perfect mix of utility and branding.",
    price: 799,
    salePrice: 749,
    images: [{ url: "/assets/backpacks/13.webp", altText: "Printed Institute Backpack" }],
    subImages: [
      { url: "/assets/backpacks/13.webp", altText: "Printed Institute Backpack Front" },
      { url: "/assets/backpacks/14.webp", altText: "Printed Institute Backpack Logo" },
      { url: "/assets/backpacks/15.webp", altText: "Printed Institute Backpack Pockets" },
      { url: "/assets/backpacks/16.webp", altText: "Printed Institute Backpack Back" },
    ],
    stock: 1000,
    sku: "BAG-004",
    attributes: {
      color: ["Black", "White", "Custom Print"],
      size: ["Medium"],
      material: "Polyester + PU Coating",
    },
    tags: ["printed", "branding", "backpack"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.5, count: 210 },
    seo: {
      metaTitle: "Printed Institute Backpacks",
      metaDescription:
        "Printed institute backpacks with logo or tagline — perfect for promotional and daily student use.",
      keywords: ["printed backpacks", "custom logo bags", "branded backpacks"],
    },
  },

  {
    name: "Sleek Institute Backpacks",
    slug: "sleek-institute-backpacks",
    description:
      "Keep it stylish and practical with Sleek Institute Backpacks made from durable, lightweight fabric. Perfect for coaching students and faculty who need comfort and a professional look.",
    price: 1099,
    salePrice: 999,
    images: [{ url: "/assets/backpacks/17.webp", altText: "Sleek Institute Backpack" }],
    subImages: [
      { url: "/assets/backpacks/17.webp", altText: "Sleek Institute Backpack Front" },
      { url: "/assets/backpacks/18.webp", altText: "Sleek Institute Backpack Detail" },
      { url: "/assets/backpacks/19.webp", altText: "Sleek Institute Backpack Zipper" },
      { url: "/assets/backpacks/20.webp", altText: "Sleek Institute Backpack Straps" },
    ],
    stock: 400,
    sku: "BAG-005",
    attributes: {
      color: ["Black", "Gray", "Blue"],
      size: ["Medium"],
      material: "High-Density Nylon + Mesh Back",
    },
    tags: ["sleek", "student bag", "modern"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 190 },
    seo: {
      metaTitle: "Sleek Institute Backpacks",
      metaDescription:
        "Sleek and durable backpacks designed for professional and student use — lightweight, modern, and premium.",
      keywords: ["sleek backpacks", "modern bags", "nylon institute backpacks"],
    },
  },

  {
    name: "Premium Institute Backpacks",
    slug: "premium-institute-backpacks",
    description:
      "Upgrade your institute’s accessories with Premium Backpacks designed for comfort and branding. These elegant, long-lasting backpacks reflect your coaching institute’s high standards.",
    price: 1299,
    salePrice: 1199,
    images: [{ url: "/assets/backpacks/21.webp", altText: "Premium Institute Backpack" }],
    subImages: [
      { url: "/assets/backpacks/21.webp", altText: "Premium Institute Backpack Front" },
      { url: "/assets/backpacks/22.webp", altText: "Premium Institute Backpack Detail" },
      { url: "/assets/backpacks/23.webp", altText: "Premium Institute Backpack Logo" },
      { url: "/assets/backpacks/24.webp", altText: "Premium Institute Backpack Inside" },
    ],
    stock: 350,
    sku: "BAG-006",
    attributes: {
      color: ["Black", "Brown", "Custom Embroidery"],
      size: ["Large"],
      material: "PU Leather + Nylon",
    },
    tags: ["premium", "institute bag", "luxury"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 5.0, count: 160 },
    seo: {
      metaTitle: "Premium Institute Backpacks",
      metaDescription:
        "Premium backpacks for institutes — elegant, comfortable, and durable with branding options.",
      keywords: ["premium backpacks", "luxury school bags", "custom branded backpacks"],
    },
  },
];

module.exports = instituteBackpacks;
