const filesFolders = [
  {
    name: "Custom Files & Folders",
    slug: "custom-files-and-folders",
    description:
      "Stay organized and promote your institute’s identity with Custom Files & Folders. Personalize each folder with your logo, name, or tagline to provide students, faculty, and staff with a practical, branding document management solution.",
    price: 249,
    salePrice: 229,
    images: [{ url: "/assets/filesfolders/1.webp", altText: "Custom File & Folder" }],
    subImages: [
      { url: "/assets/filesfolders/1.webp", altText: "Custom File & Folder" },
      { url: "/assets/filesfolders/2.webp", altText: "Custom File & Folder Inside" },
      { url: "/assets/filesfolders/3.webp", altText: "Custom File & Folder Back" },
    ],
    stock: 600,
    sku: "FF-001",
    attributes: {
      color: ["Blue", "Black", "Custom Print"],
      size: ["A4", "Legal"],
      material: "PVC/Cardboard",
    },
    tags: ["custom", "file folder", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.6, count: 200 },
    seo: {
      metaTitle: "Custom Files & Folders",
      metaDescription:
        "Custom files and folders with institute branding and personalization options for professional documentation.",
      keywords: ["custom file folder", "personalized folders", "branding stationery"],
    },
  },

  {
    name: "Branding Kobra Files",
    slug: "branding-kobra-files",
    description:
      "Enhance your institute’s visibility with Branding Kobra Files designed for classrooms, offices, and events. Durable and stylish, they reflect your institute’s professionalism while keeping your brand in focus every day.",
    price: 199,
    salePrice: 179,
    images: [{ url: "/assets/filesfolders/4.webp", altText: "Branding Kobra File" }],
    subImages: [
      { url: "/assets/filesfolders/4.webp", altText: "Branding Kobra File" },
      { url: "/assets/filesfolders/5.webp", altText: "Branding Kobra File Side" },
      { url: "/assets/filesfolders/6.webp", altText: "Branding Kobra File Inside" },
    ],
    stock: 500,
    sku: "FF-002",
    attributes: {
      color: ["Maroon", "Black", "Blue"],
      size: ["A4"],
      material: "Cardboard + Lamination",
    },
    tags: ["branding", "kobra file", "office stationery"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.4, count: 160 },
    seo: {
      metaTitle: "Branding Kobra Files",
      metaDescription:
        "Durable branding kobra files for institutes, offices, and events. Perfect for professional document storage.",
      keywords: ["kobra file", "branding files", "office stationery"],
    },
  },

  {
    name: "Personalized Paper Folders",
    slug: "personalized-paper-folders",
    description:
      "Make every document unique with Personalized Paper Folders featuring individual names, motivational quotes, or institute branding. Ideal for distributing during events, workshops, or awards ceremonies.",
    price: 179,
    salePrice: 159,
    images: [{ url: "/assets/filesfolders/7.webp", altText: "Personalized Paper Folder" }],
    subImages: [
      { url: "/assets/filesfolders/7.webp", altText: "Personalized Paper Folder" },
      { url: "/assets/filesfolders/8.webp", altText: "Personalized Paper Folder Inside" },
      { url: "/assets/filesfolders/9.webp", altText: "Personalized Paper Folder Back" },
    ],
    stock: 800,
    sku: "FF-003",
    attributes: {
      color: ["Yellow", "Blue", "Custom Print"],
      size: ["A4"],
      material: "Cardstock Paper",
    },
    tags: ["personalized", "paper folder", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 220 },
    seo: {
      metaTitle: "Personalized Paper Folders",
      metaDescription:
        "Custom paper folders with institute names, logos, or motivational quotes for professional branding.",
      keywords: ["paper folders", "custom file folders", "personalized stationery"],
    },
  },

  {
    name: "Printed Files & Folders",
    slug: "printed-files-and-folders",
    description:
      "Boost your institute’s branding with Printed Files & Folders showcasing logos, slogans, or custom designs. Ideal for workshops, seminars, classroom use, or giveaways — combining functionality with promotional appeal.",
    price: 149,
    salePrice: 129,
    images: [{ url: "/assets/filesfolders/10.webp", altText: "Printed File & Folder" }],
    subImages: [
      { url: "/assets/filesfolders/10.webp", altText: "Printed File & Folder" },
      { url: "/assets/filesfolders/11.webp", altText: "Printed File & Folder Inside" },
      { url: "/assets/filesfolders/12.webp", altText: "Printed File & Folder Back" },
    ],
    stock: 1000,
    sku: "FF-004",
    attributes: {
      color: ["Multicolor", "Custom Design"],
      size: ["A4"],
      material: "Printed PVC",
    },
    tags: ["printed", "file folder", "logo print"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.3, count: 140 },
    seo: {
      metaTitle: "Printed Files & Folders",
      metaDescription:
        "Printed files and folders with custom logos, designs, and institute branding for events or offices.",
      keywords: ["printed folders", "custom printed files", "logo stationery"],
    },
  },

  {
    name: "Designer Files & Folders",
    slug: "designer-files-and-folders",
    description:
      "Add elegance and creativity to document organization with Designer Files & Folders made from premium-quality materials and stylish layouts. Perfect for staff gifts, student awards, or institute events.",
    price: 299,
    salePrice: 279,
    images: [{ url: "/assets/filesfolders/13.webp", altText: "Designer File & Folder" }],
    subImages: [
      { url: "/assets/filesfolders/13.webp", altText: "Designer File & Folder" },
      { url: "/assets/filesfolders/14.webp", altText: "Designer File & Folder Inside" },
      { url: "/assets/filesfolders/15.webp", altText: "Designer File & Folder Back" },
    ],
    stock: 400,
    sku: "FF-005",
    attributes: {
      color: ["Black", "Brown", "Gold"],
      size: ["A4"],
      material: "PU Leather + Cardboard",
    },
    tags: ["designer", "premium", "file folder"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 250 },
    seo: {
      metaTitle: "Designer Files & Folders",
      metaDescription:
        "Premium designer files and folders with elegant materials and modern aesthetics.",
      keywords: ["designer file folders", "premium stationery", "branding files"],
    },
  },

  {
    name: "Custom Logo Files & Folders",
    slug: "custom-logo-files-and-folders",
    description:
      "Showcase your institute’s pride with Custom Logo Files & Folders featuring high-quality printing, embossing, or foil stamping. Ideal for gifting, events, and daily use — keeping your brand visible while adding a professional touch.",
    price: 229,
    salePrice: 209,
    images: [{ url: "/assets/filesfolders/16.webp", altText: "Custom Logo File & Folder" }],
    subImages: [
      { url: "/assets/filesfolders/16.webp", altText: "Custom Logo File & Folder" },
      { url: "/assets/filesfolders/17.webp", altText: "Custom Logo File & Folder Inside" },
      { url: "/assets/filesfolders/18.webp", altText: "Custom Logo File & Folder Back" },
    ],
    stock: 450,
    sku: "FF-006",
    attributes: {
      color: ["Black", "Maroon", "Custom Print"],
      size: ["A4", "Legal"],
      material: "Laminated Cardboard + Foil",
    },
    tags: ["logo", "custom logo", "branding"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.6, count: 200 },
    seo: {
      metaTitle: "Custom Logo Files & Folders",
      metaDescription:
        "Custom logo files and folders with foil stamping, embossing, or printing — perfect for corporate branding.",
      keywords: ["logo file folders", "embossed stationery", "branding folders"],
    },
  },
];

module.exports = filesFolders;
