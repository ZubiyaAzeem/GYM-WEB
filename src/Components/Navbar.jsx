import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='sticky top-0 z-20 Navbar px-10 h-[100%] flex justify-between items-center py-5'>
      {/* Logo Section */}
      <div className='text-white text-2xl font-bold'>
        logo
      </div>

      {/* Desktop Navigation Links */}
      <div className='hidden font-bold text-xl md:flex gap-12'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'text-violet-800  border-b-2 border-violet-500'
              : 'text-gray-300 hover:text-violet-400 transition duration-300'
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/Exercises'
          className={({ isActive }) =>
            isActive
              ? 'text-violet-800 border-b-2 border-violet-500'
              : 'text-gray-300 hover:text-violet-400 transition duration-300'
          }
        >
          Exercise
        </NavLink>
      </div>

      {/* Mobile Menu Toggle Button (for small screens) */}
      <div className='md:hidden'>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='text-white focus:outline-none'
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Navigation Links (display when mobile menu is open) */}
      {isMobileMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-slate-800 flex flex-col items-center md:hidden'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'text-violet-400 border-b-2 border-violet-400 py-2'
                : 'text-white hover:text-gray-300 transition duration-300 py-2'
            }
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Home
          </NavLink>
          <NavLink
            to='/Exercises'
            className={({ isActive }) =>
              isActive
                ? 'text-violet-400 border-b-2 border-violet-400 py-2'
                : 'text-white hover:text-gray-300 transition duration-300 py-2'
            }
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Exercise
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
