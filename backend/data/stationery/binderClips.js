const binderClips = [
    {
        name: "Custom Binder Clips",
        slug: "custom-binder-clips",
        description:
            "Keep your coaching institute’s documents neat and professional with Custom Binder Clips. Personalize each clip with your logo, name, or colors to create a cohesive and branding look for classrooms, offices, and events.",
        price: 99,
        salePrice: 79,
        images: [{ url: "/assets/binderclips/1.webp", altText: "Custom Binder Clip" }],
        subImages: [
            { url: "/assets/binderclips/1.webp", altText: "Custom Binder Clip" },
            { url: "/assets/binderclips/2.webp", altText: "Custom Binder Clip Side" },
            { url: "/assets/binderclips/3.webp", altText: "Custom Binder Clip Close-up" }
        ],
        stock: 1000,
        sku: "BC-001",
        attributes: {
            color: ["Black", "Blue", "Custom Print"],
            size: ["19mm", "32mm", "51mm"],
            material: "Metal + Plastic Coating",
        },
        tags: ["custom", "binder clip", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.5, count: 220 },
        seo: {
            metaTitle: "Custom Binder Clips",
            metaDescription:
                "Custom binder clips with personalized branding and durable metal finish.",
            keywords: ["custom binder clips", "branding clips", "office stationery"],
        },
    },

    {
        name: "Branding Binder Clips",
        slug: "branding-binder-clips",
        description:
            "Promote your institute’s identity with Branding Binder Clips designed for classrooms, offices, and seminars. Strong and stylish, they hold documents securely while subtly showcasing your brand logo.",
        price: 89,
        salePrice: 69,
        images: [{ url: "/assets/binderclips/4.webp", altText: "Branding Binder Clip" }],
        subImages: [
            { url: "/assets/binderclips/4.webp", altText: "Branding Binder Clip" },
            { url: "/assets/binderclips/5.webp", altText: "Branding Binder Clip Side" },
            { url: "/assets/binderclips/6.webp", altText: "Branding Binder Clip Close-up" }
        ],
        stock: 1200,
        sku: "BC-002",
        attributes: {
            color: ["Black", "Red", "Blue"],
            size: ["25mm", "32mm"],
            material: "Steel + Color Coating",
        },
        tags: ["branding", "binder clip", "events"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.4, count: 180 },
        seo: {
            metaTitle: "Branding Binder Clips",
            metaDescription:
                "Durable branding binder clips for institutes, offices, and classrooms.",
            keywords: ["branding binder clips", "office clips", "stationery branding"],
        },
    },

    {
        name: "Printed Binder Clips",
        slug: "printed-binder-clips",
        description:
            "Boost your institute’s visibility with Printed Binder Clips featuring vibrant logos, taglines, or motivational quotes. Ideal for offices, classrooms, and workshops — combining practicality with professional flair.",
        price: 79,
        salePrice: 59,
        images: [{ url: "/assets/binderclips/7.webp", altText: "Printed Binder Clip" }],
        subImages: [
            { url: "/assets/binderclips/7.webp", altText: "Printed Binder Clip" },
            { url: "/assets/binderclips/8.webp", altText: "Printed Binder Clip Side" },
            { url: "/assets/binderclips/9.webp", altText: "Printed Binder Clip Design" }
        ],
        stock: 900,
        sku: "BC-003",
        attributes: {
            color: ["Multicolor"],
            size: ["19mm", "32mm"],
            material: "Metal + Custom Print",
        },
        tags: ["printed", "binder clip", "logo print"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.3, count: 160 },
        seo: {
            metaTitle: "Printed Binder Clips",
            metaDescription:
                "Printed binder clips with vibrant logos, slogans, and colorful branding.",
            keywords: ["printed clips", "custom binder clips", "logo stationery"],
        },
    },

    {
        name: "Designer Binder Clips",
        slug: "designer-binder-clips",
        description:
            "Add a touch of sophistication to your institute’s stationery with Designer Binder Clips crafted from premium materials. Perfect for offices, awards, and faculty tables, they combine durability with elegant aesthetics.",
        price: 119,
        salePrice: 99,
        images: [{ url: "/assets/binderclips/10.webp", altText: "Designer Binder Clip" }],
        subImages: [
            { url: "/assets/binderclips/10.webp", altText: "Designer Binder Clip" },
            { url: "/assets/binderclips/11.webp", altText: "Designer Binder Clip Side" },
            { url: "/assets/binderclips/12.webp", altText: "Designer Binder Clip Close-up" }
        ],
        stock: 500,
        sku: "BC-004",
        attributes: {
            color: ["Gold", "Silver", "Rose Gold"],
            size: ["32mm", "51mm"],
            material: "Premium Metal",
        },
        tags: ["designer", "premium", "binder clip"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 190 },
        seo: {
            metaTitle: "Designer Binder Clips",
            metaDescription:
                "Premium designer binder clips with metallic finishes for elegant organization.",
            keywords: ["designer binder clips", "metal clips", "premium stationery"],
        },
    },
];

module.exports = binderClips;
