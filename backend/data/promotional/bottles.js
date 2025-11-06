const bottles = [
  {
    name: "Custom Water Bottles",
    slug: "custom-water-bottles",
    description:
      "Keep your coaching institute’s brand refreshed with Custom Water Bottles that blend practicality and style. Personalize each bottle with your logo, name, or colors to create a unified and professional look for students, teachers, and staff.",
    price: 499,
    salePrice: 449,
    images: [{ url: "/assets/bottle/1 image.webp", altText: "Custom Water Bottle" }],
    subImages: [
      { url: "/assets/bottle/1 image.webp", altText: "Custom Water Bottle" },
      { url: "/assets/bottle/2 image.webp", altText: "Custom Water Bottle Side" },
      { url: "/assets/bottle/3 image.webp", altText: "Custom Water Bottle Side" }
    ],
    stock: 160,
    sku: "BOT-001",
    attributes: {
      color: ["Silver"],
      size: ["750 ml"],
      material: "Stainless Steel",
    },
    tags: ["custom", "water bottle", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.5, count: 200 },
    seo: {
      metaTitle: "Custom Water Bottles",
      metaDescription:
        "Personalized water bottles custom-printed with your coaching institute branding.",
      keywords: ["custom water bottle", "promo bottle", "branding"],
    },
  },

  {
    name: "Branded Water Bottles",
    slug: "branded-water-bottles",
    description:
      "Promote your institute’s identity with Branded Water Bottles designed for daily use, events, and giveaways. Durable and sleek, these bottles elevate brand visibility during classrooms, seminars, and sports activities.",
    price: 249,
    salePrice: 199,
    images: [{ url: "/assets/bottle/4 image.webp", altText: "Branded Water Bottle" }],
    subImages: [
      { url: "/assets/bottle/4 image.webp", altText: "Branded Water Bottle" },
      { url: "/assets/bottle/5 image.webp", altText: "Branded Water Bottle Side" },
      { url: "/assets/bottle/6 image.webp", altText: "Branded Water Bottle Side" },
    ],
    stock: 230,
    sku: "BOT-002",
    attributes: {
      color: ["Red", "Blue", "Black"],
      size: ["700 ml"],
      material: "Plastic",
    },
    tags: ["branded bottle", "water bottle", "promotion"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.4, count: 170 },
    seo: {
      metaTitle: "Branded Water Bottles",
      metaDescription:
        "Promotional branded water bottles ideal for institutes, seminars & sports.",
      keywords: ["branded bottle", "promotional bottle", "logo bottle"],
    },
  },

  {
    name: "Personalized Water Bottles",
    slug: "personalized-water-bottles",
    description:
      "Make hydration meaningful with Personalized Water Bottles crafted exclusively for your coaching institute. Add individual names, motivational quotes, or your logo to create exclusive gifts for students and faculty.",
    price: 899,
    salePrice: 799,
    images: [
      { url: "/assets/bottle/7 image.webp", altText: "Personalized Water Bottle" },
    ],
    subImages: [
      { url: "/assets/bottle/7 image.webp", altText: "Personalized Water Bottle" },
      {
        url: "/assets/bottle/8 image.webp",
        altText: "Personalized Water Bottle Side",
      },
       {
        url: "/assets/bottle/9 image.webp",
        altText: "Personalized Water Bottle Side",
      }
    ],
    stock: 110,
    sku: "BOT-003",
    attributes: {
      color: ["Black", "White"],
      size: ["1 L"],
      material: "Stainless Steel",
    },
    tags: ["personalized", "gift", "water bottle"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 300 },
    seo: {
      metaTitle: "Personalized Water Bottles",
      metaDescription:
        "Custom printed water bottles with name & motivational quotes.",
      keywords: ["personalized bottle", "name printed bottle", "gift bottle"],
    },
  },

  {
    name: "Printed Water Bottles",
    slug: "printed-water-bottles",
    description:
      "Boost your brand visibility with Printed Water Bottles featuring vibrant designs, logos, or slogans. Ideal for admission drives, workshops, and promotional events.",
    price: 299,
    salePrice: 249,
    images: [{ url: "/assets/bottle/10 image.webp", altText: "Printed Water Bottle" }],
    subImages: [
      { url: "/assets/bottle/10 image.webp", altText: "Printed Water Bottle" },
      { url: "/assets/bottle/11 image.webp", altText: "Printed Water Bottle Side" },
      { url: "/assets/bottle/12 image.webp", altText: "Printed Water Bottle Side" },
    ],
    stock: 200,
    sku: "BOT-004",
    attributes: {
      color: ["Pink", "Blue"],
      size: ["500 ml"],
      material: "Plastic",
    },
    tags: ["printed", "water bottle", "logo print"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.3, count: 120 },
    seo: {
      metaTitle: "Printed Water Bottles",
      metaDescription:
        "Custom printed promotional water bottles with vibrant branding.",
      keywords: ["printed bottle", "logo print", "custom bottle"],
    },
  },

  {
    name: "Stainless Steel Water Bottles",
    slug: "stainless-steel-water-bottles",
    description:
      "Stay stylish and sustainable with Stainless Steel Water Bottles made from premium, rust-resistant materials. Designed for daily use to keep beverages hot or cold while showcasing your institute’s class.",
    price: 399,
    salePrice: 349,
    images: [
      { url: "/assets/bottle/13image.webp", altText: "Stainless Steel Water Bottle" },
    ],
    subImages: [
      { url: "/assets/bottle/13image.webp", altText: "Stainless Steel Water Bottle" },
      {
        url: "/assets/bottle/14 image.webp",
        altText: "Stainless Steel Water Bottle Side",
      },
      {
        url: "/assets/bottle/15 image.webp",
        altText: "Stainless Steel Water Bottle Side",
      },
    ],
    stock: 180,
    sku: "BOT-005",
    attributes: {
      color: ["Silver", "Black"],
      size: ["750 ml"],
      material: "Stainless Steel",
    },
    tags: ["stainless steel", "hot cold", "premium bottle"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.2, count: 140 },
    seo: {
      metaTitle: "Stainless Steel Water Bottles",
      metaDescription:
        "Durable stainless steel bottles for hot & cold beverages.",
      keywords: ["steel bottle", "thermal bottle", "SS bottle"],
    },
  },

  {
    name: "Custom Logo Water Bottles",
    slug: "custom-logo-water-bottles",
    description:
      "Showcase your institute’s pride with Custom Logo Water Bottles featuring premium printing or engraving — ideal for gifting, events, and giveaways.",
    price: 499,
    salePrice: 450,
    images: [
      { url: "/assets/bottle/16 image.webp", altText: "Custom Logo Water Bottle" },
    ],
    subImages: [
      { url: "/assets/bottle/16 image.webp", altText: "Custom Logo Water Bottle" },
      {
        url: "/assets/bottle/17 image.webp",
        altText: "Custom Logo Water Bottle Side",
      },
      {
        url: "/assets/bottle/18 image.webp",
        altText: "Custom Logo Water Bottle Side",
      }
    ],
    stock: 90,
    sku: "BOT-006",
    attributes: {
      color: ["Transparent", "Black"],
      size: ["600 ml"],
      material: "Glass",
    },
    tags: ["logo bottle", "branding", "engraved"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.1, count: 160 },
    seo: {
      metaTitle: "Custom Logo Water Bottles",
      metaDescription:
        "Custom logo printed or engraved water bottles for brand promotion.",
      keywords: ["logo water bottle", "engraved bottle", "promo gifting"],
    },
  },
];

module.exports = bottles;
