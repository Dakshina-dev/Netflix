import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='relative h-full w-full top-[900px] z-50 px=5 text-white'>
      <div className='grid grid-cols-3 md:grid-cols-4 gap-10 justify-between p-5'>
      <Link to="/" className='col-span-3 md:col-span-1 self-center '>
              <h1 className="text-[#E50914] text-3xl font-bold flex flex-col">
                NETFLIX
                <span className="text-white text-[10px] font-normal absolute top-10 md:top-20">
                  Developed By Dakshina
                </span>
              </h1>
            </Link>
            <div className='flex flex-col gap-2'>
              <h2 className='text-gray-400 underline'>Explore</h2>
              <h2>Account</h2>
              <h2>Ways to Watch</h2>
              <h2>On Netflix</h2>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-gray-400 underline'>Legal</h2>
              <h2>Privacy Policy</h2>
              <h2>Terms of use</h2>
              <h2>Legal Notice</h2>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-gray-400 underline'>Support</h2>
              <h2>FAQ</h2>
              <h2>Contact us</h2>
              <h2>Media</h2>
            </div>
      </div>
      <h2 className='text-center text-sm pt-10 pb-5 text-gray-400'>Developed by Dakshina &copy; 2025</h2>
    </div>
  )
}

export default Footer