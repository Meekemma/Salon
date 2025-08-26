import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Spinner from "../Spinner";
import salon from "../../assets/images/man.jpg";
import servicesData from "../../data/services.json";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    services: [],
    locationType: "", // "Home" or "In-Salon"
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showServices, setShowServices] = useState(false);

  // Flatten services for checkbox display
  const flattenedServices = servicesData.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const handleServiceChange = (serviceName) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceName)
        ? prev.services.filter((s) => s !== serviceName)
        : [...prev.services, serviceName],
    }));
  };

  const handleSubmit = () => {
    const { name, phone, services, locationType } = formData;

    setError("");
    setIsLoading(true);

    if (!name || !phone || services.length === 0 || !locationType || !selectedDate || !selectedTime) {
      setError("⚠️ All fields are required");
      setTimeout(() => { setError(""); setIsLoading(false); }, 3000);
      return;
    }

    const now = new Date();
    const combinedDateTime = new Date(selectedDate);
    combinedDateTime.setHours(selectedTime.getHours());
    combinedDateTime.setMinutes(selectedTime.getMinutes());

    if (combinedDateTime < now) {
      setError("⚠️ You cannot pick a past date or time!");
      setTimeout(() => { setError(""); setIsLoading(false); }, 3000);
      return;
    }

    const formattedDate = selectedDate.toLocaleDateString();
    const formattedTime = selectedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const selectedServicesWithPrices = flattenedServices
      .filter((s) => services.includes(s.name))
      .map((s) => `${s.name} (${s.price})`)
      .join(", ");

    const message = `*Hello! I'd like to book an appointment*.
Name: ${name}
Phone: ${phone}
Services: ${selectedServicesWithPrices}
Type: ${locationType}
Date: ${formattedDate}
Time: ${formattedTime}`;

    const whatsappUrl = `https://wa.me/2349076309004?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({ name: "", phone: "", services: [], locationType: "" });
    setSelectedDate(null);
    setSelectedTime(null);
    setIsLoading(false);
  };

  return (
    <section className="flex flex-col md:flex-row items-start container px-4 py-12 gap-10">
      {/* Salon Image */}
      <div className="flex justify-center w-full md:w-1/2">
        <img src={salon} alt="Luxury salon interior" className="w-full max-w-md h-auto rounded-xl shadow-lg object-cover" loading="lazy" />
      </div>

      {/* Booking Form */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full md:w-1/2">
        <h2 className="text-3xl font-semibold text-center text-teal-700 mb-6">Book an Appointment</h2>
        {error && <p className="text-red-500 text-center mb-4 font-medium">{error}</p>}

        <form className="space-y-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            pattern="[0-9]{10,15}"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Location Type */}
          <div>
            <label className="font-semibold mb-2 block">Service Type</label>
            <select
              value={formData.locationType}
              onChange={(e) => setFormData({ ...formData, locationType: e.target.value })}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select Type</option>
              <option value="In-Salon">In-Salon</option>
              <option value="Home">Home Service</option>
            </select>
          </div>

          {/* Collapsible Services */}
          <div>
            <button
              type="button"
              onClick={() => setShowServices(!showServices)}
              className="w-full text-left font-semibold p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-2"
            >
              {showServices ? "Hide Services ▲" : "Select Services ▼"}
            </button>
            {showServices && (
              <div className="max-h-64 overflow-y-auto border rounded p-2">
                {flattenedServices.map((s, idx) => (
                  <div key={idx} className="flex justify-between items-center mb-1">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={s.name}
                        checked={formData.services.includes(s.name)}
                        onChange={() => handleServiceChange(s.name)}
                      />
                      <span>{s.name}</span>
                    </label>
                    <span className="text-gray-500">{s.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Date & Time Pickers */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Date Picker */}
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
            placeholderText="Pick a date"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Time Picker */}
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
    </section>
  );
};

export default BookingForm;
