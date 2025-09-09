// src/pages/Dashboard/Dashboard.jsx

import React, { useState } from 'react';
import TopHeader from '../../components/Dashboard/TopHeader';
import BottomNav from '../../components/Dashboard/BottomNav';
import ProfileSidebar from '../../components/Dashboard/ProfileSidebar';
import HomePage from './HomePage';
import ResourcesPage from './ResourcesPage';
import ReferralPage from './ReferralPage';
import EditProfilePage from './EditProfilePage';

const mockUser = { name: 'Akhilesh Ji', karmaPoints: 0 };

const Dashboard = () => {
  const [currentView, setCurrentView] = useState('main'); 
  const [activeTab, setActiveTab] = useState('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
    // This outer div creates the background and centers the "phone"
    <div className="flex items-center justify-center min-h-screen p-4 bg-slate-100 sm:p-8">
      
      {/* This is the mobile frame that contains the entire dashboard.
          It has a fixed height and acts as the container for all other elements. */}
      <div className="w-full max-w-sm bg-white shadow-2xl rounded-2xl overflow-hidden relative h-[844px] max-h-[90vh]">
        
        <TopHeader user={mockUser} onMenuClick={() => setIsProfileOpen(true)} />
        
        <main className="absolute inset-0 pt-20 pb-24 overflow-y-auto bg-slate-50">
          {currentView === 'editProfile' ? (
            <EditProfilePage onBackClick={() => setCurrentView('main')} />
          ) : (
            renderMainPages()
          )}
        </main>
        
        {currentView === 'main' && (
          <BottomNav activePage={activeTab} setActivePage={setActiveTab} />
        )}
        
        <ProfileSidebar 
          user={mockUser} 
          isOpen={isProfileOpen} 
          onClose={() => setIsProfileOpen(false)} 
          onViewProfileClick={() => setCurrentView('editProfile')}
        />
      </div>
    </div>
  );
};

export default Dashboard;