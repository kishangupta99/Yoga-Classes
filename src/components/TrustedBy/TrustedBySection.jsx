import React from 'react';

const stats = [
  {
    value: "1.24 Crore +",
    label: "Community Members",
    bgColor: "bg-white",
  },
  {
    value: "12+",
    label: "Years of Experience",
    bgColor: "bg-slate-100",
  },
  {
    value: "4.9/5",
    label: "Google Rating",
    bgColor: "bg-white",
  },
];

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-500">
            Welcome to Habuild
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Members Worldwide
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We blend the best of old-school knowledge with modern tricks to help you form long-lasting healthy habits.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                // HOVER EFFECT ADDED: Added transition, scale, and a light blue ring on hover.
                className={`flex flex-col items-center justify-center rounded-2xl p-8 ${stat.bgColor} transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-blue-300`}
              >
                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-base leading-7 text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;