// Haircut.jsx
// Last Updated: 23rd August 2025

import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import fadecute from '../../assets/images/fadecute.jpeg';
import black from '../../assets/images/black.jpeg';
import afro from '../../assets/images/Afro.jpeg';
import blackbest from '../../assets/images/black_best.jpeg';
import blackmen from '../../assets/images/Blackmen.jpeg';
import Dreadlock from '../../assets/images/Dreadlock.jpeg';
import dreadlockmen from '../../assets/images/Dreadlockmen.jpeg';
import male from '../../assets/images/male.jpeg';
import fade from '../../assets/images/fade.jpeg';
import mohawk from '../../assets/images/Mohawk.jpeg';
import lowfade from '../../assets/images/lowfade.jpeg';
import skincut from '../../assets/images/skincut.jpeg';

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
    { name: 'Dreadlocks', emoji: '🌀', desc: 'Trendy and natural rope-like style' },
    { name: 'Twist-Out', emoji: '✨', desc: 'Defined curls with volume' },
    { name: 'Buzz Cut', emoji: '✂️', desc: 'Simple, neat, and easy to maintain' },
    { name: 'Curly Top', emoji: '🌿', desc: 'Natural curls with modern flair' },
    { name: 'Caesar Fade', emoji: '🏛️', desc: 'Timeless style with short edges' },
    { name: 'Temple Fade', emoji: '⚡', desc: 'Sharp edges with faded temples' },
    { name: '360 Waves', emoji: '🌊', desc: 'Smooth, circular wave pattern' },
    { name: 'Frohawk', emoji: '🔥', desc: 'Edgy afro-inspired mohawk' },
    { name: 'Fade with Part', emoji: '➗', desc: 'Fade with a clean razor part' },
    { name: 'Short Afro', emoji: '🌱', desc: 'Classic rounded afro look' },
    { name: 'Taper Fade', emoji: '🎯', desc: 'Balanced fade with neat finish' },
    { name: 'Flat Top', emoji: '⬛', desc: 'Structured and bold top style' },
  ];

  // ✅ State for likes (with persistence)
  const [liked, setLiked] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("haircutLikes"));
    return saved && saved.length === haircutImages.length
      ? saved
      : Array(haircutImages.length).fill(false);
  });

  // ✅ Save likes to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("haircutLikes", JSON.stringify(liked));
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
        <h3 className="text-4xl font-bold text-gray-800">Haircut Service</h3>
        <p className="text-lg text-gray-500 mt-2">
          Step into our salon and let us craft the perfect look tailored just for you. 
          Whether you're after a sharp, sleek cut or a bold, fresh style, our expert barbers have got you covered. 
          Book today for a haircut that speaks to your unique personality!
        </p>
      </div>

      {/* Haircut images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-8">
        {haircutImages.map((image, index) => (
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

            {/* Like button */}
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

      {/* Stylist tags */}
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

export default Haircut;
