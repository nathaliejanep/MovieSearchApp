import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import MovieDetails from './routes/MovieDetails';
import MovieList from './routes/MovieList';
import Error from './routes/Error';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='movie/:id' element={<MovieDetails />} />
                    <Route path='movies/:type' element={<MovieList />} />
                    <Route path='/*' element={<Error />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
