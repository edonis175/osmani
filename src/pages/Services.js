import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useScrollAnimation,
  getAnimationClasses,
  getAnimationStyle,
} from "../hooks/useScrollAnimation";
import ScrollToTopButton from "../contexts/ScrollToTopButton";
import ScrollDownButton from "../contexts/ScrollDownButton";

// Counter animation component
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          const startTime = Date.now();
          const startValue = 0;

          const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(
              startValue + (end - startValue) * easeOutCubic
            );

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };

          updateCount();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(
      `counter-services-${end}-${suffix}`
    );
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, suffix, hasStarted]);

  return (
    <span id={`counter-services-${end}-${suffix}`}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const Services = () => {
  const visibleItems = useScrollAnimation();
  const services = [
    {
      title: "Premium City Taxi",
      description:
        "Experience luxury urban transportation with our premium city taxi service. Available 24/7 with professional drivers who know every street and shortcut in KOSOVA's cities.",
      details: [
        "Available 24/7 with instant booking",
        "Transparent metered fares with no surprises",
        "Multiple payment options including digital",
        "Luxury sedans with premium amenities",
      ],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      price: "€1.20/km",
    },
    {
      title: "VIP Airport Transfer",
      description:
        "Arrive in style with our VIP airport transfer service. Flight tracking technology ensures we're there when you land, with meet-and-greet service and luxury vehicle options.",
      details: [
        "Real-time flight tracking technology",
        "Professional meet and greet service",
        "Fixed transparent pricing structure",
        "Complimentary luggage assistance",
      ],

      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      price: "€45 fixed",
    },
    {
      title: "Luxury Hotel Shuttle",
      description:
        "Seamless hotel transfers with our luxury shuttle service. We partner with premium hotels throughout KOSOVA to provide guests with exceptional transportation experiences.",
      details: [
        "Exclusive hotel partnerships",
        "Pre-scheduled pickup services",
        "Group transportation available",
        "Professional luggage handling",
      ],

      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "€25 per trip",
    },
    {
      title: "Executive Corporate",
      description:
        "Tailored transportation solutions for discerning business professionals. Our corporate service features premium vehicles, dedicated account management, and flexible billing options.",
      details: [
        "Monthly corporate invoicing",
        "Dedicated account manager",
        "Executive-class premium vehicles",
        "Priority 24/7 support line",
      ],

      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "Custom packages",
    },
    {
      title: "Spectacular Events",
      description:
        "Make your special occasions unforgettable with our event transportation service. From weddings to celebrations, we coordinate with event planners for perfect timing.",
      details: [
        "Luxury and exotic vehicle fleet",
        "Professional chauffeur service",
        "Coordinated event scheduling",
        "Custom vehicle decorations",
      ],

      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
      price: "€150 per event",
    },
    {
      title: "Premium Long Distance",
      description:
        "Comfortable inter-city travel throughout KOSOVA and beyond. Our long-distance service features spacious vehicles, experienced drivers, and optional scenic stops.",
      details: [
        "Fixed competitive inter-city pricing",
        "Scenic comfort stops available",
        "Spacious luxury vehicles",
        "Experienced regional drivers",
      ],

      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      price: "€2.50/km",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${require("../assets/images/Carbanner.jpg")})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/25 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
          <div className="max-w-6xl mx-auto">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 leading-tight animate-fade-in-left`}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Premium
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 font-light leading-relaxed px-2 animate-fade-in-right`}
            >
              Luxury Transportation Solutions for Every Need
            </p>
            <p
              className={`text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-200 max-w-5xl mx-auto leading-relaxed px-4 animate-fade-in-left`}
            >
              From quick city rides to special events, discover our
              comprehensive range of premium transportation services designed to
              exceed your expectations and elevate every journey.
            </p>

            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-4 animate-fade-in-up`}
            >
              <div className="group transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={6} />
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  Premium Services
                </div>
              </div>
              <div className="group transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  Available
                </div>
              </div>
              <div className="group transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={99} suffix=".8%" />
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  Satisfaction
                </div>
              </div>
              <div className="group transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={1} prefix="#" />
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  In KOSOVA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <ScrollDownButton targetId="services-section" />
      </div>

      {/* Services Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              Our Premium Transportation Services
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              At OSMANI Taxi, we've been providing exceptional transportation
              services throughout KOSOVA for over 15 years. Our commitment to
              excellence means every journey with us is comfortable, reliable,
              and tailored to your needs.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
              <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease transform hover:scale-105 flex flex-col">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Professional Drivers
                </h3>
                <p className="text-gray-600 text-xl leading-relaxed mb-4">
                  Our experienced, courteous drivers know the region well and
                  prioritize your safety and comfort.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed pt-4pb-6 flex-grow">
                  All our drivers undergo rigorous background checks and
                  professional training. They are fluent in multiple languages
                  and committed to providing a premium travel experience. With
                  real-time GPS tracking, you can monitor your journey and
                  estimated arrival times.
                </p>
                <div className="mt-auto pt-4 flex justify-center">
                  <img
                    src={require("../assets/images/osmanileaf.png")}
                    alt="OSMANI Leaf"
                    className="h-16 w-auto"
                  />
                </div>
              </div>
              <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease transform hover:scale-105 flex flex-col">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Punctual Service
                </h3>
                <p className="text-gray-600 text-xl leading-relaxed mb-4">
                  We value your time with on-time pickups and reliable
                  scheduling for all our services.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  Our advanced booking system ensures your driver arrives
                  exactly when promised. With traffic monitoring technology, we
                  optimize routes in real-time to avoid delays. For airport
                  transfers, we track your flight status and adjust pickup times
                  accordingly to ensure seamless travel.
                </p>
                <div className="mt-auto pt-4 flex justify-center">
                  <img
                    src={require("../assets/images/osmanileaf.png")}
                    alt="OSMANI Leaf"
                    className="h-16 w-auto"
                  />
                </div>
              </div>
              <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease transform hover:scale-105 flex flex-col">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Quality Vehicles
                </h3>
                <p className="text-gray-600 text-xl leading-relaxed mb-4">
                  Our modern, well-maintained fleet ensures a comfortable and
                  safe journey every time.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  Our vehicles are serviced regularly and inspected for safety
                  compliance. Each car features premium amenities including
                  climate control, charging ports, and luxury seating. We offer
                  a range of vehicle types from sedans to SUVs to accommodate
                  your specific needs.
                </p>
                <div className="mt-auto pt-4 flex justify-center">
                  <img
                    src={require("../assets/images/osmanileaf.png")}
                    alt="OSMANI Leaf"
                    className="h-16 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services - Simplified */}
      <section id="services-section" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold text-black mb-4">
              Our Transportation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              Reliable, comfortable transportation for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4 text-center"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="mb-4 space-y-2">
                  {service.details.slice(0, 4).map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="font-semibold text-center text-gray-800 mt-4">
                  {service.price}
                </div>
                <div className="text-center mt-6">
                  <Link
                    to="/contact"
                    className="inline-block bg-gray-800 text-white font-medium py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Transportation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for reliable, comfortable service throughout KOSOVA
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Book Your Ride
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Services;
