import React from 'react';

// --- Data and Icon components are unchanged ---
const benefits = [
  {
    name: 'Accountability Support',
    description: 'Stay on track with regular check-ins and guidance to ensure you meet your wellness goals.',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>),
    iconBgColor: 'bg-blue-100',
    iconTextColor: 'text-blue-600',
  },
  {
    name: 'Flexible Timings',
    description: 'Choose from various time slots to fit yoga seamlessly into your schedule.',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
    iconBgColor: 'bg-yellow-100',
    iconTextColor: 'text-yellow-700',
  },
  {
    name: 'Easy Accessibility',
    description: 'Join sessions anytime, anywhere, with simple access across devices.',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>),
    iconBgColor: 'bg-green-100',
    iconTextColor: 'text-green-600',
  },
  {
    name: 'Community Health Programs',
    description: 'Engage with others in group programs that boost collective well-being.',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.25 0m-5.25 0a3.75 3.75 0 00-5.25 0M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
    iconBgColor: 'bg-pink-100',
    iconTextColor: 'text-pink-600',
  },
  {
    name: 'Habit Tracking Reminders',
    description: 'Receive gentle nudges to build and maintain your healthy habits effortlessly.',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M9.75 14.25l1.5 1.5 3-3.75" /></svg>),
    iconBgColor: 'bg-purple-100',
    iconTextColor: 'text-purple-600',
  },
  {
    name: 'Physiotherapy Support',
    description: 'Personalized guidance from experts to aid in physical recovery and care.',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15M12 4.5a3.75 3.75 0 013.75 3.75H8.25A3.75 3.75 0 0112 4.5zM12 21a3.75 3.75 0 003.75-3.75H8.25A3.75 3.75 0 0012 21z" /></svg>),
    iconBgColor: 'bg-red-100',
    iconTextColor: 'text-red-600',
  },
];
// --- End of unchanged data ---

const ExclusiveBenefits = () => {
  return (
    <div className="pb-8 bg-white pt- sm:pt-16 sm:pb-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-500">
            Membership Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unlock Your Exclusive Benefits
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {benefits.map((feature) => (
              // HOVER EFFECT ADDED: Added padding, negative margin, transition, and a light blue background on hover.
              <div 
                key={feature.name} 
                className="relative flex items-start p-4 -m-4 transition-colors duration-300 ease-in-out rounded-xl hover:bg-sky-50"
              >
                <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${feature.iconBgColor}`}>
                  <div className={feature.iconTextColor}>{feature.icon}</div>
                </div>
                <div className="ml-5">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveBenefits;