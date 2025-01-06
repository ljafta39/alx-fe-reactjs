// import axios from 'axios';

// export const fetchUserData = async (username) => {
//   const baseURL = 'https://api.github.com';
//   try {
//     const response = await axios.get(`${baseURL}/users/${username}`);
//     return response.data;
//   } catch (error) {
//     throw new Error('Error fetching user data');
//   }
// };
import axios from 'axios';

const baseURL = 'https://api.github.com';

export const fetchAdvancedSearch = async ({ username, location, minRepos, page = 1 }) => {
  try {
    let query = '';
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos}`;

    const response = await axios.get(
      `${baseURL}/search/users?q=${query.trim()}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching advanced search data');
  }
};
export const fetchUserData = async (username) => {
  const baseURL = 'https://api.github.com';
  try {
    const response = await axios.get(`${baseURL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};
