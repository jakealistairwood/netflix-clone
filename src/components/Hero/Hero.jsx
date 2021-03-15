import React, { useState, useEffect } from 'react';
import styles from './Hero.module.scss';
import axios from '../../axios';
import requests from '../../requests';

const Hero = () => {
    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchMovie();
    }, []);

    console.log(movie);

    return (
        <header className={styles.hero} style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className={styles.hero__content}>
                <h1 className={styles.hero__movie}>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <h3 className={styles.hero__desc}>{movie?.overview}</h3>
                <div className={styles.hero__btns}>
                    <button className={styles.play__btn}>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1178 0.850098L15.1178 9.8501L1.1178 18.8501V0.850098Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Play</span>
                    </button>
                    <button className={styles.info__btn}>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8177 21.3401C17.3406 21.3401 21.8177 16.8629 21.8177 11.3401C21.8177 5.81724 17.3406 1.34009 11.8177 1.34009C6.2949 1.34009 1.81775 5.81724 1.81775 11.3401C1.81775 16.8629 6.2949 21.3401 11.8177 21.3401Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.8177 15.3401V11.3401" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.8177 7.34009H11.8277" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Hero;
