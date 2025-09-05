import React from 'react';

// --- Data and Icon components are unchanged ---
const benefitsData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-800"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-9-3h18M3 8h18M3 13h18M3 18h18M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>
    ),
    title: "Be Calm",
    features: ["Reduce Stress", "Improve sleep quality", "Learn Powerful breathing techniques"],
    bgColor: "bg-orange-50",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-800"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m-3.75-9H7.5m11.25 0H16.5M7.5 21L3 16.5m18 4.5L16.5 16.5M3 7.5l4.5 4.5m18 0l-4.5 4.5M12 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM12 12a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0z" /></svg>
    ),
    title: "Become Flexible",
    features: ["Increase the flexibility of muscles", "Heal stiffness & tightness in the body", "Improve Joint pains"],
    bgColor: "bg-white",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-800"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L13.5 21.75 16.5 12h-8.25z" /></svg>
    ),
    title: "Burn Fat",
    features: ["Burn extra calories", "Learn techniques to maintain weight", "Get Stronger"],
    bgColor: "bg-blue-50",
  },
];
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-5 h-5 text-green-500"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
);
// --- End of unchanged data ---

const BenefitsSection = () => {
  return (
    <section className="pt-8 bg-white sm:pt-12">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-500">
            Benefits
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Reasons to Join Us
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              // HOVER EFFECT ADDED: Added transition, scale, and a light blue ring on hover.
              className={`rounded-2xl p-6 ${benefit.bgColor} flex flex-col items-center text-center shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue-400`}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="mb-4 text-xl font-semibold leading-7 text-gray-900">
                {benefit.title}
              </h3>
              <ul role="list" className="mt-auto space-y-3 text-base text-gray-600">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start justify-center gap-x-3">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;