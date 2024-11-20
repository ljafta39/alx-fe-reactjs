import React from 'react';
import { BrowserRouter as Router, Routes, Route,useParams } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm />
        <RecipeList />

        {/* Favorites and Recommendations */}
        <ErrorBoundary>
      <FavoritesList />
    </ErrorBoundary>
        <RecommendationsList />

        {/* Routing for RecipeDetails */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

const RecipeDetailsWrapper = () => {
  const { recipeId } = useParams();
  return <RecipeDetails recipeId={parseInt(recipeId, 10)} />;
};

export default App;
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <h1>Recipe Store</h1>
//         <SearchBar />
//         <AddRecipeForm />
//         <RecipeList />
        
//         {/* Add routes as needed for details and editing */}
//         <Routes>
//           <Route path="/" element={<RecipeList />} />
//           <Route path="/recipe/:recipeId" element={<RecipeDetailsWrapper />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// const RecipeDetailsWrapper = () => {
//   const { recipeId } = useParams();
//   return <RecipeDetails recipeId={parseInt(recipeId, 10)} />;
// };

// export default App;