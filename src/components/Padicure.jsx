import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Nailart from '../assets/images/Nailart.jpeg';
import pedicure from '../assets/images/pedicure.jpeg';
import colorNails from '../assets/images/colorNails.jpeg';
import pedi from '../assets/images/pedi.jpeg';
import Nicemani from '../assets/images/Nicemani.jpeg';
import ladymani from '../assets/images/ladymani.jpeg';
import shortpadi from '../assets/images/shortpadi.jpeg';
import nailmani from '../assets/images/nailmani.jpeg';
import manicure from '../assets/images/manicure.jpeg';
import coolmani from '../assets/images/coolmani.jpeg';
import manpedi from '../assets/images/manpedi.jpeg';
import mani from '../assets/images/mani.jpeg';

const Padicure = () => {
  const manicurePedicureImages = [
    { src: Nailart, alt: 'Elegant nail art with intricate designs' },
    { src: pedicure, alt: 'Refreshing pedicure session with vibrant colors' },
    { src: colorNails, alt: 'Colorful nails with a glossy finish' },
    { src: pedi, alt: 'Luxurious foot spa during a pedicure' },
    { src: Nicemani, alt: 'A neat and classy manicure' },
    { src: ladymani, alt: 'Stylish manicure for the modern woman' },
    { src: shortpadi, alt: 'Short and clean nails with a pop of color' },
    { src: nailmani, alt: 'Nail care perfection with a natural finish' },
    { src: manicure, alt: 'Classic manicure with a touch of elegance' },
    { src: coolmani, alt: 'Trendy nails with a cool and modern vibe' },
    { src: manpedi, alt: 'Matching manicure and pedicure with style' },
    { src: mani, alt: 'Simple and elegant manicure for any occasion' },
  ];

  return (
    <>
      <div className="text-left lg:text-center py-6">
        <h3 className="text-4xl font-bold text-gray-800 text-wrap">
          Pedicure & Manicure Service
        </h3>
        <p className="text-lg text-gray-500 mt-2">
          Step into luxury with our Pedicure & Manicure services, designed to enhance your natural beauty. Whether you prefer a chic, classic look or something trendy, we’ll customize your experience to reflect your unique style. Treat yourself to the ultimate hand and foot care today!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-8">
        {manicurePedicureImages.map((image, index) => (
          <div 
            key={index} 
            className="w-full md:w-96 lg:w-80 h-96 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
            <LazyLoadImage 
              src={image.src}
              alt={image.alt}
              effect="blur"
              height="100%"
              width="100%"
              wrapperProps={{
                style: { 
                  transitionDelay: "1s",
                  backgroundColor: "rgba(0,0,0,0.1)"
                },
              }}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Padicure;
