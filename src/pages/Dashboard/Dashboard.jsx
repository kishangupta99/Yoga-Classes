import React, { useState, useEffect } from 'react';

// --- Mock Data (This makes the page work without a backend) ---
const mockInitialUser = {
  name: 'Anjali',
  karmaPoints: 420,
  attendance: {
    total: 42,
    weekly: 3,
    monthly: 15,
    streak: 3,
  },
};

// Helper to generate a weekly schedule based on the current date
const generateWeeklySchedule = () => {
  const schedule = [];
  const today = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const yogaTypes = ['Hatha', 'Vinyasa', 'Ashtanga', 'Yin'];
  const instructors = ['Trishala B.', 'Rohan S.', 'Priya K.'];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const classes = [];
    if (i % 2 === 0 || i % 3 === 0) {
      classes.push({ id: i * 2, time: '7:00 AM', type: yogaTypes[i % yogaTypes.length], instructor: instructors[i % instructors.length], link: '#', isLive: i === 0 });
    }
    if (i % 2 !== 0 || i > 4) {
      classes.push({ id: i * 2 + 1, time: '6:00 PM', type: yogaTypes[(i + 1) % yogaTypes.length], instructor: instructors[(i + 1) % instructors.length], link: '#', isLive: false });
    }

    schedule.push({ day: days[date.getDay()], date: date.getDate(), month: date.toLocaleString('default', { month: 'short' }), classes });
  }
  return schedule;
};


// --- Main Dashboard Component ---
const Dashboard = () => {
  const [user, setUser] = useState(mockInitialUser);
  const [schedule, setSchedule] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [donationScreenshot, setDonationScreenshot] = useState(null);

  useEffect(() => {
    setSchedule(generateWeeklySchedule());
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleJoinClass = () => {
    alert(`Joining class! Your attendance has been marked.`);
    setUser(prevUser => {
      const newStreak = prevUser.attendance.streak + 1;
      let newKarma = prevUser.karmaPoints + 10;
      if (newStreak % 10 === 0 && newStreak > 0) {
        newKarma += 100;
        alert(`Congratulations! You've completed a 10-class streak and earned a 100-point bonus!`);
      }
      return { ...prevUser, karmaPoints: newKarma, attendance: { ...prevUser.attendance, total: prevUser.attendance.total + 1, weekly: prevUser.attendance.weekly + 1, monthly: prevUser.attendance.monthly + 1, streak: newStreak }};
    });
  };
  
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setDonationScreenshot(e.target.files[0]);
    }
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    if (!donationScreenshot) {
      alert('Please upload a screenshot of your payment.');
      return;
    }
    alert('Thank you! Your donation proof has been submitted for verification.');
    setDonationScreenshot(null);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen font-sans bg-gray-50">
      <main className="max-w-4xl p-4 mx-auto">
        {/* --- DASHBOARD HEADER --- */}
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome, {user.name}!</h1>
            <p className="text-gray-500">Ready for today's practice?</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-lg font-bold text-orange-500">{user.karmaPoints}</p>
              <p className="text-xs text-gray-500">Karma Points ✨</p>
            </div>
            <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </header>
        
        {/* --- Notice Board and Weekly Schedule --- */}
        <section className="mb-8">
          <div className="p-4 border-l-4 border-teal-500 rounded-r-lg shadow-sm bg-teal-50">
            <h2 className="text-lg font-bold text-teal-800">Today's Live Class (Notice Board)</h2>
            <div className="items-center justify-between mt-2 md:flex">
              <p className="text-gray-700"><strong>Hatha Yoga</strong> with Trishala B. at <strong>7:00 AM</strong>.</p>
              <button onClick={handleJoinClass} className="w-full px-6 py-2 mt-2 font-bold text-white transition-colors bg-teal-500 rounded-lg md:mt-0 md:w-auto hover:bg-teal-600">Join Now</button>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Weekly Class Schedule</h2>
          <div className="flex pb-4 space-x-4 overflow-x-auto">{schedule.map((day, index) => (<div key={index} className="flex-shrink-0 w-64 p-4 bg-white border shadow-md rounded-xl"><div className="mb-3 text-center"><p className="text-sm font-semibold text-red-500">{day.day}</p><p className="text-2xl font-bold text-gray-800">{day.date}</p><p className="text-sm text-gray-500">{day.month}</p></div><div className="space-y-3">{day.classes.length > 0 ? day.classes.map(cls => (<div key={cls.id} className="p-3 text-sm bg-gray-100 rounded-lg"><p className="font-bold text-gray-700">{cls.time} - {cls.type}</p><p className="text-gray-500">with {cls.instructor}</p><div className="flex items-center justify-between mt-2"><a href={cls.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">{cls.isLive ? 'Live Link' : 'Recording'}</a><button className="text-xs text-gray-500 hover:text-black">Rate ⭐</button></div></div>)) : (<p className="pt-8 text-sm text-center text-gray-400">No classes today.</p>)}</div></div>))}</div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-800">Your Progress</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="p-4 text-center bg-white border shadow-md rounded-xl">
              <p className="text-3xl font-bold text-indigo-600">{user.attendance.streak}</p>
              <p className="text-sm text-gray-500">Day Streak</p>
            </div>
            <div className="p-4 text-center bg-white border shadow-md rounded-xl">
              <p className="text-3xl font-bold text-indigo-600">{user.attendance.weekly}</p>
              <p className="text-sm text-gray-500">This Week</p>
            </div>
            <div className="p-4 text-center bg-white border shadow-md rounded-xl">
              <p className="text-3xl font-bold text-indigo-600">{user.attendance.monthly}</p>
              <p className="text-sm text-gray-500">This Month</p>
            </div>
            <div className="p-4 text-center bg-white border shadow-md rounded-xl">
              <p className="text-3xl font-bold text-indigo-600">{user.attendance.total}</p>
              <p className="text-sm text-gray-500">Total Classes</p>
            </div>
          </div>
        </section>
      </main>

      {/* === FULL-SCREEN MENU OVERLAY === */}
      <div 
        className={`fixed inset-0 bg-gray-50 z-50 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full max-w-4xl p-4 mx-auto">
          {/* --- Overlay Header --- */}
          <header className="flex items-center justify-between flex-shrink-0 mb-6">
            <h2 className="text-xl font-bold text-gray-800">Menu & Donations</h2>
            <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </header>

          {/* --- Overlay Content --- */}
          <div className="flex-grow pb-8 overflow-y-auto">
            <div className="max-w-md p-6 mx-auto bg-white border shadow-lg rounded-xl">
              <h3 className="mb-2 text-lg font-bold text-center text-gray-800">Support Us with a Donation</h3>
              <p className="mb-4 text-sm text-center text-gray-600">
                Your contributions help us keep these classes free. Scan the QR code with any UPI app.
              </p>
              
              {/* === QR CODE SECTION (NEWLY ADDED) === */}
              <div className="flex justify-center mb-6">
                
              </div>
              {/* === END QR CODE SECTION === */}

              <form onSubmit={handleDonationSubmit}>
                <label htmlFor="screenshot" className="block mb-2 text-sm font-medium text-gray-700">
                  Upload Payment Screenshot for Karma Points
                </label>
                <input 
                  type="file" 
                  id="screenshot"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                  required
                />
                {donationScreenshot && <p className="mt-1 text-xs text-gray-500">File: {donationScreenshot.name}</p>}
                <button 
                  type="submit" 
                  className="w-full px-4 py-3 mt-6 font-bold text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600"
                >
                  Submit for Verification
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;