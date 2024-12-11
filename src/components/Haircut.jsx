import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import fadecute from '../assets/images/fadecute.jpeg';
import black from '../assets/images/black.jpeg';
import afro from '../assets/images/Afro.jpeg';
import blackbest from '../assets/images/black_best.jpeg';
import blackmen from '../assets/images/blackmen.jpeg';
import Dreadlock from '../assets/images/Dreadlock.jpeg';
import dreadlockmen from '../assets/images/dreadlockmen.jpeg';
import male from '../assets/images/male.jpeg';
import fade from '../assets/images/fade.jpeg';
import mohawk from '../assets/images/Mohawk.jpeg';
import lowfade from '../assets/images/lowfade.jpeg';
import skincut from '../assets/images/skincut.jpeg';

const Haircut = () => {
  const haircutImages = [
    { src: mohawk, alt: 'Bold mohawk with sharp, edgy lines' },
    { src: fadecute, alt: 'Stylish fade cut with a smooth finish' },
    { src: fade, alt: 'Classic fade haircut for a clean and polished look' },
    { src: blackbest, alt: 'Trendsetting black hairstyle with a sleek design' },
    { src: dreadlockmen, alt: 'Defined dreadlocks styled for a modern vibe' },
    { src: Dreadlock, alt: 'Long and well-maintained dreadlocks' },
    { src: afro, alt: 'Natural afro with a voluminous shape' },
    { src: male, alt: 'Neat and versatile haircut for men' },
    { src: lowfade, alt: 'Low fade cut for a subtle yet sophisticated style' },
    { src: blackmen, alt: 'Sharp haircut for black men with attention to detail' },
    { src: black, alt: 'Classic black hairstyle with a timeless appeal' },
    { src: skincut, alt: 'Skin cut for a bold and minimalist look' },
  ];

  const stylist = [
    'Dreadlocks', 'Twist-Out', 'Buzz Cut', 'Curly Top', 'Caesar Fade',
    'Temple Fade', '360 Waves', 'Frohawk', 'Fade with Part', 'Short Afro',
    'Taper Fade', 'Flat Top',
  ];

  return (
    <>
      <div className="text-left lg:text-center py-6">
        <h3 className="text-4xl font-bold text-gray-800">Haircut Service</h3>
        <p className="text-lg text-gray-500 mt-2">
          Step into our salon and let us craft the perfect look tailored just for you. Whether you're after a sharp, sleek cut or a bold, fresh style, our expert barbers have got you covered. Book today for a haircut that speaks to your unique personality!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-8">
        {haircutImages.map((image, index) => (
          <div
            key={index}
            className="w-full md:w-96 lg:w-80 h-96 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <LazyLoadImage
              src={image.src}
              alt={image.alt}
              effect="blur"
              height="100%"
              width="100%"
              wrapperProps={{
                style: {
                  transitionDelay: '1s',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                },
              }}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 px-4 py-6">
        {stylist.map((style, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-4 py-3 bg-[#0D6E6E] text-white font-semibold text-center rounded-full shadow-md hover:bg-[#C19A6B] transition-colors duration-300 ease-in-out text-sm sm:text-base"
          >
            {style}
          </div>
        ))}
      </div>
    </>
  );
};

export default Haircut;
