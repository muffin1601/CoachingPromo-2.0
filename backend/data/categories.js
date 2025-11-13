//promotional items
const mugs = require('./promotional/mugs.js');
const bottles = require('./promotional/bottles.js');
const diarySets = require('./promotional/diarySets.js');
const paperStands = require('./promotional/paperStands.js');
const mobileStands = require('./promotional/mobilestands.js');
const wallClocks = require('./promotional/wallclocks.js');
const tableClocks = require('./promotional/tableClocks.js');
const trophies = require('./promotional/trophies.js');
const woodenTrophies = require('./promotional/woodenTrophies.js');
const cubes = require('./promotional/cubes.js');
const planners = require('./promotional/planners.js');
const badges = require('./promotional/badges.js');
const medals = require('./promotional/medals.js');
const mousePads = require('./promotional/MousePads.js');
const photoFrames = require('./promotional/photoFrames.js');
const stressBalls = require('./promotional/stressBalls.js');

//stationery
const binderClips = require('./stationery/binderClips.js');
const filesFolders = require('./stationery/filesFolders.js');
const graduationFolders = require('./stationery/graduationFolders.js');
const handbills = require('./stationery/handbills.js');
const lanyards = require('./stationery/lanyards.js');
const notebooks = require('./stationery/notebooks.js');
const notepads = require('./stationery/notepads.js');
const pens = require('./stationery/pens.js');
const attendanceRegisters = require('./stationery/attendanceRegisters.js');
const tableCalendars = require('./stationery/tableCalenders.js');
const wallCalendars = require('./stationery/wallCalenders.js');
const examPads = require('./stationery/examPads.js');

//bags
const instituteBackpacks = require('./bags/instituteBackpacks.js');
const juteBags = require('./bags/juteBags.js');
const messengerBags = require('./bags/messengerBags.js');

const seedData = [
  // --- Category: Apparel ---
  {
    name: "Apparel",
    slug: "apparel-accessories",
    description: "A wide selection of custom branding apparel for students and faculty.",
    image: "/assets/category/apparel.webp",
    seo: {
      metaTitle: "Custom Apparel | T-Shirts, Hoodies, Graduation Gear",
      metaDescription: "Find custom polo t-shirts, hoodies, graduation gowns, and more for your institution.",
      keywords: ["apparel", "t-shirts", "hoodies", "graduation", "jackets"],
    },
    subcategories: [
      {
        name: "Polo T-Shirts",
        slug: "polo-t-shirts",
        description: "Comfortable and customizable polo t-shirts.",
        image: "/assets/apparel/polo.webp",
        seo: {
          metaTitle: "Polo T-Shirts",
          metaDescription: "Custom polo t-shirts for branding and events.",
          keywords: ["polo", "t-shirt", "apparel"],
        },
        products: [
          
        ],
      },
      {
        name: "Round Neck T-Shirts",
        slug: "round-neck-t-shirts",
        description: "Versatile round neck t-shirts for casual wear.",
        image: "/assets/apparel/round.webp",
        seo: {
          metaTitle: "Round Neck T-Shirts",
          metaDescription: "Custom round neck t-shirts available in various colors.",
          keywords: ["round neck", "t-shirt", "casual"],
        },
        products: [
          {
            name: "Round Neck T-Shirts",
            slug: "round-neck-t-shirts-product",
            description: "Soft cotton round neck t-shirts, perfect for events and giveaways.",
            price: 12.99,
            salePrice: null,
            images: [{ url: "/assets/roundnecktshirt.png", altText: "Round Neck T-Shirt" }],
            stock: 200,
            sku: "APP-RND-002",
            attributes: { color: ["Red", "Grey", "Blue"], size: ["S", "M", "L", "XL", "XXL"], material: "100% Cotton" },
            tags: ["t-shirt", "round neck", "apparel"],
            isFeatured: false,
            isActive: true,
            ratings: { average: 4.2, count: 95 },
            seo: { metaTitle: "Shop Round Neck T-Shirts", metaDescription: "Durable and comfortable round neck shirts.", keywords: ["round neck shirt", "plain tee"] },
          },
        ],
      },
      {
        name: "Sweatshirts",
        slug: "sweatshirts",
        description: "Warm and cozy sweatshirts for cooler weather.",
        image: "/assets/apparel/sweatshirt.webp",
        seo: {
          metaTitle: "Custom Sweatshirts",
          metaDescription: "Fleece-lined sweatshirts for personalized university or team wear.",
          keywords: ["sweatshirt", "fleece", "winter wear"],
        },
        products: [
          {
            name: "Sweatshirts",
            slug: "sweatshirts-product",
            description: "High-quality fleece sweatshirts, great for campus winter wear.",
            price: 19.99,
            salePrice: 17.99,
            images: [{ url: "/assets/sweatshirt1.png", altText: "Custom Sweatshirt" }],
            stock: 80,
            sku: "APP-SWT-003",
            attributes: { color: ["Maroon", "Heather Grey"], size: ["M", "L", "XL"], material: "Fleece" },
            tags: ["sweatshirt", "hoodie", "winter"],
            isFeatured: true,
            isActive: true,
            ratings: { average: 4.7, count: 60 },
            seo: { metaTitle: "Buy Branding Sweatshirts", metaDescription: "Order custom printed sweatshirts.", keywords: ["fleece top", "warm jumper"] },
          },
        ],
      },
      {
        name: "Shirts",
        slug: "shirts",
        description: "Formal and casual shirts for professional settings.",
        image: "/assets/apparel/shirt.webp",
        seo: {
          metaTitle: "Formal and Casual Shirts",
          metaDescription: "A selection of formal and casual shirts for various occasions.",
          keywords: ["formal", "shirt", "office wear"],
        },
        products: [
          {
            name: "Shirts",
            slug: "shirts-product",
            description: "Crisp formal shirts for faculty and professional events.",
            price: 24.99,
            salePrice: null,
            images: [{ url: "/assets/formalshirt.png", altText: "Formal Shirt" }],
            stock: 100,
            sku: "APP-SHRT-004",
            attributes: { color: ["Light Blue", "White"], size: ["38", "40", "42"], material: "Poplin" },
            tags: ["shirt", "formal", "office"],
            isFeatured: false,
            isActive: true,
            ratings: { average: 4.6, count: 45 },
            seo: { metaTitle: "Custom Formal Shirts", metaDescription: "Professional dress shirts for institutions.", keywords: ["dress shirt", "uniform shirt"] },
          },
        ],
      },
      {
        name: "Hoodies-Jackets",
        slug: "hoodies-jackets",
        description: "Stylish and warm hoodies and jackets.",
        image: "/assets/apparel/hoodie.webp",
        seo: {
          metaTitle: "Hoodies and Jackets",
          metaDescription: "Branding hoodies and jackets for ultimate comfort and team spirit.",
          keywords: ["hoodie", "jacket", "outerwear"],
        },
        products: [
          {
            name: "Hoodies-Jackets",
            slug: "hoodies-jackets-product",
            description: "Zipper hoodies and jackets for personalized branding.",
            price: 19.99,
            salePrice: null,
            images: [{ url: "/assets/hoodie.png", altText: "Custom Hoodie" }],
            stock: 120,
            sku: "APP-HDJ-005",
            attributes: { color: ["Black", "Royal Blue"], size: ["S", "M", "L", "XL"], material: "Cotton Fleece" },
            tags: ["hoodie", "jacket", "zip up"],
            isFeatured: true,
            isActive: true,
            ratings: { average: 4.4, count: 70 },
            seo: { metaTitle: "Shop Branding Hoodies", metaDescription: "Customizable high-quality hoodies.", keywords: ["university hoodie", "team jacket"] },
          },
        ],
      },
      {
        name: "Nehru Jacket",
        slug: "nehru-jacket",
        description: "Traditional Nehru jackets for formal Indian attire.",
        image: "/assets/apparel/nehru.webp",
        seo: {
          metaTitle: "Nehru Jackets",
          metaDescription: "Elegant Nehru jackets for traditional and formal ceremonies.",
          keywords: ["Nehru jacket", "traditional", "ethnic wear"],
        },
        products: [
          {
            name: "Nehru Jacket",
            slug: "nehru-jacket-product",
            description: "Classic Nehru jacket, perfect for convocation or formal institute events.",
            price: 29.99,
            salePrice: null,
            images: [{ url: "/assets/nehrujacket.png", altText: "Nehru Jacket" }],
            stock: 50,
            sku: "APP-NEH-006",
            attributes: { color: ["Beige", "Black"], size: ["38", "40", "42", "44"], material: "Khadi" },
            tags: ["jacket", "nehru", "ethnic"],
            isFeatured: false,
            isActive: true,
            ratings: { average: 4.8, count: 30 },
            seo: { metaTitle: "Buy Nehru Jacket", metaDescription: "Formal Nehru jackets for institutions.", keywords: ["modi jacket", "bandhgala"] },
          },
        ],
      },
      {
        name: "Teacher Jacket",
        slug: "teacher-jacket",
        description: "Professional jackets tailored for teachers and faculty.",
        image: "/assets/apparel/teacherjacket.webp",
        seo: {
          metaTitle: "Teacher Jackets",
          metaDescription: "Comfortable and professional jackets for educators.",
          keywords: ["teacher", "faculty jacket", "uniform"],
        },
        products: [
          {
            name: "Teacher Jacket",
            slug: "teacher-jacket-product",
            description: "Durable and professional jackets designed for school and university staff.",
            price: 29.99,
            salePrice: null,
            images: [{ url: "/assets/teacherjacket.png", altText: "Teacher Jacket" }],
            stock: 75,
            sku: "APP-TCH-007",
            attributes: { color: ["Brown", "Navy"], size: ["M", "L", "XL"], material: "Polyester" },
            tags: ["jacket", "teacher", "uniform"],
            isFeatured: false,
            isActive: true,
            ratings: { average: 4.5, count: 25 },
            seo: { metaTitle: "Custom Teacher Jackets", metaDescription: "Professional faculty uniforms.", keywords: ["educator jacket", "staff uniform"] },
          },
        ],
      },
      {
        name: "Graduation Hat",
        slug: "graduation-hat",
        description: "Essential graduation caps (mortarboards).",
        image: "/assets/apparel/hat.webp",
        seo: {
          metaTitle: "Graduation Hats (Caps)",
          metaDescription: "Traditional square graduation caps with tassels.",
          keywords: ["graduation cap", "hat", "mortarboard"],
        },
        products: [
          {
            name: "Graduation Hat",
            slug: "graduation-hat-product",
            description: "Classic graduation hat with a tassel, available in various colors.",
            price: 9.99,
            salePrice: null,
            images: [{ url: "/assets/gradcap.png", altText: "Graduation Hat" }],
            stock: 500,
            sku: "APP-GRD-CAP",
            attributes: { color: ["Black", "Blue"], size: ["One Size"], material: "Felt/Polyester" },
            tags: ["graduation", "cap", "tassel"],
            isFeatured: true,
            isActive: true,
            ratings: { average: 4.9, count: 200 },
            seo: { metaTitle: "Buy Graduation Cap", metaDescription: "Order graduation caps in bulk.", keywords: ["mortarboard", "convocation hat"] },
          },
        ],
      },
      {
        name: "Graduation Gown",
        slug: "graduation-gown",
        description: "Academic graduation gowns for ceremonies.",
        image: "/assets/apparel/gown.webp",
        seo: {
          metaTitle: "Graduation Gowns",
          metaDescription: "High-quality academic gowns for convocation ceremonies.",
          keywords: ["graduation gown", "robe", "convocation"],
        },
        products: [
          {
            name: "Graduation Gown",
            slug: "graduation-gown-product",
            description: "Full-length graduation gown for students and faculty.",
            price: 39.99,
            salePrice: null,
            images: [{ url: "/assets/gradgown.png", altText: "Graduation Gown" }],
            stock: 300,
            sku: "APP-GRD-GOWN",
            attributes: { color: ["Black", "Navy"], size: ["S", "M", "L", "XL"], material: "Polyester" },
            tags: ["graduation", "gown", "robe"],
            isFeatured: true,
            isActive: true,
            ratings: { average: 4.8, count: 180 },
            seo: { metaTitle: "Order Academic Gowns", metaDescription: "Buy or rent graduation robes.", keywords: ["convocation gown", "academic dress"] },
          },
        ],
      },
      {
        name: "Graduation Stole",
        slug: "graduation-stole",
        description: "Customizable honor stoles for graduation.",
        image: "/assets/apparel/stole.webp",
        seo: {
          metaTitle: "Graduation Stoles",
          metaDescription: "Embroidered and printed graduation stoles to recognize achievements.",
          keywords: ["stole", "graduation sash", "honor"],
        },
        products: [
          {
            name: "Graduation Stole",
            slug: "graduation-stole-product",
            description: "Satin graduation stole for degree distinction, customizable with logo.",
            price: 14.99,
            salePrice: null,
            images: [{ url: "/assets/gradstole.png", altText: "Graduation Stole" }],
            stock: 400,
            sku: "APP-GRD-STOLE",
            attributes: { color: ["Red", "Gold", "White"], size: ["One Size"], material: "Satin" },
            tags: ["graduation", "stole", "sash"],
            isFeatured: false,
            isActive: true,
            ratings: { average: 4.7, count: 150 },
            seo: { metaTitle: "Custom Graduation Stoles", metaDescription: "Buy personalized graduation sashes.", keywords: ["convocation stole", "satin sash"] },
          },
        ],
      },
      {
        name: "Convocation Sash",
        slug: "convocation-sash",
        description: "Official sashes for convocation ceremonies.",
        image: "/assets/apparel/sash.webp",
        seo: {
          metaTitle: "Convocation Sashes",
          metaDescription: "Official printed sashes for convocation ceremonies.",
          keywords: ["convocation sash", "sash", "ceremony"],
        },
        products: [
          {
            name: "Convocation Sash",
            slug: "convocation-sash-product",
            description: "Printed sash used during university convocation ceremonies.",
            price: 12.99,
            salePrice: null,
            images: [{ url: "/assets/sash.png", altText: "Convocation Sash" }],
            stock: 350,
            sku: "APP-GRD-SASH",
            attributes: { color: ["Red", "Green", "Blue"], size: ["One Size"], material: "Polyester" },
            tags: ["graduation", "sash", "convocation"],
            isFeatured: false,
            isActive: true,
            ratings: { average: 4.6, count: 90 },
            seo: { metaTitle: "Buy Convocation Sash", metaDescription: "Order university convocation sashes.", keywords: ["printed sash", "ceremony wear"] },
          },
        ],
      },
      {
        name: "Graduation Hood",
        slug: "graduation-hood",
        description: "Academic hoods to denote degree and discipline.",
        image: "/assets/apparel/hood.webp",
        seo: {
          metaTitle: "Academic Graduation Hoods",
          metaDescription: "Colored hoods to represent degree, discipline, and institution.",
          keywords: ["graduation hood", "academic", "degree"],
        },
        products: [
          {
            name: "Graduation Hood",
            slug: "graduation-hood-product",
            description: "Traditional academic hood in various colors to signify field of study.",
            price: 19.99,
            salePrice: null,
            images: [{ url: "/assets/gradhood.png", altText: "Graduation Hood" }],
            stock: 150,
            sku: "APP-GRD-HOOD",
            attributes: { color: ["Red/White", "Gold/Black"], size: ["One Size"], material: "Velvet/Satin" },
            tags: ["graduation", "hood", "academic"],
            isFeatured: false,
            isActive: true,
            ratings: { average: 4.7, count: 50 },
            seo: { metaTitle: "Buy Graduation Hoods", metaDescription: "Official academic hoods for convocation.", keywords: ["degree hood", "convocation hood"] },
          },
        ],
      },
      {
        name: "Kids Graduation Gown & Cap",
        slug: "kids-graduation-gown-cap",
        description: "Graduation attire sized for children.",
        image: "/assets/apparel/kidsgown.webp",
        seo: {
          metaTitle: "Kids Graduation Attire",
          metaDescription: "Cute and comfortable graduation gowns and caps for pre-school and elementary students.",
          keywords: ["kids graduation", "children's robe", "junior cap"],
        },
        products: [
          {
            name: "Kids Graduation Gown & Cap",
            slug: "kids-graduation-gown-cap-product",
            description: "Miniature graduation gown and cap set for kindergarten and primary school graduations.",
            price: 24.99,
            salePrice: null,
            images: [{ url: "/assets/kidsgraddress.png", altText: "Kids Graduation Attire" }],
            stock: 180,
            sku: "APP-GRD-KID",
            attributes: { color: ["Red", "Yellow"], size: ["XS", "S", "M"], material: "Polyester" },
            tags: ["graduation", "kids", "children"],
            isFeatured: false,
            isActive: true,
            ratings: { average: 4.7, count: 70 },
            seo: { metaTitle: "Buy Kids Graduation Set", metaDescription: "Adorable graduation outfits for children.", keywords: ["kindergarten gown", "mini robe"] },
          },
        ],
      },
    
    ],
  },
  // --- Category: Bags ---
  {
    name: "Bags",
    slug: "bags",
    description: "A selection of custom branding bags for students and events.",
    image: "/assets/category/bag.webp",
    seo: {
      metaTitle: "Custom Bags | Backpacks, Totes, Messenger",
      metaDescription: "Durable and customizable backpacks, tote bags, and messenger bags for promotion or daily use.",
      keywords: ["bags", "backpacks", "tote bag", "messenger"],
    },
    subcategories: [
      {
        name: "Institute Backpacks",
        slug: "institute-backpacks",
        description: "Heavy-duty backpacks designed for institute use.",
        image: "/assets/institutebag.png",
        seo: {
          metaTitle: "Institute Backpacks",
          metaDescription: "Ergonomic and durable backpacks branding for your educational institution.",
          keywords: ["institute bag", "school bag", "heavy duty backpack"],
        },
        products: instituteBackpacks,
      },
      {
        name: "Jute Bag",
        slug: "jute-bag",
        description: "Eco-friendly, reusable jute shopping and tote bags.",
        image: "/assets/jutebag.png",
        seo: {
          metaTitle: "Custom Jute Bags",
          metaDescription: "Sustainable and customizable jute bags for events and retail.",
          keywords: ["jute bag", "eco-friendly", "reusable"],
        },
        products: juteBags,
      },
      {
        name: "Messenger Bags",
        slug: "messenger-bags",
        description: "Stylish cross-body bags for carrying essentials and laptops.",
        image: "/assets/messengerbag.png",
        seo: {
          metaTitle: "Branding Messenger Bags",
          metaDescription: "Durable and practical messenger bags with shoulder straps for professionals.",
          keywords: ["messenger bag", "laptop bag", "cross body"],
        },
        products: messengerBags,
      },
      {
        name: "Tote Bag",
        slug: "tote-bag",
        description: "Simple, large-capacity canvas tote bags.",
        image: "/assets/totebag.png",
        seo: {
          metaTitle: "Custom Tote Bags",
          metaDescription: "Lightweight and versatile canvas tote bags for promotions and daily errands.",
          keywords: ["tote bag", "canvas bag", "shopping bag"],
        },
        products: [
          {
            name: "Tote Bag",
            slug: "tote-bag-product",
            description: "Lightweight canvas tote bag, perfect for branding and conference giveaways.",
            price: 14.99,
            salePrice: 10.99,
            images: [{ url: "/assets/totebag.png", altText: "Custom Tote Bag" }],
            stock: 400,
            sku: "BAG-TOTE-004",
            attributes: { color: ["Off-White", "Black"], size: ["Standard"], material: "Canvas" },
            tags: ["bag", "tote", "canvas"],
            isFeatured: true,
            isActive: true,
            ratings: { average: 4.3, count: 110 },
            seo: { metaTitle: "Buy Bulk Tote Bags", metaDescription: "Printed canvas tote bags for events.", keywords: ["carry bag", "shoulder bag"] },
          },
        ],
      }
    ],
  },
  // --- Category: Promotional Items ---
  {
    name: "Promotional Items",
    slug: "promotional-items",
    description: "Custom branding merchandise for marketing and giveaways.",
    image: "/assets/category/promotional-items.webp",
    seo: {
      metaTitle: "Custom Promotional Items | Mugs, Bottles, Diaries",
      metaDescription: "High-quality, customizable promotional products for corporate and academic events.",
      keywords: ["promotional items", "merchandise", "giveaways", "branding"],
    },
    subcategories: [
      {
        name: "Mug",
        slug: "mug",
        description: "Custom printed ceramic mugs.",
        image: "/assets/mug.png",
        seo: {
          metaTitle: "Custom Branding Mugs",
          metaDescription: "Ceramic and travel mugs for corporate gifting and promotion.",
          keywords: ["mug", "coffee mug", "ceramic"],
        },
        products: mugs,
      },
      {
        name: "Water Bottle",
        slug: "water-bottle",
        description: "Branding water bottles in various materials.",
        image: "/assets/waterbottle.png",
        seo: {
          metaTitle: "Custom Water Bottles",
          metaDescription: "Reusable plastic and steel water bottles for sports and hydration.",
          keywords: ["water bottle", "sipper", "hydration"],
        },
        products: bottles,
      },
      {
        name: "Diary Set",
        slug: "diary-set",
        description: "Complete gift set including a diary, pen, and sometimes a keyring.",
        image: "/assets/diaryset.png",
        seo: {
          metaTitle: "Custom Diary Sets",
          metaDescription: "Executive diary and pen gift sets for corporate and student use.",
          keywords: ["diary set", "notebook", "executive gift"],
        },
        products: diarySets,
      },
      {
        name: "Paper Stand",
        slug: "paper-stand",
        description: "Desk stands for papers, brochures, and fliers.",
        image: "/assets/paperstand.png",
        seo: {
          metaTitle: "Custom Paper Stands",
          metaDescription: "Desk and counter paper stands for displaying promotional material.",
          keywords: ["paper stand", "brochure holder", "desk accessory"],
        },
        products: paperStands,
      },
      {
        name: "Mobile Stand",
        slug: "mobile-stand",
        description: "Small desk stands for holding mobile phones.",
        image: "/assets/mobilestand.png",
        seo: {
          metaTitle: "Custom Mobile Stands",
          metaDescription: "Branding desktop mobile phone stands and holders.",
          keywords: ["mobile stand", "phone holder", "desk accessory"],
        },
        products: mobileStands,
      },
      {
        name: "Stress Balls",
        slug: "stress-balls",
        description: "Squeezable foam stress relief balls.",
        image: "/assets/stressballs.png",
        seo: {
          metaTitle: "Custom Stress Balls",
          metaDescription: "Logo-printed foam stress balls in various shapes for stress relief and promotion.",
          keywords: ["stress ball", "anti-stress", "foam toy"],
        },
        products: stressBalls,
      },
      {
        name: "Wall Clocks",
        slug: "wall-clocks",
        description: "Large, branding clocks for walls.",
        image: "/assets/wallclock.png",
        seo: {
          metaTitle: "Custom Branding Wall Clocks",
          metaDescription: "Large wall clocks with custom logo printing for offices and institutions.",
          keywords: ["wall clock", "office clock", "timepiece"],
        },
        products: wallClocks,
      },
      {
        name: "Table Clock",
        slug: "table-clock",
        description: "Small, compact clocks for desks and tables.",
        image: "/assets/tableclock.png",
        seo: {
          metaTitle: "Custom Table Clocks",
          metaDescription: "Desk clocks and digital time displays for corporate gifting.",
          keywords: ["table clock", "desk clock", "digital clock"],
        },
        products: tableClocks,
      },
      {
        name: "Mouse Pad",
        slug: "mouse-pad",
        description: "Custom-printed mouse pads for computer users.",
        image: "/assets/mousepad.png",
        seo: {
          metaTitle: "Custom Branding Mouse Pads",
          metaDescription: "Personalized mouse pads with logos and images for offices and schools.",
          keywords: ["mouse pad", "computer accessory", "desk mat"],
        },
        products: mousePads,
      },
      {
        name: "Photo Frame",
        slug: "photo-frame",
        description: "Branding photo frames for desks and walls.",
        image: "/assets/photoframe.png",
        seo: {
          metaTitle: "Custom Photo Frames",
          metaDescription: "Logo-engraved or printed photo frames for memories and corporate gifts.",
          keywords: ["photo frame", "picture holder", "desk accessory"],
        },
        products: photoFrames,
      },
      {
        name: "Magic Cube",
        slug: "magic-cube",
        description: "Customizable twist puzzles (like Rubik's Cube).",
        image: "/assets/magiccube.png",
        seo: {
          metaTitle: "Custom Magic Cubes (Twist Puzzles)",
          metaDescription: "Logo-printed, customizable twist puzzles for unique promotional toys and brain teasers.",
          keywords: ["magic cube", "rubik's cube", "puzzle"],
        },
        products: cubes,
      },
      {
        name: "Planner",
        slug: "planner",
        description: "Dated and undated organizers for scheduling.",
        image: "/assets/planner.png",
        seo: {
          metaTitle: "Custom Planners and Organizers",
          metaDescription: "Branding daily, weekly, and monthly planners for organization.",
          keywords: ["planner", "organizer", "agenda"],
        },
        products: planners,
      },
      {
        name: "Trophy",
        slug: "trophy",
        description: "Classic metal or acrylic trophies for various achievements.",
        image: "/assets/trophy.png",
        seo: {
          metaTitle: "Custom Engraved Trophies",
          metaDescription: "Metal and acrylic trophies for sports, academic, and corporate awards.",
          keywords: ["trophy", "metal trophy", "acrylic award"],
        },
        products: trophies,
      },
      {
        name: "Wooden Trophy",
        slug: "wooden-trophy",
        description: "Elegant trophies crafted from wood.",
        image: "/assets/woodentrophy.png",
        seo: {
          metaTitle: "Custom Wooden Trophies and Plaques",
          metaDescription: "Engraved wooden plaques and trophies for a classic, elegant award.",
          keywords: ["wooden trophy", "plaque", "wood award"],
        },
        products: woodenTrophies,
      },
      {
        name: "Badges",
        slug: "badges",
        description: "Custom-printed or metal pin badges.",
        image: "/assets/badges.png",
        seo: {
          metaTitle: "Custom Pin Badges and Lapel Pins",
          metaDescription: "Metal, acrylic, and button badges for identification and promotional events.",
          keywords: ["badges", "lapel pin", "button badge"],
        },
        products: badges,
      },
      {
        name: "Medals",
        slug: "medals",
        description: "Custom-designed medals for awards, recognition, and events.",
        image: "/assets/medals.png",
        seo: {
          metaTitle: "Custom Medals for Awards and Recognition",
          metaDescription:
            "Premium custom medals with engraving, printing, and personalized designs for ceremonies, sports, and academic achievements.",
          keywords: ["custom medals", "award medals", "engraved medals"],
        },
        products: medals,
      }
    ],
  },
  // --- Category: Stationery ---
  {
    name: "Stationery",
    slug: "stationery",
    description: "Essential custom-branding office and school supplies.",
    image: "/assets/category/stationery.webp",
    seo: {
      metaTitle: "Custom Stationery | Notebooks, Pens, Calendars",
      metaDescription: "Branding notebooks, pens, highlighters, and files for school and office use.",
      keywords: ["stationery", "office supplies", "school supplies", "notebooks", "pens"],
    },
    subcategories: [
      {
        name: "Table Calendar",
        slug: "table-calendar",
        description: "Desk-sized calendars for daily reference.",
        image: "/assets/tablecalender.png",
        seo: {
          metaTitle: "Custom Table Calendars",
          metaDescription: "Desktop calendars with custom printing for annual corporate gifting.",
          keywords: ["table calendar", "desk calendar", "annual planner"],
        },
        products: tableCalendars,
      },
      {
        name: "Wall Calendar",
        slug: "wall-calendar",
        description: "Large, custom-printed calendars for hanging on walls.",
        image: "/assets/wallcalender.png",
        seo: {
          metaTitle: "Custom Wall Calendars",
          metaDescription: "Large, monthly wall calendars with custom images and branding.",
          keywords: ["wall calendar", "hanging calendar", "yearly planner"],
        },
        products: wallCalendars,
      },
      {
        name: "Exam Pad",
        slug: "exam-pad",
        description: "Hardboard pads for writing exams or notes.",
        image: "/assets/exampad.png",
        seo: {
          metaTitle: "Custom Exam Pads",
          metaDescription: "Hardboard exam pads with clip, fully printable with institutional branding.",
          keywords: ["exam pad", "writing pad", "clipboard"],
        },
        products: examPads,
      },
      {
        name: "Notebook",
        slug: "notebook",
        description: "Spiral and stitched notebooks for general note-taking.",
        image: "/assets/notebook.png",
        seo: {
          metaTitle: "Custom Notebooks",
          metaDescription: "Branding notebooks for school, office, and corporate gifting.",
          keywords: ["notebook", "diary", "journal"],
        },
        products: notebooks,
      },
      {
        name: "Notepad",
        slug: "notepad",
        description: "Small pads for quick notes and reminders.",
        image: "/assets/notepad.png",
        seo: {
          metaTitle: "Custom Notepads",
          metaDescription: "Small, branding notepads and memo pads for quick notes.",
          keywords: ["notepad", "memo pad", "sticky notes"],
        },
        products: notepads,
      },
      {
        name: "Customized Pens",
        slug: "customized-pens",
        description: "Premium engraved metal pens and affordable plastic pens for professional and promotional use. Perfect for institutes, offices, and gifting.",
        image: "/assets/customizedpens.png",
        seo: {
          metaTitle: "Customized Pens (Metal & Plastic)",
          metaDescription:
            "Explore premium engraved metal pens and custom-printed plastic pens for professional branding and promotional events.",
          keywords: ["custom pens", "engraved pens", "promotional pens", "metal pens", "plastic pens"],
        },
        products: pens,
      },
      {
        name: "Branding Files & Folders",
        slug: "branding-files-and-folders",
        description:
          "A complete range of custom-branding files and folders for professional document storage, binding, and organization. Perfect for institutes, offices, and events.",
        image: "/assets/filefolder1.png",
        seo: {
          metaTitle: "Customized Files and Folders for Branding",
          metaDescription:
            "Explore premium office files, kobra binders, and paper folders with your institute or company branding. Perfect for professional document organization.",
          keywords: [
            "custom files and folders",
            "office file branding",
            "document organizers",
            "kobra files",
            "paper folders",
          ],
        },
        products: filesFolders,
      },
      {
        name: "Graduation Degree Folders",
        slug: "graduation-degree-folders",
        description: "Protective folders for official degree certificates.",
        image: "/assets/graddegree.png",
        seo: {
          metaTitle: "Degree Certificate Folders",
          metaDescription: "Premium folders to safely hold and present degree certificates.",
          keywords: ["degree folder", "certificate holder", "diploma"],
        },
        products: graduationFolders,
      },
      {
        name: "Binder Clips",
        slug: "binder-clips",
        description:
          "Durable and customizable binder clips for institutes and offices. Perfect for holding documents neatly while showcasing your brand logo.",
        image: "/assets/binderclips/1.webp",
        seo: {
          metaTitle: "Custom Binder Clips for Branding",
          metaDescription:
            "Explore custom, branding, and designer binder clips ideal for institutes, offices, and events. Personalize your stationery with logos and colors.",
          keywords: [
            "custom binder clips",
            "branding stationery",
            "office accessories",
            "designer clips",
          ],
        },
        products: binderClips,
      },
      {
        name: "Handbill",
        slug: "handbill",
        description: "Custom-printed flyers and promotional handbills.",
        image: "/assets/handbill.png",
        seo: {
          metaTitle: "Custom Printed Handbills (Flyers)",
          metaDescription: "Affordable printing service for flyers, handbills, and leaflets for promotion.",
          keywords: ["handbill", "flyer", "leaflet printing"],
        },
        products: handbills,
      },
      {
        name: "Lanyard and ID Card",
        slug: "lanyard-and-id-card",
        description: "Branding lanyards and ID card holders/printing.",
        image: "/assets/lanyardid.png",
        seo: {
          metaTitle: "Custom Lanyards and ID Cards",
          metaDescription: "Branding lanyards and ID card printing for staff, students, and events.",
          keywords: ["lanyard", "ID card", "badge holder"],
        },
        products: lanyards,
      },
      {
        name: "Attendance Registers",
        slug: "attendance-registers",
        description: "Official logbooks for recording attendance.",
        image: "/assets/register.png",
        seo: {
          metaTitle: "Academic Attendance Registers",
          metaDescription: "Official logbooks for marking and recording student or staff attendance.",
          keywords: ["attendance register", "logbook", "record book"],
        },
        products: attendanceRegisters,
      },
    ],
  },
];

module.exports = seedData;