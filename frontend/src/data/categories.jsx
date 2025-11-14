
// const toSlug = (text) =>
//   text.toLowerCase().replace(/&/g, "and").replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");

const categories = [
  {
    category: "Apparel",
    href: "/categories/apparel-accessories",
    subcategories: [
      {
        name: "T-Shirts",
        href: "/apparel/t-shirts",
        products: [
          { name: "Polo T-Shirts", href: "/apparel-accessories/polo-t-shirts" },
          { name: "Round Neck T-Shirts", href: "/apparel-accessories/round-neck-t-shirts" }
        ]
      },
      {
        name: "Jackets & Hoodies",
        href: "/apparel/jackets-hoodies",
        products: [
          { name: "Hoodies-Jackets", href: "/apparel-accessories/hoodies-jackets" },
          {
            name: "Uniform Jackets",
            href: "/apparel-accessories/uniform-jackets",
          }
        ]
      },
      {
        name: "Shirts",
        href: "/apparel/shirts",
        products: [
          {
            name: "Formal & Corporate Shirts",
            href: "/apparel-accessories/shirts"
          }
        ]
      },
      {
        name: "Graduation Wear",
        href: "/apparel/graduation-wear",
        products: [
          { name: "Graduation Hat", href: "/apparel-accessories/graduation-hat" },
          { name: "Graduation Gown", href: "/apparel-accessories/graduation-gown" },
          {
            name: "Stoles & Sashes",
            href: "/apparel-accessories/stoles-and-sashes"
          },
          { name: "Graduation Hood", href: "/apparel-accessories/graduation-hood" },
          { name: "Kids Graduation Gown and Cap", href: "/apparel-accessories/kids-graduation-gown-and-cap" },
        ]
      }
    ]
  },
  {
    category: "Bags",
    href: "/categories/bags",
    subcategories: [
      {
        name: "Backpacks",
        href: "/bags/backpacks",
        products: [
          { name: "Institute Backpacks", href: "/bags/institute-backpacks" },
          // { name: "Backpacks", href: "/bags/backpacks/backpacks" }
        ]
      },
      {
        name: "Shoulder & Messenger",
        href: "/bags/shoulder-and-messenger",
        products: [
          { name: "Messenger Bags", href: "/bags/messenger-bags" },
          { name: "Tote Bag", href: "/bags/tote-bag" }
        ]
      },
      {
        name: "Eco Bags",
        href: "/bags/eco-bags",
        products: [
          { name: "Jute Bag", href: "/bags/jute-bag" }
        ]
      }
    ]
  },


  {
    category: "Promotional Items",
    href: "/categories/promotional-items",
    subcategories: [
      {
        name: "Drinkware",
        href: "/promotional-items",
        products: [
          { name: "Mug", href: "/promotional-items/mug" },
          { name: "Water Bottle", href: "/promotional-items/water-bottle" }
        ]
      },
      {
        name: "Office & Desk",
        href: "/promotional-items/office-desk",
        products: [
          { name: "Diary Set", href: "/promotional-items/diary-set" },
          { name: "Paper Stand", href: "/promotional-items/paper-stand" },
          { name: "Mobile Stand", href: "/promotional-items/mobile-stand" },
          { name: "Planner", href: "/promotional-items/planner" }
        ]
      },
      
      {
        name: "Gadgets & Toys",
        href: "/promotional-items/gadgets-toys",
        products: [
          { name: "Stress Balls", href: "/promotional-items/stress-balls" },
          { name: "Magic Cube", href: "/promotional-items/magic-cube" }
          // { name: "Wristbands", href: "/promotional-items/wristbands" }
          // { name: "Custom Flashcards", href: "/promotional-items/custom-flashcards" }
        ]
      },
      {
        name: "Other",
        href: "/promotional-items/other",
        products: [
          { name: "Photo Frame", href: "/promotional-items/photo-frame" },
          { name: "Mouse Pad", href: "/promotional-items/mouse-pad" }
          // { name: "Graduation Accessories", href: "/promotional-items/graduation-accessories" },
          // { name: "Graduation Honor Cards", href: "/promotional-items/other/graduation-honor-cards" }
        ]
      },
      {
        name: "Clocks",
        href: "/promotional-items/clocks",
        products: [
          { name: "Wall Clocks", href: "/promotional-items/wall-clocks" },
          { name: "Table Clock", href: "/promotional-items/table-clock" }
        ]
      },
      
      {
        name: "Awards",
        href: "/promotional-items/awards",
        products: [
          { name: "Trophy", href: "/promotional-items/trophy" },
          { name: "Wooden Trophy", href: "/promotional-items/wooden-trophy" },
          { name: "Badges", href: "/promotional-items/badges" },
          { name: "Medals", href: "/promotional-items/medals" },
          // { name: "Other Awards", href: "/promotional-items/awards/other-awards" }
        ]
      }
    ]
  },


  {
    category: "Stationery",
    href: "/categories/stationery",
    subcategories: [
      {
        name: "Calendars",
        href: "/stationery/calendars",
        products: [
          { name: "Table Calendar", href: "/stationery/table-calendar" },
          { name: "Wall Calendar", href: "/stationery/wall-calendar" }
        ]
      },
      {
        name: "Files & Folders",
        href: "/stationery/files-folders",
        products: [
          { name: "Branding Files & Folders", href: "/stationery/branding-files-and-folders" },
          // { name: "Kobra File", href: "/stationery/files-folders/kobra-file" },
          // { name: "Paper File Folder", href: "/stationery/files-folders/paper-file-folder" },
          { name: "Graduation Degree Folders", href: "/stationery/graduation-degree-folders" },
        ]
      },
      {
        name: "Writing Instruments",
        href: "/stationery/writing-instruments",
        products: [
          // { name: "Pencils", href: "/stationery/writing-instruments/pencils" },
          // { name: "Erasers", href: "/stationery/writing-instruments/erasers" },
          // { name: "Highlighters", href: "/stationery/writing-instruments/highlighters" },
          // { name: "Markers", href: "/stationery/writing-instruments/markers" },
          { name: "Customized Pens", href: "/stationery/customized-pens" },
          // { name: "Plastic Pen", href: "/stationery/writing-instruments/plastic-pen" }
        ]
      },
      {
        name: "Notebooks & Pads",
        href: "/stationery/notebooks-pads",
        products: [
          { name: "Notebook", href: "/stationery/notebook" },
          { name: "Notepad", href: "/stationery/notepad" },
          { name: "Exam Pad", href: "/stationery/exam-pad" }
        ]
      },
      
      {
        name: "Accessories",
        href: "/stationery/accessories",
        products: [
          { name: "Binder Clips", href: "/stationery/binder-clips" },
          { name: "Handbill", href: "/stationery/handbill" },
          { name: "Lanyard and ID Card", href: "/stationery/lanyard-and-id-card" },
          { name: "Attendance Registers", href: "/stationery/attendance-registers" }
        ]
      }
    ]
  }
];

export default categories;
