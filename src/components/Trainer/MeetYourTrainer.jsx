import React from 'react';

// CORRECTED IMPORTS: Update these paths to match your new folder structure.
import saurabhImage from "../../assets/saurabh.png";
import trishalaImage from "../../assets/trishala.png";

// The rest of the component code remains exactly the same.
const trainers = [
  {
    name: 'Saurabh Bothra',
    program: 'Yoga Everyday',
    stats: '12+ yrs of Yoga teaching to 12.4 million+ people',
    description: 'Practical, impactful daily exercises and asanas create a thoughtful program for a healthy body and mind.',
    imageSrc: saurabhImage, // This now correctly uses the imported image
    social: {
      facebook: '#',
      instagram: '#',
      youtube: '#',
    },
    imagePosition: 'left',
  },
  {
    name: 'Trishala Bothra',
    program: 'Dance & Strength',
    stats: null,
    description: 'Experience Zumba: a fun, high-energy dance fitness class designed for joyful cardio. Stay excited to exercise and come back for more.',
    imageSrc: trishalaImage, // This also uses the imported image
    social: {
      facebook: '#',
      instagram: '#',
      youtube: '#',
    },
    imagePosition: 'right',
  },
];

// ... the rest of your component code (SocialIcons, MeetYourTrainer function) goes here.
// No other changes are needed in the rest of the file.

const SocialIcons = ({ links }) => (
  <div className="flex items-center mt-8 gap-x-4">
    <a href={links.facebook} className="text-gray-400 hover:text-gray-500">
      <span className="sr-only">Facebook</span>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    </a>
    <a href={links.instagram} className="text-gray-400 hover:text-gray-500">
      <span className="sr-only">Instagram</span>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
      </svg>
    </a>
    <a href={links.youtube} className="text-gray-400 hover:text-gray-500">
      <span className="sr-only">YouTube</span>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
      </svg>
    </a>
  </div>
);

const MeetYourTrainer = () => {
  return (
    <section className="pt-12 pb-24 bg-white sm:pt-16 sm:pb-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Your Trainer
          </h2>
        </div>
        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-24">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="grid items-center grid-cols-1 gap-y-10 gap-x-16 lg:grid-cols-2">
              <div className={trainer.imagePosition === 'right' ? 'lg:order-last' : ''}>
                <img
                  className="object-cover w-full h-auto rounded-lg"
                  src={trainer.imageSrc}
                  alt={`Trainer ${trainer.name}`}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {trainer.program} with {trainer.name}
                </h3>
                {trainer.stats && (
                  <p className="mt-4 text-gray-600">
                    <strong className="font-semibold text-indigo-600">{trainer.stats.split(' ')[0]}</strong> of Yoga teaching to <strong className="font-semibold text-indigo-600">{trainer.stats.split(' ')[6]}</strong> people
                  </p>
                )}
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {trainer.description}
                </p>
                <SocialIcons links={trainer.social} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetYourTrainer;