// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';

const App = () => {
  return (
    <Router> {/* Wrap everything in <Router> */}
      <div>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/add">
            <button>Add Recipe</button>
          </Link>
        </nav>
        <Routes> {/* Routes for navigation */}
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>  {/* Closing Router here */}
  );
};

export default App;
