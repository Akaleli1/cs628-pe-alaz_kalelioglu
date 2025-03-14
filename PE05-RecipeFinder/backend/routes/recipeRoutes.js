const express = require("express");
const Recipe = require("../models/Recipe");

const router = express.Router();

// Get all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get a single recipe by ID
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add a new recipe
router.post("/", async (req, res) => {
  try {
    const { name, ingredients, instructions, prepTime, servings, image } = req.body;
    const newRecipe = new Recipe({ name, ingredients, instructions, prepTime, servings, image });
    await newRecipe.save();
    res.json(newRecipe, 201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Update a recipe
router.put("/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Delete a recipe
router.delete("/:id", async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
