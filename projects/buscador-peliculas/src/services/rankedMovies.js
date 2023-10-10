const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGE3Nzc5NmM2MGJkNjUxOTQyOTA2Mjc2YmFjMmNmMSIsInN1YiI6IjY1MjQ2MDNlMDcyMTY2NDViNTFiN2Q0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.av_0R1945IH31gjb3YyOhY5aiq5WWhLrLXKdQTrV3GA'

export const rankedMovies = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `${API_KEY}`
        }
    };
        return fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}