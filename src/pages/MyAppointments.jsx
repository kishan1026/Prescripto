import React, { useEffect, useState } from 'react'

const MyAppointments = () => {

  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || []
    setAppointments(data)
  }, [])

  const cancelAppointment = (id) => {
    const updated = appointments.filter(item => item.id !== id)
    setAppointments(updated)
    localStorage.setItem("appointments", JSON.stringify(updated))
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 py-12">
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          My Appointments
        </h1>

        <div className="space-y-6">

          {
            appointments.length === 0 ? (
              <p className="text-center text-gray-500">
                No appointments booked yet ❌
              </p>
            ) : (
              appointments.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row justify-between gap-6">
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.docName}
                    </h2>
                    <p className="text-gray-600">{item.speciality}</p>
                    <p className="text-gray-500 mt-2">
                      Date: {item.date}
                    </p>
                    <p className="text-gray-500">
                      Time: {item.time}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <button 
                      onClick={() => cancelAppointment(item.id)}
                      className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                    >
                      Cancel Appointment
                    </button>
                  </div>

                </div>
              ))
            )

          }

        </div>
      </div>
    </div>
  )
}

export default MyAppointments