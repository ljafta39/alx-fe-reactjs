import axios from 'axios';

export const fetchUserData = async (username) => {
  const baseURL = 'https://api.github.com';
  try {
    const response = await axios.get(`${baseURL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};
