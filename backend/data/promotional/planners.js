const planners = [
    {
        name: "Custom Planners",
        slug: "custom-planners",
        description:
            "Keep your coaching institute organized and professional with Custom Planners. Personalize each planner with your logo, name, or tagline to create a practical and elegant tool for students, faculty, and staff.",
        price: 299,
        salePrice: 279,
        images: [{ url: "/assets/planners/1.webp", altText: "Custom Planner" }],
        subImages: [
            { url: "/assets/planners/1.webp", altText: "Custom Planner" },
            { url: "/assets/planners/2.webp", altText: "Custom Planner Side" },
            { url: "/assets/planners/3.webp", altText: "Custom Planner Open" }
        ],
        stock: 500,
        sku: "PLAN-001",
        attributes: {
            color: ["Black", "Blue", "Custom Print"],
            size: ["A5", "A6"],
            material: "PU Leather",
        },
        tags: ["custom", "planner", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.6, count: 210 },
        seo: {
            metaTitle: "Custom Planners",
            metaDescription:
                "Custom planners with institute branding, personalization, and elegant designs.",
            keywords: ["custom planners", "personalized planners", "coaching planners"],
        },
    },

    {
        name: "Branded Planners",
        slug: "branded-planners",
        description:
            "Promote your institute’s identity with Branded Planners designed for daily use, workshops, and events. Durable and stylish, they are perfect for planning, scheduling, and enhancing your institute’s brand visibility.",
        price: 249,
        salePrice: 229,
        images: [{ url: "/assets/planners/4.webp", altText: "Branded Planner" }],
        subImages: [
            { url: "/assets/planners/4.webp", altText: "Branded Planner" },
            { url: "/assets/planners/5.webp", altText: "Branded Planner Side" },
            { url: "/assets/planners/6.webp", altText: "Branded Planner Open" }
        ],
        stock: 600,
        sku: "PLAN-002",
        attributes: {
            color: ["Black", "Red", "Blue"],
            size: ["A5"],
            material: "Leatherette",
        },
        tags: ["branded", "planner", "events"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.4, count: 180 },
        seo: {
            metaTitle: "Branded Planners",
            metaDescription:
                "Branded planners for offices, classrooms, seminars, and daily use.",
            keywords: ["branded planners", "event planners", "professional planners"],
        },
    },

    {
        name: "Personalized Planners",
        slug: "personalized-planners",
        description:
            "Make every day organized and memorable with Personalized Planners crafted exclusively for your coaching institute. Add individual names, institute logos, or motivational quotes to create unique and thoughtful planners for students and staff.",
        price: 349,
        salePrice: 329,
        images: [{ url: "/assets/planners/7.webp", altText: "Personalized Planner" }],
        subImages: [
            { url: "/assets/planners/7.webp", altText: "Personalized Planner" },
            { url: "/assets/planners/8.webp", altText: "Personalized Planner Side" },
            { url: "/assets/planners/9.webp", altText: "Personalized Planner Open" }
        ],
        stock: 350,
        sku: "PLAN-003",
        attributes: {
            color: ["Custom Print", "Black", "White"],
            size: ["A5"],
            material: "Premium Leather",
        },
        tags: ["personalized", "custom", "planner"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.8, count: 300 },
        seo: {
            metaTitle: "Personalized Planners",
            metaDescription:
                "Personalized planners with names, quotes, logos, and customized designs.",
            keywords: ["personalized planners", "custom planners", "name planners"],
        },
    },

    {
        name: "Printed Planners",
        slug: "printed-planners",
        description:
            "Boost your institute’s recognition with Printed Planners featuring logos, inscriptions, or slogans. Ideal for classrooms, offices, events, and gifting — combining functionality with professional branding.",
        price: 199,
        salePrice: 179,
        images: [{ url: "/assets/planners/10.webp", altText: "Printed Planner" }],
        subImages: [
            { url: "/assets/planners/10.webp", altText: "Printed Planner" },
            { url: "/assets/planners/11.webp", altText: "Printed Planner Side" },
            { url: "/assets/planners/12.webp", altText: "Printed Planner Open" }
        ],
        stock: 1000,
        sku: "PLAN-004",
        attributes: {
            color: ["Multicolor"],
            size: ["A5"],
            material: "Hardcover + Paper",
        },
        tags: ["printed", "planner", "branding"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.3, count: 150 },
        seo: {
            metaTitle: "Printed Planners",
            metaDescription:
                "Printed planners with vibrant themes, slogans, and colorful covers.",
            keywords: ["printed planners", "logo planners", "custom printed planners"],
        },
    },

    {
        name: "Designer Planners",
        slug: "designer-planners",
        description:
            "Stay stylish and productive with Designer Planners made from premium materials and modern layouts. Perfect for students, faculty, and staff, they reflect your institute’s elegance and commitment to excellence.",
        price: 399,
        salePrice: 379,
        images: [{ url: "/assets/planners/13.webp", altText: "Designer Planner" }],
        subImages: [
            { url: "/assets/planners/13.webp", altText: "Designer Planner" },
            { url: "/assets/planners/14.webp", altText: "Designer Planner Side" },
            { url: "/assets/planners/15.webp", altText: "Designer Planner Open" }
        ],
        stock: 280,
        sku: "PLAN-005",
        attributes: {
            color: ["Black", "Gold", "Maroon"],
            size: ["A5"],
            material: "Premium PU Leather",
        },
        tags: ["designer", "premium", "elegant"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 260 },
        seo: {
            metaTitle: "Designer Planners",
            metaDescription:
                "Designer planners with elegant finishes and high-quality materials.",
            keywords: ["designer planners", "premium planners", "elegant planners"],
        },
    },

    {
        name: "Custom Logo Planners",
        slug: "custom-logo-planners",
        description:
            "Showcase your institute’s pride with Custom Logo Planners featuring high-quality printing, embossing, or engraving. Ideal for gifting, events, or daily use, these planners serve as a lasting symbol of your institute’s professionalism and organized approach.",
        price: 299,
        salePrice: 279,
        images: [{ url: "/assets/planners/16.webp", altText: "Custom Logo Planner" }],
        subImages: [
            { url: "/assets/planners/16.webp", altText: "Custom Logo Planner" },
            { url: "/assets/planners/17.webp", altText: "Custom Logo Planner Side" },
            { url: "/assets/planners/18.webp", altText: "Custom Logo Planner Open" }
        ],
        stock: 450,
        sku: "PLAN-006",
        attributes: {
            color: ["Black", "Brown", "Custom Print"],
            size: ["A5", "A6"],
            material: "PU Leather + Hard Paper",
        },
        tags: ["logo planner", "custom logo", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.5, count: 240 },
        seo: {
            metaTitle: "Custom Logo Planners",
            metaDescription:
                "Custom logo planners with premium printing, embossing, and engraving options.",
            keywords: ["logo planners", "custom logo planners", "branding planners"],
        },
    },
];

module.exports = planners;
