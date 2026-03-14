"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Calendar, Clock, CheckCircle } from "lucide-react";

import ContactUs from "./home/contact";
import AboutSection from "./home/about";
import SpeakersSection from "./home/speaker";
import Footer from "./footer/footer";
import Navbar from "./home/Navbar";
import AwardeesSection from "./awardee/page";

// Improved Theme Banner Component with more visual elements
const ThemeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Enhanced background with multiple elements */}
      <div className="absolute inset-0 transform -skew-y-3 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-16 bg-white opacity-5 transform rotate-45"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-500 opacity-20 transform translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-2 sm:px-6">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-wide">
            Our <span className="text-yellow-400">Theme</span>
          </h2>

          {/* Divider */}
          <div className="h-1 w-28 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 mx-auto mb-8 sm:mb-10 rounded-full shadow-md"></div>

          {/* Theme text */}
          <p className="text-base sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed 
          bg-white/10 backdrop-blur-sm px-4 sm:px-8 py-4 sm:py-6 rounded-xl 
          border border-white/20 shadow-lg text-white">

            <span className="text-yellow-300 font-bold">
              Advancing Intelligent, Secure and Quantum-Ready
            </span>{" "}
            Semiconductor Systems for the
            <span className="text-yellow-300 font-bold">
              {" "}Next Era of Computing
            </span>

          </p>
        </div>
        
    </div>
  );
};

const images = [
  "/images/jiit1.jpeg",
  "/images/jiit2.webp",
  "/images/jiit3.webp",
  "/images/jiit4.png",
  "/images/jiit5.webp",
  "/images/jiit6.avif",
  "/images/jiit7.webp",
  "/images/jiit8.jpg",
  "/images/jiit9.jpeg",
];

const sponsors = [
  // Keeping commented sponsors for future use
];

const endorsedBy = [
  // Keeping commented endorsements for future use
];

const speakers = [
{
  name: "Tapas Nandy",
  title: "Sr. Director, Microsoft / Sr. Member, IEEE",
  organization: "IEEE",
  photo: "/images/tapasnandy.jpg",
  linkedin: "https://www.linkedin.com/in/tapas-nandy-35133518/",
  website: ""
},
{
  name: "Dipan Sahu",
  title: "Assistant Innovation Director",
  organization: "Ministry of Education's Innovation Cell",
  photo: "/images/dipansahu.jpg",
  linkedin: "https://www.linkedin.com/in/deepansahu/",
  website: ""
},
{
  name: "Ganesan Narayanasamy",
  title: "President, OpenPOWER Foundation",
  organization: "Object Automation Inc.",
  photo: "/images/ganesan.jpeg",
  linkedin: "https://www.linkedin.com/in/ganesannarayanasamy/",
  website: ""
},
{
  name: "Shanthi Pavan",
  title: "Professor",
  organization: "IIT Madras",
  photo: "/images/shanthi.jpeg",
  linkedin: "https://www.linkedin.com/in/shanthi-pavan-39715a137/",
  website: ""
},
{
  name: "Gaurav Goel",
  title: "Senior Principal Engineer",
  organization: "Renesas Electronics",
  photo: "/images/gauravgoel.jpeg",
  linkedin: "https://www.linkedin.com/in/gaurav-goel-01185a5/",
  website: ""
}
]

//the carousel should automatically slide every 3 seconds , and if clicked to go to next or prev the timer should reset
//make the additions
// Improved carousel with better transitions and controls
const Carousel = ({
  images,
  currentImageIndex,
  setCurrentImageIndex,
  swipeHandlers,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length, setCurrentImageIndex]);

  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col relative overflow-hidden w-full"
      {...swipeHandlers}
    >
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-5000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === currentImageIndex}
              className="object-cover"
            />
            {/* Add a subtle zoom effect to active image */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out ${
                index === currentImageIndex ? "scale-110" : "scale-100"
              }`}
              style={{
                backgroundImage: `url(${src})`,
                opacity: 0.1, // Very subtle effect
              }}
            />
          </div>
        ))}
      </div>

      {/* REMOVED <Navbar /> from here — it now lives in HomePage above Carousel */}

      {/* Hero content — centered on mobile, left-aligned on md+ */}
      <div className="flex-grow flex items-center justify-center md:justify-start z-10 relative px-4 sm:px-8 md:px-28 py-8">

        <div className="max-w-4xl w-full text-center md:text-left">

          {/* Date Badge */}
          <div className="mb-4 sm:mb-6 flex justify-center md:justify-start">
            <span className="px-4 sm:px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold text-sm sm:text-lg rounded-full shadow-lg animate-[pulse_2s_linear_infinite]">
              August 20–22, 2026
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-5 md:mb-8 leading-tight tracking-wide drop-shadow-[0_6px_25px_rgba(0,0,0,0.9)]">

            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 text-transparent bg-clip-text">
              30th International
            </span>

            <br className="hidden sm:block" />

            <span className="text-white">
              Symposium on
            </span>

            <br className="hidden sm:block" />

            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 text-transparent bg-clip-text">
              VLSI Design and Test
            </span>

          </h1>

          {/* Venue Card */}
          <div className="mb-8 sm:mb-10 flex justify-center md:justify-start">

            <div className="flex items-start sm:items-center gap-3 sm:gap-4 bg-black/60 backdrop-blur-lg border border-white/20 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-2xl max-w-xl w-full">

              {/* Location Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 flex-shrink-0 mt-0.5 sm:mt-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243A8 8 0 1117.657 16.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              {/* Venue Text */}
              <p className="text-sm sm:text-lg md:text-xl font-medium leading-relaxed text-white drop-shadow-md">
                <span className="text-yellow-300 font-semibold">Venue:</span>{" "}
                Jaypee Institute of Information Technology, Sector 62, Noida, Uttar Pradesh, India
              </p>

            </div>

          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">

            <Link
              href="#about"
              scroll={true}
              className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-base sm:text-lg font-semibold py-3 px-6 sm:px-7 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Learn More →
              </span>

              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>

            </Link>

          </div>

        </div>

      </div>

      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 opacity-20 z-0"></div>

      {/* Improved carousel indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2 sm:space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentImageIndex
                ? "bg-yellow-400 scale-125 shadow-md"
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() =>
          setCurrentImageIndex(
            (prev) => (prev - 1 + images.length) % images.length
          )
        }
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() =>
          setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};


{/*
// Improved sponsors section with animation
const SponsorsSection = ({ title, items, comingSoon = false }) => (
  <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight text-purple-700">
        {title}
      </h2>
      <div className="h-1 w-24 bg-purple-500 mx-auto mb-12 rounded-full"></div>

      {comingSoon ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-auto max-w-7xl">
          {[
            { src: './logos/mandi__.png', alt: 'Mandi Logo' },
            { src: './logos/OS.png', alt: 'Orbit & Skyline India' },
            { src: './images/Agmatel_Keyisght Logo HD.png', alt: 'Agmatel-Keysight Logo' },
            { src: './images/yourpedia.png', alt: 'YourPedia Logo' },
            { src: './images/springer.png', alt: 'Springer Logo' },
            { src: './logos/NXP.jpg', alt: 'NXP Logo' },
            { src: './logos/SOC.png', alt: 'SOC TeamUp' },
            { src: './logos/sqube.png', alt: 'S-Qube systems' },
          ].map((logo, i) => (
            <div
              key={i}
              className="w-full bg-white p-6 rounded-xl shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img src={logo.src} alt={logo.alt} className="object-contain w-full h-auto max-h-28" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-auto max-w-7xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white p-6 rounded-xl shadow-md flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={150}
                height={150}
                className="object-contain w-full h-auto max-h-28"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

*/}

const Timeline = () => {
  const [currentDate] = useState(new Date());

  const timelineData = [
    {
      title: "Paper Submission",
      borderColor: "border-l-purple-500",
      bgColor: "bg-purple-50",
      icon: "📄",
      oldDate: "April 30, 2026",
      newDate: "",
      note: ""
    },
    {
      title: "Acceptance Notification", 
      borderColor: "border-l-blue-500",
      bgColor: "bg-blue-50",
      icon: "📩",
      oldDate: "June 30, 2026",
      newDate: "",
      note: ""
    },
    {
      title: "Early Bird Registration",
      borderColor: "border-l-blue-600", 
      bgColor: "bg-blue-50",
      icon: "📅",
      oldDate: "July 6, 2026",
      newDate: "",
      note: ""
    },
    {
      title: "Camera-ready Submission",
      borderColor: "border-l-green-500",
      bgColor: "bg-green-50", 
      icon: "📸",
      oldDate: "July 16, 2026",
      newDate: "",
      note: ""
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-blue-800 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r white bg-clip-text">
          Important Dates
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {timelineData.map((item, index) => (
              <div 
                key={index}
                className={`${item.bgColor} p-4 sm:p-6 rounded-xl shadow-lg border-l-4 ${item.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl mr-3">{item.icon}</span>
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg">{item.title}</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center flex-wrap">
                    <span className="font-semibold text-gray-700 mr-2 text-sm sm:text-base">
                      {item.title === "Acceptance Notification" ? "Date:" : "Deadline:"}
                    </span>
                    {/* 
                      <span className="line-through text-red-500 mr-2 text-sm">
                        {item.oldDate}
                      </span> 
                    */}
                    <span className="font-bold text-gray-800 text-sm sm:text-base">
                      {item.oldDate}
                    </span>
                  </div>
                  
                  {item.note && (
                    <p className="text-gray-600 text-xs sm:text-sm italic">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats component
const Stats = () => {
  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="bg-purple-50 p-4 sm:p-6 rounded-lg shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-md">
            <p className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">28+</p>
            <p className="text-gray-600 text-sm sm:text-base">Previous Editions</p>
          </div>
          <div className="bg-purple-50 p-4 sm:p-6 rounded-lg shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-md">
            <p className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">300+</p>
            <p className="text-gray-600 text-sm sm:text-base">Expected Attendees</p>
          </div>
          <div className="bg-purple-50 p-4 sm:p-6 rounded-lg shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-md">
            <p className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">50+</p>
            <p className="text-gray-600 text-sm sm:text-base">Research Papers</p>
          </div>
          <div className="bg-purple-50 p-4 sm:p-6 rounded-lg shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-md">
            <p className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">15+</p>
            <p className="text-gray-600 text-sm sm:text-base">Keynote Speakers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Memoize the handler to prevent unnecessary re-renders
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentImageIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () =>
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      ),
    preventDefaultTouchmoveEvent: true,
  });

  // Improved auto-slide with pause on hover/interaction
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(
        () => setCurrentImageIndex((prev) => (prev + 1) % images.length),
        3000 // Slower rotation for better user experience
      );
      return () => clearInterval(interval);
    }
    return undefined;
  }, [isPaused]);

  return (
    <div
      className="font-sans w-full overflow-x-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 5000)}
    >
      {/* MOVED: Navbar is now here, above Carousel, so it never overlaps the carousel images */}
      <Navbar />

      <Carousel
        images={images}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        swipeHandlers={handlers}
      />

      {/*
      <AwardeesSection/>
      */}

      <ThemeBanner />

      {/*
      
      <SpeakersSection speakers={speakers.slice(0,6)} />

        <div className="flex justify-center mt-8 sm:mt-12 mb-12 sm:mb-20 px-4">
          <Link
            href="/Speakers"
            className="relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white 
            bg-gradient-to-r from-purple-600 to-indigo-600 
            rounded-xl shadow-lg transition-all duration-300 
            hover:scale-105 hover:shadow-2xl hover:from-purple-700 hover:to-indigo-700"
          >
            View All Speakers
            <span className="text-lg sm:text-xl">→</span>
          </Link>
        </div>

        */}

      <AboutSection />

      
      {/*
      
      <section className="py-8 sm:py-10 bg-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 mb-4">
          Our Statistics
        </h2>
        <div className="h-1 w-24 bg-purple-500 mx-auto mb-8 sm:mb-10 rounded-full"></div>

        <Stats />

      </section>

      */}

      

      {/*

      <SponsorsSection
        title="Our Sponsors"
        items={sponsors}
        comingSoon={true}
      />

      <SponsorsSection
        title="Endorsed By"
        items={endorsedBy}
        comingSoon={true}
      /> 

      */}

      <Timeline />

      <Footer />
    </div>
  );
};

export default HomePage;