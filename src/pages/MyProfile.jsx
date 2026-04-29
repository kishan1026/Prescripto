import React from 'react'

const MyProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          My Profile
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover shadow-md"
          />

          <div className="flex-1 space-y-4">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="text-lg font-medium text-gray-800">Mayuri Mehra</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-medium text-gray-800">mayuri@example.com</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-lg font-medium text-gray-800">+91 98765 43210</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-lg font-medium text-gray-800">Jalandhar, Punjab</p>
            </div>

            <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile