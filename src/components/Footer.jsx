import React from 'react';
import { useNavigate } from 'react-router-dom';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import tiktok from '../assets/images/tiktok.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import visa from '../assets/images/visa.svg';
import mastercard from '../assets/images/Mastercard.svg';
import '../styles/main.css';
import angel from '../assets/images/Angel.jpg';

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
  
  const contactDetails = {
    phone: '+123 456 7890',
    email: 'info@store.com',
    address: '123 Main Street, City, Country',
  };

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center sm:text-left">
          {/* Company Info and Social Media */}
          <div>
            <img 
              src= {angel} 
              alt="Angel Logo" 
              loading='lazy'
              style={{
                borderRadius: '8px',
              }}
              
              />
            <p className="text-base mb-4 pt-3">
              Providing the best haircuts, manicures, pedicures, and nail polishing services in town.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {Object.entries(socialMediaLinks).map(([key, url], index) => (
                <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                  <img src={eval(key)} alt={`social-${key}`} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="text-base hover:underline cursor-pointer" onClick={() => handleNavigate(link.path)}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-base">
              Phone: <a href={`tel:${contactDetails.phone}`} className="underline">{contactDetails.phone}</a>
            </p>

            <p className="text-base">
              Email: <a href={`mailto:${contactDetails.email}`} className="underline">{contactDetails.email}</a>
            </p>
            <p className="text-base">Address: {contactDetails.address}</p>
          </div>

          {/* Operating Hours */}
          <div>
            <h2 className="text-lg font-bold mb-4">Operating Hours</h2>
            <p className="text-base">Mon - Saturday: 9am - 10pm</p>
            <p className="text-base">Sun: 9am - 8pm</p>
          </div>

          {/* About, Terms & Conditions, Privacy Policy */}
          <div>
            <h2 className="text-lg font-bold mb-4">Legal Information</h2>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index} className="text-base hover:underline cursor-pointer" onClick={() => handleNavigate(link.path)}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription and Payment Methods */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 items-center">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h2>
            <form className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 justify-center sm:justify-start">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 text-gray-900 rounded-md mb-2 sm:mb-0"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Subscribe</button>
            </form>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="text-base">Accepted Payments:</span>
            <div className="flex space-x-2">
              <img src={visa} alt="Visa" className="w-10 h-6" />
              <img src={mastercard} alt="MasterCard" className="w-10 h-6" />
            </div>
          </div>
        </div>


        {/* Copyright Section */}
        <div className="mt-4 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Angel De Whyte Unisex Salon. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
