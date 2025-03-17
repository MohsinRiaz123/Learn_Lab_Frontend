import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
const LandingNavbar = () => {
  return (
  <div className='bg-white shadow-lg shadow-gray-300  flex justify-between items-center p-4 sticky top-0 '>
    <a href='/' className='flex items-center'>
      {/* <img src="./src/assets/Images/logo.png" alt='logo'/> */}
      <p className='text-purple text-7xl'><FaGraduationCap/></p>
      <div className='pl-2'>
        <p className='text-4xl font-semibold'>LearnLab</p>
        <p className='text-xs'>GROW YOUR SKILLS</p>
      </div>
    </a>
    <div className='flex space-x-6 font-semibold'>
     <a href='/' className='hover:text-purple hover:underline'>Home</a>
     <a href='/about' className='hover:text-purple hover:underline'>About</a>
     <a href='/contactUs' className='hover:text-purple hover:underline'>Contact Us</a>
    </div>
    <div className='flex space-x-6 font-semibold'>
      <a href='/login' className=' border-2 border-yellow bg-yellow hover:bg-purple hover:border-purple hover:text-white   px-6 py-3 rounded-full'>Log in</a>
      <a href='/signUp' className='border-2 border-yellow hover:bg-purple v hover:border-purple hover:text-white   px-5 py-3 rounded-full'>Sign up</a>
    </div>
  </div>
  )
}

export default LandingNavbar
