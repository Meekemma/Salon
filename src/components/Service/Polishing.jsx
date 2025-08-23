// Polishing.jsx
// Last Updated: 23rd August 2025

import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import beautiful from '../../assets/images/Beautiful.jpeg';
import blue from '../../assets/images/blue.jpeg';
import body from '../../assets/images/body.jpeg';
import cutie from '../../assets/images/cutie.jpeg';
import french from '../../assets/images/french.jpeg';
import hand from '../../assets/images/hand.jpeg';
import legs from '../../assets/images/legs.jpeg';
import trend from '../../assets/images/Trends.jpeg';
import pick from '../../assets/images/Pick.jpeg';
import nailtech from '../../assets/images/nailtech.jpeg';
import tropez from '../../assets/images/Tropez.jpeg';
import nail from '../../assets/images/nail.jpeg';

const Polishing = () => {
  const polishImages = [
    { src: beautiful, alt: 'Elegant polished nails with a natural shine' },
    { src: blue, alt: 'Trendy blue nail polish with a glossy finish' },
    { src: body, alt: 'Body-inspired neutral polish for everyday wear' },
    { src: cutie, alt: 'Cute nail art design with vibrant colors' },
    { src: french, alt: 'Classic French tips with white edges' },
    { src: hand, alt: 'Hand close-up showing clean polish work' },
    { src: legs, alt: 'Legs and toes with matching nail polish' },
    { src: trend, alt: 'Trending nail design for modern looks' },
    { src: pick, alt: 'Chic pink polish with smooth finish' },
    { src: nailtech, alt: 'Nail technician working on a manicure' },
    { src: tropez, alt: 'Luxury polish style inspired by St. Tropez' },
    { src: nail, alt: 'Well-groomed nails with minimal polish' },
  ];

  const stylist = [
    { name: 'French Tips', emoji: '🇫🇷💅', desc: 'Classic, elegant and timeless' },
    { name: 'Glitter Polish', emoji: '✨', desc: 'Sparkle that shines everywhere' },
    { name: 'Matte Finish', emoji: '🖤', desc: 'Smooth, bold and modern look' },
    { name: 'Ombre Nails', emoji: '🌈', desc: 'Beautiful gradient transitions' },
    { name: 'Chrome Nails', emoji: '🌟', desc: 'Shiny metallic perfection' },
    { name: 'Gel Polish', emoji: '💎', desc: 'Long-lasting glossy finish' },
    { name: 'Marble Effect', emoji: '🪨', desc: 'Unique swirling elegance' },
    { name: 'Minimalist Design', emoji: '✨🤍', desc: 'Simple yet stylish touch' },
    { name: 'Bright Colors', emoji: '🎨', desc: 'Bold pops of vibrant shades' },
    { name: 'Classic Red', emoji: '❤️', desc: 'Iconic and forever trendy' },
    { name: 'Nude Shades', emoji: '🤎', desc: 'Subtle beauty for every occasion' },
    { name: 'Floral Art', emoji: '🌸', desc: 'Delicate designs for soft vibes' },
  ];

  // ✅ State for likes
  const [liked, setLiked] = useState(() => {
    // Load saved likes or initialize with false for each image
    const saved = JSON.parse(localStorage.getItem("polishLikes"));
    return saved && saved.length === polishImages.length
      ? saved
      : Array(polishImages.length).fill(false);
  });

  // ✅ Save likes to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("polishLikes", JSON.stringify(liked));
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
        <h3 className="text-4xl font-bold text-gray-800">Nail Polishing Service</h3>
        <p className="text-lg text-gray-500 mt-2">
          Transform your nails into a masterpiece with our professional nail polishing services. 
          From classic elegance to bold statement colors, we offer a variety of options that will 
          leave your nails shining and flawless. Pamper yourself today for the perfect touch of glamour!
        </p>
      </div>

      {/* Polishing images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-8">
        {polishImages.map((image, index) => (
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

export default Polishing;
