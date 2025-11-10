const diarySets = [
    {
        name: "Custom Diary Sets",
        slug: "custom-diary-sets",
        description:
            "Keep your coaching institute’s organization and branding professional with Custom Diary Sets. Personalize each diary with your logo, name, or colors to create a cohesive and elegant look for students, faculty, and staff.",
        price: 349,
        salePrice: 329,
        images: [{ url: "/assets/diarysets/1.webp", altText: "Custom Diary Set" }],
        subImages: [
            { url: "/assets/diarysets/1.webp", altText: "Custom Diary Set" },
            { url: "/assets/diarysets/2.webp", altText: "Custom Diary Set Side" },
            { url: "/assets/diarysets/3.webp", altText: "Custom Diary Set Open" }
        ],
        stock: 500,
        sku: "DIARY-001",
        attributes: {
            color: ["Black", "Blue", "Brown"],
            size: ["A5", "A6"],
            material: "PU Leather",
        },
        tags: ["custom", "diary", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.6, count: 220 },
        seo: {
            metaTitle: "Custom Diary Sets",
            metaDescription:
                "Custom diary sets with institute branding, personalization, and elegant designs.",
            keywords: ["custom diary sets", "personalized diaries", "coaching diaries"],
        },
    },

    {
        name: "Branded Diary Sets",
        slug: "branded-diary-sets",
        description:
            "Promote your institute’s identity with Branded Diary Sets designed for daily use and events. Durable and stylish, they are perfect for classrooms, workshops, seminars, and gifting while enhancing brand recognition.",
        price: 299,
        salePrice: 279,
        images: [{ url: "/assets/diarysets/4.webp", altText: "Branded Diary Set" }],
        subImages: [
            { url: "/assets/diarysets/4.webp", altText: "Branded Diary Set" },
            { url: "/assets/diarysets/5.webp", altText: "Branded Diary Set Side" },
            { url: "/assets/diarysets/6.webp", altText: "Branded Diary Set Open" }
        ],
        stock: 700,
        sku: "DIARY-002",
        attributes: {
            color: ["Black", "Red", "Blue"],
            size: ["A5", "A6"],
            material: "Leatherette",
        },
        tags: ["branded", "diary", "events"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.4, count: 180 },
        seo: {
            metaTitle: "Branded Diary Sets",
            metaDescription: "Professional branded diary sets for events and institute use.",
            keywords: ["branded diaries", "event diaries", "professional diaries"],
        },
    },

    {
        name: "Personalized Diary Sets",
        slug: "personalized-diary-sets",
        description:
            "Make every plan and note memorable with Personalized Diary Sets crafted exclusively for your coaching institute. Add individual names, institute logos, or motivational quotes to create unique and thoughtful diaries for students and staff.",
        price: 399,
        salePrice: 379,
        images: [{ url: "/assets/diarysets/7.webp", altText: "Personalized Diary Set" }],
        subImages: [
            { url: "/assets/diarysets/7.webp", altText: "Personalized Diary Set" },
            { url: "/assets/diarysets/8.webp", altText: "Personalized Diary Set Side" },
            { url: "/assets/diarysets/9.webp", altText: "Personalized Diary Set Open" }
        ],
        stock: 350,
        sku: "DIARY-003",
        attributes: {
            color: ["Brown", "Blue", "Black"],
            size: ["A5"],
            material: "Premium Leather",
        },
        tags: ["personalized", "custom", "diary"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.8, count: 320 },
        seo: {
            metaTitle: "Personalized Diary Sets",
            metaDescription:
                "Personalized diary sets with names, logos, and motivational quotes.",
            keywords: ["personalized diaries", "custom diary sets", "name diaries"],
        },
    },

    {
        name: "Printed Diary Sets",
        slug: "printed-diary-sets",
        description:
            "Boost your institute’s branding with Printed Diary Sets featuring vibrant covers, logos, or slogans. Ideal for classrooms, offices, events, and gifting — combining functionality with professional visibility.",
        price: 249,
        salePrice: 229,
        images: [{ url: "/assets/diarysets/10.webp", altText: "Printed Diary Set" }],
        subImages: [
            { url: "/assets/diarysets/10.webp", altText: "Printed Diary Set" },
            { url: "/assets/diarysets/11.webp", altText: "Printed Diary Set Side" },
            { url: "/assets/diarysets/12.webp", altText: "Printed Diary Set Open" }
        ],
        stock: 1000,
        sku: "DIARY-004",
        attributes: {
            color: ["Multicolor"],
            size: ["A5"],
            material: "Hardcover + Paper",
        },
        tags: ["printed", "diary", "logo print"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.3, count: 150 },
        seo: {
            metaTitle: "Printed Diary Sets",
            metaDescription:
                "Printed diary sets with bright designs, slogans, and branding.",
            keywords: ["printed diaries", "logo diary sets", "custom printed diaries"],
        },
    },

    {
        name: "Designer Diary Sets",
        slug: "designer-diary-sets",
        description:
            "Stay stylish and professional with Designer Diary Sets made from premium-quality materials and modern designs. Perfect for students, faculty, and staff, they reflect your institute’s elegance and class.",
        price: 449,
        salePrice: 429,
        images: [{ url: "/assets/diarysets/13.webp", altText: "Designer Diary Set" }],
        subImages: [
            { url: "/assets/diarysets/13.webp", altText: "Designer Diary Set" },
            { url: "/assets/diarysets/14.webp", altText: "Designer Diary Set Side" },
            { url: "/assets/diarysets/15.webp", altText: "Designer Diary Set Open" }
        ],
        stock: 250,
        sku: "DIARY-005",
        attributes: {
            color: ["Black", "Gold", "Maroon"],
            size: ["A5"],
            material: "Premium PU Leather",
        },
        tags: ["designer", "premium", "elegant"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 280 },
        seo: {
            metaTitle: "Designer Diary Sets",
            metaDescription:
                "Premium designer diary sets with elegant finishes and high-end materials.",
            keywords: ["designer diaries", "premium diary sets", "elegant diaries"],
        },
    },

    {
        name: "Custom Logo Diary Sets",
        slug: "custom-logo-diary-sets",
        description:
            "Showcase your institute’s pride with Custom Logo Diary Sets featuring high-quality printing, embossing, or foil stamping. Ideal for gifting, events, or staff recognition, these diaries serve as a lasting reminder of your institute’s professionalism and identity.",
        price: 349,
        salePrice: 329,
        images: [{ url: "/assets/diarysets/16.webp", altText: "Custom Logo Diary Set" }],
        subImages: [
            { url: "/assets/diarysets/16.webp", altText: "Custom Logo Diary Set" },
            { url: "/assets/diarysets/17.webp", altText: "Custom Logo Diary Set Side" },
            { url: "/assets/diarysets/18.webp", altText: "Custom Logo Diary Set Open" }
        ],
        stock: 450,
        sku: "DIARY-006",
        attributes: {
            color: ["Black", "Brown", "Custom Print"],
            size: ["A5", "A6"],
            material: "PU Leather + Hard Paper",
        },
        tags: ["logo diary", "custom logo", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.5, count: 210 },
        seo: {
            metaTitle: "Custom Logo Diary Sets",
            metaDescription:
                "Custom logo diary sets with premium printing, embossing, and foil stamping.",
            keywords: ["logo diary sets", "custom logo diaries", "branding diaries"],
        },
    },
];

module.exports = diarySets;
