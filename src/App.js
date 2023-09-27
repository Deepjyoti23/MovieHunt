import { useState } from "react";
import Search from "./Search";
import MovieList from "./MovieList";
import { useMovie } from "./useMovie";
import MoviesDetails from "./MoviesDetails";
import Navbar from "./Navbar";

function App() {
  const [query, setQuery] = useState("");
  const { movies, error } = useMovie(query);
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
    console.log("click");
  }

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
      </Navbar>
      <div className="main">
        <div className="box">
          <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        </div>
        <div className="box">
          {selectedId ? <MoviesDetails selectedId={selectedId} /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
