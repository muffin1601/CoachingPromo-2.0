const paperStands = [
    {
        name: "Custom Paper Stands",
        slug: "custom-paper-stands",
        description:
            "Keep your coaching institute’s documents and displays organized with Custom Paper Stands. Personalize each stand with your logo, name, or tagline to create a professional and elegant setup for classrooms, offices, and events.",
        price: 149,
        salePrice: 129,
        images: [{ url: "/assets/paperstands/1.webp", altText: "Custom Paper Stand" }],
        subImages: [
            { url: "/assets/paperstands/1.webp", altText: "Custom Paper Stand" },
            { url: "/assets/paperstands/2.webp", altText: "Custom Paper Stand Side" }
        ],
        stock: 450,
        sku: "PS-001",
        attributes: {
            color: ["Black", "White", "Custom Print"],
            size: ["Standard"],
            material: "Plastic",
        },
        tags: ["custom", "paper stand", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.6, count: 160 },
        seo: {
            metaTitle: "Custom Paper Stands",
            metaDescription:
                "Custom paper stands with personalized branding and elegant designs.",
            keywords: ["custom paper stands", "personalized paper stand", "display stand"],
        },
    },

    {
        name: "Branded Paper Stands",
        slug: "branded-paper-stands",
        description:
            "Promote your institute’s identity with Branded Paper Stands designed for offices, classrooms, workshops, and events. Durable and stylish, they are perfect for organizing documents while enhancing your institute’s brand visibility.",
        price: 129,
        salePrice: 109,
        images: [{ url: "/assets/paperstands/3.webp", altText: "Branded Paper Stand" }],
        subImages: [
            { url: "/assets/paperstands/3.webp", altText: "Branded Paper Stand" },
            { url: "/assets/paperstands/4.webp", altText: "Branded Paper Stand Side" }
        ],
        stock: 600,
        sku: "PS-002",
        attributes: {
            color: ["Black", "Blue", "Red"],
            size: ["Standard"],
            material: "ABS Plastic",
        },
        tags: ["branded", "paper stand", "events"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.4, count: 140 },
        seo: {
            metaTitle: "Branded Paper Stands",
            metaDescription:
                "Branded paper stands for offices, classrooms, seminars, and events.",
            keywords: ["branded paper stands", "office paper stands", "event paper stands"],
        },
    },

    {
        name: "Personalized Paper Stands",
        slug: "personalized-paper-stands",
        description:
            "Make every workspace and display memorable with Personalized Paper Stands crafted exclusively for your coaching institute. Add individual names, institute logos, or motivational quotes to create unique and thoughtful stands for staff and students.",
        price: 179,
        salePrice: 159,
        images: [{ url: "/assets/paperstands/5.webp", altText: "Personalized Paper Stand" }],
        subImages: [
            { url: "/assets/paperstands/5.webp", altText: "Personalized Paper Stand" },
            { url: "/assets/paperstands/6.webp", altText: "Personalized Paper Stand Side" }
        ],
        stock: 350,
        sku: "PS-003",
        attributes: {
            color: ["Custom Print", "Black", "White"],
            size: ["Standard"],
            material: "Premium Plastic",
        },
        tags: ["personalized", "custom", "paper stand"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.8, count: 210 },
        seo: {
            metaTitle: "Personalized Paper Stands",
            metaDescription:
                "Personalized paper stands with names, quotes, and branded designs.",
            keywords: ["personalized paper stands", "custom paper stands", "name stands"],
        },
    },

    {
        name: "Printed Paper Stands",
        slug: "printed-paper-stands",
        description:
            "Boost your institute’s branding with Printed Paper Stands featuring vibrant logos, inscriptions, or slogans. Ideal for offices, classrooms, events, and gifting — combining functionality with professional visibility.",
        price: 119,
        salePrice: 99,
        images: [{ url: "/assets/paperstands/7.webp", altText: "Printed Paper Stand" }],
        subImages: [
            { url: "/assets/paperstands/7.webp", altText: "Printed Paper Stand" },
            { url: "/assets/paperstands/8.webp", altText: "Printed Paper Stand Side" }
        ],
        stock: 800,
        sku: "PS-004",
        attributes: {
            color: ["Multicolor"],
            size: ["Standard"],
            material: "PVC",
        },
        tags: ["printed", "paper stand", "logo print"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.3, count: 130 },
        seo: {
            metaTitle: "Printed Paper Stands",
            metaDescription:
                "Printed paper stands with vibrant colors, logos, and promotional themes.",
            keywords: ["printed paper stands", "logo paper stands", "custom printed stands"],
        },
    },
];

module.exports = paperStands;
