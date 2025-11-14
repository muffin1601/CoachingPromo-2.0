const formalShirts = [
  {
    name: "Formal Shirts for Coaching (Teachers)",
    slug: "formal-shirts-for-coaching-teachers",
    description:
      "Upgrade your office style with premium Formal Shirts for Coaching Teachers — tailored for comfort, perfect fit, and professional appeal. Ideal for faculty, staff, and meetings.",
    price: 699,
    salePrice: 649,
    images: [{ url: "/assets/formalshirts/1.webp", altText: "Formal Shirt for Teachers" }],
    subImages: [
      { url: "/assets/formalshirts/1.webp", altText: "Front View" },
      { url: "/assets/formalshirts/2.webp", altText: "Back View" },
      { url: "/assets/formalshirts/3.webp", altText: "Sleeve Detail" },
      { url: "/assets/formalshirts/4.webp", altText: "Collar Detail" }
    ],
    stock: 500,
    sku: "FS-001",
    attributes: {
      color: ["White", "Sky Blue", "Grey"],
      size: ["S", "M", "L", "XL", "XXL"],
      material: "Premium Cotton Blend",
    },
    tags: ["formal shirt", "coaching wear", "teacher uniform"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 260 },
    seo: {
      metaTitle: "Formal Shirts for Coaching Teachers",
      metaDescription:
        "Premium formal shirts for coaching teachers, tailored for comfort, style, and professional appearance.",
      keywords: ["teacher formal shirts", "coaching uniforms", "formal office shirts"],
    },
  },

  {
    name: "Custom Corporate Shirts",
    slug: "custom-corporate-shirts",
    description:
      "Design your unique brand identity with Custom Corporate Shirts — stylish, comfortable, and logo-printed shirts perfect for office teams, seminars, and corporate branding.",
    price: 749,
    salePrice: 699,
    images: [{ url: "/assets/formalshirts/5.webp", altText: "Custom Corporate Shirt" }],
    subImages: [
      { url: "/assets/formalshirts/5.webp", altText: "Front" },
      { url: "/assets/formalshirts/6.webp", altText: "Back" },
      { url: "/assets/formalshirts/7.webp", altText: "Logo Print Close-up" },
      { url: "/assets/formalshirts/8.webp", altText: "Fabric Texture" }
    ],
    stock: 450,
    sku: "FS-002",
    attributes: {
      color: ["White", "Black", "Navy Blue"],
      size: ["S", "M", "L", "XL"],
      material: "Cotton Rich",
    },
    tags: ["corporate shirt", "custom shirt", "branding"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.6, count: 210 },
    seo: {
      metaTitle: "Custom Corporate Shirts",
      metaDescription:
        "Custom logo-printed corporate shirts for branding, seminars, and office teams.",
      keywords: ["corporate shirts", "logo shirts", "custom office wear"],
    },
  },

  {
    name: "Branded Office Shirts",
    slug: "branded-office-shirts",
    description:
      "Give your team a professional edge with Branded Office Shirts — premium quality, elegant design, and durable fabric for a sharp, confident corporate look.",
    price: 799,
    salePrice: 749,
    images: [{ url: "/assets/formalshirts/9.webp", altText: "Branded Office Shirt" }],
    subImages: [
      { url: "/assets/formalshirts/9.webp", altText: "Front" },
      { url: "/assets/formalshirts/10.webp", altText: "Back" },
      { url: "/assets/formalshirts/11.webp", altText: "Stitching Detail" },
      { url: "/assets/formalshirts/12.webp", altText: "Pocket & Buttons" }
    ],
    stock: 600,
    sku: "FS-003",
    attributes: {
      color: ["Light Blue", "White", "Grey"],
      size: ["M", "L", "XL", "XXL"],
      material: "Premium Linen Cotton",
    },
    tags: ["branded shirt", "office shirt", "corporate wear"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 240 },
    seo: {
      metaTitle: "Branded Office Shirts",
      metaDescription:
        "High-quality branded office shirts for professionals and corporate teams.",
      keywords: ["office shirts", "professional wear", "branded shirts"],
    },
  },

  {
    name: "Institute Logo Printed Shirts",
    slug: "institute-logo-printed-shirts",
    description:
      "Create a consistent brand image with Institute Logo Printed Shirts — custom-made, logo-printed, and crafted from high-quality fabrics to enhance your institute’s professional identity.",
    price: 729,
    salePrice: 689,
    images: [{ url: "/assets/formalshirts/13.webp", altText: "Institute Logo Printed Shirt" }],
    subImages: [
      { url: "/assets/formalshirts/13.webp", altText: "Front" },
      { url: "/assets/formalshirts/14.webp", altText: "Back" },
      { url: "/assets/formalshirts/15.webp", altText: "Logo Embroidery" },
      { url: "/assets/formalshirts/16.webp", altText: "Fabric Close-up" }
    ],
    stock: 550,
    sku: "FS-004",
    attributes: {
      color: ["White", "Navy", "Grey"],
      size: ["S", "M", "L", "XL"],
      material: "Cotton Polyester Blend",
    },
    tags: ["institute shirt", "logo printed", "formal wear"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.6, count: 190 },
    seo: {
      metaTitle: "Institute Logo Printed Shirts",
      metaDescription:
        "Logo-printed formal shirts for institutes and universities.",
      keywords: ["institute shirts", "logo shirts", "uniform shirts"],
    },
  },

  {
    name: "Company Logo Shirts",
    slug: "company-logo-shirts",
    description:
      "Promote your business effortlessly with Company Logo Shirts — premium formal wear customized with your logo for a smart, professional corporate appearance.",
    price: 789,
    salePrice: 739,
    images: [{ url: "/assets/formalshirts/17.webp", altText: "Company Logo Shirt" }],
    subImages: [
      { url: "/assets/formalshirts/17.webp", altText: "Front" },
      { url: "/assets/formalshirts/18.webp", altText: "Back" },
      { url: "/assets/formalshirts/19.webp", altText: "Logo Detail" },
      { url: "/assets/formalshirts/20.webp", altText: "Button & Collar Close-up" }
    ],
    stock: 480,
    sku: "FS-005",
    attributes: {
      color: ["White", "Light Grey", "Black"],
      size: ["M", "L", "XL"],
      material: "Soft Cotton",
    },
    tags: ["company shirt", "logo shirt", "corporate uniform"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 175 },
    seo: {
      metaTitle: "Company Logo Shirts",
      metaDescription:
        "Logo-printed company formal shirts for professional branding.",
      keywords: ["company shirts", "logo printed shirts", "corporate uniform shirts"],
    },
  },

  {
    name: "Customized Brand Name Formal Shirts",
    slug: "customized-brand-name-formal-shirts",
    description:
      "Make your brand stand out with Customized Brand Name Formal Shirts — elegant, logo-embroidered, and crafted for comfort and professionalism in every setting.",
    price: 749,
    salePrice: 699,
    images: [{ url: "/assets/formalshirts/21.webp", altText: "Customized Formal Shirt" }],
    subImages: [
      { url: "/assets/formalshirts/21.webp", altText: "Front View" },
      { url: "/assets/formalshirts/22.webp", altText: "Back View" },
      { url: "/assets/formalshirts/23.webp", altText: "Embroidery Close-up" },
      { url: "/assets/formalshirts/24.webp", altText: "Fabric Texture" }
    ],
    stock: 520,
    sku: "FS-006",
    attributes: {
      color: ["Black", "White", "Royal Blue"],
      size: ["S", "M", "L", "XL"],
      material: "Premium Cotton",
    },
    tags: ["customized shirt", "formal wear", "logo embroidered"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.8, count: 230 },
    seo: {
      metaTitle: "Customized Brand Name Formal Shirts",
      metaDescription:
        "Beautifully embroidered customized formal shirts for branding and professional use.",
      keywords: ["custom formal shirts", "embroidered shirts", "brand shirts"],
    },
  },

  {
    name: "Premium Office Formal Shirts",
    slug: "premium-office-formal-shirts",
    description:
      "Premium Office Formal Shirts crafted with luxurious fabric and precision stitching — perfect for staff, managers, faculty, and high-level events.",
    price: 899,
    salePrice: 849,
    images: [{ url: "/assets/formalshirts/25.webp", altText: "Premium Office Formal Shirt" }],
    subImages: [
      { url: "/assets/formalshirts/25.webp", altText: "Front" },
      { url: "/assets/formalshirts/26.webp", altText: "Back" },
      { url: "/assets/formalshirts/27.webp", altText: "Premium Buttons" },
      { url: "/assets/formalshirts/28.webp", altText: "Fabric Close-up" }
    ],
    stock: 350,
    sku: "FS-007",
    attributes: {
      color: ["White", "Beige", "Black"],
      size: ["M", "L", "XL", "XXL"],
      material: "Premium Twill Cotton",
    },
    tags: ["premium formal shirt", "office wear", "executive wear"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 190 },
    seo: {
      metaTitle: "Premium Office Formal Shirts",
      metaDescription:
        "High-end premium formal shirts for office professionals and institute faculty.",
      keywords: ["office shirts", "formal shirts", "premium workwear"],
    },
  },
];

module.exports = formalShirts;
