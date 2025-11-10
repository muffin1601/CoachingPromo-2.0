const wallClocks = [
    {
        name: "Custom Wall Clocks",
        slug: "custom-wall-clocks",
        description:
            "Keep your coaching institute’s brand timely and professional with Custom Wall Clocks. Personalize each clock with your logo, name, or colors to create a cohesive and elegant look for classrooms, offices, and staff areas.",
        price: 299,
        salePrice: 279,
        images: [{ url: "/assets/wallclocks/1.webp", altText: "Custom Wall Clock" }],
        subImages: [
            { url: "/assets/wallclocks/1.webp", altText: "Custom Wall Clock" },
            { url: "/assets/wallclocks/2.webp", altText: "Custom Wall Clock Side" },
            { url: "/assets/wallclocks/3.webp", altText: "Custom Wall Clock Back" }
        ],
        stock: 550,
        sku: "WALLCLOCK-001",
        attributes: {
            color: ["Black", "White", "Custom Print"],
            size: ["Standard"],
            material: "Plastic",
        },
        tags: ["custom", "wall clock", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.6, count: 240 },
        seo: {
            metaTitle: "Custom Wall Clocks",
            metaDescription:
                "Custom wall clocks with institute branding and stylish designs.",
            keywords: ["custom wall clocks", "personalized clocks", "branding clocks"],
        },
    },

    {
        name: "Branded Wall Clocks",
        slug: "branded-wall-clocks",
        description:
            "Promote your institute’s identity with Branded Wall Clocks designed for daily visibility and events. Durable and stylish, they are perfect for classrooms, reception areas, seminars, and workshops while enhancing brand recognition.",
        price: 249,
        salePrice: 229,
        images: [{ url: "/assets/wallclocks/4.webp", altText: "Branded Wall Clock" }],
        subImages: [
            { url: "/assets/wallclocks/4.webp", altText: "Branded Wall Clock" },
            { url: "/assets/wallclocks/5.webp", altText: "Branded Wall Clock Side" },
            { url: "/assets/wallclocks/6.webp", altText: "Branded Wall Clock Back" }
        ],
        stock: 650,
        sku: "WALLCLOCK-002",
        attributes: {
            color: ["Black", "Blue", "Silver"],
            size: ["Standard"],
            material: "ABS Plastic",
        },
        tags: ["branded", "wall clock", "events"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.4, count: 190 },
        seo: {
            metaTitle: "Branded Wall Clocks",
            metaDescription:
                "Branded wall clocks for classrooms, offices, seminars, and events.",
            keywords: ["branded wall clocks", "promotional clocks", "event clocks"],
        },
    },

    {
        name: "Personalized Wall Clocks",
        slug: "personalized-wall-clocks",
        description:
            "Make every space memorable with Personalized Wall Clocks crafted exclusively for your coaching institute. Add individual names, institute logos, or motivational quotes to create unique and thoughtful displays for staff and students.",
        price: 329,
        salePrice: 309,
        images: [{ url: "/assets/wallclocks/7.webp", altText: "Personalized Wall Clock" }],
        subImages: [
            { url: "/assets/wallclocks/7.webp", altText: "Personalized Wall Clock" },
            { url: "/assets/wallclocks/8.webp", altText: "Personalized Wall Clock Side" },
            { url: "/assets/wallclocks/9.webp", altText: "Personalized Wall Clock Back" }
        ],
        stock: 380,
        sku: "WALLCLOCK-003",
        attributes: {
            color: ["Custom Print", "Black", "White"],
            size: ["Standard"],
            material: "Premium Plastic",
        },
        tags: ["personalized", "custom", "wall clock"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.8, count: 260 },
        seo: {
            metaTitle: "Personalized Wall Clocks",
            metaDescription:
                "Personalized wall clocks with names, quotes, and institute branding.",
            keywords: ["personalized wall clocks", "custom wall clocks", "name clocks"],
        },
    },

    {
        name: "Printed Wall Clocks",
        slug: "printed-wall-clocks",
        description:
            "Boost your institute’s branding with Printed Wall Clocks featuring vibrant designs, logos, or slogans. Ideal for classrooms, offices, events, and promotions — combining functionality with professional visibility.",
        price: 199,
        salePrice: 179,
        images: [{ url: "/assets/wallclocks/10.webp", altText: "Printed Wall Clock" }],
        subImages: [
            { url: "/assets/wallclocks/10.webp", altText: "Printed Wall Clock" },
            { url: "/assets/wallclocks/11.webp", altText: "Printed Wall Clock Side" },
            { url: "/assets/wallclocks/12.webp", altText: "Printed Wall Clock Back" }
        ],
        stock: 900,
        sku: "WALLCLOCK-004",
        attributes: {
            color: ["Multicolor"],
            size: ["Standard"],
            material: "PVC",
        },
        tags: ["printed", "wall clock", "logo print"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.3, count: 170 },
        seo: {
            metaTitle: "Printed Wall Clocks",
            metaDescription:
                "Printed wall clocks with vibrant logos, designs, and promotional prints.",
            keywords: ["printed wall clocks", "logo clocks", "custom printed clocks"],
        },
    },

    {
        name: "Designer Wall Clocks",
        slug: "designer-wall-clocks",
        description:
            "Stay stylish and professional with Designer Wall Clocks made from premium materials and modern designs. Perfect for classrooms, staff rooms, and reception areas, they reflect your institute’s elegance and class.",
        price: 349,
        salePrice: 329,
        images: [{ url: "/assets/wallclocks/13.webp", altText: "Designer Wall Clock" }],
        subImages: [
            { url: "/assets/wallclocks/13.webp", altText: "Designer Wall Clock" },
            { url: "/assets/wallclocks/14.webp", altText: "Designer Wall Clock Side" },
            { url: "/assets/wallclocks/15.webp", altText: "Designer Wall Clock Back" }
        ],
        stock: 260,
        sku: "WALLCLOCK-005",
        attributes: {
            color: ["Black", "Gold", "Silver"],
            size: ["Standard"],
            material: "Metal + Acrylic",
        },
        tags: ["designer", "premium", "elegant"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 230 },
        seo: {
            metaTitle: "Designer Wall Clocks",
            metaDescription:
                "Designer wall clocks with premium finishes and elegant aesthetics.",
            keywords: ["designer wall clocks", "premium clocks", "elegant wall clocks"],
        },
    },

    {
        name: "Custom Logo Wall Clocks",
        slug: "custom-logo-wall-clocks",
        description:
            "Showcase your institute’s pride with Custom Logo Wall Clocks featuring high-quality printing or embossing. Ideal for gifting, events, or staff recognition, these clocks serve as a lasting reminder of your institute’s professionalism and identity.",
        price: 299,
        salePrice: 279,
        images: [{ url: "/assets/wallclocks/16.webp", altText: "Custom Logo Wall Clock" }],
        subImages: [
            { url: "/assets/wallclocks/16.webp", altText: "Custom Logo Wall Clock" },
            { url: "/assets/wallclocks/17.webp", altText: "Custom Logo Wall Clock Side" },
            { url: "/assets/wallclocks/18.webp", altText: "Custom Logo Wall Clock Back" }
        ],
        stock: 450,
        sku: "WALLCLOCK-006",
        attributes: {
            color: ["Black", "Brown", "Custom Print"],
            size: ["Standard"],
            material: "Metal + Plastic",
        },
        tags: ["logo wall clock", "custom logo", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.5, count: 240 },
        seo: {
            metaTitle: "Custom Logo Wall Clocks",
            metaDescription:
                "Custom logo wall clocks with premium printing and professional branding.",
            keywords: ["custom logo wall clocks", "branding clocks", "logo clocks"],
        },
    },
];

module.exports = wallClocks;
