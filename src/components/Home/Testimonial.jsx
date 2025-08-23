import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/main.css";

// ✅ Example local avatars (replace with real team/client images in /assets/images/)
import client from "../../assets/images/Afro.jpeg";
// import client2 from "../assets/images/client2.jpg";
// import client3 from "../assets/images/client3.jpg";
// import client4 from "../assets/images/client4.jpg";
// import client5 from "../assets/images/client5.jpg";
// import client6 from "../assets/images/client6.jpg";
// import client7 from "../assets/images/client7.jpg";
// import client8 from "../assets/images/client8.jpg";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const testimonies = [
    { text: "The service is amazing, I always leave feeling refreshed!", name: "Bukki", avatar: client, stars: 5 },
    { text: "A truly fantastic experience, will definitely be back.", name: "Meekemma", avatar: client, stars: 5 },
    { text: "The staff is friendly and professional, highly recommend.", name: "Linda C.", avatar: client, stars: 4 },
    { text: "I loved the manicure, the attention to detail was incredible.", name: "John Uche", avatar: client, stars: 5 },
    { text: "Very relaxing spa treatment, worth every minute.", name: "Emily Faith", avatar: client, stars: 4 },
    { text: "Excellent haircut, I’m so happy with the results.", name: "Chris", avatar: client, stars: 5 },
    { text: "Great service, I will definitely return for another session.", name: "Sara", avatar: client, stars: 5 },
    { text: "The best nail polish service I’ve had, thank you!", name: "Daniel Danny", avatar: client, stars: 5 },
  ];

  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // ✅ SEO: JSON-LD Structured Data for Reviews
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product", // Replace with actual business or service
      "name": "Salon & Spa Services",
      "review": testimonies.map((t) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": t.name },
        "reviewBody": t.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": t.stars,
          "bestRating": "5",
        },
      })),
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [testimonies]);

  return (
    <section className="container test mx-auto px-4 py-12 mt-16 bg-[#FFF5EE]">
      <div className="flex justify-center">
        <div className="text-left lg:text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4 text-gray-500">
            What Our Clients Say
          </h1>
          <p className="text-base md:px-16 text-gray-500 leading-relaxed">
            Our clients' satisfaction is our top priority. Here’s what some of them
            have to say about their experiences with our services. We take pride
            in delivering exceptional results that speak for themselves!
          </p>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="relative mt-8">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper py-4"
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <article
                className="testimonial-card bg-white rounded-xl shadow-md p-6 transition-transform transform hover:scale-105"
                data-aos="fade-up"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimony.avatar}
                    alt={`Photo of ${testimony.name}`}
                    className="w-14 h-14 rounded-full object-cover shadow-md"
                    loading="lazy"
                  />
                  <div className="ml-4 flex">
                    {[...Array(testimony.stars)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                    {[...Array(5 - testimony.stars)].map((_, i) => (
                      <FaStar key={i + testimony.stars} className="text-gray-300" />
                    ))}
                  </div>
                </div>
                <p className="mb-3 text-lg italic text-gray-400">“{testimony.text}”</p>
                <p className="font-semibold text-yellow-500">{testimony.name}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Next Button */}
        <button
          onClick={handleNextSlide}
          aria-label="Next testimonial"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-100 transition z-10"
        >
          &#9654;
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
