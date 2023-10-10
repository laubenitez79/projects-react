import { useTopMovies } from "../hooks/useMoviesTop";

const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

export function TopMovies () {
    const { movies, loading } = useTopMovies();

    return (
        <>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ul className="movies">
                {movies.map(movie => (
                    <li className="movie" key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                        <img src={`${URL_IMAGE}${movie.poster_path}`} alt={movie.title} />
                    </li>
                ))}
                </ul>
            )}
    </>
    )
}