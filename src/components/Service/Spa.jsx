// Spa.jsx
// Last Updated: 23rd August 2025

import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import spa from '../../assets/images/spa.jpeg';
import spablack from '../../assets/images/spablack.jpeg';
import spagiffy from '../../assets/images/spagiffy.jpeg';
import spafyp from '../../assets/images/spafyp.jpeg';
import spagirls from '../../assets/images/spagirls.jpeg';
import spahot from '../../assets/images/spahot.jpg';
import spalady from '../../assets/images/spalady.jpg';
import spalit from '../../assets/images/spalit.jpeg';
import spatrend from '../../assets/images/spatrend.jpeg';
import spacheck from '../../assets/images/spacheck.jpeg';
import spalas from '../../assets/images/Spalas.jpeg';
import spaim from '../../assets/images/spaim.jpeg';



const Spa = () => {
  const spaImages = [
    { src: spa, alt: 'Tranquil spa setting with soothing lighting' },
    { src: spablack, alt: 'Luxurious spa ambience for ultimate relaxation' },
    { src: spagiffy, alt: 'Rediscover serenity with our calming spa treatments' },
    { src: spafyp, alt: 'Revitalizing spa experience featuring premium products' },
    { src: spagirls, alt: 'Relaxing group spa session with friends' },
    { src: spahot, alt: 'Hot stone therapy for muscle relaxation and stress relief' },
    { src: spalady, alt: 'Lady enjoying a rejuvenating facial at the spa' },
    { src: spalit, alt: 'Lit candles and aroma oils creating a serene spa atmosphere' },
    { src: spatrend, alt: 'Trendy spa interiors blending elegance and comfort' },
    { src: spacheck, alt: 'Spa checklist for a customized wellness experience' },
    { src: spalas, alt: 'Lasting rejuvenation from expert spa therapies' },
    { src: spaim, alt: 'Lasting rejuvenation spa therapies' },
  ];

  const stylist = [
    { name: 'Hot Stone Massage', emoji: '🪨🔥', desc: 'Deep relaxation with soothing heat' },
    { name: 'Aromatherapy', emoji: '🌸💨', desc: 'Essential oils for mind & body balance' },
    { name: 'Facial Glow', emoji: '💆‍♀️✨', desc: 'Rejuvenating treatments for radiant skin' },
    { name: 'Body Scrub', emoji: '🧖‍♀️🧴', desc: 'Exfoliation that leaves skin silky smooth' },
    { name: 'Sauna Therapy', emoji: '🔥🧘‍♀️', desc: 'Detox and unwind in calming warmth' },
    { name: 'Hydrotherapy', emoji: '💧', desc: 'Water treatments for total refreshment' },
    { name: 'Couples Spa', emoji: '💕', desc: 'Relaxing treatments to share together' },
    { name: 'Detox Wrap', emoji: '🌿🛌', desc: 'Natural wraps that cleanse and purify' },
    { name: 'Foot Reflexology', emoji: '🦶🌸', desc: 'Relieve stress through pressure points' },
    { name: 'Deep Tissue Massage', emoji: '💪💆‍♂️', desc: 'Targeted relief for muscle tension' },
    { name: 'Luxury Bath Ritual', emoji: '🛁', desc: 'Soak in ultimate indulgence' },
    { name: 'Meditation Therapy', emoji: '🧘‍♂️🌅', desc: 'Calm your mind and spirit' },
  ];

  // ✅ Likes state (persist in localStorage)
  const [liked, setLiked] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("spaLikes"));
    return saved && saved.length === spaImages.length
      ? saved
      : Array(spaImages.length).fill(false);
  });

  useEffect(() => {
    localStorage.setItem("spaLikes", JSON.stringify(liked));
  }, [liked]);

  const toggleLike = (index) => {
    const updated = [...liked];
    updated[index] = !updated[index];
    setLiked(updated);
  };

  return (
    <>
      {/* Header */}
      <div className="text-left lg:text-center py-6">
        <h3 className="text-4xl font-bold text-gray-800">Spa Service</h3>
        <p className="text-lg text-gray-500 mt-2">
          Indulge in a luxurious spa experience designed to refresh, rejuvenate, and relax. 
          Whether you're looking for a soothing facial, a calming massage, or a revitalizing 
          body treatment, our professional spa services will leave you feeling renewed and glowing. 
          Treat yourself today to the ultimate pampering session!
        </p>
      </div>

      {/* Spa images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-8">
        {spaImages.map((image, index) => (
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

            {/* Like + description */}
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

export default Spa;
