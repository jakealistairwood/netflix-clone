import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from '../../axios';
import styles from './MovieRow.module.scss';

const MovieRow = ({title, fetchUrl}) => {
    const [ movies, setMovies ] = useState([]);
    const [ trailer, setTrailer ] = useState("");

    const opts = {
        height: "1000",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    };

    useEffect(() => {
        const fetchMovieData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchMovieData();
        // Whenever you use a variable that is pulled from elsewhere inside a useEffect, you have to call it here
    }, [fetchUrl]);

    const base_url = "https://image.tmdb.org/t/p/original";

    const handleClick = async (movie) => {
        if(trailer){
            setTrailer('');
        } else {
            let trailerURL = await axios.get(
                `/movie/${movie.id}/videos?api_key=7cc71555b369a368b14edcf3f3229b77`
            );
            setTrailer(trailerURL.data.results[0]?.key);
        }
    }

    return (
        <div className={styles.movieRow}>
            {trailer && <YouTube videoId={trailer} opts={opts} />}
            <h2>{title}</h2> 
            <div className={styles.movieRow__movies}>
                {movies.map((movie) => {
                    return <img 
                        key={movie.id} 
                        onClick={() => handleClick(movie)}
                        className={styles.movie__image}  
                        src={`${base_url}${movie.poster_path}`} 
                        alt={movie.title} 
                    />    
                })}
            </div>
        </div>
    )
}

export default MovieRow
