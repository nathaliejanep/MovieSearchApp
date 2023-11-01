import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}
const SearchBar = (props: SearchBarProps) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        props.onSearch(query);
    };

    console.log('query', query);
    return (
        <div>
            <input type='text' placeholder='Search MovieDB...' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
