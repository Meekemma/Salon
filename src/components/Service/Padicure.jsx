// Padicure.jsx
// Last Updated: 23rd August 2025

import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Nailart from '../../assets/images/Nailart.jpeg';
import pedicure from '../../assets/images/pedicure.jpeg';
import colorNails from '../../assets/images/ColorNails.jpeg';
import pedi from '../../assets/images/pedi.jpeg';
import Nicemani from '../../assets/images/nicemani.jpeg';
import ladymani from '../../assets/images/ladymani.jpeg';
import shortpadi from '../../assets/images/shortpadi.jpeg';
import nailmani from '../../assets/images/nailmani.jpeg';
import manicure from '../../assets/images/manicure.jpeg';
import coolmani from '../../assets/images/coolmani.jpeg';
import manpedi from '../../assets/images/manpedi.jpeg';
import mani from '../../assets/images/mani.jpeg';

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

  const stylist = [
    { name: 'Classic Manicure', emoji: '💅', desc: 'Timeless style for everyday elegance' },
    { name: 'Spa Pedicure', emoji: '🛁', desc: 'Relaxing soak and polish perfection' },
    { name: 'Gel Finish', emoji: '💎', desc: 'Long-lasting glossy nails' },
    { name: 'Nail Art', emoji: '🎨', desc: 'Custom designs that stand out' },
    { name: 'French Manicure', emoji: '🇫🇷', desc: 'Elegant white-tipped finish' },
    { name: 'Luxury Care', emoji: '🌸', desc: 'Premium treatment for hands & feet' },
    { name: 'Matte Style', emoji: '🖤', desc: 'Smooth, bold and modern' },
    { name: 'Bright Colors', emoji: '🌈', desc: 'Playful shades for fun vibes' },
    { name: 'Minimalist Look', emoji: '🤍', desc: 'Simple, clean and stylish' },
    { name: 'Natural Shine', emoji: '✨', desc: 'Healthy glow with subtle polish' },
  ];

  // ✅ Likes state (load from localStorage or init with false)
  const [liked, setLiked] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("padicureLikes"));
    return saved && saved.length === manicurePedicureImages.length
      ? saved
      : Array(manicurePedicureImages.length).fill(false);
  });

  // ✅ Save likes to localStorage
  useEffect(() => {
    localStorage.setItem("padicureLikes", JSON.stringify(liked));
  }, [liked]);

  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  return (
    <>
      {/* Header */}
      <div className="text-left lg:text-center py-6">
        <h3 className="text-4xl font-bold text-gray-800">Pedicure & Manicure Service</h3>
        <p className="text-lg text-gray-500 mt-2 max-w-3xl mx-auto">
          Step into luxury with our Pedicure & Manicure services, designed to enhance your natural beauty. 
          Whether you prefer a chic, classic look or something trendy, we’ll customize your experience to reflect your unique style. 
          Treat yourself to the ultimate hand and foot care today!
        </p>
      </div>

      {/* Images with Like */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-8">
        {manicurePedicureImages.map((image, index) => (
          <div
            key={index}
            className="w-full md:w-96 lg:w-80 h-[420px] rounded-lg overflow-hidden shadow-lg flex flex-col justify-between"
          >
            {/* Image */}
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
              className="w-full h-80 object-contain"
            />

            {/* Like + Description */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
              <p className="text-gray-600 text-sm">{image.alt}</p>
              <button
                onClick={() => toggleLike(index)}
                className={`flex items-center gap-2 text-lg transition-all duration-200 ${
                  liked[index] ? 'text-red-500 scale-110' : 'text-gray-400 hover:text-red-400'
                }`}
              >
                {liked[index] ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stylist Tags */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-8">
        {stylist.map((style, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-6 py-5 bg-[#0D6E6E] text-white rounded-2xl shadow-md hover:bg-[#C19A6B] transition-colors duration-300 ease-in-out"
          >
            <span className="text-2xl mb-2">{style.emoji}</span>
            <h4 className="font-bold text-lg">{style.name}</h4>
            <p className="text-sm text-gray-100 mt-1 text-center">{style.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Padicure;
