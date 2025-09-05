/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- ADD THIS BLOCK FOR YOUR CUSTOM ANIMATIONS ---
      keyframes: {
        bounceOnce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'pulse-once': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      animation: {
        'bounce-once': 'bounceOnce 1s ease-in-out 1', // For the button
        'pulse-once': 'pulseOnce 2s ease-in-out 1',  // For the "Trusted by" text
      },
      // --- END OF ADDED BLOCK ---
    },
  },
  plugins: [require('daisyui')],
}