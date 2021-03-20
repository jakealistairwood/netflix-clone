import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import requests from './requests';
import loginCheck from './loginCheck';
import './App.scss';


const App = () => {

  const [ username , setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false);

  const onSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await loginCheck({ username, password });
      setIsUserLoggedIn(true);
    } catch(err) {
      setError('Your username or password was incorrect. Please Try again!');
    }

    setIsLoading(false);
  }
  
  return (
    <div className="App">
      {isUserLoggedIn ? (
        <>
        <Navbar />
        <Hero />
        <div className="MovieRow__container">
          <MovieRow title="Trending Now" fetchUrl={requests.fetchTrendingMovies} />
          <MovieRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
          <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
          <MovieRow title="Most Viewed" fetchUrl={requests.fetchMostViewed} />
          {/* <MovieRow title="Best Picture Winners" fetchUrl={requests.fetchBestPictures} /> */}
          <MovieRow title="Popular" fetchUrl={requests.fetchPopularMovies} />
          {/* <Login /> */}
        </div>
        </>
      ) : (
        <>
        <div className="form__container">
          <form className="form" onSubmit={onSubmit}>
            {error ? <h1 className="error">{error}</h1> : <h1 className="form__header">Sign In</h1>}
            <label for="username"></label>
            <input 
                type="text" 
                id="username" 
                placeholder="username" 
                value={username} 
                onChange={e => setUsername(e.currentTarget.value)} 
            />
            <label for="password"></label>
            <input 
                type="text" 
                id="password" 
                placeholder="password" 
                value={password} 
                onChange={e => setPassword(e.currentTarget.value)} 
            />
            <button className="login-btn" type="submit" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
            <div className="form__needHelp"></div>
          </form>
        </div>
        <div className="overlay"></div>
        </>
      )}
    </div>
  );
}

export default App;
