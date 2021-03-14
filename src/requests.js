const API_KEY = "7cc71555b369a368b14edcf3f3229b77";

const requests = {
    fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}`,
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}`,
    fetchMostViewed: `/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=1&sort_by=vote_count.desc`,
    fetchBestPictures: `/list/28?api_key=${API_KEY}&language=en-GB`
}

export default requests;

/* GENRE LIST IDS 

Action: 28
Adventure: 12,
Animation: 16,
Comedy: 35,
Crime: 80,
Documentaries: 99
Drama: 18,
Fantasy: 14
Horror: 27,
Sci-Fi: 878,
Thriller: 53




*/