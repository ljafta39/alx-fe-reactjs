// App.jsx
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <nav>
        <Link to="/add">
          <button>Add Recipe</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </div>
  );
};

export default App;
