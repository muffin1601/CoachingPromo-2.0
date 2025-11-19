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
      "Discover premium custom-branded apparel designed for coaching institutes, schools, and colleges. From personalized T-shirts and hoodies to formal uniforms and convocation gowns, our high-quality clothing enhances institutional identity, boosts team spirit, and delivers long-lasting comfort and durability.",

    image: "/assets/category/apparel.webp",

    seo: {
      metaTitle: "Custom Apparel | T-Shirts, Hoodies, Uniforms & Graduation Wear",
      metaDescription:
        "Explore custom apparel including polo t-shirts, hoodies, uniforms, jackets, and graduation gowns for institutes. Premium quality with professional branding.",
      keywords: [
        "custom apparel",
        "t-shirts",
        "hoodies",
        "uniform jackets",
        "graduation gowns",
        "institute uniforms",
        "custom clothing"
      ],
    },

    subcategories: [
      {
        name: "Polo T-Shirts",
        slug: "polo-t-shirts",
        description:
          "High-quality customizable polo T-shirts designed for institutes, events, staff uniforms, and student branding. Available in multiple colors and fabrics.",
        image: "/assets/apparel/polo.webp",
        seo: {
          metaTitle: "Custom Polo T-Shirts",
          metaDescription:
            "Premium custom polo T-shirts for institutes, events, uniforms, and branded merchandise.",
          keywords: ["polo", "custom t-shirt", "polo shirts", "branded apparel"],
        },
        products: poloTshirts,
      },
      {
        name: "Round Neck T-Shirts",
        slug: "round-neck-t-shirts",
        description:
          "Comfortable and versatile round neck T-shirts perfect for student activities, events, branding, and casual institute wear.",
        image: "/assets/apparel/round.webp",
        seo: {
          metaTitle: "Custom Round Neck T-Shirts",
          metaDescription:
            "Custom round neck T-shirts in various colors and designs, ideal for institutes and events.",
          keywords: ["round neck", "t-shirt", "custom shirts", "student apparel"],
        },
        products: roundNeckTshirts,
      },
      {
        name: "Formal Shirts",
        slug: "shirts",
        description:
          "Premium formal and semi-formal shirts suitable for faculty, office wear, events, and professional institute uniforms.",
        image: "/assets/apparel/shirt.webp",
        seo: {
          metaTitle: "Formal & Casual Shirts",
          metaDescription:
            "High-quality formal and casual shirts for faculty, office wear, and institute branding.",
          keywords: ["formal shirt", "teacher uniform", "office wear", "branded shirts"],
        },
        products: formalShirts,
      },
      {
        name: "Hoodies-Jackets",
        slug: "hoodies-jackets",
        description:
          "Warm, stylish, and durable hoodies and jackets ideal for winter events, student batches, and institute merchandise branding.",
        image: "/assets/apparel/hoodie.webp",
        seo: {
          metaTitle: "Custom Hoodies & Jackets",
          metaDescription:
            "Branded hoodies and jackets designed for institutes, student batches, and winter uniforms.",
          keywords: ["hoodie", "jacket", "winter wear", "branded outerwear"],
        },
        products: hoodies,
      },

      {
        name: "Uniform Jackets",
        slug: "uniform-jackets",
        description:
          "Premium uniform jackets including Nehru jackets and teacher jackets designed for faculty, staff, formal events, and official institute representation.",
        image: "/assets/apparel/uniformjackets.webp",
        seo: {
          metaTitle: "Uniform Jackets (Nehru & Teacher Jackets)",
          metaDescription:
            "Premium Nehru jackets and teacher jackets made for faculty, staff, and institute events.",
          keywords: [
            "uniform jackets",
            "nehru jacket",
            "teacher jacket",
            "faculty wear",
            "formal institute jackets"
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
          metaTitle: "Graduation Hats & Caps",
          metaDescription:
            "Classic mortarboard graduation caps ideal for convocation ceremonies.",
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
          metaTitle: "Graduation Gowns",
          metaDescription:
            "Premium academic gowns designed for convocation and graduation ceremonies.",
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
          metaTitle: "Graduation Stoles",
          metaDescription:
            "Custom printed and embroidered graduation stoles for academic achievements.",
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
          metaTitle: "Academic Graduation Hoods",
          metaDescription:
            "Colored academic hoods symbolizing degrees, disciplines, and institutional identity.",
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
      "Premium custom-branded bags, backpacks, totes, and laptop bags crafted for coaching institutes, schools, colleges, and corporate training programs. Durable, stylish, and ideal for student welcome kits, events, seminars, and day-to-day institutional use.",

    image: "/assets/category/bag.webp",

    seo: {
      metaTitle: "Custom Bags | Backpacks, Tote Bags, Laptop & Messenger Bags",
      metaDescription:
        "Explore durable and fully customizable backpacks, tote bags, laptop bags, and messenger bags for institutes, events, and student welcome kits.",
      keywords: [
        "custom bags",
        "backpacks",
        "tote bags",
        "laptop bags",
        "messenger bags",
        "institute bags",
        "promotional bags"
      ],
    },

    subcategories: [
      {
        name: "Institute Backpacks",
        slug: "institute-backpacks",
        description:
          "High-strength, ergonomic institute backpacks perfect for students, staff, and training programs. Ideal for daily use, branding, and welcome kits.",
        image: "/assets/institutebag.png",
        seo: {
          metaTitle: "Institute Backpacks",
          metaDescription:
            "Durable, ergonomic backpacks designed for schools, colleges, and coaching institutes with custom branding options.",
          keywords: [
            "institute backpack",
            "school bag",
            "college bag",
            "custom backpack",
            "branded bag"
          ],
        },
        products: instituteBackpacks,
      },

      {
        name: "Jute Bag",
        slug: "jute-bag",
        description:
          "Eco-friendly, reusable jute bags perfect for events, seminars, student kits, and sustainable gift packaging.",
        image: "/assets/jutebag.png",
        seo: {
          metaTitle: "Custom Jute Bags",
          metaDescription:
            "Sustainable, reusable jute bags ideal for branding, events, student kits, and eco-friendly packaging.",
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
        image: "/assets/messengerbag.png",
        seo: {
          metaTitle: "Branding Messenger Bags",
          metaDescription:
            "Premium messenger bags with custom branding, ideal for laptop use, faculty, staff, and professional events.",
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
        image: "/assets/totebag.png",
        seo: {
          metaTitle: "Custom Tote Bags",
          metaDescription:
            "Large, durable, and customizable tote bags perfect for events, branding, and student welcome kits.",
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
      "Explore premium custom promotional items designed for coaching institutes, schools, colleges, and corporate training programs. From branded mugs and bottles to diaries, stands, clocks, and accessories, our promotional merchandise enhances visibility, strengthens branding, and creates lasting impressions at events, seminars, and giveaways.",

    image: "/assets/category/promotional-items.webp",

    seo: {
      metaTitle: "Custom Promotional Items | Mugs, Bottles, Clocks, Diaries & Gifts",
      metaDescription:
        "Discover customizable promotional items including mugs, bottles, diaries, clocks, and accessories for institutes, events, seminars, and corporate gifting.",
      keywords: [
        "promotional items",
        "custom merchandise",
        "branded gifts",
        "corporate giveaways",
        "event merchandise",
        "institute branding",
        "custom printed products"
      ],
    },

    subcategories: [
      {
        name: "Mug",
        slug: "mug",
        description:
          "Custom-printed ceramic and travel mugs perfect for institute branding, corporate gifting, student kits, and event souvenirs.",
        image: "/assets/mug.png",
        seo: {
          metaTitle: "Custom Branding Mugs",
          metaDescription:
            "Personalized ceramic and travel mugs ideal for gifting, branding, and promotional events.",
          keywords: ["custom mug", "ceramic mug", "branding mug", "coffee mug"],
        },
        products: mugs,
      },

      {
        name: "Water Bottle",
        slug: "water-bottle",
        description:
          "Durable and reusable branded water bottles available in steel, plastic, and sipper variants—perfect for student kits, sports events, and institutional gifting.",
        image: "/assets/waterbottle.png",
        seo: {
          metaTitle: "Custom Water Bottles",
          metaDescription:
            "Reusable steel, plastic, and sipper water bottles customized for schools, colleges, events, and sports activities.",
          keywords: ["water bottle", "sipper", "steel bottle", "branded bottle"],
        },
        products: bottles,
      },

      {
        name: "Diary Set",
        slug: "diary-set",
        description:
          "Premium diary gift sets including notebooks, pens, and accessories. Ideal for corporate gifting, student kits, and event giveaways.",
        image: "/assets/diaryset.png",
        seo: {
          metaTitle: "Custom Diary Sets",
          metaDescription:
            "Executive diary sets with pens and accessories—perfect for gifting, events, and institutional branding.",
          keywords: ["diary set", "executive gift", "notebook set", "corporate gift"],
        },
        products: diarySets,
      },

      {
        name: "Paper Stand",
        slug: "paper-stand",
        description:
          "Custom-branded desk and counter paper stands suitable for brochures, flyers, promotional material, and front-desk displays.",
        image: "/assets/paperstand.png",
        seo: {
          metaTitle: "Custom Paper Stands",
          metaDescription:
            "Counter and desk paper stands for brochures, promotional material, and display branding.",
          keywords: ["paper stand", "brochure holder", "desk stand", "display stand"],
        },
        products: paperStands,
      },

      {
        name: "Mobile Stand",
        slug: "mobile-stand",
        description:
          "Compact branded mobile stands ideal for desks, offices, and promotional giveaways—great for daily use and high visibility.",
        image: "/assets/mobilestand.png",
        seo: {
          metaTitle: "Custom Mobile Stands",
          metaDescription:
            "Desktop mobile stands with branding for offices, events, and giveaways.",
          keywords: ["mobile stand", "phone holder", "desk accessory", "branding stand"],
        },
        products: mobileStands,
      },

      {
        name: "Stress Balls",
        slug: "stress-balls",
        description:
          "Custom foam stress balls in various shapes designed for events, seminars, corporate gifting, and student engagement.",
        image: "/assets/stressballs.png",
        seo: {
          metaTitle: "Custom Stress Balls",
          metaDescription:
            "Logo-printed foam stress balls for stress relief, promotions, and giveaways.",
          keywords: ["stress ball", "foam toy", "anti-stress", "squeeze ball"],
        },
        products: stressBalls,
      },

      {
        name: "Wall Clocks",
        slug: "wall-clocks",
        description:
          "Large custom-branded wall clocks ideal for offices, classrooms, reception areas, and institutional gifting.",
        image: "/assets/wallclock.png",
        seo: {
          metaTitle: "Custom Branding Wall Clocks",
          metaDescription:
            "Branded wall clocks with logo printing for offices, institutes, and event gifting.",
          keywords: ["wall clock", "branding clock", "office clock", "institutional gift"],
        },
        products: wallClocks,
      },

      {
        name: "Table Clock",
        slug: "table-clock",
        description:
          "Elegant custom desk clocks perfect for office tables, reception desks, corporate gifting, and institute branding.",
        image: "/assets/tableclock.png",
        seo: {
          metaTitle: "Custom Table Clocks",
          metaDescription:
            "Desk and digital table clocks personalized for corporate gifting and branding.",
          keywords: ["table clock", "desk clock", "digital clock", "branded clock"],
        },
        products: tableClocks,
      },

      {
        name: "Mouse Pad",
        slug: "mouse-pad",
        description:
          "High-quality custom mouse pads ideal for computer labs, corporate offices, student kits, and branded promotional giveaways.",
        image: "/assets/mousepad.png",
        seo: {
          metaTitle: "Custom Branding Mouse Pads",
          metaDescription:
            "Personalized mouse pads with printed logos for offices, schools, and promotional events.",
          keywords: ["mouse pad", "desk mat", "computer accessory", "printed pad"],
        },
        products: mousePads,
      },

      {
        name: "Photo Frame",
        slug: "photo-frame",
        description:
          "Custom-branded photo frames designed for office desks, awards, event souvenirs, and corporate gifting.",
        image: "/assets/photoframe.png",
        seo: {
          metaTitle: "Custom Photo Frames",
          metaDescription:
            "Engraved or printed photo frames perfect for gifts, awards, and branded displays.",
          keywords: ["photo frame", "picture frame", "desk frame", "branded gift"],
        },
        products: photoFrames,
      },

      {
        name: "Magic Cube",
        slug: "magic-cube",
        description:
          "Fully customizable magic cubes (twist puzzles) ideal for unique promotional giveaways, events, and student engagement.",
        image: "/assets/magiccube.png",
        seo: {
          metaTitle: "Custom Magic Cubes (Twist Puzzles)",
          metaDescription:
            "Printed magic cubes for branding, engagement, and unique promotional gifts.",
          keywords: ["magic cube", "twist puzzle", "rubik's cube", "promotional puzzle"],
        },
        products: cubes,
      },

      {
        name: "Planner",
        slug: "planner",
        description:
          "Branded planners and organizers available in dated and undated formats—ideal for faculty, students, office staff, and event gifting.",
        image: "/assets/planner.png",
        seo: {
          metaTitle: "Custom Planners and Organizers",
          metaDescription:
            "Branded daily, weekly, and yearly planners for institutes, offices, and corporate gifts.",
          keywords: ["planner", "organizer", "agenda book", "notebook"],
        },
        products: planners,
      },

      {
        name: "Trophy",
        slug: "trophy",
        description:
          "Premium metal and acrylic trophies ideal for academic achievements, sports events, competitions, and institutional recognition.",
        image: "/assets/trophy.png",
        seo: {
          metaTitle: "Custom Engraved Trophies",
          metaDescription:
            "Metal and acrylic trophies customized for awards, competitions, sports, and academic ceremonies.",
          keywords: ["trophy", "award", "acrylic trophy", "engraved trophy"],
        },
        products: trophies,
      },

      {
        name: "Wooden Trophy",
        slug: "wooden-trophy",
        description:
          "Elegant wooden trophies and plaques ideal for institutional awards, recognition programs, academic ceremonies, and corporate events.",
        image: "/assets/woodentrophy.png",
        seo: {
          metaTitle: "Custom Wooden Trophies and Plaques",
          metaDescription:
            "Engraved wooden trophies and plaques designed for awards, ceremonies, and corporate gifting.",
          keywords: ["wooden trophy", "wood plaque", "engraved award", "recognition trophy"],
        },
        products: woodenTrophies,
      },

      {
        name: "Badges",
        slug: "badges",
        description:
          "Custom-printed pin badges, metal badges, and lapel pins perfect for events, student identification, branding, and promotional campaigns.",
        image: "/assets/badges.png",
        seo: {
          metaTitle: "Custom Pin Badges & Lapel Pins",
          metaDescription:
            "Printed and metal badges for student ID, events, campaigns, and branded promotions.",
          keywords: ["badges", "lapel pin", "button badge", "event badge"],
        },
        products: badges,
      },

      {
        name: "Medals",
        slug: "medals",
        description:
          "High-quality custom medals designed for academic rewards, sports competitions, award ceremonies, and corporate recognition.",
        image: "/assets/medals.png",
        seo: {
          metaTitle: "Custom Medals for Awards & Recognition",
          metaDescription:
            "Engraved and printed custom medals perfect for sports events, academic achievements, and institutional ceremonies.",
          keywords: ["medals", "award medals", "engraved medals", "custom recognition"],
        },
        products: medals,
      }
    ],
  },
  // --- Category: Stationery ---
  {
    name: "Stationery",
    slug: "stationery",

    description:
      "Premium customized stationery including notebooks, pens, calendars, planners, files, and academic essentials. Designed for coaching institutes, schools, colleges, and offices—perfect for student kits, workshops, branding, events, and daily organizational use.",

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
          "Premium desk calendars with customizable designs—perfect for offices, institutes, annual gifting, and year-round branding visibility.",
        image: "/assets/tablecalender.png",
        seo: {
          metaTitle: "Custom Table Calendars",
          metaDescription:
            "Branded desk calendars ideal for corporate gifting, annual use, and institutional branding.",
          keywords: ["table calendar", "desk calendar", "custom calendar", "corporate gifting"],
        },
        products: tableCalendars,
      },

      {
        name: "Wall Calendar",
        slug: "wall-calendar",
        description:
          "Large, custom-printed wall calendars ideal for classrooms, offices, and annual institutional branding.",
        image: "/assets/wallcalender.png",
        seo: {
          metaTitle: "Custom Wall Calendars",
          metaDescription:
            "Monthly wall calendars with personalized images and branding for offices, schools, and institutions.",
          keywords: ["wall calendar", "yearly calendar", "custom wall planner"],
        },
        products: wallCalendars,
      },

      {
        name: "Exam Pad",
        slug: "exam-pad",
        description:
          "Durable, hardboard exam pads with metal clip—ideal for exams, notes, fieldwork, and institutional branding.",
        image: "/assets/exampad.png",
        seo: {
          metaTitle: "Custom Exam Pads",
          metaDescription:
            "Sturdy writing exam pads with full-print branding for institutes, events, and office use.",
          keywords: ["exam pad", "clipboard", "writing pad", "branded exam board"],
        },
        products: examPads,
      },

      {
        name: "Notebook",
        slug: "notebook",
        description:
          "High-quality stitched and spiral notebooks ideal for classrooms, offices, student kits, training sessions, and branded giveaways.",
        image: "/assets/notebook.png",
        seo: {
          metaTitle: "Custom Notebooks",
          metaDescription:
            "Branded notebooks for schools, offices, events, training sessions, and corporate gifting.",
          keywords: ["notebook", "custom diary", "journal notebook", "school notebook"],
        },
        products: notebooks,
      },

      {
        name: "Notepad",
        slug: "notepad",
        description:
          "Compact branded notepads perfect for quick notes, meetings, conferences, and event giveaways.",
        image: "/assets/notepad.png",
        seo: {
          metaTitle: "Custom Notepads",
          metaDescription:
            "Logo-printed notepads and memo pads for offices, schools, events, and workshops.",
          keywords: ["notepad", "memo pad", "note pad", "branded stationery"],
        },
        products: notepads,
      },

      {
        name: "Customized Pens",
        slug: "customized-pens",
        description:
          "Premium metal pens and affordable printed plastic pens designed for institutional branding, corporate gifting, events, and daily use.",
        image: "/assets/customizedpens.png",
        seo: {
          metaTitle: "Customized Pens (Metal & Plastic)",
          metaDescription:
            "Engraved metal pens and custom plastic pens for branding, office use, and promotional giveaways.",
          keywords: ["custom pens", "engraved pens", "promotional pens", "office pens"],
        },
        products: pens,
      },

      {
        name: "Branding Files & Folders",
        slug: "branding-files-and-folders",
        description:
          "Custom-branded files and folders including office files, kobra binders, and document organizers—ideal for professional presentations, student kits, and staff use.",
        image: "/assets/filefolder1.png",
        seo: {
          metaTitle: "Customized Files & Folders for Branding",
          metaDescription:
            "Office files, binders, and folders with institutional branding for corporate and academic use.",
          keywords: ["custom folders", "office files", "document organizers", "kobra files"],
        },
        products: filesFolders,
      },

      {
        name: "Graduation Degree Folders",
        slug: "graduation-degree-folders",
        description:
          "Premium degree certificate folders designed to preserve and present convocation certificates safely and professionally.",
        image: "/assets/graddegree.png",
        seo: {
          metaTitle: "Degree Certificate Folders",
          metaDescription:
            "Durable, high-quality certificate folders ideal for degree presentations and academic documentation.",
          keywords: ["degree folder", "certificate holder", "convocation folder"],
        },
        products: graduationFolders,
      },

      {
        name: "Binder Clips",
        slug: "binder-clips",
        description:
          "Custom-branded binder clips ideal for institutional stationery kits, office organization, promotional gifting, and branding visibility.",
        image: "/assets/binderclips/1.webp",
        seo: {
          metaTitle: "Custom Binder Clips for Branding",
          metaDescription:
            "Personalized binder clips with logos and colors—perfect for offices, institutes, and promotional stationery.",
          keywords: ["binder clips", "branding clips", "office accessories", "stationery"],
        },
        products: binderClips,
      },

      {
        name: "Handbill",
        slug: "handbill",
        description:
          "Custom-printed flyers and promotional handbills ideal for marketing campaigns, event promotions, and student outreach.",
        image: "/assets/handbill.png",
        seo: {
          metaTitle: "Custom Printed Handbills (Flyers)",
          metaDescription:
            "Affordable custom flyers, handbills, and leaflets for marketing and promotional events.",
          keywords: ["handbill", "flyer printing", "leaflet printing", "promo flyers"],
        },
        products: handbills,
      },

      {
        name: "Lanyard and ID Card",
        slug: "lanyard-and-id-card",
        description:
          "High-quality branded lanyards and ID cards for staff, students, security teams, and event management.",
        image: "/assets/lanyardid.png",
        seo: {
          metaTitle: "Custom Lanyards & ID Cards",
          metaDescription:
            "Branding lanyards and ID cards for schools, colleges, institutes, staff, and events.",
          keywords: ["lanyard", "ID card", "badge holder", "identity card"],
        },
        products: lanyards,
      },

      {
        name: "Attendance Registers",
        slug: "attendance-registers",
        description:
          "Official attendance registers designed for academic institutions, offices, training centers, and administrative use.",
        image: "/assets/register.png",
        seo: {
          metaTitle: "Academic Attendance Registers",
          metaDescription:
            "Official attendance registers for student, staff, and classroom record-keeping.",
          keywords: ["attendance register", "record book", "logbook"],
        },
        products: attendanceRegisters,
      },
    ],
  }
];

module.exports = seedData;