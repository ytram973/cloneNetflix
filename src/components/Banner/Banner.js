import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from 'axios';


function Banner() {

    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=8b7de3af7442ae1ea5548de091d89d5d&language=en-US&page=1`
            );
            const movie = response.data.results;
            const randomIndex = Math.floor(Math.random() * movie.length);
            setMovie(movie[randomIndex]);
        };
        fetchMovie();
    }, []);





    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }



    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            // backgroundImage: `url("https://linitiative.ca/wp-content/uploads/2018/02/netflix-banner.jpg")`,
            // backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) `,
            backgroundPosition: "center center",
        }
        }>
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie.title}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{truncate(movie.overview, 150)}</h1>
            </div>
            <div className='banner--fadeBottom' />

        </header>
    )
}

export default Banner