const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

const Product = require("../models/product");
const OfferProduct = require("../models/offerProduct");

async function check() {
  try {
    const mongoUri = process.env.MONGO_URI;
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB...");

    const productsCount = await Product.countDocuments({ isOfferProduct: true });
    const offerEntriesCount = await OfferProduct.countDocuments();
    
    console.log(`Products with isOfferProduct=true: ${productsCount}`);
    console.log(`Total entries in OfferProduct collection: ${offerEntriesCount}`);

    const entries = await OfferProduct.find().populate("product");
    entries.forEach(e => {
      console.log(`Entry: ${e._id}, Product: ${e.product ? e.product.name : "NULL"}`);
    });

  } catch (err) {
    console.error("Check failed:", err);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
}

check();
