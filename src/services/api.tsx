import axios from 'axios';
import { Movie } from './movie';

// Create an Axios instance
const api = axios.create({
    baseURL: 'https://www.omdbapi.com',
});

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    try {
        // Send HTTP GET request
        const res = await api.get('/', {
            params: {
                s: query,
                apiKey: apiKey,
            },
        });
        return res.data.Search;
    } catch (error) {
        throw error;
    }
};

export const fetchMoviePlot = async (imdbID: string) => {
    try {
        const res = await api.get('/', {
            params: {
                i: imdbID,
                apiKey: apiKey,
                plot: 'short',
            },
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};
