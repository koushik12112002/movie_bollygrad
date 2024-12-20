const TMDB_API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_API_BASE_URL;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      image: `${IMAGE_BASE_URL}/w500${movie.poster_path}`,
      backdrop: `${IMAGE_BASE_URL}/original${movie.backdrop_path}`,
      rating: movie.vote_average / 2, // Convert to 5-star rating
      overview: movie.overview,
      releaseDate: movie.release_date
    }));
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&region=IN`
    );
    const data = await response.json();
    return data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      image: `${IMAGE_BASE_URL}/w500${movie.poster_path}`,
      backdrop: `${IMAGE_BASE_URL}/original${movie.backdrop_path}`,
      rating: movie.vote_average / 2,
      overview: movie.overview,
      releaseDate: movie.release_date
    }));
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&region=IN`
    );
    const data = await response.json();
    return data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      image: `${IMAGE_BASE_URL}/w500${movie.poster_path}`,
      backdrop: `${IMAGE_BASE_URL}/original${movie.backdrop_path}`,
      rating: movie.vote_average / 2,
      overview: movie.overview,
      releaseDate: movie.release_date
    }));
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};
