import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Recipe Sharing Platform</h1>
        <nav>
          <Link to="/" className="mr-4 hover:underline">
            Home
          </Link>
          <Link to="/add-recipe" className="hover:underline">
            Add Recipe
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
