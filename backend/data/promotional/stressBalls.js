const stressBalls = [
    {
        name: "Custom Stress Balls",
        slug: "custom-stress-balls",
        description:
            "Enhance focus and reduce anxiety at your coaching institute with Custom Stress Balls. Personalize each stress ball with your logo, name, or colors to create a fun and branding way to promote relaxation among students and staff.",
        price: 149,
        salePrice: 129,
        images: [{ url: "/assets/stressballs/1.webp", altText: "Custom Stress Ball" }],
        subImages: [
            { url: "/assets/stressballs/1.webp", altText: "Custom Stress Ball" },
            { url: "/assets/stressballs/2.webp", altText: "Custom Stress Ball Side" },
            { url: "/assets/stressballs/3.webp", altText: "Custom Stress Ball Close-up" }
        ],
        stock: 600,
        sku: "STRESS-001",
        attributes: {
            color: ["Red", "Blue", "Yellow", "Custom Print"],
            size: ["Standard"],
            material: "Foam Rubber",
        },
        tags: ["custom", "stress ball", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.6, count: 180 },
        seo: {
            metaTitle: "Custom Stress Balls",
            metaDescription:
                "Custom stress balls with institute branding for relaxation and focus.",
            keywords: ["custom stress balls", "relaxation balls", "branding stress balls"],
        },
    },

    {
        name: "Personalized Stress Balls",
        slug: "personalized-stress-balls",
        description:
            "Make stress relief personal with Personalized Stress Balls customized with individual names, institute logos, or motivational quotes. Ideal for gifting to students, faculty, or event participants.",
        price: 179,
        salePrice: 159,
        images: [{ url: "/assets/stressballs/4.webp", altText: "Personalized Stress Ball" }],
        subImages: [
            { url: "/assets/stressballs/4.webp", altText: "Personalized Stress Ball" },
            { url: "/assets/stressballs/5.webp", altText: "Personalized Stress Ball Side" },
            { url: "/assets/stressballs/6.webp", altText: "Personalized Stress Ball Close-up" }
        ],
        stock: 450,
        sku: "STRESS-002",
        attributes: {
            color: ["Custom Print", "Blue", "Green"],
            size: ["Standard"],
            material: "Soft Foam",
        },
        tags: ["personalized", "stress ball", "custom"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 210 },
        seo: {
            metaTitle: "Personalized Stress Balls",
            metaDescription:
                "Personalized stress balls with names, quotes, and custom designs.",
            keywords: ["personalized stress balls", "custom printed balls", "name stress balls"],
        },
    },

    {
        name: "Printed Stress Balls",
        slug: "printed-stress-balls",
        description:
            "Boost your brand visibility with Printed Stress Balls featuring vibrant logos, slogans, or designs. Perfect for promotional events, workshops, and classrooms — combining relaxation with branding.",
        price: 129,
        salePrice: 109,
        images: [{ url: "/assets/stressballs/7.webp", altText: "Printed Stress Ball" }],
        subImages: [
            { url: "/assets/stressballs/7.webp", altText: "Printed Stress Ball" },
            { url: "/assets/stressballs/8.webp", altText: "Printed Stress Ball Side" },
            { url: "/assets/stressballs/9.webp", altText: "Printed Stress Ball Close-up" },
            { url: "/assets/stressballs/10.webp", altText: "Printed Stress Ball Variants" }
        ],
        stock: 800,
        sku: "STRESS-003",
        attributes: {
            color: ["Multicolor", "Custom Print"],
            size: ["Standard"],
            material: "Foam Rubber",
        },
        tags: ["printed", "stress ball", "logo print"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.4, count: 150 },
        seo: {
            metaTitle: "Printed Stress Balls",
            metaDescription:
                "Printed stress balls with bright designs, logos, and vibrant branding.",
            keywords: ["printed stress balls", "logo printed balls", "promotional stress balls"],
        },
    },
];

module.exports = stressBalls;
