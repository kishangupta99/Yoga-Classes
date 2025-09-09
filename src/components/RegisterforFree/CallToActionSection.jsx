import React from 'react';
import {Link} from 'react-router-dom';

const CallToActionSection = () => {
  return (
    // Outer section providing the white space around the card
    <section className="py-16 bg-white sm:py-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        
        {/* The single dark blue rounded card containing ALL content */}
        {/* CHANGES: 
            - Width: Changed from max-w-5xl to max-w-6xl for a little more width.
            - Height: Increased padding classes (p-*, sm:p-*, lg:p-*) for more vertical space.
        */}
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#092B45] p-10 sm:p-16 lg:p-20 text-center shadow-xl">
          
          {/* "Start Your Journey" sub-heading */}
          <h2 className="text-base font-semibold leading-7 text-gray-300">
            Start Your Journey
          </h2>

          {/* Main heading */}
          <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready for a Change? Begin Your Wellness Journey!
          </p>
          
          {/* Register Button */}
          <Link to="/login">
          <div className="mt-12"> {/* Increased margin-top for more space */}
            <a
              href="/register" // <-- Your registration page link
              target="_blank"
              rel="noopener noreferrer"
              // Animation for a single bounce on page load
              className="inline-flex items-center justify-center gap-x-2 rounded-full bg-gradient-to-r from-[#00C9FF] to-[#0070F3] px-6 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 ease-in-out hover:from-[#00ACEE] hover:to-[#005BCC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0070F3] animate-bounce-once"
            >
              Register Now for FREE
              <svg
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          </Link>

          {/* "Already attended" text with bold, light blue numbers */}
          <p className="mt-8 text-sm leading-6 text-gray-400"> {/* Increased margin-top for more space */}
            <span className="font-bold text-[#00C9FF]">1.24 Crore +</span> already attended
          </p>

        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;