import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";

const Nav = () => {

  const [display, setDisplay] = useState(false); // State to manage the visibility of the dropdown menu
  const navigate = useNavigate();

  // Function to handle logout
  // It removes the user data from local storage and navigates to the home page
  const handleLogout = () => {
    localStorage.removeItem('user');
    setDisplay(false);
    navigate('/');
  }


  return (
    <nav className="bg-black dark:bg-neutral-900">
      <div className="max-w-[1400px] mx-auto max-sm:mx-3">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="#" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-[#EBEFFF]">
                LOGO
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="px-3 py-2 text-sm font-medium text-[#EBEFFF]">Product</Link>
            <Link href="#" className="px-3 py-2 text-sm font-medium text-[#EBEFFF]">Services</Link>
            <Link href="#" className="px-3 py-2 text-sm font-medium text-[#EBEFFF]">Contact</Link>
            <div className="inline-flex items-center justify-center px-6 text-white py-3 text-xl relative" onClick={() => {setDisplay(!display)}}>
              <FaCircleUser className='hover:scale-115 hover:cursor-pointer transition-all duration-200' />

              <div className={`absolute rounded-md bg-gray-800 p-2 top-10 right-6 w-auto px-4 py-6 h-auto text-sm text-right ${!display ? "hidden" : null}`}>
                <p className='border-b border-gray-700 pb-2'>{JSON.parse(localStorage.getItem('user'))?.name}</p>
                <p className='pt-2'>{JSON.parse(localStorage.getItem('user'))?.mail}</p>
                <button className='px-3 bg-blue-500 rounded-full mt-4 py-2 hover:cursor-pointer' onClick={() => handleLogout()}>
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden relative">
            <button type="button" className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" onClick={() => setDisplay(!display)}>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div style={{ height: "calc(100vh - 80px)"}} className={` w-0 ${display ? 'w-screen' : null} transition-all duration-300 bg-gray-950 absolute top-20 -right-3`}>
              <div className={`${!display ? 'hidden' : null} transition-all duration-500 text-white text-right`}>
                <p className='py-2 bg-gray-700 px-3'>Details</p>
                <p className='py-2 px-3'>Product</p>
                <p className='py-2 px-3'>Services</p>

                <div className='absolute right-0 bottom-3'>
                  <p className='font-bold px-3 border-b border-gray-800'>User details</p>
                  <p className='pb-2 px-3'>{JSON.parse(localStorage.getItem('user'))?.name}</p>
                  <p className='pt-2 px-3'>{JSON.parse(localStorage.getItem('user'))?.mail}</p>
                  <button className='px-3 mx-3 bg-blue-500 rounded-full mt-4 py-2 hover:cursor-pointer' onClick={() => handleLogout()}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
