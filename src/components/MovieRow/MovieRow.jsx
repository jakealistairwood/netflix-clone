import React, { useState, useEffect } from 'react';
import axios from '../../axios';

const MovieRow = ({title, fetchUrl}) => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const fetchMovieData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchMovieData();
    }, []);

    return (
        <div>
           <h2>{title}</h2> 
        </div>
    )
}

export default MovieRow
