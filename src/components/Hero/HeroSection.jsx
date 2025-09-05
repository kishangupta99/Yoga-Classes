import React from 'react';

import logo from '../../assets/logo.png';
import yogaClassImage from '../../assets/hero-image.png'; 
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import avatar4 from '../../assets/avatar4.png';


const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative background circle */}
      <div 
        className="absolute left-0 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" 
        aria-hidden="true" 
      />

      <div className="grid items-center grid-cols-1 px-4 py-6 mx-auto max-w-7xl lg:px-8 sm:py-10 lg:grid-cols-2 gap-x-16 gap-y-10">
        
        {/* Left Column: All Text Content */}
        <div className="relative z-10 text-center lg:text-left">
          
          {/* Header: Logo and new animated text */}
          <div className="flex items-center justify-center lg:justify-start gap-x-4">
            <img className="w-auto h-14" src={logo} alt="Yoga Logo" />
            <span className="text-lg font-semibold text-blue-600 animate-pulse-once">
              Yoga For a Nation
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mt-32 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            India's First Habit Building Program
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Start your fitness journey with us
          </p>
          
          {/* Button */}
          <div className="mt-10">
            <a
              href="/register" // <-- Your registration page link here
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-semibold text-white transition-transform duration-200 bg-teal-500 rounded-full shadow-lg hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            >
              Try Free Sessions
              <svg className="w-6 h-6 ml-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Avatars and Trusted by text (Bottom Left) */}
          <div className="flex items-center justify-center mt-10 lg:justify-start gap-x-3">
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block w-10 h-10 rounded-full ring-2 ring-white" src={avatar1} alt="User avatar" />
              <img className="inline-block w-10 h-10 rounded-full ring-2 ring-white" src={avatar2} alt="User avatar" />
              <img className="inline-block w-10 h-10 rounded-full ring-2 ring-white" src={avatar3} alt="User avatar" />
              <img className="inline-block w-10 h-10 rounded-full ring-2 ring-white" src={avatar4} alt="User avatar" />
            </div>
            <p className="text-sm font-medium leading-6 text-gray-700">
              Trusted by <strong className="font-semibold text-gray-900">1.24 Crore +</strong><br /> Global members
            </p>
          </div>

        </div>

        {/* Right Column: Image */}
        <div className="relative z-10">
          <img
            className="w-full h-auto shadow-2xl rounded-xl"
            src={yogaClassImage}
            alt="Women in a yoga class"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;