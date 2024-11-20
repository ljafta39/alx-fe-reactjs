import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [], // Stores IDs of favorite recipes
  addFavorite: (recipeId) => set(state => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
  }),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [], // Stores recommended recipes
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Example recommendation criteria
    );
    // Only update recommendations if they change
    return recommended.length !== state.recommendations.length ? { recommendations: recommended } : {};
  }),
}));

export default useRecipeStore;
