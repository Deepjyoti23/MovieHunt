import { useState } from "react";
import Search from "./Search";
import MovieList from "./MovieList";
import { useMovie } from "./useMovie";
import MoviesDetails from "./MoviesDetails";
import Navbar from "./Navbar";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

function App() {
  const [query, setQuery] = useState("");
  const { movies, error,isLoading } = useMovie(query);
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
    console.log("click");
  }
  console.log(error)

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
      </Navbar>
      <div className="main">
        <div className={query===""?"":"box"}>
        {isLoading && <Loader />}
          {!error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
           {error && <ErrorMessage message={error} />}
        </div>
        <div className={query==="" ?"":"box"}>
          {selectedId ? <MoviesDetails selectedId={selectedId} /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
