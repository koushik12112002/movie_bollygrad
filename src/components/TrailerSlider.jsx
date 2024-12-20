import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaStar, FaPlay } from 'react-icons/fa';

const TrailerSlider = ({ title, items }) => {
  const [activeTrailer, setActiveTrailer] = useState(null);

  const openTrailer = (youtubeId) => {
    setActiveTrailer(youtubeId);
  };

  const closeTrailer = () => {
    setActiveTrailer(null);
  };

  return (
    <div className="trailer-slider py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative group overflow-hidden rounded-lg">
              {/* Trailer Thumbnail */}
              <div className="aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* Play Button */}
                  <div className="flex justify-center mb-4">
                    <button
                      onClick={() => openTrailer(item.youtubeId)}
                      className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
                    >
                      <FaPlay className="ml-1" />
                    </button>
                  </div>

                  {/* Trailer Info */}
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    {item.director} • {item.cast}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-400" />
                      <span className="text-white">{item.rating}</span>
                    </div>
                    <span className="text-gray-400">{item.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* YouTube Modal */}
      {activeTrailer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={closeTrailer}
              className="absolute -top-10 right-0 text-white hover:text-primary"
            >
              Close
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${activeTrailer}?autoplay=1`}
                title="YouTube video player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrailerSlider;
