import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the base Swiper styles
import 'swiper/css/navigation'; // Import navigation styles
import { Navigation } from 'swiper/modules'; // Adjusted import
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import tiktok from '../assets/images/tiktok.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import '../styles/main.css';

const Testimonial = () => {
  const testimonies = [
    { text: 'The product is the best', name: 'Meekemma', avatar: facebook },
    { text: 'The product is good', name: 'Meekemma', avatar: instagram },
    { text: 'The product is great', name: 'Meekemma', avatar: tiktok },
    { text: 'The product is awesome', name: 'Meekemma', avatar: whatsapp },
    { text: 'The product is phenomenal', name: 'John Doe', avatar: facebook },
    { text: 'I love it!', name: 'Jane Doe', avatar: instagram },
    { text: 'Highly recommended!', name: 'Chris P.', avatar: tiktok },
    { text: 'Worth every penny', name: 'Sara L.', avatar: whatsapp },
  ];

  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Move to next slide on button click
    }
  };

  return (
    <div className='container test mx-auto px-4 py-8 mt-16 bg-[#FFF5EE]'>
      <div className='flex justify-center'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold mb-4'>What Our Clients Say</h1>
          <p className='text-base md:px-16 break-words'>
            Our clients' satisfaction is our top priority. Here’s what some of them have to say about their experiences with our services. 
            We take pride in delivering exceptional results that speak for themselves!
          </p>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className='relative'>
        <Swiper
          ref={swiperRef} // Attach ref to swiper
          modules={[Navigation]}
          spaceBetween={20}
          loop={true} 
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide for smaller screens
            1024: { slidesPerView: 3 }, // Show 3 slides for larger screens (desktops)
          }}
          className='mySwiper py-4'
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <div className='testimonial-card'>
                <img src={testimony.avatar} alt={`${testimony.name}'s avatar`} className='w-16 h-16 mb-4' />
                <p className='mb-2 text-lg italic'>“{testimony.text}”</p>
                <p className='font-bold'>{testimony.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Button */}
        <button
          onClick={handleNextSlide}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow-md z-10'
          style={{ zIndex: 10 }} // Ensure button is above the slides
        >
          &#9654; {/* Right arrow icon */}
        </button>
      </div>

      
      
    </div>
  );
};

export default Testimonial;
