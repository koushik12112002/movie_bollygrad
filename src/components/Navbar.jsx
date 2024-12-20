import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/movies" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Movies
            </Link>
            <Link to="/songs" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              Songs
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              About Us
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {isLoggedIn ? (
              <button
                onClick={handleAuth}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleAuth}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Login
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={handleAuth}
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/movies"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Movies
              </Link>
              <Link
                to="/songs"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Songs
              </Link>
              <Link
                to="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
