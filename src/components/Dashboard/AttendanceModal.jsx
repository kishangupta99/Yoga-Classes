import React from 'react';

const days = ['M', 'T', 'W', 'T', 'F', 'S'];

const AttendanceModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-[80] flex items-center justify-center p-4">
      {/* Cick outside to close */}
      <div onClick={onClose} className="absolute inset-0"></div>
      
      <div className="relative w-full max-w-sm p-6 bg-white shadow-lg rounded-xl">
        <h3 className="text-lg font-bold text-gray-800">Track Your Attendance</h3>
        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Days left in Challenge:</span>
            <span className="font-semibold text-gray-800">13 Days</span>
          </div>
          <div className="flex justify-between">
            <span>Total Active Days:</span>
            <span className="font-semibold text-gray-800">1 Days</span>
          </div>
        </div>
        
        <div className="grid grid-cols-6 gap-2 mt-6">
          {days.map((day, index) => (
            <div key={index} className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold ${index === 0 ? 'bg-teal-200 text-teal-800' : 'bg-gray-100 text-gray-400'}`}>
              {day}
            </div>
          ))}
        </div>

        <button className="w-full mt-4 text-sm font-semibold text-center text-blue-600">Show More &darr;</button>

        <div className="flex justify-around pt-4 mt-4 text-xs text-center text-gray-500 border-t">
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-teal-200 rounded"></div>
            <span>PRESENT</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-orange-200 rounded"></div>
            <span>NOT MARKED</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 border border-gray-300 rounded"></div>
            <span>NOT ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AttendanceModal;