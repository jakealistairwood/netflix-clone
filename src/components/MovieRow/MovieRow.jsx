import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import styles from './MovieRow.module.scss';

const MovieRow = ({title, isLargeRow, fetchUrl}) => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const fetchMovieData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchMovieData();
        // Whenever you use a variable that is pulled from elsewhere inside a useEffect, you have to call it here
    }, [fetchUrl]);

    const base_url = "https://image.tmdb.org/t/p/original";

    return (
        <div className={styles.section__container}>
            <div className={styles.movieRow}>
            <h2>{title}</h2> 
            <div className={styles.movieRow__movies}>
                    {movies.map((movie) => {
                        return <img key={movie.id} className={styles.movie__image}  src={`${base_url}${movie.poster_path}`} alt={movie.title} />    
                    })}
            </div>
            </div>
        </div>
    )
}

export default MovieRow
