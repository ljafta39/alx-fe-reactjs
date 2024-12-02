import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import Header from './components/Header'; // Import the Header

function App() {
  return (
    <Router>
      <div className='App'>
      {/* Render the Header */}
      <Header />

{/* Render Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;

