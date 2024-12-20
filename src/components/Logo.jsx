import React from 'react';
import { FaFilm } from 'react-icons/fa';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <FaFilm className="text-primary text-3xl animate-spin-slow" />
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-primary tracking-wider">
          BOLLYGRAD
        </span>
        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-widest -mt-1">
          STUDIOZ
        </span>
      </div>
    </div>
  );
};

export default Logo;
