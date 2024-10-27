import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import tiktok from '../assets/images/tiktok.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import '../styles/main.css';

const CustomeGallery = () => {
  const images = [facebook, instagram, tiktok, whatsapp];

  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); 
    }
  };

  return (
    <div className=" mx-auto py-8 px-4 gallery-section text-white">
      <div className="flex flex-wrap justify-between items-center">
        {/* Info section */}
        <div className="gallery-info w-full lg:w-1/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Explore Our Creative Masterpieces</h1>
          <p className="mb-4 text-gray-400">
          From stylish haircuts to exquisite nail art, our gallery showcases the artistry and care we put into every service. See what makes us stand out!
          </p>
        </div>

        {/* Swiper section */}
        <div className="gallery-swiper w-full lg:w-2/3 relative">
          <Swiper
            ref={swiperRef} // Attach ref to swiper
            modules={[Navigation]}
            spaceBetween={30} // Reduced space between slides
            slidesPerView={1} // Start with 1 slide per view for small screens
            breakpoints={{
              640: { slidesPerView: 1 }, // 1 slide for smaller screens
              1024: { slidesPerView: 2 }, // Show 2 slides for larger screens (desktops)
            }}
            loop={true} // Infinite loop of slides
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-90 object-cover rounded-lg" // Reduced image height
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom single navigation button */}
          <button
            onClick={handleNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow-md z-10"
            style={{ zIndex: 10 }} // Ensure button is above the slides
          >
            &#9654; {/* Right arrow icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomeGallery;
