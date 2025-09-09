import React from 'react';

const EditProfilePage = ({ onBackClick }) => {
    
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('Updating profile...');
        // After a successful update, you might want to go back:
        // onBackClick(); 
    };

    return (
        // The main container for the page
        <div className="w-full h-full">
            {/* --- NEW HEADER SECTION --- */}
            <div className="relative flex items-center justify-center p-4 bg-white shadow-sm">
                {/* Back button is now clearly visible */}
                <button 
                    onClick={onBackClick} 
                    className="absolute p-2 transition-colors rounded-full left-4 hover:bg-gray-100"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2.5} 
                        stroke="currentColor" 
                        className="w-6 h-6 text-gray-700"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                {/* Title is now centered at the top */}
                <h2 className="text-xl font-bold text-gray-800">
                    Edit Profile
                </h2>
            </div>
            {/* --- END OF NEW HEADER SECTION --- */}

            <div className="p-4">
                <form onSubmit={handleUpdate} className="p-6 space-y-6 bg-white shadow-md rounded-xl">
                    <h3 className="text-lg font-bold text-gray-800">Personal Details</h3>

                    <div>
                        <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                        {/* Added bg-white */}
                        <input type="text" name="name" id="name" defaultValue="Akhilesh" required className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    
                    <div>
                        <label htmlFor="birthYear" className="block mb-1 text-sm font-medium text-gray-700">Birth Year <span className="text-red-500">*</span></label>
                        {/* Added bg-white */}
                        <input type="text" name="birthYear" id="birthYear" placeholder="YYYY" required className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    <div>
                        <label htmlFor="gender" className="block mb-1 text-sm font-medium text-gray-700">Gender <span className="text-red-500">*</span></label>
                        <select name="gender" id="gender" required className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Your Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="city" className="block mb-1 text-sm font-medium text-gray-700">City <span className="text-red-500">*</span></label>
                        {/* Added bg-white */}
                        <input type="text" name="city" id="city" placeholder="Enter Your City" required className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    <button type="submit" className="w-full p-3 font-bold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">Update</button>
                </form>
            </div>
        </div>
    );
};
export default EditProfilePage;