import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import MovieSlider from './components/MovieSlider';
import SongSlider from './components/SongSlider';
import TrailerSlider from './components/TrailerSlider';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { fetchTrendingMovies, fetchUpcomingMovies, fetchPopularMovies } from './services/tmdb';
import { songs } from './data/songs';
import { trailers } from './data/trailers';

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      const trending = await fetchTrendingMovies();
      const upcoming = await fetchUpcomingMovies();
      const popular = await fetchPopularMovies();

      setTrendingMovies(trending);
      setUpcomingMovies(upcoming);
      setPopularMovies(popular);

      if (trending.length > 0) {
        setFeaturedMovie(trending[0]);
      }
    };

    loadMovies();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen w-full bg-gray-100 dark:bg-secondary flex flex-col transition-colors duration-200">
          <Navbar />
          <main className="flex-1">
            {featuredMovie && <Hero movie={featuredMovie} />}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Products />
              <div className="py-8">
                <MovieSlider title="Trending Movies" items={trendingMovies} />
              </div>
              <div className="py-8">
                <SongSlider title="Popular Songs" items={songs} />
              </div>
              <div className="py-8">
                <TrailerSlider title="Latest Trailers" items={trailers} />
              </div>
              <div className="py-8">
                <MovieSlider title="Upcoming Movies" items={upcomingMovies} />
              </div>
              <div className="py-8">
                <MovieSlider title="Popular Movies" items={popularMovies} />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
