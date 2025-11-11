const mousePads = [
    {
        name: "Custom Mouse Pads",
        slug: "custom-mouse-pads",
        description:
            "Keep your coaching institute’s workspace professional and branded with Custom Mouse Pads. Personalize each pad with your logo, name, or colors to create a cohesive and stylish look for faculty desks, student workstations, and offices.",
        price: 149,
        salePrice: 129,
        images: [{ url: "/assets/mousepads/1.webp", altText: "Custom Mouse Pad" }],
        subImages: [
            { url: "/assets/mousepads/1.webp", altText: "Custom Mouse Pad" },
            { url: "/assets/mousepads/2.webp", altText: "Custom Mouse Pad Side" },
            { url: "/assets/mousepads/3.webp", altText: "Custom Mouse Pad Close-up" }
        ],
        stock: 500,
        sku: "MOUSEPAD-001",
        attributes: {
            color: ["Black", "Blue", "Custom Print"],
            size: ["Standard"],
            material: "Rubber + Fabric",
        },
        tags: ["custom", "mouse pad", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.6, count: 210 },
        seo: {
            metaTitle: "Custom Mouse Pads",
            metaDescription:
                "Custom mouse pads with institute branding, personalization, and elegant designs.",
            keywords: ["custom mouse pads", "personalized mouse pads", "branded mouse pads"],
        },
    },

    {
        name: "Branded Mouse Pads",
        slug: "branded-mouse-pads",
        description:
            "Promote your institute’s identity with Branded Mouse Pads designed for daily use and events. Durable and sleek, they are perfect for classrooms, offices, and staff workspaces while enhancing brand recognition.",
        price: 129,
        salePrice: 109,
        images: [{ url: "/assets/mousepads/4.webp", altText: "Branded Mouse Pad" }],
        subImages: [
            { url: "/assets/mousepads/4.webp", altText: "Branded Mouse Pad" },
            { url: "/assets/mousepads/5.webp", altText: "Branded Mouse Pad Side" },
            { url: "/assets/mousepads/6.webp", altText: "Branded Mouse Pad Close-up" }
        ],
        stock: 650,
        sku: "MOUSEPAD-002",
        attributes: {
            color: ["Black", "Red", "Blue"],
            size: ["Standard"],
            material: "Rubber + Cloth",
        },
        tags: ["branded", "mouse pad", "events"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.4, count: 170 },
        seo: {
            metaTitle: "Branded Mouse Pads",
            metaDescription:
                "Branded mouse pads for offices, classrooms, seminars, and daily work.",
            keywords: ["branded mouse pads", "logo mouse pads", "promotional mouse pads"],
        },
    },

    {
        name: "Personalized Mouse Pads",
        slug: "personalized-mouse-pads",
        description:
            "Make every workstation unique with Personalized Mouse Pads crafted exclusively for your coaching institute. Add individual names, institute logos, or motivational quotes to create thoughtful and custom displays for students and staff.",
        price: 179,
        salePrice: 159,
        images: [{ url: "/assets/mousepads/7.webp", altText: "Personalized Mouse Pad" }],
        subImages: [
            { url: "/assets/mousepads/7.webp", altText: "Personalized Mouse Pad" },
            { url: "/assets/mousepads/8.webp", altText: "Personalized Mouse Pad Side" },
            { url: "/assets/mousepads/9.webp", altText: "Personalized Mouse Pad Close-up" },
            { url: "/assets/mousepads/10.webp", altText: "Personalized Mouse Pad Variants" }
        ],
        stock: 400,
        sku: "MOUSEPAD-003",
        attributes: {
            color: ["Custom Print", "Black", "White"],
            size: ["Standard"],
            material: "Premium Rubber + Microfiber",
        },
        tags: ["personalized", "mouse pad", "custom"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.8, count: 250 },
        seo: {
            metaTitle: "Personalized Mouse Pads",
            metaDescription:
                "Personalized mouse pads with names, quotes, and institute branding.",
            keywords: ["personalized mouse pads", "custom printed mouse pads", "name mouse pad"],
        },
    },

    {
        name: "Printed Mouse Pads",
        slug: "printed-mouse-pads",
        description:
            "Boost your institute’s branding with Printed Mouse Pads featuring vibrant designs, logos, or slogans. Ideal for classrooms, offices, events, and gifting — combining functionality with professional visibility.",
        price: 119,
        salePrice: 99,
        images: [{ url: "/assets/mousepads/11.webp", altText: "Printed Mouse Pad" }],
        subImages: [
            { url: "/assets/mousepads/11.webp", altText: "Printed Mouse Pad" },
            { url: "/assets/mousepads/12.webp", altText: "Printed Mouse Pad Side" }
        ],
        stock: 900,
        sku: "MOUSEPAD-004",
        attributes: {
            color: ["Multicolor"],
            size: ["Standard"],
            material: "PVC + Cloth",
        },
        tags: ["printed", "mouse pad", "logo print"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.3, count: 160 },
        seo: {
            metaTitle: "Printed Mouse Pads",
            metaDescription:
                "Printed mouse pads with vibrant designs, slogans, and promotional prints.",
            keywords: ["printed mouse pads", "logo mouse pads", "custom printed pads"],
        },
    },

    {
        name: "Designer Mouse Pads",
        slug: "designer-mouse-pads",
        description:
            "Stay stylish and professional with Designer Mouse Pads made from premium materials and modern designs. Perfect for faculty desks, staff areas, and student workspaces, they reflect your institute’s elegance and class.",
        price: 199,
        salePrice: 179,
        images: [{ url: "/assets/mousepads/13.webp", altText: "Designer Mouse Pad" }],
        subImages: [
            { url: "/assets/mousepads/13.webp", altText: "Designer Mouse Pad" },
            { url: "/assets/mousepads/14.webp", altText: "Designer Mouse Pad Side" },
            { url: "/assets/mousepads/15.webp", altText: "Designer Mouse Pad Close-up" },
            { url: "/assets/mousepads/16.webp", altText: "Designer Mouse Pad Close-up-2" }
        ],
        stock: 300,
        sku: "MOUSEPAD-005",
        attributes: {
            color: ["Black", "Gold", "Brown"],
            size: ["Standard"],
            material: "Premium Fabric + Rubber",
        },
        tags: ["designer", "premium", "elegant"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 200 },
        seo: {
            metaTitle: "Designer Mouse Pads",
            metaDescription:
                "Designer mouse pads with premium materials and elegant modern styling.",
            keywords: ["designer mouse pads", "premium mouse pads", "elegant desk pads"],
        },
    },
];

module.exports = mousePads;
