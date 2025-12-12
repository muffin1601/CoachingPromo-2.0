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
const InstituteBackpacks = require('./bags/InstituteBackpacks.js');
const juteBags = require('./bags/juteBags.js');
const messengerBags = require('./bags/messengerBags.js');
const toteBags = require('./bags/toteBags.js');

//apparel
const poloTshirts = require('./apparel/poloTshirts.js');
const roundNeckTshirts = require('./apparel/roundNeckTshirts.js');
const formalShirts = require('./apparel/formalShirts.js');
const hoodies = require('./apparel/hoodies.js');
const nehruJackets = require('./apparel/nehruJackets.js');
const graduationHats = require('./apparel/graduationHats.js');
const graduationGowns = require('./apparel/graduationGowns.js');
const graduationSashes = require('./apparel/graduationSashes.js');
const graduationHoods = require('./apparel/graduationHoods.js');

const seedData = [
  // --- Category: Apparel ---
  {
    name: "Apparel",
    slug: "apparel-accessories",
    description:
      "Discover premium custom-branded apparel designed for Coaching Institutes, schools, and colleges. From personalized T-shirts and hoodies to formal uniforms and convocation gowns, our high-quality clothing enhances institutional identity, boosts team spirit, and delivers long-lasting comfort and durability.",

    image: "/assets/category/apparel.webp",

    seo: {
      metaTitle: "Custom Apparel | T-Shirts, Hoodies, Uniforms & Graduation Wear",
      metaDescription:
        "Explore custom apparel including polo t-shirts, hoodies, uniforms, jackets, and graduation gowns for Institutes. Premium quality with professional branding.",
      keywords: [
        "custom apparel",
        "t-shirts",
        "hoodies",
        "uniform jackets",
        "graduation gowns",
        "Institute uniforms",
        "custom clothing"
      ],
    },
    subcategories: [
      {
        name: "Polo T-Shirts",
        slug: "polo-t-shirts",
        description:
          "High-quality customizable polo T-shirts designed for Institutes, events, staff uniforms, and student branding. Available in multiple colors and fabrics.",
        image: "/assets/apparel/polo.webp",
        seo: {
          metaTitle: "Custom Polo T-Shirts with Logo for Coaching Institutes",
          metaDescription:
            "Custom T-shirts, Bags, Stationery & Gifts for Coaching Institutes. Fast delivery, bulk orders & logo branding. Boost your Coaching brand today!",
          keywords: ["polo", "custom t-shirt", "polo shirts", "branded apparel"],
        },
        products: poloTshirts,
      },

      {
        name: "Round Neck T-Shirts",
        slug: "round-neck-t-shirts",
        description:
          "Comfortable and versatile round neck T-shirts perfect for student activities, events, branding, and casual Institute wear.",
        image: "/assets/apparel/round.webp",
        seo: {
          metaTitle: "Custom Round Neck T-Shirts for Coaching Institutes",
          metaDescription:
            "Premium Custom Round Neck T-Shirts for Coaching Institutes. Comfortable, durable, and perfect for staff, students & promotional events. Order in bulk with fast delivery!",
          keywords: ["round neck", "t-shirt", "custom shirts", "student apparel"],
        },
        products: roundNeckTshirts,
      },

      {
        name: "Formal Shirts",
        slug: "shirts",
        description:
          "Premium formal and semi-formal shirts suitable for faculty, office wear, events, and professional Institute uniforms.",
        image: "/assets/apparel/shirt.webp",
        seo: {
          metaTitle: "Custom Formal Shirts for Coaching Staff – Logo Branding",
          metaDescription:
            "Custom Formal Shirts for Coaching Staff with Logo Branding. Stylish, comfortable, and perfect for Institute events, staff uniforms & bulk orders. Fast delivery available!",
          keywords: ["formal shirt", "teacher uniform", "office wear", "branded shirts"],
        },
        products: formalShirts,
      },

      {
        name: "Hoodies-Jackets",
        slug: "hoodies-jackets",
        description:
          "Warm, stylish, and durable hoodies and jackets ideal for winter events, student batches, and Institute merchandise branding.",
        image: "/assets/apparel/hoodie.webp",
        seo: {
          metaTitle: "Custom Jackets and Hoodies Tailored for Coaching Institutes",
          metaDescription:
            "Upgrade your Coaching Institute’s style with Custom Jackets and Hoodies. Perfect for staff, students & events. Durable, stylish, customizable with your logo, and available with fast bulk delivery!",
          keywords: ["hoodie", "jacket", "winter wear", "branded outerwear"],
        },
        products: hoodies,
      },

      {
        name: "Uniform Jackets",
        slug: "uniform-jackets",
        description:
          "Premium uniform jackets including Nehru jackets and teacher jackets designed for faculty, staff, formal events, and official Institute representation.",
        image: "/assets/nehrujackets/5.webp",
        seo: {
          metaTitle: "Teacher Jackets with Logo – Custom Apparel for Coaching",
          metaDescription:
            "Upgrade your Coaching Institute’s look with Teacher Jackets featuring your logo. Stylish, comfortable & perfect for staff, events & promotions. Available with fast bulk delivery!",
          keywords: [
            "uniform jackets",
            "nehru jacket",
            "teacher jacket",
            "faculty wear",
            "formal Institute jackets",
          ],
        },
        products: nehruJackets,
      },

      {
        name: "Graduation Hat",
        slug: "graduation-hat",
        description:
          "Traditional graduation caps (mortarboards) with tassels, perfect for convocation ceremonies and academic celebrations.",
        image: "/assets/apparel/hat.webp",
        seo: {
          metaTitle: "Custom Graduation Hats for Coaching Institutes | CoachingPromo",
          metaDescription:
            "Custom Graduation Hats for Coaching Institutes by CoachingPromo. Perfect for student ceremonies, events & celebrations. Stylish, high-quality, and available with fast bulk delivery!",
          keywords: ["graduation cap", "mortarboard", "graduation hat"],
        },
        products: graduationHats,
      },

      {
        name: "Graduation Gown",
        slug: "graduation-gown",
        description:
          "High-quality academic graduation gowns designed for convocation ceremonies, degree programs, and formal academic events.",
        image: "/assets/apparel/gown.webp",
        seo: {
          metaTitle: "Custom Graduation Gowns for Coaching Institutes | CoachingPromo",
          metaDescription:
            "Custom Graduation Gowns for Coaching Institutes by CoachingPromo. Perfect for student ceremonies, staff events & celebrations. High-quality, stylish & available with fast bulk delivery!",
          keywords: ["graduation gown", "convocation robe", "academic wear"],
        },
        products: graduationGowns,
      },

      {
        name: "Graduation Stole",
        slug: "graduation-stole",
        description:
          "Customizable honor stoles perfect for graduation ceremonies and academic recognition, with print and embroidery options.",
        image: "/assets/apparel/stole.webp",
        seo: {
          metaTitle:
            "Custom Graduation Stoles with Logo for Coaching Institutes | CoachingPromo",
          metaDescription:
            "Celebrate achievements with Custom Graduation Stoles featuring your Coaching Institute’s Logo. Perfect for students, staff & events. Stylish, high-quality & available with fast bulk delivery!",
          keywords: ["graduation stole", "honor sash", "convocation stole"],
        },
        products: graduationSashes,
      },

      {
        name: "Graduation Hood",
        slug: "graduation-hood",
        description:
          "Academic graduation hoods that represent specialization, degree level, and institutional colors for formal ceremonies.",
        image: "/assets/apparel/hood.webp",
        seo: {
          metaTitle:
            "Premium Custom Graduation Hoods for Coaching Institutes | CoachingPromo",
          metaDescription:
            "Elevate your Coaching Institute’s ceremonies with Premium Custom Graduation Hoods. Perfect for students, staff & events. Stylish, high-quality & available with fast bulk delivery!",
          keywords: ["graduation hood", "academic hood", "degree hood"],
        },
        products: graduationHoods,
      },
    ],
  },
  // --- Category: Bags ---
  {
    name: "Bags",
    slug: "bags",

    description:
      "Premium custom-branded bags, backpacks, totes, and laptop bags crafted for Coaching Institutes, schools, colleges, and corporate training programs. Durable, stylish, and ideal for student welcome kits, events, seminars, and day-to-day institutional use.",

    image: "/assets/category/bag.webp",

    seo: {
      metaTitle: "Custom Bags | Backpacks, Tote Bags, Laptop & Messenger Bags",
      metaDescription:
        "Explore durable and fully customizable backpacks, tote bags, laptop bags, and messenger bags for Institutes, events, and student welcome kits.",
      keywords: [
        "custom bags",
        "backpacks",
        "tote bags",
        "laptop bags",
        "messenger bags",
        "Institute bags",
        "promotional bags"
      ],
    },

    subcategories: [
      {
        name: "Institute Backpacks",
        slug: "Institute-backpacks",
        description:
          "High-strength, ergonomic Institute backpacks perfect for students, staff, and training programs. Ideal for daily use, branding, and welcome kits.",
        image: "/assets/backpacks/9.webp",
        seo: {
          metaTitle: "Institute Backpacks – Custom Logo Bags for Coaching",
          metaDescription:
            "Institute Backpacks – Custom Logo Bags for Coaching Institutes. Durable, stylish & perfect for students, staff & promotional events. Available in bulk with fast delivery!",
          keywords: [
            "Institute backpack",
            "school bag",
            "college bag",
            "custom backpack",
            "branded bag"
          ],
        },
        products: InstituteBackpacks,
      },
      {
        name: "Jute Bag",
        slug: "jute-bag",
        description:
          "Eco-friendly, reusable jute bags perfect for events, seminars, student kits, and sustainable gift packaging.",
        image: "/assets/jutebags/13.webp",
        seo: {
          metaTitle: "Eco-Friendly Custom Jute Bags | Coaching Institutes India",
          metaDescription:
            "Go green with Eco-Friendly Custom Jute Bags for Coaching Institutes in India. Perfect for students, staff & events. Stylish, durable & available with fast bulk delivery!",
          keywords: [
            "jute bag",
            "eco-friendly bag",
            "reusable tote",
            "sustainable gifting",
            "jute tote"
          ],
        },
        products: juteBags,
      },

      {
        name: "Messenger Bags",
        slug: "messenger-bags",
        description:
          "Practical and stylish messenger bags designed for faculty, staff, and students. Ideal for carrying laptops, documents, and daily essentials.",
        image: "/assets/messengerbags/4.webp",
        seo: {
          metaTitle: "Custom Messenger Bags for Coaching Institutes | Logo Branding",
          metaDescription:
            "Premium Custom Messenger Bags for Coaching Institutes with logo branding. Durable, stylish & perfect for faculty, staff & students. Ideal for laptops, documents & daily use. Available in bulk with fast delivery!",
          keywords: [
            "messenger bag",
            "laptop bag",
            "crossbody bag",
            "professional bag",
            "branded messenger bag"
          ],
        },
        products: messengerBags,
      },

      {
        name: "Tote Bag",
        slug: "tote-bag",
        description:
          "Lightweight and spacious canvas tote bags perfect for events, seminars, student kits, and everyday carry.",
        image: "/assets/totebags/5.webp",
        seo: {
          metaTitle: "Custom Tote Bags for Coaching Institutes | Printed Branding",
          metaDescription:
            "Spacious Custom Tote Bags for Coaching Institutes with printed branding. Perfect for events, seminars, student kits & daily use. Stylish, durable & available with fast bulk delivery!",
          keywords: [
            "tote bag",
            "canvas bag",
            "shopping bag",
            "promotional tote",
            "branded tote"
          ],
        },
        products: toteBags,
      }
    ],
  },
  // --- Category: Promotional Items ---
  {
    name: "Promotional Items",
    slug: "promotional-items",

    description:
      "Explore premium custom promotional items designed for Coaching Institutes, schools, colleges, and corporate training programs. From branded mugs and bottles to diaries, stands, clocks, and accessories, our promotional merchandise enhances visibility, strengthens branding, and creates lasting impressions at events, seminars, and giveaways.",

    image: "/assets/category/promotional-items.webp",

    seo: {
      metaTitle: "Custom Promotional Items | Mugs, Bottles, Clocks, Diaries & Gifts",
      metaDescription:
        "Discover customizable promotional items including mugs, bottles, diaries, clocks, and accessories for Institutes, events, seminars, and corporate gifting.",
      keywords: [
        "promotional items",
        "custom merchandise",
        "branded gifts",
        "corporate giveaways",
        "event merchandise",
        "Institute branding",
        "custom printed products"
      ],
    },

    subcategories: [
      {
        name: "Mug",
        slug: "mug",
        description:
          "Custom-printed ceramic and travel mugs perfect for Institute branding, corporate gifting, student kits, and event souvenirs.",
        image: "/assets/mug/mug (1).webp",
        seo: {
          metaTitle: "Custom Logo Mugs – Promotional Gifts for Coaching Brands",
          metaDescription:
            "Boost your Coaching brand with Custom Logo Mugs – perfect promotional gifts for students, staff & events. Stylish, durable & available with fast bulk delivery!",
          keywords: ["custom mug", "ceramic mug", "branding mug", "coffee mug"],
        },
        products: mugs,
      },

      {
        name: "Water Bottle",
        slug: "water-bottle",
        description:
          "Durable and reusable branded water bottles available in steel, plastic, and sipper variants—perfect for student kits, sports events, and institutional gifting.",
        image: "/assets/bottle/7 image.webp",
        seo: {
          metaTitle:
            "Custom Water Bottles for Coaching Institutes | Promotional Gifts",
          metaDescription:
            "Promote your Coaching Institute with Custom Water Bottles – ideal promotional gifts for students, staff & events. Stylish, durable & available with fast bulk delivery!",
          keywords: ["water bottle", "sipper", "steel bottle", "branded bottle"],
        },
        products: bottles,
      },

      {
        name: "Diary Set",
        slug: "diary-set",
        description:
          "Premium diary gift sets including notebooks, pens, and accessories. Ideal for corporate gifting, student kits, and event giveaways.",
        image: "/assets/diarysets/10.webp",
        seo: {
          metaTitle:
            "Custom Diary Sets for Coaching Institutes | Promotional Gifts",
          metaDescription:
            "Custom Diary Sets for Coaching Institutes – Ideal Promotional Gifts for students, staff & events. High-quality, stylish & available in bulk with fast delivery!",
          keywords: ["diary set", "executive gift", "notebook set", "corporate gift"],
        },
        products: diarySets,
      },

      {
        name: "Paper Stand",
        slug: "paper-stand",
        description:
          "Custom-branded desk and counter paper stands suitable for brochures, flyers, promotional material, and front-desk displays.",
        image: "/assets/paperstands/3.webp",
        seo: {
          metaTitle:
            "Custom Paper Stands for Coaching Institutes | Promotional Items",
          metaDescription:
            "Custom Paper Stands for Coaching Institutes – Perfect Promotional Items for staff desks, student use & events. Durable, stylish & fast bulk delivery available!",
          keywords: ["paper stand", "brochure holder", "desk stand", "display stand"],
        },
        products: paperStands,
      },

      {
        name: "Mobile Stand",
        slug: "mobile-stand",
        description:
          "Compact branded mobile stands ideal for desks, offices, and promotional giveaways—great for daily use and high visibility.",
        image: "/assets/mobilestands/10.webp",
        seo: {
          metaTitle:
            "Custom Mobile Stands for Coaching Institutes | Promotional Gifts",
          metaDescription:
            "Custom Mobile Stands for Coaching Institutes – Ideal Promotional Gifts for students, staff & events. Stylish, durable & available in bulk with fast delivery!",
          keywords: ["mobile stand", "phone holder", "desk accessory", "branding stand"],
        },
        products: mobileStands,
      },

      {
        name: "Stress Balls",
        slug: "stress-balls",
        description:
          "Custom foam stress balls in various shapes designed for events, seminars, corporate gifting, and student engagement.",
        image: "/assets/stressballs/4.webp",
        seo: {
          metaTitle:
            "Custom Stress Balls – Promotional Products for Branding & Events",
          metaDescription:
            "Custom Stress Balls – Perfect Promotional Products for Coaching Institutes, branding & events. Fun, durable & available in bulk with fast delivery!",
          keywords: ["stress ball", "foam toy", "anti-stress", "squeeze ball"],
        },
        products: stressBalls,
      },

      {
        name: "Wall Clocks",
        slug: "wall-clocks",
        description:
          "Large custom-branded wall clocks ideal for offices, classrooms, reception areas, and institutional gifting.",
        image: "/assets/wallclocks/10.webp",
        seo: {
          metaTitle: "Custom Wall Clocks – Printed with Your Logo",
          metaDescription:
            "Enhance your Coaching Institute’s space with Custom Wall Clocks printed with your Logo. Perfect for staff rooms, events & promotional gifts. Durable & available with fast bulk delivery!",
          keywords: ["wall clock", "branding clock", "office clock", "institutional gift"],
        },
        products: wallClocks,
      },

      {
        name: "Table Clock",
        slug: "table-clock",
        description:
          "Elegant custom desk clocks perfect for office tables, reception desks, corporate gifting, and Institute branding.",
        image: "/assets/clocks/7.webp",
        seo: {
          metaTitle: "Custom Table Clocks – Logo Printed Promotional Gift",
          metaDescription:
            "Promote your Coaching Institute with Custom Table Clocks – Logo Printed Promotional Gifts. Perfect for staff, students & events. Stylish, durable & available with fast bulk delivery!",
          keywords: ["table clock", "desk clock", "digital clock", "branded clock"],
        },
        products: tableClocks,
      },

      {
        name: "Mouse Pad",
        slug: "mouse-pad",
        description:
          "High-quality custom mouse pads ideal for computer labs, corporate offices, student kits, and branded promotional giveaways.",
        image: "/assets/mousepads/13.webp",
        seo: {
          metaTitle: "Custom Mouse Pads with Logo Printing | CoachingPromo",
          metaDescription:
            "Upgrade your Institute’s workspace with Custom Mouse Pads featuring Logo Printing. Ideal for students, staff & promotional events. Durable, stylish & bulk delivery!",
          keywords: ["mouse pad", "desk mat", "computer accessory", "printed pad"],
        },
        products: mousePads,
      },

      {
        name: "Photo Frame",
        slug: "photo-frame",
        description:
          "Custom-branded photo frames designed for office desks, awards, event souvenirs, and corporate gifting.",
        image: "/assets/photoframes/13.webp",
        seo: {
          metaTitle:
            "Custom Promotional Photo Frames for Institutes | CoachingPromo",
          metaDescription:
            "Showcase achievements with Custom Promotional Photo Frames for Institutes by CoachingPromo. Stylish, durable & perfect for students, staff & events. Fast bulk delivery!",
          keywords: ["photo frame", "picture frame", "desk frame", "branded gift"],
        },
        products: photoFrames,
      },

      {
        name: "Magic Cube",
        slug: "magic-cube",
        description:
          "Fully customizable magic cubes (twist puzzles) ideal for unique promotional giveaways, events, and student engagement.",
        image: "/assets/cubes/5.webp",
        seo: {
          metaTitle: "Magic Cube – Custom Promotional Products",
          metaDescription:
            "Custom Magic Cubes – Ideal Promotional Products for Coaching Institutes, staff & student events. Fun, durable & available in bulk with fast delivery!",
          keywords: ["magic cube", "twist puzzle", "rubik's cube", "promotional puzzle"],
        },
        products: cubes,
      },

      {
        name: "Planner",
        slug: "planner",
        description:
          "Branded planners and organizers available in dated and undated formats—ideal for faculty, students, office staff, and event gifting.",
        image: "/assets/planners/7.webp",
        seo: {
          metaTitle:
            "Custom Planners for Coaching Institutes | Promotional Stationery",
          metaDescription:
            "Custom Planners for Coaching Institutes – Perfect Promotional Stationery for students, staff & events. Stylish, durable & available in bulk with fast delivery!",
          keywords: ["planner", "organizer", "agenda book", "notebook"],
        },
        products: planners,
      },

      {
        name: "Trophy",
        slug: "trophy",
        description:
          "Premium metal and acrylic trophies ideal for academic achievements, sports events, competitions, and institutional recognition.",
        image: "/assets/trophies/7.webp",
        seo: {
          metaTitle:
            "Custom Trophies for Coaching Institutes | Corporate Awards India",
          metaDescription:
            "Custom Trophies for Coaching Institutes – Perfect Corporate Awards in India. Stylish, high-quality & ideal for student achievements, staff recognition & events. Fast bulk delivery available!",
          keywords: ["trophy", "award", "acrylic trophy", "engraved trophy"],
        },
        products: trophies,
      },

      {
        name: "Wooden Trophy",
        slug: "wooden-trophy",
        description:
          "Elegant wooden trophies and plaques ideal for institutional awards, recognition programs, academic ceremonies, and corporate events.",
        image: "/assets/woodentrophies/9.webp",
        seo: {
          metaTitle:
            "Premium Wooden Trophies for Coaching Institutes | Custom Awards",
          metaDescription:
            "Premium Wooden Trophies for Coaching Institutes – Custom Awards for student achievements, staff recognition & events. Durable, stylish & available in bulk with fast delivery!",
          keywords: ["wooden trophy", "wood plaque", "engraved award", "recognition trophy"],
        },
        products: woodenTrophies,
      },

      {
        name: "Badges",
        slug: "badges",
        description:
          "Custom-printed pin badges, metal badges, and lapel pins perfect for events, student identification, branding, and promotional campaigns.",
        image: "/assets/badges/9.webp",
        seo: {
          metaTitle: "Custom Promotional Badges – CoachingPromo",
          metaDescription:
            "Custom Promotional Badges by CoachingPromo – Perfect for Coaching Institutes, staff & student events. Stylish, durable & available in bulk with fast delivery!",
          keywords: ["badges", "lapel pin", "button badge", "event badge"],
        },
        products: badges,
      },

      {
        name: "Medals",
        slug: "medals",
        description:
          "High-quality custom medals designed for academic rewards, sports competitions, award ceremonies, and corporate recognition.",
        image: "/assets/medals/1.webp",
        seo: {
          metaTitle:
            "Custom Medals for Coaching Institutes | Award Medals in Bulk",
          metaDescription:
            "Custom Medals for Coaching Institutes – Perfect Award Medals in Bulk for student achievements, staff recognition & events. Stylish, high-quality & fast delivery available!",
          keywords: ["medals", "award medals", "engraved medals", "custom recognition"],
        },
        products: medals,
      },
    ],
  },
  // --- Category: Stationery ---
  {
    name: "Stationery",
    slug: "stationery",

    description:
      "Premium customized stationery including notebooks, pens, calendars, planners, files, and academic essentials. Designed for Coaching Institutes, schools, colleges, and offices—perfect for student kits, workshops, branding, events, and daily organizational use.",

    image: "/assets/category/stationery.webp",

    seo: {
      metaTitle: "Custom Stationery | Notebooks, Pens, Calendars & Office Supplies",
      metaDescription:
        "Explore custom-branded stationery like notebooks, pens, calendars, files, exam pads, and organizers for schools, colleges, offices, and events.",
      keywords: [
        "custom stationery",
        "notebooks",
        "pens",
        "files and folders",
        "calendars",
        "office supplies",
        "school stationery",
        "branded stationery"
      ],
    },

    subcategories: [
      {
        name: "Table Calendar",
        slug: "table-calendar",
        description:
          "Premium desk calendars with customizable designs—perfect for offices, Institutes, annual gifting, and year-round branding visibility.",
        image: "/assets/tablecalendars/3.webp",
        seo: {
          metaTitle:
            "Custom Table Calendars with Logo – Daily Brand Visibility",
          metaDescription:
            "Promote your Institute daily with Custom Table Calendars featuring your Logo. Perfect for students, staff & events. Stylish, durable & fast bulk delivery available!",
          keywords: ["table calendar", "desk calendar", "custom calendar", "corporate gifting"],
        },
        products: tableCalendars,
      },

      {
        name: "Wall Calendar",
        slug: "wall-calendar",
        description:
          "Large, custom-printed wall calendars ideal for classrooms, offices, and annual institutional branding.",
        image: "/assets/wallcalendars/7.webp",
        seo: {
          metaTitle:
            "Custom Wall Calendars with Logo – Promote Your Brand",
          metaDescription:
            "Promote your Coaching brand with Custom Wall Calendars featuring your Logo. Perfect for students, staff & events. Stylish, durable & available in bulk delivery!",
          keywords: ["wall calendar", "yearly calendar", "custom wall planner"],
        },
        products: wallCalendars,
      },

      {
        name: "Notebook",
        slug: "notebook",
        description:
          "High-quality stitched and spiral notebooks ideal for classrooms, offices, student kits, training sessions, and branded giveaways.",
        image: "/assets/notebooks/7.webp",
        seo: {
          metaTitle:
            "Custom Notebooks for Coaching Institutes | Promotional Stationery",
          metaDescription:
            "Boost learning with Custom Notebooks for Coaching Institutes. Perfect Promotional Stationery for students, staff & events. Durable, stylish & fast bulk delivery!",
          keywords: ["notebook", "custom diary", "journal notebook", "school notebook"],
        },
        products: notebooks,
      },

      {
        name: "Notepad",
        slug: "notepad",
        description:
          "Compact branded notepads perfect for quick notes, meetings, conferences, and event giveaways.",
        image: "/assets/notepads/10.webp",
        seo: {
          metaTitle:
            "Custom Printed Notepads for Coaching Institutes | CoachingPromo",
          metaDescription:
            "Custom Printed Notepads for Coaching Institutes by CoachingPromo. Ideal for students, staff & promotional events. Stylish, durable & fast bulk delivery available!",
          keywords: ["notepad", "memo pad", "note pad", "branded stationery"],
        },
        products: notepads,
      },

      {
        name: "Exam Pad",
        slug: "exam-pad",
        description:
          "Durable, hardboard exam pads with metal clip—ideal for exams, notes, fieldwork, and institutional branding.",
        image: "/assets/exampads/13.webp",
        seo: {
          metaTitle:
            "Custom Exam Pads for Coaching Institutes | Promotional Stationery",
          metaDescription:
            "Enhance exam prep with Custom Exam Pads for Coaching Institutes. Perfect for students, staff & events. Stylish, durable & available in bulk delivery!",
          keywords: ["exam pad", "clipboard", "writing pad", "branded exam board"],
        },
        products: examPads,
      },

      {
        name: "Binder Clips",
        slug: "binder-clips",
        description:
          "Custom-branded binder clips ideal for institutional stationery kits, office organization, promotional gifting, and branding visibility.",
        image: "/assets/binderclips/1.webp",
        seo: {
          metaTitle:
            "Custom Binder Clips with Logo Printing | CoachingPromo",
          metaDescription:
            "Organize efficiently with Custom Binder Clips featuring Logo Printing. Ideal for Coaching Institutes, staff & students. Durable, stylish & fast bulk delivery available!",
          keywords: ["binder clips", "branding clips", "office accessories", "stationery"],
        },
        products: binderClips,
      },

      {
        name: "Handbill",
        slug: "handbill",
        description:
          "Custom-printed flyers and promotional handbills ideal for marketing campaigns, event promotions, and student outreach.",
        image: "/assets/handbills/5.webp",
        seo: {
          metaTitle:
            "Custom Handbill Printing for Coaching Institutes | CoachingPromo",
          metaDescription:
            "Promote your Institute with Custom Handbill Printing by CoachingPromo. Perfect for events, branding & student engagement. Stylish, high-quality & bulk delivery!",
          keywords: ["handbill", "flyer printing", "leaflet printing", "promo flyers"],
        },
        products: handbills,
      },

      {
        name: "Lanyard and ID Card",
        slug: "lanyard-and-id-card",
        description:
          "High-quality branded lanyards and ID cards for staff, students, security teams, and event management.",
        image: "/assets/lanyards/10.webp",
        seo: {
          metaTitle:
            "Custom Lanyards & ID Cards for Coaching Institutes | Branding",
          metaDescription:
            "Brand your Institute with Custom Lanyards & ID Cards. Perfect for students, staff & events. Durable, stylish & available in bulk with fast delivery!",
          keywords: ["lanyard", "ID card", "badge holder", "identity card"],
        },
        products: lanyards,
      },

      {
        name: "Attendance Registers",
        slug: "attendance-registers",
        description:
          "Official attendance registers designed for academic institutions, offices, training centers, and administrative use.",
        image: "/assets/attendance/10.webp",
        seo: {
          metaTitle:
            "Custom Attendance Registers for Coaching Institutes | Stationery",
          metaDescription:
            "Track attendance efficiently with Custom Attendance Registers for Coaching Institutes. Ideal for staff & student use. Durable, stylish & bulk delivery available!",
          keywords: ["attendance register", "record book", "logbook"],
        },
        products: attendanceRegisters,
      },

      {
        name: "Customized Pens",
        slug: "customized-pens",
        description:
          "Premium metal pens and affordable printed plastic pens designed for institutional branding, corporate gifting, events, and daily use.",
        image: "/assets/pens/7.webp",
        seo: {
          metaTitle:
            "Custom Pencils with Logo Printing for Coaching Institutes",
          metaDescription:
            "Promote your brand with Custom Pencils featuring Logo Printing. Perfect for students, staff & Coaching events. Stylish, durable & fast bulk delivery available!",
          keywords: ["custom pens", "engraved pens", "promotional pens", "office pens"],
        },
        products: pens,
      },

      {
        name: "Branding Files & Folders",
        slug: "branding-files-and-folders",
        description:
          "Custom-branded files and folders including office files, kobra binders, and document organizers—ideal for professional presentations, student kits, and staff use.",
        image: "/assets/filesfolders/10.webp",
        seo: {
          metaTitle: "Custom Files & Folders with Logo | CoachingPromo",
          metaDescription:
            "Custom Files & Folders with Logo – Ideal for Coaching Institutes, students & staff. Stylish, durable & available in bulk with fast delivery!",
          keywords: ["custom folders", "office files", "document organizers", "kobra files"],
        },
        products: filesFolders,
      },
      {
        name: "Graduation Degree Folders",
        slug: "graduation-degree-folders",
        description:
          "Premium degree certificate folders designed to preserve and present convocation certificates safely and professionally.",
        image: "/assets/graduationfolders/6.webp",
        seo: {
          metaTitle:
            "Custom Degree Certificate Folders with Logo",
          metaDescription:
            "Custom Degree Certificate Folders with Logo – Perfect for Coaching Institutes, staff & student awards. Stylish, durable & fast bulk delivery available!",
          keywords: ["degree folder", "certificate holder", "convocation folder"],
        },
        products: graduationFolders,
      }
    ]
  }
];

module.exports = seedData;