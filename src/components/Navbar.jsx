import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300'>
      
      {/* Logo */}
      <img 
        onClick={() => { navigate('/'); scrollTo(0,0) }} 
        className='w-44 cursor-pointer' 
        src={assets.logo} 
        alt="" 
      />

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/"><li>HOME</li></NavLink>
        <NavLink to="/doctors"><li>ALL DOCTORS</li></NavLink>
        <NavLink to="/about"><li>ABOUT</li></NavLink>
        <NavLink to="/gallery"><li>GALLERY</li></NavLink>
        <NavLink to="/contact"><li>CONTACT</li></NavLink>
      </ul>

      {/* Right Section */}
      <div className='flex items-center gap-4'>

        {/* Profile / Button */}
        {
          token ? (
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />

              <div className='absolute top-0 right-0 pt-14 hidden group-hover:block'>
                <div className='min-w-48 bg-white shadow-lg rounded flex flex-col gap-3 p-4'>
                  <p onClick={()=>navigate('/my-profile')} className='cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('/my-appointments')} className='cursor-pointer'>My Appointments</p>
                  <p onClick={()=> setToken(false)} className='cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={()=>navigate('/login')} className="bg-[#5f6FFF] text-white px-6 py-2 rounded-full hidden md:block">
              Create Account
            </button>
          )
        }

        {/* Hamburger Icon */}
        <img 
          onClick={() => setShowMenu(true)} 
          className='w-6 md:hidden cursor-pointer' 
          src={assets.menu_icon} 
          alt="" 
        />
      </div>

      {/* Mobile Menu */}
      {
        showMenu && (
          <div className='fixed inset-0 bg-white z-50 flex flex-col p-6'>
            
            {/* Close Button */}
            <div className='flex justify-end'>
              <p onClick={() => setShowMenu(false)} className='text-2xl cursor-pointer'>✖</p>
            </div>

            {/* Menu Links */}
            <div className='flex flex-col gap-6 mt-10 text-lg font-medium'>
              <NavLink onClick={()=>setShowMenu(false)} to="/">HOME</NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to="/doctors">ALL DOCTORS</NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to="/about">ABOUT</NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to="/gallery">GALLERY</NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to="/contact">CONTACT</NavLink>
            </div>

          </div>
        )
      }

    </div>
  )
}

export default Navbar