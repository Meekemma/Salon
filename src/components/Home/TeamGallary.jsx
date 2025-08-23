import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Images
import team from '../../assets/images/team.jpeg';
import Angel from '../../assets/images/Angel.jpg';
import Jumbo from '../../assets/images/Jumbo.jpeg';
import client from '../../assets/images/client.jpeg';
import frenchteam from '../../assets/images/Frenchteam.jpeg';
import spalit from '../../assets/images/spalit.jpeg';
import AngelWhite from '../../assets/images/AngelWhite.jpg';

const TeamGallary = () => {
  const images = [
    { src: team, alt: 'Team Collaboration' },
    { src: Angel, alt: 'Angel Leading the Team' },
    { src: Jumbo, alt: 'Jumbo Team Meeting' },
    { src: client, alt: 'Client Interaction' },
    { src: frenchteam, alt: 'French Team Discussion' },
    { src: spalit, alt: 'Spalit Team' },
    { src: AngelWhite, alt: 'Angel White Presentation' },
  ];

  return (
    <div className="w-full px-4 py-12">
      <Swiper
        spaceBetween={20}
        loop
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={800}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1440: { slidesPerView: 4, spaceBetween: 40 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex items-center justify-center bg-gray-200 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              style={{ width: '100%', height: '300px' }}
            >
              <LazyLoadImage
                src={image.src}
                alt={image.alt}
                effect="blur"
                className="w-full h-full object-cover"
              />
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-sm md:text-base font-medium p-3 text-center">
                {image.alt}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamGallary;
