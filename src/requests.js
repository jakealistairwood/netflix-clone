const API_KEY = "7cc71555b369a368b14edcf3f3229b77";

const requests = {
    fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}` 
}

export default requests;