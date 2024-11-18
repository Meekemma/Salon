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
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="mx-auto px-4 my-3 py-2">
      <div className="flex justify-between items-center">
        {/* Left side: Social media icons */}
        <div className="flex items-center space-x-3">
          <a href="https://www.facebook.com/profile.php?id=61566949900907" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/meeky007/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" className="h-4 w-4" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="tiktok" className="h-4 w-4" />
          </a>
          <a href="https://wa.me/+2349076309004" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="whatsapp" className="h-4 w-4" />
          </a>
        </div>

        {/* Right side: Phone icon and number */}
        <div className="flex items-center space-x-2">
        <a href="tel:+1234567890" className="flex items-center space-x-2">
          <Phone style={{ fontSize: '18px' }} className="text-gray-800" />
          <span className="text-sm whitespace-nowrap">+123 456 7890</span>
        </a>

          <div onClick={toggleDarkMode} className="cursor-pointer">
            {isDarkMode ? (
              <Brightness7Icon className="text-yellow-500 text-sm" />
            ) : (
              <Brightness4Icon className="text-gray-800 text-sm" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
