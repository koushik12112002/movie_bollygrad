import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaStar, FaPlay } from 'react-icons/fa';

const SongSlider = ({ title, items }) => {
  return (
    <div className="song-slider py-8">
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
          1280: {
            slidesPerView: 5,
          },
        }}
        className="w-full"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative group overflow-hidden rounded-lg">
              {/* Song Image */}
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
                    <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <FaPlay className="ml-1" />
                    </button>
                  </div>

                  {/* Song Info */}
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    {item.movie} • {item.artist}
                  </p>
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-white">{item.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SongSlider;
