import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import beautiful from '../assets/images/Beautiful.jpeg';
import blue from '../assets/images/blue.jpeg';
import body from '../assets/images/body.jpeg';
import cutie from '../assets/images/cutie.jpeg';
import french from '../assets/images/french.jpeg';
import hand from '../assets/images/hand.jpeg';
import legs from '../assets/images/legs.jpeg';
import trend from '../assets/images/Trends.jpeg';
import pick from '../assets/images/Pick.jpeg';
import nailtech from '../assets/images/nailtech.jpeg';
import tropez from '../assets/images/Tropez.jpeg';
import nail from '../assets/images/nail.jpeg';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Polishing = () => {
  const haircutImages = [
    { src: beautiful, alt: 'beautiful' },
    { src: blue, alt: 'blue' },
    { src: body, alt: 'body' },
    { src: cutie, alt: 'cutie' },
    { src: french, alt: 'french' },
    { src: hand, alt: 'hand' },
    { src: legs, alt: 'legs' },
    { src: trend, alt: 'trend' },
    { src: pick, alt: 'pick' },
    { src: nailtech, alt: 'nailtech' },
    { src: tropez, alt: 'tropez' },
    { src: nail, alt: 'nail' },
  ];

  const stylist = [
    'Dreadlocks', 'Twist-Out', 'Buzz Cut', 'Curly Top', 'Caesar Fade', 
    'Temple Fade', '360 Waves', 'Frohawk', 'Fade with Part', 'Short Afro', 
    'Taper Fade', 'Flat Top'
  ];

  return (
    <>
      <div className="text-left lg:text-center py-6">
        <h3 className="text-4xl font-bold text-gray-800">Nail Polishing Service</h3>
        <p className="text-lg text-gray-500 mt-2">
          Transform your nails into a masterpiece with our professional nail polishing services. From classic elegance to bold statement colors, we offer a variety of options that will leave your nails shining and flawless. Pamper yourself today for the perfect touch of glamour!
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

export default Polishing;
