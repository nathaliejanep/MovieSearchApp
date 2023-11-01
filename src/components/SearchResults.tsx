import { Movie } from '../services/movie';

interface SearchResultsProps {
    movies: Movie[];
}

const SearchResults = (props: SearchResultsProps) => {
    const { movies } = props;
    return (
        <div className='search-results'>
            {movies.map((movie) => (
                <ul key={movie.imdbID}>
                    <li>
                        <h2>{movie.Title}</h2>
                    </li>
                    <li>
                        <img src={movie.Poster} alt={movie.Title} className='search-results_poster' />
                    </li>
                    {/* Add poster and more etc.. */}
                </ul>
            ))}
        </div>
    );
};

export default SearchResults;
