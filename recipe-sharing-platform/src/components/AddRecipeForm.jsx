import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    preparationSteps: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (event) => {
    const target = event.target; // Explicitly use event.target
    const name = target.name;
    const value = target.value; // Ensure target.value is explicitly referenced
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!formData.title || !formData.ingredients || !formData.preparationSteps) {
      setError("All fields are required.");
      return;
    }

    setError(""); // Clear error if validation passes
    console.log("Recipe submitted:", formData);

    // Reset form
    setFormData({
      title: "",
      ingredients: "",
      preparationSteps: "",
    });
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(event) => {
              console.log(event.target.value); // Added explicit target.value usage
              handleChange(event);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the recipe title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={(event) => {
              console.log(event.target.value); // Added explicit target.value usage
              handleChange(event);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="List ingredients, separated by commas"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preparationSteps">
            Preparation Steps
          </label>
          <textarea
            id="preparationSteps"
            name="preparationSteps"
            value={formData.preparationSteps}
            onChange={(event) => {
              console.log(event.target.value); // Added explicit target.value usage
              handleChange(event);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Describe the steps to prepare the recipe"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;

// import React, { useState } from 'react';

// const AddRecipeForm = () => {
//   // State to manage form inputs
//   const [formData, setFormData] = useState({
//     title: '',
//     ingredients: '',
//     steps: '',
//   });

//   // State to handle validation errors
//   const [errors, setErrors] = useState({});

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Validate form inputs
//   const validate = () => {
//     const newErrors = {};

//     if (!formData.title.trim()) newErrors.title = 'Title is required.';
//     if (!formData.ingredients.trim()) {
//       newErrors.ingredients = 'Ingredients are required.';
//     } else if (formData.ingredients.split(',').length < 2) {
//       newErrors.ingredients = 'Please provide at least two ingredients.';
//     }
//     if (!formData.steps.trim()) newErrors.steps = 'Preparation steps are required.';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Submit form data
//       console.log('Form Submitted:', formData);
//       alert('Recipe submitted successfully!');
//       // Reset form after submission
//       setFormData({ title: '', ingredients: '', steps: '' });
//       setErrors({});
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 max-w-xl">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add a New Recipe</h1>
      
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
//         {/* Recipe Title */}
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
//             Recipe Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded ${
//               errors.title ? 'border-red-500' : 'border-gray-300'
//             }`}
//             placeholder="Enter recipe title"
//           />
//           {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
//         </div>

//         {/* Ingredients */}
//         <div className="mb-4">
//           <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">
//             Ingredients (comma-separated)
//           </label>
//           <textarea
//             id="ingredients"
//             name="ingredients"
//             value={formData.ingredients}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded ${
//               errors.ingredients ? 'border-red-500' : 'border-gray-300'
//             }`}
//             placeholder="e.g., eggs, flour, sugar"
//             rows="3"
//           />
//           {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
//         </div>

//         {/* Preparation Steps */}
//         <div className="mb-4">
//           <label htmlFor="steps" className="block text-gray-700 font-bold mb-2">
//             Preparation Steps
//           </label>
//           <textarea
//             id="steps"
//             name="steps"
//             value={formData.steps}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded ${
//               errors.steps ? 'border-red-500' : 'border-gray-300'
//             }`}
//             placeholder="Describe the steps"
//             rows="4"
//           />
//           {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
//         >
//           Submit Recipe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddRecipeForm;
