const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request body

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Default route
app.get("/", (req, res) => {
  res.send("Recipe Finder Backend is Running...");
});

// Start server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Recipe routes
const recipeRoutes = require("./routes/recipeRoutes");

app.use("/api/recipes", recipeRoutes);
