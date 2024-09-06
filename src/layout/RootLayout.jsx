import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <NavBar/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout
