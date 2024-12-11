import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import team from '../assets/images/team.jpeg';
import Angel from '../assets/images/Angel.jpg';
import jumbo from '../assets/images/jumbo.jpeg';
import client from '../assets/images/client.jpeg';
import frenchteam from '../assets/images/frenchteam.jpeg';
import spalit from '../assets/images/spalit.jpeg';
import AngelWhite from '../assets/images/AngelWhite.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const TeamGallary = () => {
  const images = [
    { src: team, alt: 'Team Collaboration' },
    { src: Angel, alt: 'Angel Leading the Team' },
    { src: jumbo, alt: 'Jumbo Team Meeting' },
    { src: client, alt: 'Client Interaction' },
    { src: frenchteam, alt: 'French Team Discussion' },
    { src: spalit, alt: 'Spalit Team' },
    { src: AngelWhite, alt: 'Angel White Presentation' },
  ];

  return (
    <div className="w-full px-4 py-8">
      <Swiper
        spaceBetween={20} // General space between slides
        loop
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={600}
        breakpoints={{
          // Responsive settings
          640: {
            slidesPerView: 1, // 1 slide at a time on mobile
            spaceBetween: 15, // Slight space on mobile
          },
          768: {
            slidesPerView: 2, // 2 slides on tablets
            spaceBetween: 20, // Moderate space on tablets
          },
          1024: {
            slidesPerView: 3, // 3 slides on larger screens
            spaceBetween: 50, // More space on larger screens
          },
          1440: {
            slidesPerView: 4, // 4 slides on extra-large screens
            spaceBetween: 50, // Maximum space on extra-large screens
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative flex items-center justify-center bg-gray-100 rounded-md overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              style={{ width: '450px', height: '300px' }} // Increased width and height
            >
              <LazyLoadImage
                src={image.src}
                alt={image.alt}
                effect="blur"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamGallary;
