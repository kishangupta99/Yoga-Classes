import React, { useState } from 'react';

// You would replace these with your actual image paths
const yogaHandbookImg = 'https://via.placeholder.com/300x150/A7F3D0/14532D?Text=Yoga+Handbook';
const pranayamaHandbookImg = 'https://via.placeholder.com/300x150/A5F3FC/0E7490?Text=Pranayama';

const ResourcesPage = () => {
    const [activeTab, setActiveTab] = useState('PDFs');

    return (
        <div className="p-4">
            <div className="flex items-center p-1 space-x-2 bg-gray-200 rounded-xl">
                <button onClick={() => setActiveTab('PDFs')} className={`w-full p-2 rounded-lg font-semibold transition-colors ${activeTab === 'PDFs' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}>PDFs</button>
                <button onClick={() => setActiveTab('VIDEOS')} className={`w-full p-2 rounded-lg font-semibold transition-colors ${activeTab === 'VIDEOS' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}>VIDEOS</button>
                <button onClick={() => setActiveTab('FAQs')} className={`w-full p-2 rounded-lg font-semibold transition-colors ${activeTab === 'FAQs' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}>FAQs</button>
            </div>

            <div className="mt-6 space-y-4">
                {activeTab === 'PDFs' && (
                    <>
                        <div className="p-4 space-y-3 bg-white shadow-md rounded-xl">
                            <img src={yogaHandbookImg} alt="Yoga Handbook" className="w-full rounded-lg"/>
                            <h3 className="text-lg font-bold text-gray-800">Yoga Handbook</h3>
                            <p className="text-sm font-semibold text-gray-500">55+ ASANAS</p>
                            <p className="text-gray-600">Achieve greater flexibility and reduce body pain.</p>
                            <button className="w-full p-3 font-bold text-white bg-blue-500 rounded-lg">Download</button>
                        </div>
                        <div className="p-4 space-y-3 bg-white shadow-md rounded-xl">
                            <div className="relative">
                                <img src={pranayamaHandbookImg} alt="Pranayama Handbook" className="w-full rounded-lg filter brightness-50"/>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Pranayama Handbook</h3>
                            <p className="text-sm font-semibold text-gray-500">10 PRANAYAMS</p>
                            <p className="text-gray-600">Breathe better to boost immunity and improve your lung capacity.</p>
                            <button className="w-full p-3 font-bold text-white bg-green-500 rounded-lg">Invite 1 friend to unlock</button>
                        </div>
                    </>
                )}
                {activeTab === 'VIDEOS' && <div className="p-10 text-center text-gray-500 bg-white shadow-md rounded-xl">Video content will appear here.</div>}
                {activeTab === 'FAQs' && <div className="p-10 text-center text-gray-500 bg-white shadow-md rounded-xl">FAQ content will appear here.</div>}
            </div>
        </div>
    );
};
export default ResourcesPage;