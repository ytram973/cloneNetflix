import React, { useEffect, useState } from "react";

import axios from "axios";

function ListeMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const fetchMovies = async () => {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular?api_key=8b7de3af7442ae1ea5548de091d89d5d'
        );
        setMovies(response.data.results);
        console.log(response.data.results);
      };
      fetchMovies();
    }, []);
  
    return (
      <div>
        <h1>Popular Movies</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title} </li>
            
          ))}
        </ul>
      </div>
    );
  }

export default ListeMovie;