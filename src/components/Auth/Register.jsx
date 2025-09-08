import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import trainerImage from "../../assets/trishala.png";
import api from '../../services/api';

const goalsOptions = [
  'Weight Loss', 'Stress Reduction', 'Flexibility',
  'Build Muscle', 'Improve Sleep', 'Mindfulness'
];

const RegisterForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    password: '',
    refcode: searchParams.get('refcode') || '',
    goals: [],
  });
  const [isGoalsFocused, setIsGoalsFocused] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGoalSelect = (goal) => {
    setFormData((prevData) => ({
      ...prevData,
      goals: prevData.goals.includes(goal)
        ? prevData.goals.filter((g) => g !== goal)
        : [...prevData.goals, goal],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.goals.length === 0) {
      alert('Please select at least one primary goal to continue.');
      setIsGoalsFocused(true);
      setTimeout(() => setIsGoalsFocused(false), 1500);
      return;
    }

    try {
      // Create the payload for the API, mapping 'refcode' to 'referralCode'
      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        password: formData.password,
        goals: formData.goals,
        referralCode: formData.refcode,
      };
      
      const response = await api.post('/auth/register', payload);

      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');

    } catch (err) {
      console.error('Registration failed:', err.response?.data);
      alert(err.response?.data?.msg || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-teal-50 via-cyan-50 to-white">
      <main className="w-full max-w-md">
        {/* Header Section */}
        <div className="relative overflow-hidden text-center rounded-t-xl">
          <div className="pt-6 bg-white">
            <div className="inline-block px-4 py-1 text-sm font-bold text-orange-800 rounded-md bg-orange-300/80">
              YOGA FOR NATION
            </div>
            <h1 className="mt-2 text-5xl font-semibold text-gray-800">FREE YOGA</h1>
            <p className="flex items-center justify-center gap-2 mt-2 font-semibold text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c0-.414.336-.75.75-.75h10.5a.75.75 0 010 1.5H5.5a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
              Starts Monday
            </p>
            <div className="mt-4">
              <img src={trainerImage} alt="Yoga Trainer Trishala Bothra" className="object-contain h-48 mx-auto" />
            </div>
          </div>
          <div className="py-3 bg-white/70 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-gray-800">TRISHALA BOTHRA</h2>
            <p className="text-sm text-gray-600">Govt Certified Yoga Teacher</p>
            <p className="mt-1 text-xs text-gray-500">IIT Graduate | 12+ Years Exp.</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6 bg-white shadow-lg sm:p-8 rounded-b-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Your Name" required className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
            </div>
            <div>
              <div className="flex">
                <div className="flex items-center justify-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                  <span className="text-lg">🇮🇳</span>
                  <span className="ml-2 font-semibold text-gray-700">+91</span>
                </div>
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Mobile Number" required className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-r-md focus:ring-teal-500 focus:border-teal-500" />
              </div>
            </div>
            <div>
              <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter Your Password" required className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
            </div>
            
            {/* UPDATED REFERRAL CODE INPUT */}
            <div>
              <input type="text" name="refcode" id="refcode" value={formData.refcode} onChange={handleInputChange} placeholder="Referral Code (Optional)" className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" readOnly={!!searchParams.get('refcode')} />
            </div>
            
            <div className={`pt-4 border-t border-gray-200 transition-all duration-300 ease-in-out ${isGoalsFocused ? 'border-teal-500 ring-2 ring-teal-500' : ''}`}>
              <label className="block mb-3 text-sm font-bold text-blue-500">
                What are your primary goals? <span className="text-gray-500">(Select at least one)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {goalsOptions.map((goal) => (
                  <button type="button" key={goal} onClick={() => handleGoalSelect(goal)} className={`px-3 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${formData.goals.includes(goal) ? 'bg-teal-500 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {goal}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="flex items-center justify-center w-full px-4 py-4 text-lg font-bold text-white transition-all duration-300 rounded-md shadow-lg gap-x-2 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 hover:scale-105">
              Create Your Account
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-sm font-medium text-teal-600 hover:text-teal-500 hover:underline">
              Already have an account? Login here
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterForm;