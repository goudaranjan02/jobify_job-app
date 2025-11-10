import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Job from './pages/job'
import JobDetails from './pages/jobDetails';
import { useState } from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/footer';
import Addjob from './pages/Addjob';
function App() {
  const[searchTerm,setSearchTerm]=useState("");


  return (
    <>
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<><Hero setSearchTerm={setSearchTerm} /><Job searchTerm={searchTerm}/></>} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addJob" element={<Addjob />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
