
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
          { name: "Polo T-Shirts", href: "/apparel/t-shirts/polo-t-shirts" },
          { name: "Round Neck T-Shirts", href: "/apparel/t-shirts/round-neck-t-shirts" }
        ]
      },
      {
        name: "Jackets & Hoodies",
        href: "/apparel/jackets-hoodies",
        products: [
          { name: "Hoodies-Jackets", href: "/apparel/jackets-hoodies/hoodies-jackets" },
          { name: "Nehru Jacket", href: "/apparel/jackets-hoodies/nehru-jacket" },
          { name: "Teacher Jacket", href: "/apparel/jackets-hoodies/teacher-jacket" }
        ]
      },
      {
        name: "Shirts",
        href: "/apparel/shirts",
        products: [
          { name: "Formal Shirts", href: "/apparel/shirts/formal-shirts" },
          { name: "Corporate Shirts", href: "/apparel/shirts/corporate-shirts" }
        ]
      },
      {
        name: "Graduation Wear",
        href: "/apparel/graduation-wear",
        products: [
          { name: "Graduation Hat", href: "/apparel/graduation-wear/graduation-hat" },
          { name: "Graduation Gown", href: "/apparel/graduation-wear/graduation-gown" },
          { name: "Graduation Stole", href: "/apparel/graduation-wear/graduation-stole" },
          { name: "Convocation Sash", href: "/apparel/graduation-wear/convocation-sash" },
          { name: "Graduation Hood", href: "/apparel/graduation-wear/graduation-hood" },
          { name: "Kids Graduation Gown and Cap", href: "/apparel/graduation-wear/kids-graduation-gown-and-cap" },
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
          { name: "Institute Backpack", href: "/bags/backpacks/institute-backpack" },
          { name: "Backpacks", href: "/bags/backpacks/backpacks" }
        ]
      },
      {
        name: "Shoulder & Messenger",
        href: "/bags/shoulder-and-messenger",
        products: [
          { name: "Messenger Bags", href: "/bags/shoulder-and-messenger/messenger-bags" },
          { name: "Tote Bag", href: "/bags/shoulder-and-messenger/tote-bag" }
        ]
      },
      {
        name: "Eco Bags",
        href: "/bags/eco-bags",
        products: [
          { name: "Jute Bag", href: "/bags/eco-bags/jute-bag" }
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
          { name: "Mug", href: "/promotional-items/drinkware/mug" },
          { name: "Water Bottle", href: "/promotional-items/water-bottle" }
        ]
      },
      {
        name: "Office & Desk",
        href: "/promotional-items/office-desk",
        products: [
          { name: "Diary Set", href: "/promotional-items/office-desk/diary-set" },
          { name: "Paper Stand", href: "/promotional-items/office-desk/paper-stand" },
          { name: "Mobile Stand", href: "/promotional-items/office-desk/mobile-stand" },
          { name: "Planner", href: "/promotional-items/office-desk/planner" }
        ]
      },
      {
        name: "Event Items",
        href: "/promotional-items/event-items",
        products: [
          { name: "Canopy", href: "/promotional-items/event-items/canopy" },
          { name: "Rickshaw Hood", href: "/promotional-items/event-items/rickshaw-hood" }
        ]
      },
      {
        name: "Gadgets & Toys",
        href: "/promotional-items/gadgets-toys",
        products: [
          { name: "Stress Balls", href: "/promotional-items/gadgets-toys/stress-balls" },
          { name: "Magic Cube", href: "/promotional-items/gadgets-toys/magic-cube" },
          { name: "Wristbands", href: "/promotional-items/gadgets-toys/wristbands" },
          { name: "Custom Flashcards", href: "/promotional-items/gadgets-toys/custom-flashcards" }
        ]
      },
      {
        name: "Clocks",
        href: "/promotional-items/clocks",
        products: [
          { name: "Wall Clocks", href: "/promotional-items/clocks/wall-clocks" },
          { name: "Table Clock", href: "/promotional-items/clocks/table-clock" }
        ]
      },
      {
        name: "Other",
        href: "/promotional-items/other",
        products: [
          { name: "Photo Frame", href: "/promotional-items/other/photo-frame" },
          { name: "Mouse Pad", href: "/promotional-items/other/mouse-pad" },
          { name: "Graduation Accessories", href: "/promotional-items/other/graduation-accessories" },
          { name: "Graduation Honor Cards", href: "/promotional-items/other/graduation-honor-cards" }
        ]
      },
      {
        name: "Awards",
        href: "/promotional-items/awards",
        products: [
          { name: "Trophy", href: "/promotional-items/awards/trophy" },
          { name: "Wooden Trophy", href: "/promotional-items/awards/wooden-trophy" },
          { name: "Badges", href: "/promotional-items/awards/badges" },
          { name: "Medals", href: "/promotional-items/awards/medals" },
          { name: "Other Awards", href: "/promotional-items/awards/other-awards" }
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
          { name: "Table Calendar", href: "/stationery/calendars/table-calendar" },
          { name: "Wall Calendar", href: "/stationery/calendars/wall-calendar" }
        ]
      },
      {
        name: "Writing Instruments",
        href: "/stationery/writing-instruments",
        products: [
          { name: "Pencils", href: "/stationery/writing-instruments/pencils" },
          { name: "Erasers", href: "/stationery/writing-instruments/erasers" },
          { name: "Highlighters", href: "/stationery/writing-instruments/highlighters" },
          { name: "Markers", href: "/stationery/writing-instruments/markers" },
          { name: "Metal Pen", href: "/stationery/writing-instruments/metal-pen" },
          { name: "Plastic Pen", href: "/stationery/writing-instruments/plastic-pen" }
        ]
      },
      {
        name: "Notebooks & Pads",
        href: "/stationery/notebooks-pads",
        products: [
          { name: "Notebook", href: "/stationery/notebooks-pads/notebook" },
          { name: "Notepad", href: "/stationery/notebooks-pads/notepad" },
          { name: "Exam Pad", href: "/stationery/notebooks-pads/exam-pad" }
        ]
      },
      {
        name: "Files & Folders",
        href: "/stationery/files-folders",
        products: [
          { name: "File & Folder", href: "/stationery/files-folders/file-folder" },
          { name: "Kobra File", href: "/stationery/files-folders/kobra-file" },
          { name: "Paper File Folder", href: "/stationery/files-folders/paper-file-folder" },
          { name: "Graduation Degree Folders", href: "/stationery/files-folders/graduation-degree-folders" },
        ]
      },
      {
        name: "Accessories",
        href: "/stationery/accessories",
        products: [
          { name: "Binder Clips", href: "/stationery/accessories/binder-clips" },
          { name: "Handbill", href: "/stationery/accessories/handbill" },
          { name: "Lanyard and ID Card", href: "/stationery/accessories/lanyard-id-card" },
          { name: "Attendance Registers", href: "/stationery/accessories/attendance-registers" }
        ]
      }
    ]
  }
];

export default categories;
