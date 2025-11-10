import React, {useState} from 'react'

const Hero = ({setSearchTerm}) => {
  const[input,setInput]=useState("")
  const handleSearch=()=>{
    setSearchTerm(input)
  }
  return (
    <section className='h-[50vh] w-full bg-blue-500 flex flex-col justify-center items-center text-white px-4'>

      <h1 className='text-3xl sm:text-3xl md:text-4xl font-semibold text-center mb-4'>Find the best job for you..</h1>

      <div className='flex items-center w-full max-w-md bg-white rounded-full shadow-md overflow-hidden'>
        <input type="text
        " value={input} onChange={(e)=>setInput(e.target.value)}
        placeholder='search for jobs'
        className='grow px-4 py-2 text-gray-700 focus:outline-none'/>
        <button onClick={handleSearch}  className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-r-full cursor-pointer'>search</button>
      </div>

    </section>
  );
};

export default Hero