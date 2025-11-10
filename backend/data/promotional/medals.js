const medals = [
    {
        name: "Custom Medals",
        slug: "custom-medals",
        description:
            "Celebrate achievements in style with Custom Medals designed exclusively for your coaching institute. Personalize each medal with your logo, name, or event title to create a lasting symbol of excellence and pride for students, teachers, and achievers.",
        price: 149,
        salePrice: 129,
        images: [{ url: "/assets/medals/1.webp", altText: "Custom Medal" }],
        subImages: [
            { url: "/assets/medals/1.webp", altText: "Custom Medal" },
            { url: "/assets/medals/2.webp", altText: "Custom Medal Side" }
        ],
        stock: 600,
        sku: "MEDAL-001",
        attributes: {
            color: ["Gold", "Silver", "Bronze"],
            size: ["Standard"],
            material: "Metal",
        },
        tags: ["custom", "medal", "award"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 200 },
        seo: {
            metaTitle: "Custom Medals",
            metaDescription:
                "Custom engraved and personalized medals for institutes, events, and recognition.",
            keywords: ["custom medals", "engraved medals", "award medals"],
        },
    },

    {
        name: "Branded Medals",
        slug: "branded-medals",
        description:
            "Promote your institute’s spirit and achievements with Branded Medals crafted for award ceremonies, sports days, and academic events. Durable and elegant, they perfectly represent your institute’s commitment to excellence and recognition.",
        price: 129,
        salePrice: 109,
        images: [{ url: "/assets/medals/3.webp", altText: "Branded Medal" }],
        subImages: [
            { url: "/assets/medals/3.webp", altText: "Branded Medal" },
            { url: "/assets/medals/4.webp", altText: "Branded Medal Side" }
        ],
        stock: 800,
        sku: "MEDAL-002",
        attributes: {
            color: ["Gold", "Silver", "Bronze"],
            size: ["Standard"],
            material: "Metal",
        },
        tags: ["branded", "medal", "events"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.5, count: 180 },
        seo: {
            metaTitle: "Branded Medals",
            metaDescription:
                "Branded medals for academic awards, sports events, and ceremonies.",
            keywords: ["branded medals", "event medals", "award medals"],
        },
    },

    {
        name: "Personalized Medals",
        slug: "personalized-medals",
        description:
            "Make every victory special with Personalized Medals customized with names, institute logos, or event details. Ideal for academic achievers, sports champions, and dedicated staff, these medals serve as meaningful keepsakes of accomplishment.",
        price: 179,
        salePrice: 159,
        images: [{ url: "/assets/medals/5.webp", altText: "Personalized Medal" }],
        subImages: [
            { url: "/assets/medals/5.webp", altText: "Personalized Medal" },
            { url: "/assets/medals/6.webp", altText: "Personalized Medal Side" }
        ],
        stock: 400,
        sku: "MEDAL-003",
        attributes: {
            color: ["Gold", "Silver", "Bronze"],
            size: ["Standard"],
            material: "Premium Metal",
        },
        tags: ["personalized", "custom", "engraved medal"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.8, count: 300 },
        seo: {
            metaTitle: "Personalized Medals",
            metaDescription:
                "Personalized medals with names, logos, and event details.",
            keywords: ["personalized medals", "custom medals", "engraved medals"],
        },
    },

    {
        name: "Printed Medals",
        slug: "printed-medals",
        description:
            "Boost your institute’s identity with Printed Medals featuring vibrant designs, logos, and messages. Perfect for competitions, farewell functions, or annual events — combining elegant design with promotional value.",
        price: 119,
        salePrice: 99,
        images: [{ url: "/assets/medals/7.webp", altText: "Printed Medal" }],
        subImages: [
            { url: "/assets/medals/7.webp", altText: "Printed Medal" },
            { url: "/assets/medals/8.webp", altText: "Printed Medal Side" }
        ],
        stock: 1000,
        sku: "MEDAL-004",
        attributes: {
            color: ["Multicolor"],
            size: ["Standard"],
            material: "Metal + Printed Surface",
        },
        tags: ["printed", "medal", "logo print"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.3, count: 150 },
        seo: {
            metaTitle: "Printed Medals",
            metaDescription:
                "Printed medals with vibrant themes, logos, and custom designs.",
            keywords: ["printed medals", "logo medals", "custom printed medals"],
        },
    },

    {
        name: "Designer Medals",
        slug: "designer-medals",
        description:
            "Add a touch of class to your award ceremonies with Designer Medals made from premium-quality metals and stylish finishes. These medals reflect your institute’s sophistication and dedication to rewarding excellence.",
        price: 199,
        salePrice: 179,
        images: [{ url: "/assets/medals/9.webp", altText: "Designer Medal" }],
        subImages: [
            { url: "/assets/medals/9.webp", altText: "Designer Medal" },
            { url: "/assets/medals/10.webp", altText: "Designer Medal Side" }
        ],
        stock: 300,
        sku: "MEDAL-005",
        attributes: {
            color: ["Gold", "Silver"],
            size: ["Standard"],
            material: "Premium Alloy",
        },
        tags: ["designer", "premium", "elegant"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 260 },
        seo: {
            metaTitle: "Designer Medals",
            metaDescription:
                "Designer medals with elegant finishes and high-quality materials.",
            keywords: ["designer medals", "premium medals", "elegant medals"],
        },
    },

    {
        name: "Custom Logo Medals",
        slug: "custom-logo-medals",
        description:
            "Showcase your institute’s pride with Custom Logo Medals featuring high-quality engraving or embossing. Ideal for events, ceremonies, and student recognition, they represent professionalism, achievement, and honor for your brand.",
        price: 159,
        salePrice: 139,
        images: [{ url: "/assets/medals/11.webp", altText: "Custom Logo Medal" }],
        subImages: [
            { url: "/assets/medals/11.webp", altText: "Custom Logo Medal" },
            { url: "/assets/medals/12.webp", altText: "Custom Logo Medal Side" }
        ],
        stock: 450,
        sku: "MEDAL-006",
        attributes: {
            color: ["Gold", "Silver", "Bronze"],
            size: ["Standard"],
            material: "Metal",
        },
        tags: ["logo medal", "engraved", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.5, count: 210 },
        seo: {
            metaTitle: "Custom Logo Medals",
            metaDescription:
                "Custom logo medals with engraving, embossing, and premium finishes.",
            keywords: ["logo medals", "engraved medals", "branding medals"],
        },
    },
];

module.exports = medals;
