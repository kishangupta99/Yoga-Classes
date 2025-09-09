// src/pages/Dashboard/Dashboard.jsx

import React, { useState } from 'react';

// Import all the components the dashboard will use
import TopHeader from '../../components/Dashboard/TopHeader';
import BottomNav from '../../components/Dashboard/BottomNav';
import ProfileSidebar from '../../components/Dashboard/ProfileSidebar';

// Import all the pages the dashboard will show
import HomePage from './HomePage';
import ResourcesPage from './ResourcesPage';
import ReferralPage from './ReferralPage';
import EditProfilePage from './EditProfilePage'; // <-- Import the EditProfilePage

const mockUser = { name: 'Akhilesh Ji', karmaPoints: 0 };

const Dashboard = () => {
  // This state now controls everything we see: 'main', or 'editProfile'
  const [currentView, setCurrentView] = useState('main'); 
  const [activeTab, setActiveTab] = useState('home'); // For the bottom nav
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Function to render the correct page based on the active tab
  const renderMainPages = () => {
    switch (activeTab) {
      case 'resources':
        return <ResourcesPage />;
      case 'referral':
        return <ReferralPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-slate-100 sm:p-8">
      <div className="w-full max-w-sm bg-white shadow-2xl rounded-2xl overflow-hidden relative h-[844px] max-h-[90vh]">
        
        {/* The Top Header is always visible */}
        <TopHeader user={mockUser} onMenuClick={() => setIsProfileOpen(true)} />
        
        {/* Main content area now switches between main pages and the profile editor */}
        <main className="absolute inset-0 pt-20 pb-24 overflow-y-auto bg-slate-50">
          {currentView === 'editProfile' ? (
            <EditProfilePage onBackClick={() => setCurrentView('main')} />
          ) : (
            renderMainPages()
          )}
        </main>
        
        {/* The Bottom Nav is only visible on the main pages */}
        {currentView === 'main' && (
          <BottomNav activePage={activeTab} setActivePage={setActiveTab} />
        )}
        
        <ProfileSidebar 
          user={mockUser} 
          isOpen={isProfileOpen} 
          onClose={() => setIsProfileOpen(false)} 
          // Pass a function to handle the "View Profile" click
          onViewProfileClick={() => setCurrentView('editProfile')}
        />
      </div>
    </div>
  );
};

export default Dashboard;