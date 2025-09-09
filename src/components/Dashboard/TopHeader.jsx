import React from 'react';

const TopHeader = ({ user, onMenuClick }) => {
  return (
    // CHANGE: Changed 'fixed' to 'absolute'
    <header className="sticky top-0 left-0 right-0 z-40 flex items-center justify-between p-4 bg-white shadow-sm max-h-[100vh]">
      <div className="flex items-center gap-x-3">
        <button onClick={onMenuClick} className="text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div>
          <p className="text-sm text-gray-500">Namaste</p>
          <h1 className="text-xl font-bold text-gray-800">{user.name}</h1>
        </div>
      </div>
      <div className="bg-blue-100 text-blue-700 font-semibold px-3 py-1.5 rounded-full text-sm">
        {user.karmaPoints} Karma Points
      </div>
    </header>
  );
};
export default TopHeader;