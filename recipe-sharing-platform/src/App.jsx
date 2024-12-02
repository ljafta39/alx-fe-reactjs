import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      summary: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
      image: "https://via.placeholder.com/350x200",
      preparationTime: "30 mins",
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      summary: "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato based gravy.",
      image: "https://via.placeholder.com/350x200",
      preparationTime: "45 mins",
      difficulty: "Hard"
    },
    {
      id: 3,
      title: "Vegetable Stir Fry",
      summary: "A quick and healthy mix of fresh vegetables cooked in a savory sauce.",
      image: "https://via.placeholder.com/350x200",
      preparationTime: "20 mins",
      difficulty: "Easy"
    },
    {
      id: 4,
      title: "Chocolate Lava Cake",
      summary: "Decadent chocolate cake with a molten chocolate center, perfect for dessert lovers.",
      image: "https://via.placeholder.com/350x200",
      preparationTime: "40 mins",
      difficulty: "Medium"
    }
  ]);

  // Difficulty color mapping
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Delicious Recipes
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            {/* Recipe Image */}
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover"
            />
            
            {/* Recipe Details */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              
              <p className="text-gray-600 mb-4">
                {recipe.summary}
              </p>
              
              {/* Recipe Metadata */}
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    🕒 {recipe.preparationTime}
                  </span>
                  <span 
                    className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[recipe.difficulty]}`}
                  >
                    {recipe.difficulty}
                  </span>
                </div>
                
                {/* View Recipe Button */}
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  View Recipe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;