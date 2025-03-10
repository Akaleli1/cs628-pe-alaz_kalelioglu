const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const recipeRoutes = require("../routes/recipeRoutes");
const Recipe = require('../models/Recipe');
require("dotenv").config(); // Load environment variables

const app = express();
app.use(express.json());
app.use("/api/recipes", recipeRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Recipe Routes", () => {
  let recipeId;

  beforeEach(async () => {
    const recipe = new Recipe({ name: 'Test Recipe', ingredients: ['ingredient1'], instructions: 'Test instructions', prepTime: 10, servings: 2, image: 'test.jpg' });
    const savedRecipe = await recipe.save();
    recipeId = savedRecipe._id;
  });

  afterEach(async () => {
    await Recipe.deleteMany();
  });

  it("should get all recipes", async () => {
    const res = await request(app).get("/api/recipes");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should create a new recipe", async () => {
    const newRecipe = {
      name: "Test Recipe", // Changed from title to name
      ingredients: ["ingredient1", "ingredient2"],
      instructions: "Test instructions",
      prepTime: "30 minutes", 
      servings: 4,    
    };
    const res = await request(app).post("/api/recipes").send(newRecipe);
    if (res.statusCode !== 201) {
      console.error(res.body); // Log the response body for debugging
    }
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.name).toBe(newRecipe.name); // Changed from title to name
  });

  it('should update a recipe', async () => {
    const updatedData = { name: 'Updated Recipe' };
    const response = await request(app).put(`/api/recipes/${recipeId}`).send(updatedData);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(updatedData.name);
  });

  it('should delete a recipe', async () => {
    const response = await request(app).delete(`/api/recipes/${recipeId}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Recipe deleted');
  });

  it("should get a single recipe by ID", async () => {
    const res = await request(app).get(`/api/recipes/${recipeId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id");
    expect(res.body._id).toBe(String(recipeId));
  });

  // Add more tests as needed
});
