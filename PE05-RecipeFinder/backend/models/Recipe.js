const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true }, // Ensure this is an array of strings
  prepTime: { type: Number, required: true }, // Changed to Number
  servings: { type: Number, required: true },
  image: { type: String, required: true } // Ensure image is required
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
