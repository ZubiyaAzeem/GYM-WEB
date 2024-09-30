import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className='relative z-20'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
