import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMoneyBillWave, FaUniversity, FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa'; // Payment + map icons
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import tiktok from '../assets/images/tiktok.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import angel from '../assets/images/Angel.jpg';
import '../styles/main.css';

const Footer = () => {
  const socialMediaLinks = {
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com/meeky007/',
    tiktok: 'https://www.tiktok.com',
    whatsapp: 'https://wa.me/+2349076309004',
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ];

  // Each branch with coordinates for Google Maps
  const contactDetails = [
    {
      label: 'Main Branch',
      address: 'Swiss Park Mall, Opposite Unity Estate, Amuwo Odofin, Festac, Lagos, Nigeria',
      mapsLink: 'https://www.google.com/maps?q=6.4693,3.3029',
    },
    {
      label: 'Festac Branch',
      address: 'Swiss Park Hotel, 12 Road, Festac, Lagos',
      mapsLink: 'https://www.google.com/maps?q=6.4732, 3.2932',
    },
  ];

  const navigate = useNavigate();
  const handleNavigate = (path) => navigate(path);

  return (
    <footer className="bg-gray-900 text-white py-8" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center sm:text-left">
          
          {/* Company Info */}
          <div>
            <img 
              src={angel} 
              alt="Angel De Whyte Unisex Salon logo" 
              loading="lazy"
              className="rounded-lg mb-3"
            />
            <p className="text-base mb-4">
              Angel De Whyte Unisex Salon provides premium haircuts, manicures, pedicures, and nail polishing services for everyone.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {Object.entries(socialMediaLinks).map(([key, url], index) => (
                <a 
                  key={index} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Follow us on ${key}`}
                >
                  <img src={eval(key)} alt={`${key} icon`} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li 
                  key={index} 
                  className="text-base hover:underline cursor-pointer" 
                  onClick={() => handleNavigate(link.path)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-base">
              Phone: <a href="tel:+1237030017113" className="underline">+123 703 001 7113</a>
            </p>
            <p className="text-base">
              Email: <a href="mailto:angeldewhyteunisexsalon1@gmail.com" className="underline">angeldewhyteunisexsalon1@gmail.com</a>
            </p>
            {contactDetails.map((branch, idx) => (
              <p key={idx} className="text-base">
                <strong>{branch.label}:</strong> {branch.address}{" "}
                <a 
                  href={branch.mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-yellow-400 hover:underline ml-1"
                >
                  <FaMapMarkerAlt className="mr-1" /> View on Map
                </a>
              </p>
            ))}
          </div>

          {/* Operating Hours */}
          <div>
            <h2 className="text-lg font-bold mb-4">Operating Hours</h2>
            <p className="text-base">Mon - Sat: 9am - 10pm</p>
            <p className="text-base">Sun: 9am - 8pm</p>
          </div>

          {/* Legal Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Legal Information</h2>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li 
                  key={index} 
                  className="text-base hover:underline cursor-pointer" 
                  onClick={() => handleNavigate(link.path)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

       {/* Payment Methods */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <span className="text-sm sm:text-base">Accepted Payments:</span>
            <div className="flex space-x-3 sm:space-x-4 text-sm sm:text-lg">
              <span className="flex items-center space-x-1">
                <FaMoneyBillWave className="text-base sm:text-lg" /> <span>Cash</span>
              </span>
              <span className="flex items-center space-x-1">
                <FaUniversity className="text-base sm:text-lg" /> <span>Bank Transfer</span>
              </span>
              <span className="flex items-center space-x-1">
                <FaCreditCard className="text-base sm:text-lg" /> <span>Cards</span>
              </span>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="mt-4 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Angel De Whyte Unisex Salon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
