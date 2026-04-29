import React from 'react'

const MyAppointments = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          My Appointments
        </h1>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Dr. Sharma</h2>
              <p className="text-gray-600">Cardiologist</p>
              <p className="text-gray-500 mt-2">Date: 12 May 2026</p>
              <p className="text-gray-500">Time: 10:30 AM</p>
            </div>
            <div className="flex items-center">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
                Cancel Appointment
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Dr. Mehta</h2>
              <p className="text-gray-600">Dermatologist</p>
              <p className="text-gray-500 mt-2">Date: 18 May 2026</p>
              <p className="text-gray-500">Time: 02:00 PM</p>
            </div>
            <div className="flex items-center">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
                Cancel Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default MyAppointments