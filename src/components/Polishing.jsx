import React from 'react'
import js from '../assets/images/js.svg';
import linkedin from '../assets/images/linkedin.svg';
import redis from '../assets/images/redis.svg';
import python from '../assets/images/python.svg';
import reactjs from '../assets/images/reactjs.svg';
import twitter from '../assets/images/twitter.svg';
import instagram from '../assets/images/instagram.svg';
import tailwindcss from '../assets/images/tailwindcss.svg';
import html from '../assets/images/html.svg';

const Polishing = () => {
    const haircutImages = [
        js, linkedin, redis, python, 
        reactjs, twitter, instagram, tailwindcss, html
      ]; 
    
      const stylist = [
        'Dreadlocks', 'Twist-Out', 'Buzz Cut', 'Curly Top', 'Caesar Fade', 
        'Temple Fade', '360 Waves', 'Frohawk', 'Fade with Part', 'Short Afro', 
        'Taper Fade', 'Flat Top'
      ];

  return (
    <>
        <div className="text-center py-6">
            <h3 className="text-4xl font-bold text-gray-800">Nail Polishing Service</h3>
            <p className="text-lg text-gray-500 mt-2">
            Our nail polishing services give your nails a new glow.
            </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-4'>
        {haircutImages.map((image, index) => (
          <div 
            key={index} 
            className='w-full h-64 rounded-lg overflow-hidden shadow-md'>
            <img 
              src={image} 
              alt={`Haircut ${index + 1}`} 
              className='w-full h-full object-contain'
            />
          </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-center items-center gap-4 mt-6'>
        {stylist.map((style, index) => (
          <div 
            key={index} 
            className='px-6 py-3 bg-[#0D6E6E] text-white font-semibold rounded-full shadow-md hover:bg-[#C19A6B] transition-colors duration-300 ease-in-out'>
            {style}
          </div>
        ))}
      </div>


    </>
  )
}

export default Polishing