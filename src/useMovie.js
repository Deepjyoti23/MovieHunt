import { useEffect, useState } from "react";

export function useMovie(query) {
  const [movies, setmovies] = useState([]);
  const [error, setError] = useState("");
  const KEY="0ba73c15d9e1c8275d87f98bc601702f";

  useEffect(function () {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${KEY}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");
        const data = await res.json();
        setmovies(data.results);
        // console.log(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      }
    }
    fetchMovies();
  }, [query]);

  return { movies, error };
}

