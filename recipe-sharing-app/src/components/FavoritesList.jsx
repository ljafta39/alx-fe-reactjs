// src/components/FavoritesList.jsx
import React,{useState,useEffect} from 'react';
import useRecipeStore  from './recipeStore';
const FavoritesList = () => {
  const { recipes, favorites: favoriteIds } = useRecipeStore(state => ({
    recipes: state.recipes,
    favorites: state.favorites,
  }));
  
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Map favorite IDs to actual recipe objects
    const updatedFavorites = favoriteIds.map(id =>
      recipes.find(recipe => recipe.id === id)
    ).filter(recipe => recipe); // Ensure no undefined recipes

    setFavorites(updatedFavorites);
  }, [favoriteIds, recipes]); // Only run when favoriteIds or recipes change

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;