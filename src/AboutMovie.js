import React from "react";
import "./AboutMovie.css";
import axios from "./axios";
import requests from "./Requests";
import Nav from "./Nav";
import { useEffect, useState } from "react";

function AboutMovie(){

    const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchMovieID);
      setMovie(request.data.results[0]);
      
      return request;
    }

    fetchData();
  }, []);

  console.log(movie)
  
  let API_KEY = "ab889ce744c9bcce3339e45ca456d3d3";
  let movie_id = window.location.pathname;

  console.log("Movie id : " + movie_id);

    return(
        <div className="aboutMovie"> 
            <Nav/>

            <div className="aboutMovie__content">
                <img                
                 style={{
                    backgroundSize: "cover",
                    backgroundImage : `url("https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}>&language=en-US")`,
                    backgroundPosition: "center center", 
                }}

                alt = ""
                />
            <h1>
            {movie?.name}
        </h1>
            </div>
        </div>


    )
}

export default AboutMovie;


    //     <nav class ="navbar">
    //         <img src="img/logo.png" alt="logo" class = "logo">
    //         <div class="join-box" >
    //             <p class = "join-msg">unlimited tv shows & movies</p>
    //             <a href = "https://iamcarlg.github.io/personal-portfolio/" target = "_blank"><button class = "btn">The creator</button></a>
    //             <button class = "btn join-btn">join now</button>

    //         </div>
    //     </nav>

    //     <!-- Movie info -->
    //     <div class="movie-info">
    //         <div class = "movie-detail">
    //             <h1 class="movie-name"></h1>
    //             <p class = "genres"></p>
    //             <p class = "des"></p>
    //             <p class = "starring">Starring: </p>
    //         </div>
    //     </div>

    //     <!-- Video Clips -->
    //     <div class="trailer-container">
    //         <h1 class="heading">Video Clip</h1>
    //         <!-- <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
    //     </div>

    //         <!-- recommendations -->
    // <div class="recommendations">
    //     <h1 class="heading">More Like This</h1>
    //     <div class="recommendations-container">
    //         <!-- <div class="movie">
    //             <img src="img/poster.jpg" alt="">
    //             <p class="movie-title">movie name</p>
    //         </div> -->
    //     </div>
    // </div>
