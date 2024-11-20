// import { useRecipeStore } from './recipeStore';
// import EditRecipeForm from './EditRecipeForm';
// import DeleteRecipeButton from './DeleteRecipeButton';

// const RecipeDetails = ({ recipeId }) => {
//   const recipe = useRecipeStore((state) =>
//     state.recipes.find((recipe) => recipe.id === recipeId)
//   );

//   if (!recipe) {
//     return <p>Recipe not found!</p>;
//   }

//   return (
//     <div>
//       <h1>{recipe.title}</h1>
//       <p>{recipe.description}</p>
//       <EditRecipeForm recipe={recipe} />
//       <DeleteRecipeButton recipeId={recipe.id} />
//     </div>
//   );
// };

// export default RecipeDetails;
import { useRecipeStore } from './recipeStore';

const RecipeDetails = ({ recipeId, onBack }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={() => deleteRecipe(recipeId)}>Delete Recipe</button>
      <button onClick={onBack}>Back to List</button>
    </div>
  );
};

export default RecipeDetails;
