import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/main.css";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Import services from JSON
import services from "../../data/services.json";

const PriceList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const [visibleItems, setVisibleItems] = useState(
    services.map(() => 5)
  );

  const toggleVisibility = (index) => {
    setVisibleItems((prev) =>
      prev.map((num, idx) => (idx === index ? (num === 5 ? 10 : 5) : num))
    );
  };

  return (
    <section className="container mx-auto p-6" aria-labelledby="price-list-heading">
      <h1 id="price-list-heading" className="text-3xl font-bold text-center mb-8">
        Salon Services & Pricing
      </h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        modules={[Pagination]}
        className="mySwiper"
        aria-roledescription="carousel"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <article className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow" data-aos="fade-up">
              <h2 className="text-xl font-semibold mb-4">{service.category}</h2>
              <ul>
                {service.items.slice(0, visibleItems[index]).map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b py-2 last:border-none">
                    <span className="text-gray-500">{item.name}</span>
                    <span className="font-semibold text-yellow-600">{item.price}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => toggleVisibility(index)}
                aria-label={`${
                  visibleItems[index] === 5 ? "Show more services" : "Show fewer services"
                } for ${service.category}`}
                className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white py-1 px-4 rounded transition"
              >
                {visibleItems[index] === 5 ? "More" : "Show Less"}
              </button>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PriceList;
