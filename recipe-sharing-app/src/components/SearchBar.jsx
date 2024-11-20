import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // Trigger filtering whenever the search term changes
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearchChange}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
};

export default SearchBar;
