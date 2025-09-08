import React from 'react';

const referralIllustration = 'https://via.placeholder.com/300x150/FEF3C7/92400E?Text=Referrals';

const ReferralPage = () => {
    return (
        <div className="p-4 space-y-6">
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-xl">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">Referral Rewards</h3>
                    <p className="mt-1 text-sm font-semibold text-blue-600">Invite <strong className="text-blue-700">1 friend</strong> to win <strong className="text-blue-700">7 Yoga Day Voucher</strong></p>
                </div>
                <button className="px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-500 rounded-lg whitespace-nowrap">See Rewards</button>
            </div>

            <div className="p-4 space-y-4 bg-white shadow-md rounded-xl">
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

            <div className="p-4 text-center bg-white shadow-md rounded-xl">
                <h3 className="text-lg font-bold text-gray-800">Your list of referrals will appear here.</h3>
                <p className="mt-1 text-sm text-gray-500">You Earn 10 Karma Point for every referral joining.</p>
                <img src={referralIllustration} alt="People doing yoga" className="mx-auto mt-4 rounded-lg"/>
            </div>
        </div>
    );
};
export default ReferralPage;