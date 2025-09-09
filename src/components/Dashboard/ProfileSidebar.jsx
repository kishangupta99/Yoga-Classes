import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSidebar = ({ user, isOpen, onClose, onViewProfileClick }) => {
    
    // This function tells the parent Dashboard to show the profile editor
    // and also closes the sidebar.
    const handleViewProfile = () => {
        onViewProfileClick();
        onClose();
    };

    // Placeholder for your actual logout logic
    const handleLogout = () => {
        console.log('Logging out...');
        // Later, you'll add logic here to clear the user session and redirect.
        // For example: navigate('/login');
    };

    return (
        <>
            {/* Backdrop Overlay */}
            <div 
                onClick={onClose} 
                className={`absolute inset-0 bg-black/30 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Sidebar Panel */}
            <div 
                className={`absolute top-0 left-0 h-full w-4/5 max-w-sm bg-gray-100 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex flex-col h-full p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                         <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-gray-500">
                                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.095a1.23 1.23 0 00.41-1.412A9.957 9.957 0 0010 12c-2.31 0-4.438.784-6.131 2.095z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">{user.name}</h3>
                                <button onClick={handleViewProfile} className="flex items-center text-sm font-semibold text-blue-600">
                                    View Profile &rarr;
                                </button>
                            </div>
                        </div>
                        <button onClick={onClose} className="px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full">&times; Close</button>
                    </div>

                    {/* QR Code Section */}
                    <div className="p-4 mt-6 text-center bg-white shadow rounded-xl">
                        <h4 className="font-bold text-gray-800">Personal Invite QR Code</h4>
                        <p className="mt-1 text-sm text-gray-500">Ask your friends to scan and gift 14 Days of FREE ONLINE YOGA</p>
                        <div className="flex items-center justify-center w-40 h-40 mx-auto my-4 text-xs text-gray-400 bg-gray-200">
                            {/* You will replace this div with a QR Code component */}
                            QR CODE
                        </div>
                        <button className="flex items-center justify-center w-full gap-2 p-3 font-bold text-white bg-green-500 rounded-lg">
                            <svg xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download QR
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="mt-8 space-y-4">
                        <button onClick={onClose} className="flex items-center gap-3 text-lg font-semibold text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
                            FAQs
                        </button>
                        <button onClick={handleLogout} className="flex items-center gap-3 text-lg font-semibold text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>
                            Logout
                        </button>
                    </div>

                    {/* Footer Link */}
                    <div className="mt-auto text-sm font-semibold text-center text-blue-600">
                        <Link to="#" onClick={onClose}>Terms of Use</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProfileSidebar;