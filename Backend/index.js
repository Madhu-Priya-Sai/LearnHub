require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require("path");
const fs = require('fs');
const DBConnection = require('./config/connect');

const app = express();

// Connect DB
DBConnection();

// Middleware
app.use(express.json());
app.use(cors());

// Create uploads folder if not exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
app.use("/uploads", express.static(uploadsDir));

// Routes
app.use('/api/admin', require('./routers/adminRoutes'));
app.use('/api/users', require('./routers/userRoutes'));

// Port with fallback
const PORT = process.env.PORT || 5000;
console.log("PORT from env:", process.env.PORT);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
