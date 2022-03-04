/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&lenguage=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&lenguage=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28&lenguage=es`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35&lenguage=es`,
  },
  fetchTerrorMovies: {
    title: "Terror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27&lenguage=es`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749&lenguage=es`,
  },
  fetchMisteryMovies: {
    title: "Mistery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648&lenguage=es`,
  },
  fetchSciFiMovies: {
    title: "Sci-fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878&lenguage=es`,
  },
  fetchWesternMovies: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37&lenguage=es`,
  },
  fetchAnimationMovies: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16&lenguage=es`,
  },
  fetchTV: {
    title: "TV Live",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770&lenguage=es`,
  },
};
