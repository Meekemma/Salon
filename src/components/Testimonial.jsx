import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the base Swiper styles
import 'swiper/css/navigation'; // Import navigation styles
import { Navigation } from 'swiper/modules'; // Adjusted import
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import tiktok from '../assets/images/tiktok.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import '../styles/main.css';

const Testimonial = () => {
  const testimonies = [
    { text: 'The service is amazing, I always leave feeling refreshed!', name: 'Bukki.', avatar: facebook, stars: 5 },
    { text: 'A truly fantastic experience, will definitely be back.', name: 'Meekemma.', avatar: whatsapp, stars: 5 },
    { text: 'The staff is friendly and professional, highly recommend.', name: 'Linda C.', avatar: tiktok, stars: 4 },
    { text: 'I loved the manicure, the attention to detail was incredible.', name: 'John Uche.', avatar: whatsapp, stars: 5 },
    { text: 'Very relaxing spa treatment, worth every minute.', name: 'Emily Faith.', avatar: facebook, stars: 4 },
    { text: 'Excellent haircut, I’m so happy with the results.', name: 'Chris.', avatar: instagram, stars: 5 },
    { text: 'Great service, I will definitely return for another session.', name: 'Sara.', avatar: tiktok, stars: 5 },
    { text: 'The best nail polish service I’ve had, thank you!', name: 'Daniel Danny.', avatar: whatsapp, stars: 5 },
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
        <div className='text-left lg:text-center'>
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
                <div className='flex items-center'>
                  <img src={testimony.avatar} alt={`${testimony.name}'s avatar`} className='w-16 h-16 mb-4' loading='lazy'/>
                  <div className='ml-4 flex'>
                    {[...Array(testimony.stars)].map((_, i) => (
                      <FaStar key={i} className='text-yellow-500' />
                    ))}
                    {[...Array(5 - testimony.stars)].map((_, i) => (
                      <FaStar key={i + testimony.stars} className='text-gray-300' />
                    ))}
                  </div>
                </div>
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
