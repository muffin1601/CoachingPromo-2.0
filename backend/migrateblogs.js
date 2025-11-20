const mongoose = require("mongoose");
const Blog = require("./models/blog");
require("dotenv").config();   // ✅ load env file

(async () => {
  try {
    console.log("⏳ Connecting to database...");

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected!");

    // Find blogs where image is empty but media is present
    const blogs = await Blog.find({
      $and: [
        { image: { $in: [null, "", undefined] } },
        { media: { $exists: true, $ne: "" } }
      ]
    });

    console.log(`🔍 Found ${blogs.length} blogs to update`);

    for (let blog of blogs) {
      blog.image = blog.media;   // copy old media to new image field
      blog.media = undefined;    // remove old field (optional)
      await blog.save();
      console.log(`✔ Updated blog: ${blog.title}`);
    }

    console.log("🎉 Migration completed successfully!");
    process.exit(0);

  } catch (err) {
    console.error("❌ Migration error:", err);
    process.exit(1);
  }
})();
