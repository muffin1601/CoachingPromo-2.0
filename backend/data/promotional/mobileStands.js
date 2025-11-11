const mobileStands = [
    {
        name: "Custom Mobile Stands",
        slug: "custom-mobile-stands",
        description:
            "Keep your coaching institute’s workspaces organized and professional with Custom Mobile Stands. Personalize each stand with your logo, name, or tagline to create a functional and stylish accessory for students, faculty, and staff.",
        price: 199,
        salePrice: 179,
        images: [{ url: "/assets/mobilestands/1.webp", altText: "Custom Mobile Stand" }],
        subImages: [
            { url: "/assets/mobilestands/1.webp", altText: "Custom Mobile Stand" },
            { url: "/assets/mobilestands/2.webp", altText: "Custom Mobile Stand Side" },
            { url: "/assets/mobilestands/3.webp", altText: "Custom Mobile Stand Back" }
        ],
        stock: 500,
        sku: "MS-001",
        attributes: {
            color: ["Black", "White", "Custom Print"],
            size: ["Standard"],
            material: "Plastic",
        },
        tags: ["custom", "mobile stand", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.6, count: 180 },
        seo: {
            metaTitle: "Custom Mobile Stands",
            metaDescription:
                "Custom mobile stands with institute branding and personalization options.",
            keywords: ["custom mobile stands", "personalized mobile stand", "desk stand"],
        },
    },

    {
        name: "Branded Mobile Stands",
        slug: "branded-mobile-stands",
        description:
            "Promote your institute’s identity with Branded Mobile Stands designed for classrooms, offices, and events. Durable and sleek, they enhance device accessibility while maintaining your institute’s professional image.",
        price: 149,
        salePrice: 129,
        images: [{ url: "/assets/mobilestands/4.webp", altText: "Branded Mobile Stand" }],
        subImages: [
            { url: "/assets/mobilestands/4.webp", altText: "Branded Mobile Stand" },
            { url: "/assets/mobilestands/5.webp", altText: "Branded Mobile Stand Side" },
            { url: "/assets/mobilestands/6.webp", altText: "Branded Mobile Stand Back" }
        ],
        stock: 700,
        sku: "MS-002",
        attributes: {
            color: ["Black", "Blue", "Red"],
            size: ["Standard"],
            material: "ABS Plastic",
        },
        tags: ["branded", "mobile stand", "events"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.4, count: 160 },
        seo: {
            metaTitle: "Branded Mobile Stands",
            metaDescription:
                "Branded mobile stands for classrooms, events, offices, and promotions.",
            keywords: ["branded mobile stands", "event mobile stands", "institute stands"],
        },
    },

    {
        name: "Personalized Mobile Stands",
        slug: "personalized-mobile-stands",
        description:
            "Make every desk and workspace unique with Personalized Mobile Stands crafted exclusively for your coaching institute. Add individual names, institute logos, or motivational quotes to create thoughtful and practical accessories.",
        price: 249,
        salePrice: 229,
        images: [{ url: "/assets/mobilestands/7.webp", altText: "Personalized Mobile Stand" }],
        subImages: [
            { url: "/assets/mobilestands/7.webp", altText: "Personalized Mobile Stand" },
            { url: "/assets/mobilestands/8.webp", altText: "Personalized Mobile Stand Side" },
            { url: "/assets/mobilestands/9.webp", altText: "Personalized Mobile Stand Back" }
        ],
        stock: 350,
        sku: "MS-003",
        attributes: {
            color: ["Custom Print", "Black", "White"],
            size: ["Standard"],
            material: "Premium Plastic",
        },
        tags: ["personalized", "custom", "mobile stand"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.8, count: 220 },
        seo: {
            metaTitle: "Personalized Mobile Stands",
            metaDescription:
                "Personalized mobile stands with names, quotes, logos, and custom designs.",
            keywords: ["personalized mobile stands", "custom mobile stands", "name stands"],
        },
    },

    {
        name: "Printed Mobile Stands",
        slug: "printed-mobile-stands",
        description:
            "Boost your institute’s branding with Printed Mobile Stands featuring vibrant logos, designs, or slogans. Ideal for classrooms, faculty desks, reception areas, and gifting — combining practicality with high visibility.",
        price: 129,
        salePrice: 109,
        images: [{ url: "/assets/mobilestands/10.webp", altText: "Printed Mobile Stand" }],
        subImages: [
            { url: "/assets/mobilestands/10.webp", altText: "Printed Mobile Stand" },
            { url: "/assets/mobilestands/11.webp", altText: "Printed Mobile Stand Side" },
            { url: "/assets/mobilestands/12.webp", altText: "Printed Mobile Stand Back" }
        ],
        stock: 1000,
        sku: "MS-004",
        attributes: {
            color: ["Multicolor"],
            size: ["Standard"],
            material: "PVC",
        },
        tags: ["printed", "mobile stand", "custom print"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.3, count: 150 },
        seo: {
            metaTitle: "Printed Mobile Stands",
            metaDescription:
                "Printed mobile stands with vibrant full-color designs and promotional prints.",
            keywords: ["printed mobile stands", "logo stands", "custom printed stands"],
        },
    },

    {
        name: "Designer Mobile Stands",
        slug: "designer-mobile-stands",
        description:
            "Stay stylish and professional with Designer Mobile Stands made from premium materials and modern designs. Perfect for faculty tables, student areas, and offices, they reflect your institute’s elegance and functionality.",
        price: 299,
        salePrice: 279,
        images: [{ url: "/assets/mobilestands/13.webp", altText: "Designer Mobile Stand" }],
        subImages: [
            { url: "/assets/mobilestands/13.webp", altText: "Designer Mobile Stand" },
            { url: "/assets/mobilestands/14.webp", altText: "Designer Mobile Stand Side" },
            { url: "/assets/mobilestands/15.webp", altText: "Designer Mobile Stand Back" }
        ],
        stock: 280,
        sku: "MS-005",
        attributes: {
            color: ["Black", "Metallic", "White"],
            size: ["Standard"],
            material: "Premium Alloy + ABS",
        },
        tags: ["designer", "premium", "elegant"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 200 },
        seo: {
            metaTitle: "Designer Mobile Stands",
            metaDescription:
                "Premium designer mobile stands with elegant finishes and durable build.",
            keywords: ["designer mobile stands", "premium stands", "elegant stands"],
        },
    },
    {
        name: "Custom Logo Mobile Stands",
        slug: "custom-logo-mobile-stands",
        description:
            "Showcase your institute’s pride with Custom Logo Mobile Stands. Featuring high-quality printing or engraving, these stands help keep workspaces organized while promoting your institute’s identity.",
        price: 249,
        salePrice: 229,
        images: [{ url: "/assets/mobilestands/16.webp", altText: "Custom Logo Mobile Stand" }],
        subImages: [
            { url: "/assets/mobilestands/16.webp", altText: "Custom Logo Mobile Stand" },
            { url: "/assets/mobilestands/17.webp", altText: "Custom Logo Mobile Stand Side" },
            { url: "/assets/mobilestands/18.webp", altText: "Custom Logo Mobile Stand Back" }
        ],
        stock: 350,
        sku: "MS-006",
        attributes: {
            color: ["Black", "Brown", "Custom Print"],
            size: ["Standard"],
            material: "ABS + Metal Plate",
        },
        tags: ["logo", "custom logo", "mobile stand"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.6, count: 180 },
        seo: {
            metaTitle: "Custom Logo Mobile Stands",
            metaDescription: "Custom logo mobile stands with engraving, print, and branding.",
            keywords: ["logo stands", "engraved mobile stands", "branding stands"],
        },
    },

    {
        name: "Eco-Friendly Mobile Stands",
        slug: "eco-friendly-mobile-stands",
        description:
            "Support sustainability with Eco-Friendly Mobile Stands made from recycled and biodegradable materials. Ideal for environmentally conscious institutes looking to combine functionality with responsibility.",
        price: 199,
        salePrice: 179,
        images: [{ url: "/assets/mobilestands/19.webp", altText: "Eco-Friendly Mobile Stand" }],
        subImages: [
            { url: "/assets/mobilestands/19.webp", altText: "Eco-Friendly Mobile Stand" },
            { url: "/assets/mobilestands/20.webp", altText: "Eco-Friendly Mobile Stand Side" }
        ],
        stock: 300,
        sku: "MS-007",
        attributes: {
            color: ["Brown", "Beige", "Green"],
            size: ["Standard"],
            material: "Recycled Wood + Eco Polymer",
        },
        tags: ["eco-friendly", "sustainable", "mobile stand"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.4, count: 140 },
        seo: {
            metaTitle: "Eco-Friendly Mobile Stands",
            metaDescription:
                "Eco-friendly mobile stands made with recycled and biodegradable materials.",
            keywords: ["eco mobile stands", "sustainable stands", "wooden stands"],
        },
    },

    {
        name: "Premium Wooden Mobile Stands",
        slug: "premium-wooden-mobile-stands",
        description:
            "Stay organized with Premium Wooden Mobile Stands designed with high-quality craftsmanship. Perfect for faculty desks, reception areas, and student workspaces, combining elegance with durability.",
        price: 329,
        salePrice: 309,
        images: [{ url: "/assets/mobilestands/21.webp", altText: "Premium Wooden Mobile Stand" }],
        subImages: [
            { url: "/assets/mobilestands/21.webp", altText: "Premium Wooden Mobile Stand" },
            { url: "/assets/mobilestands/22.webp", altText: "Premium Wooden Mobile Stand Side" },
            { url: "/assets/mobilestands/23.webp", altText: "Premium Wooden Mobile Stand Back" }
        ],
        stock: 220,
        sku: "MS-008",
        attributes: {
            color: ["Brown", "Dark Brown", "Woodgrain"],
            size: ["Standard"],
            material: "Premium Wood",
        },
        tags: ["wooden", "premium", "mobile stand"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 190 },
        seo: {
            metaTitle: "Premium Wooden Mobile Stands",
            metaDescription:
                "Premium wooden mobile stands with elegant designs and durable build.",
            keywords: ["wooden mobile stands", "premium stands", "wood stands"],
        },
    }

];

module.exports = mobileStands;
