import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import L from 'leaflet';
import { FaUser, FaEnvelope, FaPhoneAlt, FaRegComment } from 'react-icons/fa';

const CustomContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const position = [6.4625, 3.6015]; // Business location coordinates

  // Custom red icon for the marker
  const redIcon = new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    iconSize: [40, 40], // Marker size
    iconAnchor: [20, 40], // Center of the icon
    popupAnchor: [0, -40] // Popup position
  });

  return (
    <div className="container mx-auto px-8 py-4">
      {/* Contact Us Title */}
      <h2 className="text-2xl font-bold mb-4 underline sm:text-center text-left">
        Contact Us
      </h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
        {/* Name Field */}
        <div className="mb-4 flex items-center border-b-2 border-gray-300">
          <FaUser className="text-gray-500 mr-2" />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-2 focus:outline-none focus:border-yellow-500"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4 flex items-center border-b-2 border-gray-300">
          <FaEnvelope className="text-gray-500 mr-2" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            className="w-full px-4 py-2 focus:outline-none focus:border-yellow-500"
          />
        </div>

        {/* Phone Field */}
        <div className="mb-4 flex items-center border-b-2 border-gray-300">
          <FaPhoneAlt className="text-gray-500 mr-2" />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 focus:outline-none focus:border-yellow-500"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4 flex items-center border-b-2 border-gray-300">
          <FaRegComment className="text-gray-500 mr-2" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Write your message here"
            className="w-full px-4 py-2 focus:outline-none focus:border-yellow-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-6 py-2 bg-gold text-white rounded-full hover:bg-deep-teal focus:outline-none carousel-button"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Map Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 underline">Find Us Here</h2>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="h-96 rounded-lg shadow-lg">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={redIcon}>
            <Popup>
              We are located here! <br />
              Block A3, Office 471, Eastland Complex, Abraham Adesanya, Lekki-Ajah, Lagos, Nigeria.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default CustomContact;
