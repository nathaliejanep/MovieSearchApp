import React, { useState } from 'react';
import { Movie } from '../services/movie';
import { fetchMovies } from '../services/api';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const SearchRender: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const handleSearch = async (searchQuery: string) => {
        const res = await fetchMovies(searchQuery);
        setMovies(res);
        console.log(res);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <SearchResults movies={movies} />
        </div>
    );
};

export default SearchRender;
