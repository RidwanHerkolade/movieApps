import React from "react";
import './MovieCard.css'


const MovieCard = ({movie}) => {
     return (
        <div className="containers">
         

             <div className="imagess">
                 <img src={movie.Poster} alt={movie.Title}/>
            </div>
            <div className="under">
             <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
              <div className="movie">
                 <p>{movie.Year}</p>
            </div>
            </div>
          
       </div>
     )
}
export default MovieCard