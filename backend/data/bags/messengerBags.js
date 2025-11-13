const messengerBags = [
  {
    name: "Custom Messenger Bags",
    slug: "custom-messenger-bags",
    description:
      "Carry your coaching institute’s identity with pride using Custom Messenger Bags. Personalize them with your institute’s logo, name, or brand colors to create a professional and unified look for students, faculty, and staff. Ideal for daily use, seminars, and events.",
    price: 699,
    salePrice: 649,
    images: [{ url: "/assets/messengerbags/1.webp", altText: "Custom Messenger Bag" }],
    subImages: [
      { url: "/assets/messengerbags/1.webp", altText: "Custom Messenger Bag Front" },
      { url: "/assets/messengerbags/2.webp", altText: "Custom Messenger Bag Side" },
      { url: "/assets/messengerbags/3.webp", altText: "Custom Messenger Bag Inside" }
    ],
    stock: 500,
    sku: "MBAG-001",
    attributes: {
      color: ["Black", "Grey", "Custom Print"],
      size: ["Medium", "Large"],
      material: "Polyester + Canvas",
    },
    tags: ["custom", "messenger bag", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 210 },
    seo: {
      metaTitle: "Custom Messenger Bags",
      metaDescription:
        "Premium custom messenger bags with institute logo and colors — ideal for students, staff, and events.",
      keywords: ["custom messenger bags", "branded bags", "institute bags"],
    },
  },

  {
    name: "Branded Messenger Bags",
    slug: "branded-messenger-bags",
    description:
      "Enhance your institute’s visibility with Branded Messenger Bags designed for coaching institutes. These stylish and durable bags add a professional touch while promoting your brand at workshops, admission drives, and campus activities.",
    price: 649,
    salePrice: 599,
    images: [{ url: "/assets/messengerbags/4.webp", altText: "Branded Messenger Bag" }],
    subImages: [
      { url: "/assets/messengerbags/4.webp", altText: "Branded Messenger Bag Front" },
      { url: "/assets/messengerbags/5.webp", altText: "Branded Messenger Bag Strap" },
      { url: "/assets/messengerbags/6.webp", altText: "Branded Messenger Bag Inside" }
    ],
    stock: 600,
    sku: "MBAG-002",
    attributes: {
      color: ["Blue", "Black", "Red"],
      size: ["Medium"],
      material: "Nylon + PU Coating",
    },
    tags: ["branded", "messenger bag", "professional"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.5, count: 180 },
    seo: {
      metaTitle: "Branded Messenger Bags",
      metaDescription:
        "Stylish branded messenger bags designed for institutes — durable, professional, and high-quality.",
      keywords: ["branded messenger bags", "logo bags", "campus bags"],
    },
  },

  {
    name: "Customized Messenger Bags",
    slug: "customized-messenger-bags",
    description:
      "Stand out with Customized Messenger Bags crafted exclusively for your coaching institute. Add embroidery, printed logos, or personalized designs to create a distinctive look that reflects your institute’s professionalism and pride.",
    price: 749,
    salePrice: 699,
    images: [{ url: "/assets/messengerbags/7.webp", altText: "Customized Messenger Bag" }],
    subImages: [
      { url: "/assets/messengerbags/7.webp", altText: "Customized Messenger Bag Front" },
      { url: "/assets/messengerbags/8.webp", altText: "Customized Messenger Bag Logo" },
      { url: "/assets/messengerbags/9.webp", altText: "Customized Messenger Bag Pocket" }
    ],
    stock: 400,
    sku: "MBAG-003",
    attributes: {
      color: ["Grey", "Black", "Custom Embroidery"],
      size: ["Large"],
      material: "Canvas + Leatherette",
    },
    tags: ["customized", "messenger bag", "embroidery"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 190 },
    seo: {
      metaTitle: "Customized Messenger Bags",
      metaDescription:
        "Customized messenger bags with embroidery or logo print — perfect for institute branding and gifting.",
      keywords: ["customized messenger bags", "embroidered bags", "personalized bags"],
    },
  },

  {
    name: "Custom Logo Messenger Bags",
    slug: "custom-logo-messenger-bags",
    description:
      "Highlight your brand with Custom Logo Messenger Bags featuring high-quality logo printing or embroidery. Designed for a polished and professional presentation, these bags represent your coaching institute’s excellence at every event.",
    price: 799,
    salePrice: 749,
    images: [{ url: "/assets/messengerbags/10.webp", altText: "Custom Logo Messenger Bag" }],
    subImages: [
      { url: "/assets/messengerbags/10.webp", altText: "Custom Logo Messenger Bag Front" },
      { url: "/assets/messengerbags/11.webp", altText: "Custom Logo Messenger Bag Embroidery" }
    ],
    stock: 350,
    sku: "MBAG-004",
    attributes: {
      color: ["Black", "Brown", "Custom Print"],
      size: ["Medium"],
      material: "Premium Polyester + Embroidery Patch",
    },
    tags: ["logo", "messenger bag", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 160 },
    seo: {
      metaTitle: "Custom Logo Messenger Bags",
      metaDescription:
        "Custom logo messenger bags with premium embroidery and printing — perfect for professional institutional branding.",
      keywords: ["custom logo bags", "embroidered messenger bag", "premium branding bags"],
    },
  },
];

module.exports = messengerBags;
