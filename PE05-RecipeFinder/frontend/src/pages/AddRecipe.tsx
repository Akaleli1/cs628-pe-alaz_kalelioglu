import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import toast from 'react-hot-toast';
import axiosInstance from '../api/axiosInstance';

export function AddRecipe() {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState(['']);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const recipe = {
      name: formData.get('name'),
      description: formData.get('description'),
      ingredients: ingredients.filter(i => i.trim() !== ''),
      instructions: String(formData.get('instructions')),
      cookingTime: Number(formData.get('cookingTime')),
      servings: Number(formData.get('servings')),
      image: formData.get('image'),
      prepTime: Number(formData.get('prepTime')), // Added prepTime
    };

    try {
      const response = await axiosInstance.post('/recipes', recipe);
      toast.success('Recipe added successfully!');
      navigate('/');
    } catch (error) {
      toast.error('Failed to add recipe');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Recipe Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
            Instructions
          </label>
          <textarea
            name="instructions"
            id="instructions"
            rows={3}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            id="image"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          
          <div>
            <label htmlFor="servings" className="block text-sm font-medium text-gray-700">
              Servings
            </label>
            <input
              type="number"
              name="servings"
              id="servings"
              min="1"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700">
              Preparation Time (minutes)
            </label>
            <input
              type="number"
              name="prepTime"
              id="prepTime"
              min="1"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ingredients
          </label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => {
                  const newIngredients = [...ingredients];
                  newIngredients[index] = e.target.value;
                  setIngredients(newIngredients);
                }}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="Enter ingredient"
              />
              <button
                type="button"
                onClick={() => {
                  if (ingredients.length > 1) {
                    setIngredients(ingredients.filter((_, i) => i !== index));
                  }
                }}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <Minus size={20} />
              </button>
              {index === ingredients.length - 1 && (
                <button
                  type="button"
                  onClick={() => setIngredients([...ingredients, ''])}
                  className="p-2 text-emerald-600 hover:text-emerald-700"
                >
                  <Plus size={20} />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-emerald-600 rounded-md hover:bg-emerald-700"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}