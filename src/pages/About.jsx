import React from 'react'

const About = () => {
  return (
 
      <div className="min-h-screen bg-white px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          About Prescripto
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
            alt="Hospital"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Health, Our Priority
            </h2>
            <p className="text-gray-600 leading-7 mb-4">
              Prescripto is a modern hospital management system designed to make
              healthcare services simple, fast, and accessible for everyone.
              Our platform helps patients book appointments, connect with
              doctors, manage prescriptions, and receive quality care with ease.
            </p>
            <p className="text-gray-600 leading-7 mb-4">
              We believe in combining technology with compassionate healthcare.
              From experienced specialists to advanced treatment facilities,
              Priscripto ensures a smooth and trusted healthcare experience.
            </p>
            <p className="text-gray-600 leading-7">
              Our mission is to provide smart healthcare solutions that improve
              patient satisfaction and hospital efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default About