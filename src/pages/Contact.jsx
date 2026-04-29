import React from 'react'
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Get in Touch
            </h2>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6" />
              <p className="text-gray-600">Prescripto Hospital, Jalandhar, Punjab</p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <p className="text-gray-600">support@priscripto.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6" />
              <p className="text-gray-600">Mon - Sat : 9:00 AM - 8:00 PM</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send a Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact