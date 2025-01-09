const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Import cors middleware
const authRoutes = require("./routes/auth.routes.js");

dotenv.config();
const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(process.env.PORT || 4000, () =>
      console.log(`Server running on PORT ${process.env.PORT || 5000}`)
    )
  )
  .catch((err) => console.error(err));
