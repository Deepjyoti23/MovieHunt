import Movie from "./Movie";

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies.map?.((movie) => (
        <Movie movies={movie} key={movie.id} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

export default MovieList;
