import React, { useState, useEffect } from "react";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import tiktok from "../../assets/images/tiktok.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import Phone from "@mui/icons-material/Phone";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Moon icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Sun icon
import "../../styles/main.css";

const Info = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return savedMode === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-3 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Social Media */}
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61566949900907" 
             target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src={facebook} alt="facebook" className="h-6 w-6 hover:opacity-80 transition" />
          </a>
          <a href="https://www.instagram.com/meeky007/" 
             target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={instagram} alt="instagram" className="h-6 w-6 hover:opacity-80 transition" />
          </a>
          <a href="https://www.tiktok.com" 
             target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <img src={tiktok} alt="tiktok" className="h-6 w-6 hover:opacity-80 transition" />
          </a>
          <a href="https://wa.me/+2349076309004" 
             target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <img src={whatsapp} alt="whatsapp" className="h-6 w-6 hover:opacity-80 transition" />
          </a>
        </div>

        {/* Contact & Mode Toggle */}
        <div className="flex items-center space-x-5">
          <a
            href="tel:+1234567890"
            className="flex items-center space-x-2 hover:text-blue-500 transition"
          >
            <Phone style={{ fontSize: "18px" }} />
            <span className="text-sm font-medium">+123 456 7890</span>
          </a>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Brightness7Icon className="text-yellow-400" />
            ) : (
              <Brightness4Icon className="text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
