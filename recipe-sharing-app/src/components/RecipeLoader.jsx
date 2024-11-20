import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeLoader = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    // Example: Fetching recipes from an API (you can replace this with your own API)
    const fetchRecipes = async () => {
      const response = await fetch('https://api.example.com/recipes');
      const data = await response.json();
      setRecipes(data);  // Set the fetched recipes into the store
    };

    fetchRecipes();
  }, [setRecipes]);

  return <div>Loading recipes...</div>;
};

export default RecipeLoader;
