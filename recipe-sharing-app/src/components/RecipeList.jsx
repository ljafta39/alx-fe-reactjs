import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Trigger filtering when the component mounts or the recipes list changes
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found. Add some!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Add a link to the recipe details page */}
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
