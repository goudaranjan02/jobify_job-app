import React from 'react';
{/*import {FaFacebook,FaTwitter,FaLinkedin,FaInstagram} from 'react-icons'*/}

const Footer = () => {
  return (
    <div className='bg-blue-900 text-white w-full h-[40vh] flex flex-col justify-between px-6 py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        <div>
          <h2 className='text-2xl font-bold mb-3'>Jobify</h2>
          <p className="text-sm text-gray-300">
            Jobify helps you find your dream job faster.  
            Explore thousands of opportunities and apply with ease.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/jobs" className="hover:text-white">Find Jobs</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>Email: support@jobify.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Bhubaneswar, Odisha, India</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          {/*<div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-400"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedin size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram size={20} /></a>
          </div>*/}
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Jobify. All rights reserved.
      </div>
    </div>
  )
}

export default Footer