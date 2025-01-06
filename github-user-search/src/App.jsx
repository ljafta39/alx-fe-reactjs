import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSearch = async (username) => {
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
//       <h1>GitHub User Search</h1>
//       <Search onSearch={handleSearch} />
//       {loading && <p>Loading...</p>}
//       {error && <p>Looks like we can't find the user.</p>}
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

// export default App;

const App = () => {
  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
};

export default App;
