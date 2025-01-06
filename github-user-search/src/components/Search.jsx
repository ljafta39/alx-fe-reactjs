// import React, { useState } from 'react';
// import { fetchUserData } from '../services/githubService';

// const Search = () => {
//   const [username, setUsername] = useState('');
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(false);
//     try {
//       const userData = await fetchUserData(username);
//       setUser(userData);
//     } catch (err) {
//       setError(true);
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter GitHub username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p>Looks like we cant find the user</p>}
//       {user && (
//         <div>
//           <img src={user.avatar_url} alt={`${user.login} avatar`} />
//           <h2>{user.name || user.login}</h2>
//           <p>{user.bio}</p>
//           <a href={user.html_url} target="_blank" rel="noopener noreferrer">
//             View Profile
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;
import React, { useState } from 'react';
import { fetchAdvancedSearch } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const query = { username, location, minRepos, page: 1 };
      const data = await fetchAdvancedSearch(query);
      setResults(data.items);
      setPage(1);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const query = { username, location, minRepos, page: page + 1 };
      const data = await fetchAdvancedSearch(query);
      setResults((prev) => [...prev, ...data.items]);
      setPage((prev) => prev + 1);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow-md space-y-4 max-w-md mx-auto"
      >
        <h1 className="text-xl font-bold">GitHub User Search</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && (
        <p className="text-center mt-4 text-red-500">
          Looks like we can’t find the user
        </p>
      )}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="p-4 bg-white rounded shadow-md">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <h2 className="text-lg font-bold">{user.login}</h2>
            <p>{user.location || 'No location provided'}</p>
            <p>Repositories: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>

      {results.length > 0 && (
        <button
          onClick={handleLoadMore}
          className="bg-gray-200 py-2 px-4 rounded w-full mt-4"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
