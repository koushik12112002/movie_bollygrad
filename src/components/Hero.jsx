import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Hero = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${movie.backdrop}")`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              {movie.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in delay-100">
              {movie.overview}
            </p>
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">★</span>
                <span className="text-white">{movie.rating.toFixed(1)}</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-white">{new Date(movie.releaseDate).getFullYear()}</span>
            </div>
            <button className="flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors animate-fade-in delay-200 group">
              <FaPlay className="transform group-hover:scale-110 transition-transform" />
              <span>Watch Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/20 rounded-full relative">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-primary rounded-full animate-slide-up" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
