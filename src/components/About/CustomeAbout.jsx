import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaThumbsUp, FaHeart, FaCut, FaBullseye } from "react-icons/fa";
import Angel from "../../assets/images/Angel.jpg";
import AngelWhite from "../../assets/images/AngelWhite.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/main.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const CustomeAbout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const images = [Angel, AngelWhite];

  const benefits = [
    "Expert professionals with years of experience.",
    "High-quality, premium products used in every service.",
    "Personalized treatments tailored to individual needs.",
    "A relaxing and luxurious environment for complete rejuvenation.",
    "Commitment to cleanliness and safety.",
  ];

  // SEO schema
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Angel De Whyte Unisex Salon",
      "description":
        "Angel De Whyte Unisex Salon offers expert grooming, haircuts, manicures, pedicures, and spa treatments in a luxurious and professional environment.",
      "url": "https://yourdomain.com/about",
      "logo": "https://yourdomain.com/logo.png",
    },
  };

  return (
    <>
      {/* SEO Meta + Structured Data */}
      <Helmet>
        <title>About Us | Angel De Whyte Unisex Salon</title>
        <meta
          name="description"
          content="Discover the story behind Angel De Whyte Unisex Salon. Our expert team provides premium grooming services, personalized care, and a luxurious salon experience."
        />
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Text section */}
          <div className="md:w-1/2">
            <h1
              className="text-3xl font-extrabold mb-6 flex items-center text-gray-800"
              data-aos="fade-up"
            >
              <FaBook className="mr-2 text-gold" /> Our Story
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed" data-aos="fade-up">
              Welcome to{" "}
              <span className="font-bold text-xl text-gold">
                Angel De Whyte Unisex Salon
              </span>
              , where grooming meets luxury and self-care becomes an art. With a
              passion for excellence, our skilled team of barbers, nail
              technicians, and spa specialists are committed to delivering an
              experience that leaves you feeling refreshed, confident, and
              looking your absolute best. Whether you’re here for a stylish
              haircut, a flawless manicure, or a rejuvenating spa treatment, we
              pride ourselves on providing{" "}
              <span className="font-semibold text-gray-900">
                personalized services
              </span>{" "}
              tailored to your unique needs.
            </p>

            <div className="mt-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
                <FaThumbsUp className="mr-2 text-gold" /> Why Choose Us
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {benefits.map((benefit, index) => (
                  <li key={index} className="text-lg">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
                <FaHeart className="mr-2 text-gold" /> Our Values
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li>
                  <strong>Quality First:</strong> We use only the best products
                  in all our treatments.
                </li>
                <li>
                  <strong>Expert Professionals:</strong> Our team is highly
                  trained in the latest techniques.
                </li>
                <li>
                  <strong>Personalized Care:</strong> Each service is tailored
                  to meet your needs.
                </li>
                <li>
                  <strong>Client-Centered:</strong> Your satisfaction is our top
                  priority.
                </li>
              </ul>
            </div>

            {/* Mission / Promise Block */}
            <div className="mt-10 bg-[#FFF5EE] p-6 rounded-lg shadow-lg" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-3 flex items-center text-gray-800">
                <FaBullseye className="mr-2 text-gold" /> Our Promise
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are dedicated to creating an atmosphere where beauty, comfort,
                and professionalism blend seamlessly. Our mission is simple:
                <span className="font-semibold text-gray-900">
                  make every client feel valued, confident, and beautiful.
                </span>
              </p>
            </div>
          </div>

          {/* Carousel section */}
          <div className="md:w-1/2 rounded" data-aos="fade-left">
            <Carousel
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              interval={5000}
              ariaLabel="Salon showcase images"
            >
              {images.map((image, index) => (
                <div key={index}>
                  <LazyLoadImage
                    src={image}
                    alt={`Angel De Whyte Salon image ${index + 1}`}
                    effect="blur"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Services CTA */}
        <div className="mt-12 text-center md:text-left" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center md:justify-start">
            <FaCut className="mr-2 text-gold" /> Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto md:mx-0">
            From precise barbering and luxurious spa treatments to flawless
            manicures and pedicures, we offer a range of premium grooming
            services tailored to your needs.
          </p>
          <button
            onClick={() => navigate("/services")}
            className="mt-6 inline-block text-white font-semibold carousel-button px-6 py-2 rounded shadow-lg transition hover:opacity-90"
          >
            Explore Our Services
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomeAbout;
