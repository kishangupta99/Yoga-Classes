import React from 'react';

// 1. Import your main image for this section. 
//    Update the path to where you've saved the image.
import teamImage from '../../assets/trainer.png';

// 2. Data for the list of features is kept separate for easy updating.
const healthFeatures = [
  {
    name: 'One-on-One Expert Guidance',
    description: 'Connect with certified trainers and nutritionists dedicated to your success and well-being.',
  },
  {
    name: 'Tailored Fitness & Yoga Plans',
    description: 'Receive personalized workout and yoga routines that adapt to your progress and lifestyle.',
  },
  {
    name: 'Holistic Nutritional Support',
    description: 'Get easy-to-follow meal plans designed by experts to nourish your body and mind.',
  },
];

const PersonalHealthTeam = () => {
  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* --- MODIFIED: Increased gap-x and added lg:gap-x-24 for more space --- */}
        <div className="grid items-center max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-24">
          
          {/* Image Column */}
          {/* --- MODIFIED: Added lg:-ml-8 to shift the image slightly left on large screens --- */}
          <div className="flex items-center justify-center lg:-ml-8">
            <img
              src={teamImage}
              alt="Woman meditating with online coach"
              className="w-full max-w-md shadow-xl rounded-xl ring-1 ring-gray-400/10 lg:max-w-none"
            />
          </div>

          {/* Text Content Column */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A Personal Health Team, Right in Your Palm
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get a transformation program that is customized as per your goals and current health conditions. We provide a holistic approach to wellness, combining mind, body, and nutrition.
            </p>
            
            {/* Features List */}
            <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {healthFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg className="absolute w-5 h-5 text-indigo-600 top-1 left-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                    </svg>
                    {feature.name}
                  </dt>
                  <dd className="inline"> - {feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonalHealthTeam;