const tableClocks = [
    {
        name: "Custom Table Clocks",
        slug: "custom-table-clocks",
        description:
            "Keep your coaching institute’s brand professional and punctual with Custom Table Clocks. Personalize each clock with your logo, name, or colors to create a cohesive and elegant look for faculty tables, offices, and counseling areas.",
        price: 299,
        salePrice: 279,
        images: [{ url: "/assets/clocks/1.webp", altText: "Custom Table Clock" }],
        subImages: [
            { url: "/assets/clocks/1.webp", altText: "Custom Table Clock" },
            { url: "/assets/clocks/2.webp", altText: "Custom Table Clock Side" },
            { url: "/assets/clocks/3.webp", altText: "Custom Table Clock Back" }
        ],
        stock: 500,
        sku: "CLOCK-001",
        attributes: {
            color: ["Black", "White", "Custom Print"],
            size: ["Standard"],
            material: "Plastic",
        },
        tags: ["custom", "table clock", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.6, count: 210 },
        seo: {
            metaTitle: "Custom Table Clocks",
            metaDescription:
                "Custom table clocks with institute branding and professional designs.",
            keywords: ["custom table clocks", "personalized clocks", "desk clocks"],
        },
    },

    {
        name: "Branded Table Clocks",
        slug: "branded-table-clocks",
        description:
            "Promote your institute’s identity with Branded Table Clocks designed for everyday use and events. Durable and stylish, they are perfect for faculty desks, reception areas, workshops, and seminars while enhancing brand recognition.",
        price: 249,
        salePrice: 229,
        images: [{ url: "/assets/clocks/4.webp", altText: "Branded Table Clock" }],
        subImages: [
            { url: "/assets/clocks/4.webp", altText: "Branded Table Clock" },
            { url: "/assets/clocks/5.webp", altText: "Branded Table Clock Side" },
            { url: "/assets/clocks/6.webp", altText: "Branded Table Clock Back" }
        ],
        stock: 650,
        sku: "CLOCK-002",
        attributes: {
            color: ["Black", "Blue", "Silver"],
            size: ["Standard"],
            material: "ABS Plastic",
        },
        tags: ["branded", "table clock", "events"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.4, count: 180 },
        seo: {
            metaTitle: "Branded Table Clocks",
            metaDescription:
                "Branded table clocks for institutes, events, offices, and faculty desks.",
            keywords: ["branded clocks", "promotional clocks", "desk clocks"],
        },
    },

    {
        name: "Personalized Table Clocks",
        slug: "personalized-table-clocks",
        description:
            "Make every workspace memorable with Personalized Table Clocks crafted exclusively for your coaching institute. Add individual names, institute logos, or motivational quotes to create unique and thoughtful displays for staff and students.",
        price: 329,
        salePrice: 309,
        images: [{ url: "/assets/clocks/7.webp", altText: "Personalized Table Clock" }],
        subImages: [
            { url: "/assets/clocks/7.webp", altText: "Personalized Table Clock" },
            { url: "/assets/clocks/8.webp", altText: "Personalized Table Clock Side" },
            { url: "/assets/clocks/9.webp", altText: "Personalized Table Clock Back" }
        ],
        stock: 400,
        sku: "CLOCK-003",
        attributes: {
            color: ["Custom Print", "Black", "White"],
            size: ["Standard"],
            material: "Premium Plastic",
        },
        tags: ["personalized", "custom", "table clock"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.8, count: 250 },
        seo: {
            metaTitle: "Personalized Table Clocks",
            metaDescription:
                "Personalized table clocks with names, quotes, and custom printed designs.",
            keywords: ["personalized clocks", "custom clocks", "name clocks"],
        },
    },

    {
        name: "Printed Table Clocks",
        slug: "printed-table-clocks",
        description:
            "Boost your institute’s branding with Printed Table Clocks featuring vibrant designs, logos, or slogans. Ideal for classrooms, offices, events, and gifting — combining functionality with professional visibility.",
        price: 199,
        salePrice: 179,
        images: [{ url: "/assets/clocks/10.webp", altText: "Printed Table Clock" }],
        subImages: [
            { url: "/assets/clocks/10.webp", altText: "Printed Table Clock" },
            { url: "/assets/clocks/11.webp", altText: "Printed Table Clock Side" },
            { url: "/assets/clocks/12.webp", altText: "Printed Table Clock Back" }
        ],
        stock: 900,
        sku: "CLOCK-004",
        attributes: {
            color: ["Multicolor"],
            size: ["Standard"],
            material: "PVC",
        },
        tags: ["printed", "table clock", "logo print"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.3, count: 160 },
        seo: {
            metaTitle: "Printed Table Clocks",
            metaDescription:
                "Printed table clocks with vibrant designs, logos, and promotional prints.",
            keywords: ["printed clocks", "logo clocks", "custom printed clocks"],
        },
    },

    {
        name: "Designer Table Clocks",
        slug: "designer-table-clocks",
        description:
            "Stay stylish and professional with Designer Table Clocks made from premium materials and modern designs. Perfect for faculty tables, staff rooms, and reception areas, they reflect your institute’s elegance and class.",
        price: 349,
        salePrice: 329,
        images: [{ url: "/assets/clocks/13.webp", altText: "Designer Table Clock" }],
        subImages: [
            { url: "/assets/clocks/13.webp", altText: "Designer Table Clock" },
            { url: "/assets/clocks/14.webp", altText: "Designer Table Clock Side" }
        ],
        stock: 300,
        sku: "CLOCK-005",
        attributes: {
            color: ["Black", "Gold", "Silver"],
            size: ["Standard"],
            material: "Metal + Acrylic",
        },
        tags: ["designer", "premium", "elegant"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 240 },
        seo: {
            metaTitle: "Designer Table Clocks",
            metaDescription:
                "Designer table clocks with modern finishes and elegant designs.",
            keywords: ["designer table clocks", "premium clocks", "elegant clocks"],
        },
    },

    {
        name: "Custom Logo Table Clocks",
        slug: "custom-logo-table-clocks",
        description:
            "Showcase your institute’s pride with Custom Logo Table Clocks featuring high-quality printing or embossing. Ideal for gifting, events, or staff recognition, these clocks serve as a lasting reminder of your institute’s professionalism and identity.",
        price: 299,
        salePrice: 279,
        images: [{ url: "/assets/clocks/15.webp", altText: "Custom Logo Table Clock" }],
        subImages: [
            { url: "/assets/clocks/15.webp", altText: "Custom Logo Table Clock" },
            { url: "/assets/clocks/16.webp", altText: "Custom Logo Table Clock Side" }
        ],
        stock: 450,
        sku: "CLOCK-006",
        attributes: {
            color: ["Black", "Brown", "Custom Print"],
            size: ["Standard"],
            material: "Metal + Plastic",
        },
        tags: ["logo clock", "custom logo", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.5, count: 220 },
        seo: {
            metaTitle: "Custom Logo Table Clocks",
            metaDescription:
                "Custom logo table clocks with premium printing and personalized branding.",
            keywords: ["logo table clocks", "custom clocks", "branding clocks"],
        },
    },
];

module.exports = tableClocks;
