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

const Spa = () => {
    const haircutImages = [
        js, linkedin, redis, python, 
        reactjs, twitter, instagram, tailwindcss, html
      ]; 
  return (
    <>
        <div className="text-center py-6">
            <h3 className="text-4xl font-bold text-gray-800">Spa Service</h3>
            <p className="text-lg text-gray-500 mt-2">
            Enjoy a clean and professional shaving experience.
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

    </>
  )
}

export default Spa