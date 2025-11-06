const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Category = require("./models/category");
const Subcategory = require("./models/subcategory");
const Product = require("./models/product");
const seedData = require("./data/categories.js");

const MONGO_URI = process.env.MONGO_URI;

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(" MongoDB connected");

    // Clear previous
    await Category.deleteMany({});
    await Subcategory.deleteMany({});
    await Product.deleteMany({});
    console.log(" Previous data cleared");

    for (const catData of seedData) {
  const category = await Category.create({
    name: catData.name,
    slug: catData.slug,
    description: catData.description,
    image: catData.image,
    seo: catData.seo,
  });

  for (const sub of catData.subcategories) {
    const subcategory = await Subcategory.create({
      name: sub.name,
      slug: sub.slug,
      description: sub.description,
      image: sub.image,
      seo: sub.seo,
      category: category._id,
    });

    //  insert products if exist
    for (const prod of sub.products ?? []) {
      await Product.create({
        ...prod,
        category: category._id,
        subcategory: subcategory._id,
      });
    }
  }
}

    console.log(" Seeding completed successfully");
  } catch (err) {
    console.error(" Seeding error:", err);
  } finally {
    await mongoose.connection.close();
    console.log(" MongoDB disconnected");
  }
};

seedDatabase();
