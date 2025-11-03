const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Subproduct = require("./models/product.js");
const seedData = require("./data/categories.js");

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/your_database_name";

const seedDatabase = async () => {
  console.log("Starting database seeding process...");

  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");

    console.log("Deleting existing data...");
    await Subproduct.deleteMany({});
    console.log("Old data deleted.");

    console.log("Inserting new seed data...");
    const result = await Subproduct.insertMany(seedData);
    console.log(`Successfully inserted ${result.length} Category documents.`);

    if (result.length > 0) {
      console.log("Sample Data Check (Apparel Subcategories Count):");
      const apparelCategory = result.find(c => c.name === 'Apparel');
      if (apparelCategory) {
        console.log(`Category: ${apparelCategory.name}`);
        console.log(`Subcategories (Products) Found: ${apparelCategory.subcategories.length}`);
        console.log(`Sample Subcategory Name: ${apparelCategory.subcategories[0].name}`);
      }
    }

  } catch (error) {
    console.error("ERROR during data seeding:", error.message);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
    process.exit(0);
  }
};

seedDatabase();
