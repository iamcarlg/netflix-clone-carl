let API_KEY = "ab889ce744c9bcce3339e45ca456d3d3";
let movie_id = window.location.pathname;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    // fetchMovieID: `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`,
    fetchMovieID: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`,
  };

export default requests;
