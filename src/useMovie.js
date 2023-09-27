import { useEffect, useState } from "react";

export function useMovie(query) {
  const [movies, setmovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const KEY = "0ba73c15d9e1c8275d87f98bc601702f";

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${KEY}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();
          if (data.total_results === 0) throw new Error("Movie not found");
          
          setmovies(data.results);
           console.log(data);
          setError("");
        } catch (err) {
          console.log(err);
          setError(err.message);
        }
        finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setmovies([]);
        setError("");
        return;
      }
      fetchMovies();
    },
    [query]
  );
  

  return { movies,isLoading, error };
}
