import { useState, useEffect } from 'react';
import movieData from '../MovieData.json';
import '../Styles/styles.css';

type Movie = {
  Category: string;
  Title: string;
  Year: string | number;
  Director: string;
  Rating: string;
};

export function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const formattedMovies = movieData.MovieData.map((movie) => ({
      ...movie,
      Year:
        typeof movie.Year === 'number' ? movie.Year : parseInt(movie.Year, 10),
    }));
    setMovies(formattedMovies);
  }, []);

  return (
    <div className="container">
      <h1 style={{ color: '#FF5733', fontSize: '3rem' }}>Movie List</h1>
      {movies.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead>
            <tr style={{ backgroundColor: '#FFC300' }}>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie: Movie) => (
              <tr key={movie.Title}>
                <td>{movie.Category}</td>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Director}</td>
                <td style={{ color: '#0074D9' }}>{movie.Rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Movies;
