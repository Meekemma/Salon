import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional effect

import js from '../assets/images/js.svg';
import linkedin from '../assets/images/linkedin.svg';
import redis from '../assets/images/redis.svg';
import python from '../assets/images/python.svg';
import reactjs from '../assets/images/reactjs.svg';
import twitter from '../assets/images/twitter.svg';
import instagram from '../assets/images/instagram.svg';
import tailwindcss from '../assets/images/tailwindcss.svg';
import html from '../assets/images/html.svg';

const Spa = () => {
  const haircutImages = [
    { src: js, alt: 'JavaScript' },
    { src: linkedin, alt: 'LinkedIn' },
    { src: redis, alt: 'Redis' },
    { src: python, alt: 'Python' },
    { src: reactjs, alt: 'ReactJS' },
    { src: twitter, alt: 'Twitter' },
    { src: instagram, alt: 'Instagram' },
    { src: tailwindcss, alt: 'Tailwind CSS' },
    { src: html, alt: 'HTML' }
  ];

  return (
    <>
      <div className="text-left lg:text-center py-6">
        <h3 className="text-4xl font-bold text-gray-800">Spa Service</h3>
        <p className="text-lg text-gray-500 mt-2">
          Indulge in a luxurious spa experience designed to refresh, rejuvenate, and relax. Whether you're looking for a soothing facial, a calming massage, or a revitalizing body treatment, our professional spa services will leave you feeling renewed and glowing. Treat yourself today to the ultimate pampering session!
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-4">
        {haircutImages.map((image, index) => (
          <div key={index} className="w-full md:w-96 lg:w-80 h-80 rounded-lg overflow-hidden shadow-md"> {/* Increased width and height */}
            <LazyLoadImage
              src={image.src}
              alt={image.alt}
              effect="blur"
              height="100%"
              width="100%"
              wrapperProps={{
                style: { 
                  transitionDelay: "1s", // Wait 1 second before starting the transition effect
                  backgroundColor: "rgba(0,0,0,0.1)" // Optional: add styling to the wrapper itself
                },
              }}
              className="w-full h-full object-contain" // Maintain aspect ratio
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Spa;
