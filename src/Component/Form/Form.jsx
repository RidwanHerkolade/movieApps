import React,{useState} from "react";
import './Form.css'
import SearchIcon from '@mui/icons-material/Search';
const Form = ({searchMovies, searchTerm, setSearchTerm}) => {

    
     return (
        <div className="centered">
         <div className="search">
            {/* <div className="div"> */}
              <input
                  placeholder="Search for movies"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                
              />
              {/* </div> */}
              <div className="src__img">
                    <SearchIcon className="se" onClick={() => searchMovies(searchTerm)}/>

              </div>
             
         </div>
         </div>
     )}

export default Form;