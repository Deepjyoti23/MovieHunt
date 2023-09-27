function Movie({movies, onSelectMovie}) {
    const {title, poster_path} = movies;
    // console.log(movies)
    return (
        <li onClick={()=>onSelectMovie(movies.id)}>
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
            <h3>{title}</h3>
        </li>
    )
}

export default Movie
