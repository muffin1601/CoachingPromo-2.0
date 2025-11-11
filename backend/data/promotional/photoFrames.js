const photoFrames = [
    {
        name: "Custom Photo Frames",
        slug: "custom-photo-frames",
        description:
            "Preserve your coaching institute’s proud moments in style with Custom Photo Frames. Personalize each frame with your logo, name, or tagline to create elegant keepsakes for students, staff, and special events.",
        price: 349,
        salePrice: 329,
        images: [{ url: "/assets/photoframes/1.webp", altText: "Custom Photo Frame" }],
        subImages: [
            { url: "/assets/photoframes/1.webp", altText: "Custom Photo Frame" },
            { url: "/assets/photoframes/2.webp", altText: "Custom Photo Frame Side" },
            { url: "/assets/photoframes/3.webp", altText: "Custom Photo Frame Back" }
        ],
        stock: 450,
        sku: "FRAME-001",
        attributes: {
            color: ["Black", "Brown", "Custom Print"],
            size: ["4x6", "5x7", "8x12"],
            material: "Wood + Glass",
        },
        tags: ["custom", "photo frame", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.6, count: 200 },
        seo: {
            metaTitle: "Custom Photo Frames",
            metaDescription:
                "Custom photo frames with institute branding and elegant finishing.",
            keywords: ["custom photo frames", "personalized frames", "brand frames"],
        },
    },

    {
        name: "Branded Photo Frames",
        slug: "branded-photo-frames",
        description:
            "Enhance your institute’s identity with Branded Photo Frames designed for offices, classrooms, and award ceremonies. Durable and stylish, these frames beautifully display achievements while promoting your brand.",
        price: 299,
        salePrice: 279,
        images: [{ url: "/assets/photoframes/4.webp", altText: "Branded Photo Frame" }],
        subImages: [
            { url: "/assets/photoframes/4.webp", altText: "Branded Photo Frame" },
            { url: "/assets/photoframes/5.webp", altText: "Branded Photo Frame Side" },
            { url: "/assets/photoframes/6.webp", altText: "Branded Photo Frame Back" }
        ],
        stock: 550,
        sku: "FRAME-002",
        attributes: {
            color: ["Black", "Gold", "Silver"],
            size: ["5x7", "8x12"],
            material: "Plastic + Glass",
        },
        tags: ["branded", "photo frame", "events"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.4, count: 180 },
        seo: {
            metaTitle: "Branded Photo Frames",
            metaDescription:
                "Branded photo frames for offices, classrooms, and award ceremonies.",
            keywords: ["branded frames", "office photo frames", "decor frames"],
        },
    },

    {
        name: "Personalized Photo Frames",
        slug: "personalized-photo-frames",
        description:
            "Make every memory meaningful with Personalized Photo Frames crafted exclusively for your coaching institute. Add individual names, institute logos, or inspiring quotes to create thoughtful and memorable gifts.",
        price: 399,
        salePrice: 379,
        images: [{ url: "/assets/photoframes/7.webp", altText: "Personalized Photo Frame" }],
        subImages: [
            { url: "/assets/photoframes/7.webp", altText: "Personalized Photo Frame" },
            { url: "/assets/photoframes/8.webp", altText: "Personalized Photo Frame Side" },
            { url: "/assets/photoframes/9.webp", altText: "Personalized Photo Frame Back" }
        ],
        stock: 350,
        sku: "FRAME-003",
        attributes: {
            color: ["Custom Print", "Brown", "Black"],
            size: ["4x6", "5x7"],
            material: "Premium Wood",
        },
        tags: ["personalized", "custom", "photo frame"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.8, count: 230 },
        seo: {
            metaTitle: "Personalized Photo Frames",
            metaDescription:
                "Personalized photo frames with custom names, logos, and inspirational quotes.",
            keywords: ["personalized frames", "custom photo frames", "gift frames"],
        },
    },

    {
        name: "Printed Photo Frames",
        slug: "printed-photo-frames",
        description:
            "Boost your institute’s visibility with Printed Photo Frames featuring vibrant logos, taglines, or event details. Ideal for awards, recognition ceremonies, and gifting — combining visual appeal with professional branding.",
        price: 249,
        salePrice: 229,
        images: [{ url: "/assets/photoframes/10.webp", altText: "Printed Photo Frame" }],
        subImages: [
            { url: "/assets/photoframes/10.webp", altText: "Printed Photo Frame" },
            { url: "/assets/photoframes/11.webp", altText: "Printed Photo Frame Side" },
            { url: "/assets/photoframes/12.webp", altText: "Printed Photo Frame Back" }
        ],
        stock: 700,
        sku: "FRAME-004",
        attributes: {
            color: ["Multicolor"],
            size: ["5x7", "8x12"],
            material: "Printed MDF + Glass",
        },
        tags: ["printed", "photo frame", "branding"],
        isFeatured: false,
        isActive: true,
        ratings: { average: 4.3, count: 160 },
        seo: {
            metaTitle: "Printed Photo Frames",
            metaDescription:
                "Printed photo frames with vibrant logos, branding elements, and colorful designs.",
            keywords: ["printed frames", "logo frames", "printed photo frames"],
        },
    },

    {
        name: "Designer Photo Frames",
        slug: "designer-photo-frames",
        description:
            "Add a touch of sophistication with Designer Photo Frames made from premium materials and contemporary designs. Perfect for office décor, events, and student recognition, they reflect your institute’s class and elegance.",
        price: 449,
        salePrice: 429,
        images: [{ url: "/assets/photoframes/13.webp", altText: "Designer Photo Frame" }],
        subImages: [
            { url: "/assets/photoframes/13.webp", altText: "Designer Photo Frame" },
            { url: "/assets/photoframes/14.webp", altText: "Designer Photo Frame Side" },
            { url: "/assets/photoframes/15.webp", altText: "Designer Photo Frame Back" }
        ],
        stock: 250,
        sku: "FRAME-005",
        attributes: {
            color: ["Black", "Gold", "Rose Gold"],
            size: ["5x7", "8x12"],
            material: "Premium Metal + Glass",
        },
        tags: ["designer", "premium", "elegant"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.7, count: 240 },
        seo: {
            metaTitle: "Designer Photo Frames",
            metaDescription:
                "Premium designer photo frames with elegant finishes and premium materials.",
            keywords: ["designer photo frames", "premium frames", "luxury photo frames"],
        },
    },

    {
        name: "Custom Logo Photo Frames",
        slug: "custom-logo-photo-frames",
        description:
            "Showcase your institute’s pride with Custom Logo Photo Frames featuring high-quality printing or engraving. Ideal for gifting, awards, or staff recognition, these frames serve as lasting reminders of your institute’s professionalism and success.",
        price: 329,
        salePrice: 309,
        images: [{ url: "/assets/photoframes/16.webp", altText: "Custom Logo Photo Frame" }],
        subImages: [
            { url: "/assets/photoframes/16.webp", altText: "Custom Logo Photo Frame" },
            { url: "/assets/photoframes/17.webp", altText: "Custom Logo Photo Frame Side" },
            { url: "/assets/photoframes/18.webp", altText: "Custom Logo Photo Frame Back" },
            { url: "/assets/photoframes/19.webp", altText: "Custom Logo Photo Frame Variants" }
        ],
        stock: 400,
        sku: "FRAME-006",
        attributes: {
            color: ["Black", "Brown", "Custom Print"],
            size: ["5x7", "8x12"],
            material: "Wood + Metal Plate",
        },
        tags: ["logo frame", "custom logo", "branding"],
        isFeatured: true,
        isActive: true,
        ratings: { average: 4.5, count: 210 },
        seo: {
            metaTitle: "Custom Logo Photo Frames",
            metaDescription:
                "Custom logo photo frames with engraving, printing, and premium finishing.",
            keywords: ["custom logo photo frames", "engraved frames", "branding frames"],
        },
    },
];

module.exports = photoFrames;
