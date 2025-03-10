import React, {useState, useEffect} from 'react'; 
import { RecipeCard } from '../components/RecipeCard';
import { Recipe } from '../types/recipe';
import axiosInstance from '../api/axiosInstance';



export function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      const fetchRecipes = async () => {
        try {
          const response = await axiosInstance.get('recipes');
          setRecipes(response.data);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };
  
      fetchRecipes();
    }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Discover Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}