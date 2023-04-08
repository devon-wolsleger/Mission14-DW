import { useEffect, useState } from 'react';
import { Movie } from './types/movie';
import '../Styles/styles.css';

function MovieList() {
  const [listOMovies, setListOMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setListOMovies(temp);
    };
    fetchMovie();
  }, []);

  return (
    <div className="movie-list-container">
      <h3 className="title">Joel Hilton's Movie Collection</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {listOMovies
            .filter((m) => m.edited === 'Yes')
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((m) => (
              <tr key={m.movieId}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited ? 'Yes' : 'No'}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
