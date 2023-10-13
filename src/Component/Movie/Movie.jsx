import React,{useState, useEffect} from "react";
import MovieCard from "../MovieCard/MovieCard";

import Form from "../Form/Form";
import './Movie.css'

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
   
    // API CALLING FOR THE MOVIE SEARCH
     const API__URL = 'http://www.omdbapi.com/?apikey=f9b36f02'
     const searchMovies = async(title) => {
        const response = await fetch(`${API__URL}&s={title}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log(data)
    }

    
    useEffect(() => {
        searchMovies('Batman')
    }, []);
    
     return(
         <div className="div__all">
              <div className="divs">
                   <h1>MovieLand</h1>
              </div>
              <Form setMovies={setMovies} searchMovies={searchMovies} searchTerm ={searchTerm}  setSearchTerm={setSearchTerm}/>
              {movies.length > 0 ? (
                <div className="containerss">
                     {movies.map((movie) => (
                        
                        <MovieCard movie={movie}/>
                        
                     ))}

                </div>
              ): (
                  <div className="empty">
                      <h2>No movies found</h2>
                  </div>
              )
            }
             
                 
         </div>
     )
}

export default Movie;