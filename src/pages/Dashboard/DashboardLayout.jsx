// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import TopHeader from '../../components/Dashboard/TopHeader';
// import BottomNav from '../../components/Dashboard/BottomNav';
// import ProfileSidebar from '../../components/Dashboard/ProfileSidebar';

// const mockUser = { name: 'Akhilesh Ji', karmaPoints: 0 };

// const DashboardLayout = () => {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   return (
//     <div className="font-sans">
//       <TopHeader user={mockUser} onMenuClick={() => setIsProfileOpen(true)} />
//       <main className="pt-20 pb-24">
//         <Outlet />
//       </main>
//       <BottomNav />
//       <ProfileSidebar 
//         user={mockUser} 
//         isOpen={isProfileOpen} 
//         onClose={() => setIsProfileOpen(false)} 
//       />
//     </div>
//   );
// };

// export default DashboardLayout;