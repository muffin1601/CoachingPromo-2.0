const attendanceRegisters = [
  {
    name: "Custom Attendance Registers",
    slug: "custom-attendance-registers",
    description:
      "Keep attendance organized and efficient with Custom Attendance Registers. Personalize each register with your institute’s logo, name, or tagline to provide faculty and staff with a practical, branding record-keeping solution.",
    price: 249,
    salePrice: 229,
    images: [{ url: "/assets/attendance/1.webp", altText: "Custom Attendance Register" }],
    subImages: [
      { url: "/assets/attendance/1.webp", altText: "Custom Attendance Register Front" },
      { url: "/assets/attendance/2.webp", altText: "Custom Attendance Register Inside" },
      { url: "/assets/attendance/3.webp", altText: "Custom Attendance Register Back" },
    ],
    stock: 800,
    sku: "REG-001",
    attributes: {
      color: ["Blue", "Black", "Custom Print"],
      size: ["A4", "A3"],
      material: "Paper + Card Cover",
    },
    tags: ["custom", "attendance", "register"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.7, count: 210 },
    seo: {
      metaTitle: "Custom Attendance Registers",
      metaDescription:
        "Custom attendance registers with logo printing and personalized covers — ideal for institutes and schools.",
      keywords: ["custom attendance registers", "personalized attendance book", "branding registers"],
    },
  },

  {
    name: "Branding Attendance Registers",
    slug: "branding-attendance-registers",
    description:
      "Promote your institute’s professionalism with Branding Attendance Registers designed for classrooms, offices, and events. Durable and neat, they ensure your brand remains visible while supporting accurate attendance tracking.",
    price: 199,
    salePrice: 179,
    images: [{ url: "/assets/attendance/4.webp", altText: "Branding Attendance Register" }],
    subImages: [
      { url: "/assets/attendance/4.webp", altText: "Branding Attendance Register Front" },
      { url: "/assets/attendance/5.webp", altText: "Branding Attendance Register Inside" },
      { url: "/assets/attendance/6.webp", altText: "Branding Attendance Register Back" },
    ],
    stock: 1000,
    sku: "REG-002",
    attributes: {
      color: ["Black", "Red", "Green"],
      size: ["A4"],
      material: "Hardcover Paper",
    },
    tags: ["branding", "register", "office stationery"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.5, count: 180 },
    seo: {
      metaTitle: "Branding Attendance Registers",
      metaDescription:
        "Branding attendance registers for schools, offices, and institutions with durable covers and custom designs.",
      keywords: ["branding attendance books", "office registers", "custom record books"],
    },
  },

  {
    name: "Personalized Attendance Registers",
    slug: "personalized-attendance-registers",
    description:
      "Create a unique and functional record-keeping tool with Personalized Attendance Registers featuring individual class details, headings, or institute branding. Perfect for faculty, staff, and administrative use.",
    price: 269,
    salePrice: 249,
    images: [{ url: "/assets/attendance/7.webp", altText: "Personalized Attendance Register" }],
    subImages: [
      { url: "/assets/attendance/7.webp", altText: "Personalized Attendance Register Front" },
      { url: "/assets/attendance/8.webp", altText: "Personalized Attendance Register Inside" },
      { url: "/assets/attendance/9.webp", altText: "Personalized Attendance Register Back" },
    ],
    stock: 600,
    sku: "REG-003",
    attributes: {
      color: ["Custom Print", "Blue", "Maroon"],
      size: ["A4", "A3"],
      material: "Premium Paper + Lamination",
    },
    tags: ["personalized", "register", "customized"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.9, count: 230 },
    seo: {
      metaTitle: "Personalized Attendance Registers",
      metaDescription:
        "Personalized attendance registers with custom names, subjects, and institute branding — perfect for teachers.",
      keywords: ["personalized registers", "custom attendance books", "faculty record book"],
    },
  },

  {
    name: "Printed Attendance Registers",
    slug: "printed-attendance-registers",
    description:
      "Enhance your institute’s visibility with Printed Attendance Registers showcasing logos, headings, or custom layouts. Ideal for classrooms, workshops, and seminars — combining organization with branding.",
    price: 189,
    salePrice: 169,
    images: [{ url: "/assets/attendance/10.webp", altText: "Printed Attendance Register" }],
    subImages: [
      { url: "/assets/attendance/10.webp", altText: "Printed Attendance Register Front" },
      { url: "/assets/attendance/11.webp", altText: "Printed Attendance Register Inside" },
      { url: "/assets/attendance/12.webp", altText: "Printed Attendance Register Back" },
    ],
    stock: 1200,
    sku: "REG-004",
    attributes: {
      color: ["Multicolor", "White"],
      size: ["A4"],
      material: "Printed Paper + Board Cover",
    },
    tags: ["printed", "attendance", "branding"],
    isFeatured: false,
    isActive: true,
    ratings: { average: 4.4, count: 190 },
    seo: {
      metaTitle: "Printed Attendance Registers",
      metaDescription:
        "Printed attendance registers with custom logos, layouts, and branding — great for schools and training institutes.",
      keywords: ["printed registers", "custom attendance sheets", "branding attendance books"],
    },
  },

  {
    name: "Designer Attendance Registers",
    slug: "designer-attendance-registers",
    description:
      "Add style and practicality with Designer Attendance Registers made from premium-quality paper and attractive layouts. Perfect for faculty use, student management, or special events.",
    price: 299,
    salePrice: 279,
    images: [{ url: "/assets/attendance/13.webp", altText: "Designer Attendance Register" }],
    subImages: [
      { url: "/assets/attendance/13.webp", altText: "Designer Attendance Register Front" },
      { url: "/assets/attendance/14.webp", altText: "Designer Attendance Register Inside" },
      
    ],
    stock: 400,
    sku: "REG-005",
    attributes: {
      color: ["Black", "Gold", "Brown"],
      size: ["A4"],
      material: "Premium PU + Paper Sheets",
    },
    tags: ["designer", "premium", "register"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.8, count: 170 },
    seo: {
      metaTitle: "Designer Attendance Registers",
      metaDescription:
        "Elegant designer attendance registers made with premium covers and high-quality paper — ideal for academic and office use.",
      keywords: ["designer registers", "premium record book", "attendance journal"],
    },
  },

  {
    name: "Custom Logo Attendance Registers",
    slug: "custom-logo-attendance-registers",
    description:
      "Showcase your institute’s pride with Custom Logo Attendance Registers featuring high-quality printing or embossing. Ideal for daily use, events, and administrative purposes — keeping your brand visible while maintaining professional organization.",
    price: 259,
    salePrice: 239,
    images: [{ url: "/assets/attendance/15.webp", altText: "Custom Logo Attendance Register" }],
    subImages: [
      { url: "/assets/attendance/15.webp", altText: "Custom Logo Attendance Register Front" },
      { url: "/assets/attendance/16.webp", altText: "Custom Logo Attendance Register Inside" },
    ],
    stock: 700,
    sku: "REG-006",
    attributes: {
      color: ["Blue", "Brown", "Custom Print"],
      size: ["A4"],
      material: "Embossed Board + Paper",
    },
    tags: ["logo", "custom", "attendance register"],
    isFeatured: true,
    isActive: true,
    ratings: { average: 4.6, count: 200 },
    seo: {
      metaTitle: "Custom Logo Attendance Registers",
      metaDescription:
        "Custom logo attendance registers with emboss or print branding — durable, professional, and organized.",
      keywords: ["logo attendance registers", "custom embossed registers", "school office books"],
    },
  },
];

module.exports = attendanceRegisters;
