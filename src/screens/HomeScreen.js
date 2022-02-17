import {React} from "react";
import "./HomeScreen.css";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";
import "./HomeScreen.css";

import Nav from '../Nav';
import Banner from "../Banner";
import Row from "../Row";
import requests from "../Requests";

function HomeScreen(){
    // const user = useSelector(selectUser);

    return (

        <div className="homeScreen">
            <Nav/>
            <Banner/>

            <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>

    );

}

export default HomeScreen;





        // <div className="homeScreen">
        //     <Nav />

        //     <header class="main">
        //         <h1 class="heading">movies</h1>
        //         <p class="info">Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>


        //         <div class="movie-list">

        //             <button class="pre-btn">
        //                 <img src="img/pre.png" alt=""/>

        //         </button>
                
        //             <h1 class="movie-category">Popular movie</h1>
                
        //             <div class="movie-container">
        //                 <div class="movie">
        //                     <img src="img/poster.jpg" alt=""/>
        //                     <p class="movie-title">movie name</p>
        //                 </div>
        //             </div>
                
        //             <button class="nxt-btn"><img src="img/nxt.png" alt=""/></button>
                
        //         </div>
        //     </header>            
        // </div>