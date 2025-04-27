import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Connect with 100+ trusted doctors and book your appointments with ease. Our platform makes managing your health simple, secure, and accessible — create your account today and start your journey to better care.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 '>Company</p>
            <ul className='flex flex-col gap-2 text-gray-600 '>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 '>Get in Touch</p>
            <ul className='flex flex-col gap-2 text-gray-600 '>
                <li>+254-707-847-594</li>
                <li>cepteinhawks@gmail.com</li>
            </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ Prescripto - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
