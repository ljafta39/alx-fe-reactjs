import {create} from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  filteredRecipes: [],
  searchTerm: '',

  // Set the recipes
  setRecipes: (recipes) => set({ recipes }),

  // Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter the recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // Add a new recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  // Delete a recipe
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
  })),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // Favorites functionality
  addFavorite: (recipeId) => set(state => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
  }),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Recommendations based on favorites
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Generate recommendations based on favorite recipes or other criteria
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Randomized recommendations
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };
