import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
    servings: '',
    image: ''
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/recipes', recipe);
      console.log('Recipe added:', response.data);
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={recipe.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="ingredients" value={recipe.ingredients} onChange={handleChange} placeholder="Ingredients" />
      <input type="text" name="instructions" value={recipe.instructions} onChange={handleChange} placeholder="Instructions" />
      <input type="text" name="prepTime" value={recipe.prepTime} onChange={handleChange} placeholder="Prep Time" />
      <input type="text" name="servings" value={recipe.servings} onChange={handleChange} placeholder="Servings" />
      <input type="text" name="image" value={recipe.image} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
