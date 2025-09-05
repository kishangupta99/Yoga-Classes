import React, { useState } from 'react';

// ADDED: Two new questions and answers
const faqData = [
  {
    question: 'What is the difference between Yoga and an Asana?',
    answer: 'Yoga is a holistic ancient practice for the mind and body, encompassing philosophy, breathing techniques (pranayama), meditation, and ethical principles. An Asana is a specific physical posture or pose, which is just one of the eight limbs of yoga.',
  },
  {
    question: 'How often should I practice yoga as a beginner?',
    answer: 'For beginners, consistency is more important than duration. Starting with 2-3 sessions per week, even for just 20-30 minutes, is a great way to build a foundation. You can gradually increase the frequency and length as your body gets stronger and more flexible.',
  },
  {
    question: 'Do I need to be flexible to start yoga?',
    answer: 'Absolutely not! This is a common myth. Yoga is for everyone, regardless of flexibility. In fact, practicing yoga is one of the best ways to improve your flexibility safely. Our instructors always provide modifications for every fitness level.',
  },
  {
    question: 'What is "Vinyasa" yoga?',
    answer: '"Vinyasa" means "to place in a special way." Vinyasa yoga is a dynamic style where you flow from one asana to the next, linking each movement with your breath. It often feels like a smooth, continuous dance.',
  },
  {
    question: 'Can yoga help with stress and anxiety?',
    answer: 'Yes, significantly. The focus on deep, mindful breathing (pranayama) and physical postures helps activate the parasympathetic nervous system, which promotes a state of rest and calm. Regular practice can lower stress hormones and improve overall mental clarity.',
  },
  {
    question: 'What should I wear for a yoga class?',
    answer: 'Wear comfortable, breathable clothing that allows you to move freely. Stretchy fabrics are ideal. Avoid anything too baggy that might get in the way or too restrictive. Most people practice yoga barefoot.',
  },
  {
    question: 'Is it normal to feel sore after practicing yoga?',
    answer: 'Yes, it\'s completely normal to feel some muscle soreness, especially when you are new to yoga or trying new poses. This is known as Delayed Onset Muscle Soreness (DOMS) and is a sign that your muscles are getting stronger. It should subside within a day or two.',
  },
];

const FaqSection = () => {
  return (
    <section className="bg-white py-14 sm:py-22">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* CHANGED: Increased width from max-w-4xl to max-w-7xl */}
        <div className="w-full mx-auto"> 
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-center text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqData.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

// This is the individual FAQ item component that manages its own open/close state
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-6">
      <dt>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-start justify-between w-full p-4 -m-4 text-left text-gray-900 transition-colors rounded-lg hover:bg-slate-50"
        >
          <span className="text-base font-semibold leading-7">{question}</span>
          <span className="flex items-center ml-6 h-7">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            )}
          </span>
        </button>
      </dt>
      {/* This div handles the smooth open/close animation */}
      <dd
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="pr-12 mt-2">
          <p className="text-base leading-7 text-gray-600">{answer}</p>
        </div>
      </dd>
    </div>
  );
};

export default FaqSection;