// src/pages/Dashboard/Dashboard.jsx

//import React, 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout'; // We will create this layout component
import HomePage from './HomePage';
import ResourcesPage from './ResourcesPage';
import ReferralPage from './ReferralPage';
import EditProfilePage from './EditProfilePage';

// This component sets up the routes that live inside the dashboard's mobile view
const Dashboard = () => {
  return (
    // This is the outer wrapper that creates the gray background and centers the frame
    <div className="flex items-center justify-center min-h-screen p-4 bg-slate-100 sm:p-8">
      {/* This is the mobile frame that contains the entire dashboard */}
      <div className="relative w-full max-w-sm overflow-hidden shadow-2xl bg-slate-50 rounded-2xl">
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route index element={<HomePage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="referral" element={<ReferralPage />} />
            <Route path="profile/edit" element={<EditProfilePage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;