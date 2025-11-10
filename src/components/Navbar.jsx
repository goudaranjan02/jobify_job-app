import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from "../context/authContext";
import { useNavigate } from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa'


const Navbar = () => {
  const{isLoggedIn,logout}=useAuth();
  const navigate=useNavigate();
  const[menuOpen,setMenuOpen]=useState(false);
  const handleLogout=()=>{
    logout();
    setMenuOpen(false);
    navigate("/");
  }
  return (
    <div className='sticky top-0 bg-white shadow-md z-50'>
      <div className='max-w-7xl mx-auto px-6 py-3 flex items-center justify-between'>

        <div
        className='text-2xl font-bold text-blue-600'>Jobify</div>

        <div className='flex items-center space-x-6'>
          <a href="" className='text-blue-600 hover:text-blue-800 font-medium'>Jobs</a>
          <a href="#footer" className='text-blue-600 hover:text-blue-800 font-medium'>Contact Us</a>
          <a href="" className='text-blue-600 hover:text-blue-800 font-medium'>About Us</a>

          {!isLoggedIn ? (
        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="border-2 border-white px-4 py-2 rounded-lg font-semibold cursor-pointer"
          >
            Signup
          </button>
        </div>
      ) : (
        <div className="relative">
          <FaUserCircle
            size={36}
            className="cursor-pointer hover:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white text-blue-900 rounded-lg shadow-lg p-2">
              <button
                onClick={() => {
                  navigate("/addJob");
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded"
              >
                Post a Job
              </button>
              <button
                onClick={() => {
                  navigate("/my-jobs");
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded"
              >
                My Jobs
              </button>
              <hr className="my-1" />
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded text-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}


        </div>

      </div>

    </div>
  )
}

export default Navbar