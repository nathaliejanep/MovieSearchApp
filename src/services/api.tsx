import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'https://www.omdbapi.com',
});

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

export const fetchMovies = async (query: string) => {
    try {
        // Send HTTP GET request
        const response = await api.get(`/`, {
            params: {
                s: query,
                apiKey: apiKey,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
