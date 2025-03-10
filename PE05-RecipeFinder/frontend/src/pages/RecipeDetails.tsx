import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Users, Trash2, Edit } from 'lucide-react';
import axios from 'axios';
import { Recipe } from '../types/recipe';

export function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    axios.get(`/api/recipes/${id}?timestamp=${new Date().getTime()}`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error('Error fetching recipe:', error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`/api/recipes/${id}`)
      .then(() => navigate('/'))
      .catch(error => {
        if (error.response && error.response.status === 404) {
          console.error('Recipe not found:', error);
        } else {
          console.error('Error deleting recipe:', error);
        }
      });
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{recipe.name}</h1>
            <div className="flex gap-2">
              <button
                onClick={handleDelete}
                className="flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{recipe.instructions}</p>

          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-1 text-gray-500">
              <Clock size={20} />
              <span>{recipe.cookingTime} mins</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Users size={20} />
              <span>{recipe.servings} servings</span>
            </div>
          </div>

         

        </div>
      </div>
    </div>
  );
}