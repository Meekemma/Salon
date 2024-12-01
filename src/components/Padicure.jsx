import React from 'react';
import js from '../assets/images/js.svg';
import linkedin from '../assets/images/linkedin.svg';
import redis from '../assets/images/redis.svg';
import python from '../assets/images/python.svg';
import reactjs from '../assets/images/reactjs.svg';
import twitter from '../assets/images/twitter.svg';
import instagram from '../assets/images/instagram.svg';
import tailwindcss from '../assets/images/tailwindcss.svg';
import html from '../assets/images/html.svg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Padicure = () => {
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
        <h3 className="text-4xl font-bold text-gray-800 text-wrap">
          Pedicure & Manicure Service
        </h3>
        <p className="text-lg text-gray-500 mt-2">
          Step into luxury with our Pedicure & Manicure services, designed to enhance your natural beauty. Whether you prefer a chic, classic look or something trendy, we’ll customize your experience to reflect your unique style. Treat yourself to the ultimate hand and foot care today!
        </p>
      </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-8'>
        {haircutImages.map((image, index) => (
          <div 
            key={index} 
            className='w-full md:w-96 lg:w-80 h-96 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105'>
            <LazyLoadImage 
              src={image.src}
              alt={image.alt}
              effect="blur" // You can choose other effects like "opacity", "black-and-white", etc.
              height="100%" 
              width="100%" 
              wrapperProps={{
                style: { 
                  transitionDelay: "1s", // Wait 1 second before starting the transition effect
                  backgroundColor: "rgba(0,0,0,0.1)" // Optional: add styling to the wrapper itself
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
