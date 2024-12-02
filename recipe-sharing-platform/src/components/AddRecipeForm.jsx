import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  // State to handle validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required.';
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (formData.ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients.';
    }
    if (!formData.steps.trim()) newErrors.steps = 'Preparation steps are required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      console.log('Form Submitted:', formData);
      alert('Recipe submitted successfully!');
      // Reset form after submission
      setFormData({ title: '', ingredients: '', steps: '' });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add a New Recipe</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g., eggs, flour, sugar"
            rows="3"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 font-bold mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Describe the steps"
            rows="4"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
