import { useEffect, useState } from "react";

function MoviesDetails({ selectedId }) {
  const [movie, setMovie] = useState({});
  const KEY = "0ba73c15d9e1c8275d87f98bc601702f";
  const { poster_path, release_date, overview, title, vote_average } = movie;

  useEffect(
    function () {
      async function getMovieDetails() {
        const res = await fetch(
          `
              https://api.themoviedb.org/3/movie/${selectedId}?api_key=${KEY}&language=en-US`
        );
        const data = await res.json();
        setMovie(data);
      }
      getMovieDetails();
    },
    [selectedId]
  );
  return (
    <div className="details">
      <div className="details-up">
        <div className="details-up-left">
          <img
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={title}
          />
        </div>
        <div className="details-up-right">
          <h2>{title}</h2>
          <p>{release_date}</p>
          <p>
            <span>⭐️</span>
            {vote_average} rating
          </p>
        </div>
      </div>
      <div className="details-down">
        <p>
          <em>{overview}</em>
        </p>
      </div>
    </div>
  );
}

export default MoviesDetails;
