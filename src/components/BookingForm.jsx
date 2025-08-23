import React, { useState } from "react";
import salon from "../assets/images/man.jpg"; // Importing the salon image
import Spinner from "./Spinner"; // Spinner component
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, phone, service } = formData;

    setError("");
    setIsLoading(true);

    if (!name || !phone || !service || !selectedDate || !selectedTime) {
      setError("⚠️ All fields are required");
      setTimeout(() => {
        setError("");
        setIsLoading(false);
      }, 3000);
      return;
    }

    const now = new Date();
    const combinedDateTime = new Date(selectedDate);
    combinedDateTime.setHours(selectedTime.getHours());
    combinedDateTime.setMinutes(selectedTime.getMinutes());

    if (combinedDateTime < now) {
      setError("⚠️ You cannot pick a past date or time!");
      setTimeout(() => {
        setError("");
        setIsLoading(false);
      }, 3000);
      return;
    }

    const formattedDate = selectedDate.toLocaleDateString();
    const formattedTime = selectedTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const message = `*Hello! I'd like to book an appointment*.\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${formattedDate}\nTime: ${formattedTime}`;
    const whatsappUrl = `https://wa.me/2349076309004?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      phone: "",
      service: "",
    });
    setSelectedDate(null);
    setSelectedTime(null);

    setIsLoading(false);
  };

  return (
    <section
      id="booking"
      className="flex flex-col md:flex-row items-start container px-4 py-12 gap-10"
    >
      {/* Salon image */}
      <div className="flex justify-center w-full md:w-1/2">
        <img
          src={salon}
          alt="Luxury salon interior for appointments"
          className="w-full max-w-md h-auto rounded-xl shadow-lg object-cover"
          loading="lazy"
        />
      </div>

      {/* Booking form */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full md:w-1/2">
        {/* Guide */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-teal-700 mb-4">
            How to Book Your Appointment
          </h3>
          <p className="text-gray-600">
            Follow these simple steps to schedule your service:
          </p>
          <ol className="list-decimal list-inside text-gray-600 mt-3 space-y-2">
            <li>Enter your name and phone number.</li>
            <li>Select the service you’d like (Salon or Home service).</li>
            <li>Choose your preferred date and time.</li>
            <li>Click "Submit" to send your details via WhatsApp.</li>
            <li>We’ll confirm your appointment shortly.</li>
          </ol>
        </div>

        <h2 className="text-3xl font-semibold text-center text-teal-700 mb-6">
          Book an Appointment
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <form className="space-y-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10,15}"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Service */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Service</option>
            <optgroup label="In-Salon Services">
              <option value="Haircut">Haircut</option>
              <option value="Nail Polish">Nail Polish</option>
              <option value="Manicure">Manicure</option>
              <option value="Pedicure">Pedicure</option>
              <option value="Spa">Spa</option>
            </optgroup>
            <optgroup label="Home Services">
              <option value="Home Haircut">Home Service Haircut</option>
              <option value="Home Polish">Home Service Polish</option>
              <option value="Home Manicure">Home Service Manicure</option>
              <option value="Home Pedicure">Home Service Pedicure</option>
              <option value="Home Spa">Home Service Spa</option>
            </optgroup>
          </select>

          {/* Date Picker */}
          <div>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              placeholderText="Pick a date"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Time Picker */}
          <div>
            <DatePicker
              selected={selectedTime}
              onChange={(time) => setSelectedTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
              placeholderText="Pick a time"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          >
            {isLoading ? <Spinner size={20} color="#ffffff" /> : "Submit"}
          </button>
        </form>
      </div>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Salon Appointment Booking",
            provider: {
              "@type": "Organization",
              name: "Your Salon Name",
              url: "https://yourwebsite.com",
              logo: "https://yourwebsite.com/logo.png",
            },
            areaServed: {
              "@type": "Place",
              name: "Nigeria",
            },
            description:
              "Book salon and home services including haircut, manicure, pedicure, spa, and more. Fast, reliable, and professional.",
          }),
        }}
      />
    </section>
  );
};

export default BookingForm;
