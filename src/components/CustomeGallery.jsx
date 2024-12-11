import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/swiper-bundle.css';
import Handsome from '../assets/images/Handsome.jpeg';
import Nudenails from '../assets/images/Nudenails.jpeg';
import spaim from '../assets/images/spaim.jpeg';
import nailtech from '../assets/images/nailtech.jpeg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../styles/main.css';

const CustomeGallery = () => {
  const images = [Handsome, Nudenails, spaim, nailtech];

  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="mx-auto py-8 px-4 gallery-section text-white">
      <div className="flex flex-wrap justify-between items-center">
        {/* Info section */}
        <div className="gallery-info w-full lg:w-1/3 pr-0 lg:pr-8 mb-8 lg:mb-0 text-left lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Explore Our Creative Masterpieces</h1>
          <p className="mb-4 text-gray-400">
            From stylish haircuts to exquisite nail art, our gallery showcases the artistry and care we put into every service. See what makes us stand out!
          </p>
        </div>

        {/* Swiper section */}
        <div className="gallery-swiper w-full lg:w-2/3 relative">
          <Swiper
            ref={swiperRef} // Attach ref to swiper
            modules={[Navigation, Autoplay]} // Added Autoplay module
            spaceBetween={30} // Space between slides
            slidesPerView={1} // Start with 1 slide per view for small screens
            autoplay={{
              delay: 3000, // Slide delay in ms
              disableOnInteraction: false, // Autoplay continues even after interaction
            }}
            breakpoints={{
              640: { slidesPerView: 1 }, // 1 slide for smaller screens
              1024: { slidesPerView: 2 }, // Show 2 slides for larger screens (desktops)
            }}
            loop={true} // Infinite loop of slides
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <LazyLoadImage
                    src={image}
                    alt={`Slide ${index + 1}`}
                    effect="blur"
                    wrapperProps={{
                      style: {
                        transitionDelay: "1s",
                        backgroundColor: "rgba(0,0,0,0.1)",
                      },
                    }}
                    className="w-full object-cover rounded-lg"
                    style={{
                      height: "350px", // Fixed height
                      maxHeight: "350px", // Ensures consistent height
                      backgroundColor: "#f3f3f3", // Placeholder background
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom single navigation button */}
          <button
            onClick={handleNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow-md z-10"
            style={{ zIndex: 10 }}
          >
            &#9654; {/* Right arrow icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomeGallery;
