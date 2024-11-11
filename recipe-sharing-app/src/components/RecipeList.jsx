import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore  from './recipeStore';
// src/components/RecipeList.jsx

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);

  const handleFavorite = (recipeId) => {
    addFavorite(recipeId);
  };

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => handleFavorite(recipe.id)}>Add to Favorites</button>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
