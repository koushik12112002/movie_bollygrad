import React from 'react';
import { FaMusic, FaFilm, FaPlayCircle, FaShoppingCart } from 'react-icons/fa';

const Products = () => {
  const products = [
    {
      icon: <FaMusic className="text-4xl" />,
      title: 'Listen Music',
      description: 'Stream millions of songs and podcasts',
    },
    {
      icon: <FaFilm className="text-4xl" />,
      title: 'Watch Movies',
      description: 'Enjoy the latest blockbusters and classics',
    },
    {
      icon: <FaPlayCircle className="text-4xl" />,
      title: 'Enjoy Trailers',
      description: 'Preview upcoming releases and exclusives',
    },
    {
      icon: <FaShoppingCart className="text-4xl" />,
      title: 'Our Products',
      description: 'Discover premium entertainment packages',
    },
  ];

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="group bg-black/30 backdrop-blur-sm rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{product.title}</h3>
              <p className="text-gray-400">{product.description}</p>
              <button className="mt-4 px-6 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
