import React from 'react'
import Header from './components/custom/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Layout