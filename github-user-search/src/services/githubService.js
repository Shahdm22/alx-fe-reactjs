// src/services/githubService.js
import axios from "axios";

export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};
// Add headers if you have a key in .env
headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
}
