const mongoose = require("mongoose");

const connectionOfDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'video-course-application', // optional, can also be inside the URI
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ Connected to MongoDB");
    })
    .catch((err) => {
      console.error("❌ MongoDB connection failed:", err);
      process.exit(1); // Exit cleanly
    });
};

module.exports = connectionOfDb;
