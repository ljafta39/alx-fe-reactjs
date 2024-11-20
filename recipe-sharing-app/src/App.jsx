import { useState } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  const [viewMode, setViewMode] = useState('list'); // 'list', 'details', or 'edit'
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleViewDetails = (id) => {
    setSelectedRecipeId(id);
    setViewMode('details');
  };

  const handleBackToList = () => {
    setSelectedRecipeId(null);
    setViewMode('list');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Recipe Sharing App</h1>
      {viewMode === 'list' && (
        <>
          <AddRecipeForm />
          <RecipeList onViewDetails={handleViewDetails} />
        </>
      )}
      {viewMode === 'details' && (
        <RecipeDetails
          recipeId={selectedRecipeId}
          onBack={handleBackToList}
        />
      )}
    </div>
  );
};

export default App;
