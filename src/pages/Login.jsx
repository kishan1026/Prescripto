import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Login / Create Account
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Welcome to Priscripto Hospital Management System
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-3 outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg px-4 py-3 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-3 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Create Account
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?
        <span className="text-black font-medium cursor-pointer ml-1">
          Login here
        </span>
      </p>
    </div>
  </div>
  )
}

export default Login