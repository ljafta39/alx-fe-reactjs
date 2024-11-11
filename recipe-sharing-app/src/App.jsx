import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
function App() {
  return (
    <>
      
     <h1>Store</h1>
     <AddRecipeForm/>
     <RecipeList/>
    </>
  )
}

export default App