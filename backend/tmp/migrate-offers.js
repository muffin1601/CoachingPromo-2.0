const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// Load .env from backend folder (current dir is backend)
dotenv.config({ path: path.join(__dirname, "../.env") });

const Product = require("../models/product");
const OfferProduct = require("../models/offerProduct");

async function migrate() {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      console.error("MONGO_URI not found in .env");
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB...");

    const offerProducts = await Product.find({ isOfferProduct: true });
    console.log(`Found ${offerProducts.length} products to migrate.`);

    for (const p of offerProducts) {
      await OfferProduct.findOneAndUpdate(
        { product: p._id },
        { product: p._id },
        { upsert: true, new: true }
      );
      console.log(`Migrated: ${p.name}`);
    }

    console.log("Migration completed successfully! 🚀");
  } catch (err) {
    console.error("Migration failed:", err);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
}

migrate();
