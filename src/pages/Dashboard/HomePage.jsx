import React, { useState } from 'react';
import AttendanceModal from '../../components/Dashboard/AttendanceModal';

const HomePage = () => {
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);
  
  return (
    <div className="p-4 space-y-6">
      {/* Top Buttons */}
      <div className="p-4 space-y-4 bg-white shadow-md rounded-xl">
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 p-3 font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-500"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
            Join Class
          </button>
          <button className="flex items-center justify-center gap-2 p-3 font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-500"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" /></svg>
            Batch Timings
          </button>
        </div>
        <button onClick={() => setIsAttendanceOpen(true)} className="flex items-center justify-center w-full gap-2 p-3 font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500"><path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c0-.414.336-.75.75-.75h10.5a.75.75 0 010 1.5H5.5a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
          Check My Attendance
        </button>
      </div>

      {/* Invite Friends Card */}
      <div className="p-4 space-y-4 bg-white shadow-md rounded-xl">
        <h3 className="text-lg font-bold text-gray-800">Invite Friends & Win Rewards</h3>
        <p className="text-sm text-gray-500">Friends will also get <span className="font-bold text-gray-700">FREE 14 Yoga Days</span> 💜</p>
        <div className="flex items-center justify-between p-3 border border-gray-300 border-dashed rounded-lg">
            <span className="text-sm text-gray-700 truncate">https://habit.yoga/Tedt_5v8hc</span>
            <button className="flex items-center gap-1 ml-2 text-sm font-semibold text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v3.043m-7.416 0v3.043c0 .212.03.418.084.612m7.332 0c.646.248 1.288.556 1.908.928a2.25 2.25 0 01.932 2.052v4.87c0 1.01-.758 1.833-1.745 1.956-1.144.137-2.35.3-3.58.528-1.428.27-2.92.51-4.416.655-1.12.108-2.268.18-3.418.23-1.342.056-2.67.026-3.996-.076a2.25 2.25 0 01-1.423-2.074v-4.87c0-.987.625-1.84 1.54-2.083 1.02-.268 2.08-.562 3.196-.867.808-.224 1.63-.448 2.46-.668a2.25 2.25 0 012.166-1.638h3z" /></svg>
                Copy
            </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center w-full gap-2 p-3 font-semibold text-white bg-green-500 rounded-lg">WA Status</button>
          <button className="flex items-center justify-center w-full gap-2 p-3 font-semibold text-white bg-green-500 rounded-lg">Share On WhatsApp</button>
        </div>
      </div>
      
      {/* How to Refer */}
      <div className="p-4 space-y-4 bg-white shadow-md rounded-xl">
        <h3 className="text-lg font-bold text-gray-800">How to Refer?</h3>
        <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-3"><span className="text-2xl">📱</span><p>Click on <strong className="text-gray-800">"Share on WhatsApp"</strong> above to Generate your customised link</p></li>
            <li className="flex items-center gap-3"><span className="text-2xl">🤝</span><p>Share it with your Friends / Family members</p></li>
            <li className="flex items-center gap-3"><span className="text-2xl">🎁</span><p>Reach New Levels to earn reward when they join through your link</p></li>
        </ul>
      </div>

      {isAttendanceOpen && <AttendanceModal onClose={() => setIsAttendanceOpen(false)} />}
    </div>
  );
};
export default HomePage;