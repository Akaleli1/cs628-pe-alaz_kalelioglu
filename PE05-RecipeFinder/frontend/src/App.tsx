import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Layout } from './components/Layout';
import { RecipeList } from './pages/RecipeList';
import { RecipeDetails } from './pages/RecipeDetails';
import { AddRecipe } from './pages/AddRecipe';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RecipeList />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
          <Route path="add" element={<AddRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;