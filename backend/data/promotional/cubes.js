const cubes = [
    {
        name: "Custom Magic Cubes",
        slug: "custom-magic-cubes",
        description:
            "Encourage creativity and promote your institute’s brand with Custom Magic Cubes. Personalize each cube with your logo, name, or colors to create an engaging and memorable promotional tool for students and events.",
        price: 299,
        salePrice: 279,
        images: [{ url: "/assets/cubes/1.webp", altText: "Custom Magic Cube" }],
        subImages: [
            { url: "/assets/cubes/1.webp", altText: "Custom Magic Cube" },
            { url: "/assets/cubes/2.webp", altText: "Custom Magic Cube Side" }
        ],
        stock: 500,
        sku: "CUBE-001",
        attributes: {
            color: ["Multicolor"],
            size: ["Standard"],
            material: "Plastic",
        },
        tags: ["custom", "magic cube", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.6, count: 200 },
        seo: {
            metaTitle: "Custom Magic Cubes",
            metaDescription:
                "Custom Magic Cubes with personalized branding for institutes and events.",
            keywords: ["custom magic cubes", "personalized cubes", "branding cubes"],
        },
    },

    {
        name: "Branded Magic Cubes",
        slug: "branded-magic-cubes",
        description:
            "Strengthen your institute’s identity with Branded Magic Cubes designed for interactive learning and promotions. Durable and stylish, they’re perfect for seminars, exhibitions, and giveaways, enhancing your brand visibility.",
        price: 249,
        salePrice: 229,
        images: [{ url: "/assets/cubes/3.webp", altText: "Branded Magic Cube" }],
        subImages: [
            { url: "/assets/cubes/3.webp", altText: "Branded Magic Cube" },
            { url: "/assets/cubes/4.webp", altText: "Branded Magic Cube Side" }
        ],
        stock: 700,
        sku: "CUBE-002",
        attributes: {
            color: ["Multicolor"],
            size: ["Standard"],
            material: "Plastic",
        },
        tags: ["branded", "magic cube", "events"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.4, count: 160 },
        seo: {
            metaTitle: "Branded Magic Cubes",
            metaDescription: "Branded Magic Cubes for institutes, events, and promotions.",
            keywords: ["branded cubes", "event magic cubes", "promotional cubes"],
        },
    },

    {
        name: "Personalized Magic Cubes",
        slug: "personalized-magic-cubes",
        description:
            "Make learning fun and personal with Personalized Magic Cubes customized with individual names, institute logos, or motivational quotes — ideal for student gifts and event souvenirs.",
        price: 349,
        salePrice: 329,
        images: [{ url: "/assets/cubes/5.webp", altText: "Personalized Magic Cube" }],
        subImages: [
            { url: "/assets/cubes/5.webp", altText: "Personalized Magic Cube" },
            { url: "/assets/cubes/6.webp", altText: "Personalized Magic Cube Side" }
        ],
        stock: 350,
        sku: "CUBE-003",
        attributes: {
            color: ["Custom Print"],
            size: ["Standard"],
            material: "Premium Plastic",
        },
        tags: ["personalized", "custom", "name cube"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.8, count: 300 },
        seo: {
            metaTitle: "Personalized Magic Cubes",
            metaDescription:
                "Personalized Magic Cubes with names, logos, and motivational quotes.",
            keywords: ["personalized magic cubes", "name cubes", "custom cubes"],
        },
    },

    {
        name: "Printed Magic Cubes",
        slug: "printed-magic-cubes",
        description:
            "Boost your branding with Printed Magic Cubes featuring vibrant full-color designs, slogans, or themes. Great for workshops, promotional campaigns, and classroom engagement — combining creativity with brand recall.",
        price: 199,
        salePrice: 179,
        images: [{ url: "/assets/cubes/7.webp", altText: "Printed Magic Cube" }],
        subImages: [
            { url: "/assets/cubes/7.webp", altText: "Printed Magic Cube" },
            { url: "/assets/cubes/8.webp", altText: "Printed Magic Cube Side" }
        ],
        stock: 1000,
        sku: "CUBE-004",
        attributes: {
            color: ["Multicolor"],
            size: ["Standard"],
            material: "PVC",
        },
        tags: ["printed", "logo print", "magic cube"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.3, count: 140 },
        seo: {
            metaTitle: "Printed Magic Cubes",
            metaDescription:
                "Vibrant printed magic cubes with custom full-color themes and logos.",
            keywords: ["printed cubes", "logo printed cubes", "custom printed cubes"],
        },
    },

    {
        name: "Designer Magic Cubes",
        slug: "designer-magic-cubes",
        description:
            "Add a touch of innovation with Designer Magic Cubes crafted from premium materials and modern designs. Perfect for faculty desks, events, and creative displays that reflect your institute’s smart and stylish image.",
        price: 399,
        salePrice: 369,
        images: [{ url: "/assets/cubes/9.webp", altText: "Designer Magic Cube" }],
        subImages: [
            { url: "/assets/cubes/9.webp", altText: "Designer Magic Cube" },
            { url: "/assets/cubes/10.webp", altText: "Designer Magic Cube Side" }
        ],
        stock: 250,
        sku: "CUBE-005",
        attributes: {
            color: ["Black", "White", "Metallic"],
            size: ["Standard"],
            material: "Premium Alloy + ABS",
        },
        tags: ["designer", "premium", "elegant"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 280 },
        seo: {
            metaTitle: "Designer Magic Cubes",
            metaDescription:
                "Premium designer magic cubes with stylish modern finishes.",
            keywords: ["designer cubes", "premium magic cubes", "elegant cubes"],
        },
    },

    {
        name: "Custom Logo Magic Cubes",
        slug: "custom-logo-magic-cubes",
        description:
            "Showcase your institute’s pride with Custom Logo Magic Cubes featuring high-quality logo printing or embossing. Ideal for gifting, branding events, and giveaways — a unique way to keep your brand in hand and in mind.",
        price: 299,
        salePrice: 279,
        images: [{ url: "/assets/cubes/11.webp", altText: "Custom Logo Magic Cube" }],
        subImages: [
            { url: "/assets/cubes/11.webp", altText: "Custom Logo Magic Cube" },
            { url: "/assets/cubes/12.webp", altText: "Custom Logo Magic Cube Side" }
        ],
        stock: 450,
        sku: "CUBE-006",
        attributes: {
            color: ["Multicolor", "Custom Print"],
            size: ["Standard"],
            material: "ABS Plastic",
        },
        tags: ["logo cube", "custom logo", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.5, count: 210 },
        seo: {
            metaTitle: "Custom Logo Magic Cubes",
            metaDescription:
                "Custom logo magic cubes with premium printing and embossing.",
            keywords: ["logo magic cubes", "custom logo cubes", "branding cubes"],
        },
    },
];

module.exports = cubes;
