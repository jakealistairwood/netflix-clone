import React from 'react';
import Navbar from './components/Navbar';
import MovieRow from './components/MovieRow';
import requests from './requests';
import './App.scss';

// const fetchMovieData = () => {
//   return axios
//     .get("https://api.themoviedb.org/3/movie/top_rated?api_key=7cc71555b369a368b14edcf3f3229b77")
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     })
// };

// console.log(fetchMovieData);

// const movies = ["1", "2", "3"];

const App = () => {
  
  return (
    <div className="App">
      <Navbar />
      <h1 className="appHeader">My Netflix Clone App</h1>
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrendingMovies} isLargeRow />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <MovieRow title="Most Viewed" fetchUrl={requests.fetchMostViewed} />
      <MovieRow title="Popular" fetchUrl={requests.fetchPopularMovies} />
    </div>
  );
}

export default App;
