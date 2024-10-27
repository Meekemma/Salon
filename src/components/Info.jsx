import React, { useState, useEffect } from 'react';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import tiktok from '../assets/images/tiktok.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import Phone from '@mui/icons-material/Phone';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon for dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon for light mode
import '../styles/main.css';

const Info = () => {
  // State to manage dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get the initial mode from localStorage or default to false (light mode)
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'true';
  });

  // Update body class and localStorage whenever the mode changes
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('dark-mode', isDarkMode);
  }, [isDarkMode]);

  // Function to toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`mx-auto px-8 my-3 py-2`}>
      <div className="flex justify-between items-center">
        
        {/* Left side: Social media icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" className="w-6 h-5" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" className="w-6 h-5" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="tiktok" className="w-6 h-5" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="whatsapp" className="w-6 h-5" />
          </a>
        </div>

        {/* Right side: Phone icon and number */}
        <div className="flex items-center space-x-2">
          <Phone className="mr-2" />
          <span>+123 456 7890</span>

          {/* Toggle icon for dark/light mode */}
          <div onClick={toggleDarkMode} className="cursor-pointer">
            {isDarkMode ? (
              <Brightness7Icon className="text-yellow-500" /> // Sun icon for light mode
            ) : (
              <Brightness4Icon className="text-gray-800" /> // Moon icon for dark mode
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
