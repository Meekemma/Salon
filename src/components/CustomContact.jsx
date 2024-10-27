import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';

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

  // Use your exact coordinates for the business location
  const position = [6.4625, 3.6015]; // Replace with your actual coordinates

  return (
    <div className="container mx-auto px-8 py-4">
      <h2 className="text-2xl text-center font-bold mb-4 underline">Contact Us</h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
        {/* Form Fields */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-lg font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-lg font-bold mb-2">Phone (Optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-lg font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Write your message here"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
          />
        </div>

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
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-96 rounded-lg shadow-lg">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              We are located here! <br /> Block A3, Office 471, Eastland Complex, Abraham Adesanya, Lekki-Ajah, Lagos, Nigeria.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default CustomContact;
