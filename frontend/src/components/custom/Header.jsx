import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-12'>
      <Link to={"/"}>
        <img src='/logo.svg'/>
      </Link>

      <div className='flex gap-10'>
        <Link to={"/create-trip"} className='font-medium hover:text-[#0066FF]'>Trip Planner</Link>
        <Link to={"/chatbot"} className='font-medium hover:text-[#0066FF]'>Chatbot</Link>
        <Link to={"/about"} className='font-medium hover:text-[#0066FF]'>About</Link>
        <Link to={"/contact-us"} className='font-medium hover:text-[#0066FF]'>Contact Us</Link>
      </div>

      <div className='flex gap-3'>
        <Button variant="ghost" className='cursor-pointer'>Log In</Button>
        <Button className='cursor-pointer'>Sign In</Button>
      </div>
    </div>
  )
}

export default Header