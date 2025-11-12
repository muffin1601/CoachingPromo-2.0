const graduationFolders = [
  {
    name: "Custom Graduation Folders",
    slug: "custom-graduation-folders",
    description:
      "Celebrate every milestone with Custom Graduation Folders featuring your logo, name, or tagline. Perfect for degree presentations, alumni ceremonies, and certificate events.",
    price: 449,
    salePrice: 429,
    images: [{ url: "/assets/graduationfolders/1.webp", altText: "Custom Graduation Folder" }],
    subImages: [
      { url: "/assets/graduationfolders/1.webp", altText: "Custom Graduation Folder" },
      { url: "/assets/graduationfolders/2.webp", altText: "Custom Graduation Folder Inside" },
      { url: "/assets/graduationfolders/3.webp", altText: "Custom Graduation Folder Back" },
    ],
    stock: 300,
    sku: "GF-001",
    attributes: {
      color: ["Maroon", "Navy Blue", "Black"],
      size: ["A4", "Certificate Size"],
      material: "Leatherette",
    },
    tags: ["custom", "graduation folder", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 250 },
    seo: {
      metaTitle: "Custom Graduation Folders",
      metaDescription:
        "Custom graduation folders featuring your institute’s logo and design — perfect for degree presentations and ceremonies.",
      keywords: [
        "custom graduation folders",
        "personalized degree folders",
        "branding certificate folders",
      ],
    },
  },

  {
    name: "Branding Degree Folders",
    slug: "branding-degree-folders",
    description:
      "Promote your institute’s identity with Branding Degree Folders designed for formal ceremonies and presentations. Stylish, elegant, and durable — they reinforce your brand image with every award handed out.",
    price: 399,
    salePrice: 379,
    images: [{ url: "/assets/graduationfolders/4.webp", altText: "Branding Degree Folder" }],
    subImages: [
      { url: "/assets/graduationfolders/4.webp", altText: "Branding Degree Folder" },
      { url: "/assets/graduationfolders/5.webp", altText: "Branding Degree Folder Inside" },
      { url: "/assets/graduationfolders/5.webp", altText: "Branding Degree Folder Back" },
    ],
    stock: 500,
    sku: "GF-002",
    attributes: {
      color: ["Black", "Blue", "Brown"],
      size: ["A4"],
      material: "PU Leather",
    },
    tags: ["branding", "degree folder", "professional"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.6, count: 200 },
    seo: {
      metaTitle: "Branding Degree Folders",
      metaDescription:
        "Professional branding degree folders for convocation and formal presentations.",
      keywords: ["branding degree folders", "convocation folder", "graduation supplies"],
    },
  },

  {
    name: "Personalized Graduation Folders",
    slug: "personalized-graduation-folders",
    description:
      "Make every achievement special with Personalized Graduation Folders printed with student names, courses, or event details — a perfect keepsake for graduates.",
    price: 479,
    salePrice: 459,
    images: [{ url: "/assets/graduationfolders/6.webp", altText: "Personalized Graduation Folder" }],
    subImages: [
      { url: "/assets/graduationfolders/6.webp", altText: "Personalized Graduation Folder" },
      { url: "/assets/graduationfolders/7.webp", altText: "Personalized Graduation Folder Inside" },
      { url: "/assets/graduationfolders/8.webp", altText: "Personalized Graduation Folder Back" },
    ],
    stock: 250,
    sku: "GF-003",
    attributes: {
      color: ["Custom Print", "Black", "Red"],
      size: ["A4", "Certificate Size"],
      material: "Premium PU Leather",
    },
    tags: ["personalized", "custom", "graduation"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 180 },
    seo: {
      metaTitle: "Personalized Graduation Folders",
      metaDescription:
        "Personalized graduation folders with names, courses, or event details — elegant keepsakes for graduates.",
      keywords: ["personalized graduation folder", "custom certificate folder", "engraved folder"],
    },
  },

  {
    name: "Printed Degree Folders",
    slug: "printed-degree-folders",
    description:
      "Boost your brand visibility with Printed Degree Folders showcasing your institute’s logo, emblem, and color theme. Ideal for convocations, certifications, or awards.",
    price: 349,
    salePrice: 329,
    images: [{ url: "/assets/graduationfolders/9.webp", altText: "Printed Degree Folder" }],
    subImages: [
      { url: "/assets/graduationfolders/9.webp", altText: "Printed Degree Folder" },
      { url: "/assets/graduationfolders/10.webp", altText: "Printed Degree Folder Inside" },
      { url: "/assets/graduationfolders/11.webp", altText: "Printed Degree Folder Back" },
    ],
    stock: 600,
    sku: "GF-004",
    attributes: {
      color: ["Multicolor", "Custom Print"],
      size: ["A4"],
      material: "Textured Board + Print Coating",
    },
    tags: ["printed", "degree folder", "branding"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.4, count: 160 },
    seo: {
      metaTitle: "Printed Degree Folders",
      metaDescription:
        "Printed degree folders with vibrant institute logos and event branding — ideal for ceremonies and award events.",
      keywords: ["printed folders", "custom degree folder", "graduation stationery"],
    },
  },

  {
    name: "Designer Graduation Folders",
    slug: "designer-graduation-folders",
    description:
      "Add sophistication to your ceremony with Designer Graduation Folders made from premium leatherette, PU, or textured board. Elegant and eye-catching — ideal for elite institutions.",
    price: 599,
    salePrice: 569,
    images: [{ url: "/assets/graduationfolders/12.webp", altText: "Designer Graduation Folder" }],
    subImages: [
      { url: "/assets/graduationfolders/12.webp", altText: "Designer Graduation Folder" },
      { url: "/assets/graduationfolders/13.webp", altText: "Designer Graduation Folder Inside" },
      { url: "/assets/graduationfolders/14.webp", altText: "Designer Graduation Folder Back" },
    ],
    stock: 200,
    sku: "GF-005",
    attributes: {
      color: ["Maroon", "Black", "Gold"],
      size: ["A4", "Certificate Size"],
      material: "Leatherette + PU + Textured Board",
    },
    tags: ["designer", "premium", "graduation"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 220 },
    seo: {
      metaTitle: "Designer Graduation Folders",
      metaDescription:
        "Premium designer graduation folders with high-end materials for professional and elegant ceremonies.",
      keywords: ["designer graduation folders", "premium degree folder", "convocation supplies"],
    },
  },
];

module.exports = graduationFolders;
