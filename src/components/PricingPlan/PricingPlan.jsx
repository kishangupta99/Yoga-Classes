import React from 'react';

// Data for the pricing plans. You can easily add or change plans here.
const plans = [
  {
    name: 'Standard',
    price: '30',
    description: 'This pack contains all the basic things which makes your workflow easier!',
    features: [
      'Try free for 7 days',
      'Unlimited articles and podcasts',
      'Unlimited access to yoga classes',
      'Discount on select trainings',
    ],
    isHighlighted: false,
    razorpayPlanId: 'plan_standard_monthly', // Example ID for Razorpay
  },
  {
    name: 'Professional',
    price: '120',
    description: 'This pack contains all the basic things which makes your workflow easier!',
    features: [
      'Try free for 7 days',
      'Unlimited articles and podcasts',
      'Unlimited access to yoga classes',
      'Discount on select trainings',
    ],
    isHighlighted: true,
    razorpayPlanId: 'plan_professional_monthly', // Example ID for Razorpay
  },
  {
    name: 'Private',
    price: '250',
    description: 'This pack contains all the basic things which makes your workflow easier!',
    features: [
      'Try free for 7 days',
      'Unlimited articles and podcasts',
      'Unlimited access to yoga classes',
      'Discount on select trainings',
    ],
    isHighlighted: false,
    razorpayPlanId: 'plan_private_monthly', // Example ID for Razorpay
  },
];

// A simple checkmark icon component
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className="flex-none w-5 h-6 text-rose-500"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

const PricingPlan = () => {
  return (
    <section className="bg-white py-14 sm:py-22">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* Main Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing Plan
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        {/* 'isolate' is used to create a stacking context for the highlighted card's transform */}
        <div className="grid max-w-md grid-cols-1 gap-8 mx-auto mt-16 isolate lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 shadow-xl ring-1 ${
                plan.isHighlighted
                  ? 'bg-rose-500 ring-rose-500 lg:scale-105'
                  : 'bg-white ring-gray-200'
              }`}
            >
              {/* Plan Name */}
              <h3
                className={`text-lg font-semibold leading-8 ${
                  plan.isHighlighted ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.name}
              </h3>
              
              {/* Price */}
              <p className="flex items-baseline mt-4 gap-x-2">
                <span
                  className={`text-4xl sm:text-5xl font-bold tracking-tight ${
                    plan.isHighlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-base font-semibold ${
                    plan.isHighlighted ? 'text-rose-100' : 'text-gray-500'
                  }`}
                >
                  /per month
                </span>
              </p>

              {/* Description */}
              <p
                className={`mt-6 text-base leading-7 ${
                  plan.isHighlighted ? 'text-rose-100' : 'text-gray-600'
                }`}
              >
                {plan.description}
              </p>

              {/* Features List */}
              <ul
                role="list"
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  plan.isHighlighted ? 'text-rose-100' : 'text-gray-600'
                }`}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* "Select Plan" Button */}
              <button
                // You can add an onClick handler here for Razorpay later
                // e.g., onClick={() => handlePayment(plan.razorpayPlanId)}
                data-plan-id={plan.razorpayPlanId} // Storing the plan ID here
                className={`mt-8 block w-full rounded-md py-2.5 px-3.5 text-center text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.isHighlighted
                    ? 'bg-white text-rose-600 hover:bg-rose-100 focus-visible:outline-white'
                    : 'bg-rose-500 text-white hover:bg-rose-600 focus-visible:outline-rose-500'
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;