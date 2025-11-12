const trophies = [
    {
        name: "Custom Trophies",
        slug: "custom-trophies",
        description:
            "Keep your coaching institute’s achievements celebrated in style with Custom Trophies. Personalize each trophy with your logo, name, or tagline to create a prestigious and elegant award for students, staff, and faculty.",
        price: 399,
        salePrice: 379,
        images: [{ url: "/assets/trophies/1.webp", altText: "Custom Trophy" }],
        subImages: [
            { url: "/assets/trophies/1.webp", altText: "Custom Trophy" },
            { url: "/assets/trophies/2.webp", altText: "Custom Trophy Side" }
        ],
        stock: 300,
        sku: "TROPHY-001",
        attributes: {
            color: ["Gold", "Silver", "Bronze"],
            size: ["Small", "Medium", "Large"],
            material: "Metal + Wood",
        },
        tags: ["custom", "trophy", "award"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 180 },
        seo: {
            metaTitle: "Custom Trophies",
            metaDescription:
                "Custom trophies with institute branding, personalization, and premium finishes.",
            keywords: ["custom trophies", "engraved trophies", "personalized awards"],
        },
    },

    {
        name: "Branding Trophies",
        slug: "branding-trophies",
        description:
            "Promote your institute’s identity with Branding Trophies designed for award ceremonies, events, and competitions. Durable and stylish, they are perfect for recognizing excellence while enhancing your institute’s brand visibility.",
        price: 349,
        salePrice: 329,
        images: [{ url: "/assets/trophies/3.webp", altText: "Branding Trophy" }],
        subImages: [
            { url: "/assets/trophies/3.webp", altText: "Branding Trophy" },
            { url: "/assets/trophies/4.webp", altText: "Branding Trophy Side" }
        ],
        stock: 450,
        sku: "TROPHY-002",
        attributes: {
            color: ["Gold", "Silver"],
            size: ["Medium", "Large"],
            material: "Metal",
        },
        tags: ["branding", "trophy", "events"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.5, count: 160 },
        seo: {
            metaTitle: "Branding Trophies",
            metaDescription:
                "Branding trophies for ceremonies, competitions, and institute recognition.",
            keywords: ["branding trophies", "event trophies", "award trophies"],
        },
    },

    {
        name: "Personalized Trophies",
        slug: "personalized-trophies",
        description:
            "Make every achievement memorable with Personalized Trophies crafted exclusively for your coaching institute. Add individual names, institute logos, or motivational quotes to create unique and thoughtful awards for students and faculty.",
        price: 449,
        salePrice: 429,
        images: [{ url: "/assets/trophies/5.webp", altText: "Personalized Trophy" }],
        subImages: [
            { url: "/assets/trophies/5.webp", altText: "Personalized Trophy" },
            { url: "/assets/trophies/6.webp", altText: "Personalized Trophy Side" }
        ],
        stock: 250,
        sku: "TROPHY-003",
        attributes: {
            color: ["Gold", "Silver", "Custom Print"],
            size: ["Medium", "Large"],
            material: "Premium Metal",
        },
        tags: ["personalized", "custom", "trophy"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.8, count: 220 },
        seo: {
            metaTitle: "Personalized Trophies",
            metaDescription:
                "Personalized trophies with names, quotes, logos, and custom engraving.",
            keywords: ["personalized trophies", "custom awards", "engraved trophies"],
        },
    },

    {
        name: "Printed Trophies",
        slug: "printed-trophies",
        description:
            "Boost your institute’s recognition with Printed Trophies featuring logos, inscriptions, or slogans. Ideal for awards, events, and gifting — combining elegance with professional visibility.",
        price: 299,
        salePrice: 279,
        images: [{ url: "/assets/trophies/7.webp", altText: "Printed Trophy" }],
        subImages: [
            { url: "/assets/trophies/7.webp", altText: "Printed Trophy" },
            { url: "/assets/trophies/8.webp", altText: "Printed Trophy Side" }
        ],
        stock: 500,
        sku: "TROPHY-004",
        attributes: {
            color: ["Multicolor", "Gold", "Silver"],
            size: ["Medium"],
            material: "Metal + Print Plate",
        },
        tags: ["printed", "trophy", "branding"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.3, count: 150 },
        seo: {
            metaTitle: "Printed Trophies",
            metaDescription:
                "Printed trophies with vibrant logos, inscriptions, and promotional designs.",
            keywords: ["printed trophies", "logo trophies", "custom printed awards"],
        },
    },

    {
        name: "Designer Trophies",
        slug: "designer-trophies",
        description:
            "Stay stylish and prestigious with Designer Trophies made from premium materials and modern designs. Perfect for ceremonies, staff recognition, and student awards, they reflect your institute’s class and excellence.",
        price: 599,
        salePrice: 569,
        images: [{ url: "/assets/trophies/9.webp", altText: "Designer Trophy" }],
        subImages: [
            { url: "/assets/trophies/9.webp", altText: "Designer Trophy" },
            { url: "/assets/trophies/10.webp", altText: "Designer Trophy Side" }
        ],
        stock: 200,
        sku: "TROPHY-005",
        attributes: {
            color: ["Gold", "Silver"],
            size: ["Medium", "Large"],
            material: "Metal + Crystal",
        },
        tags: ["designer", "premium", "elegant"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 190 },
        seo: {
            metaTitle: "Designer Trophies",
            metaDescription:
                "Designer trophies with modern aesthetics and premium finishes.",
            keywords: ["designer trophies", "premium awards", "elegant trophies"],
        },
    },

    {
        name: "Custom Logo Trophies",
        slug: "custom-logo-trophies",
        description:
            "Showcase your institute’s pride with Custom Logo Trophies featuring high-quality engraving or embossing. Ideal for gifting, awards, or event recognition, these trophies serve as a lasting symbol of your institute’s professionalism and achievements.",
        price: 379,
        salePrice: 359,
        images: [{ url: "/assets/trophies/11.webp", altText: "Custom Logo Trophy" }],
        subImages: [
            { url: "/assets/trophies/11.webp", altText: "Custom Logo Trophy" },
            { url: "/assets/trophies/12.webp", altText: "Custom Logo Trophy Side" }
        ],
        stock: 350,
        sku: "TROPHY-006",
        attributes: {
            color: ["Gold", "Silver", "Custom Print"],
            size: ["Medium", "Large"],
            material: "Metal",
        },
        tags: ["logo trophy", "engraved", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.5, count: 220 },
        seo: {
            metaTitle: "Custom Logo Trophies",
            metaDescription:
                "Custom logo trophies with engraving, embossing, and premium finishes.",
            keywords: ["custom logo trophies", "engraved awards", "branding trophies"],
        },
    },
];

module.exports = trophies;
