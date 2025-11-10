import React from 'react'
import { useForm } from "react-hook-form";
import {Link,useNavigate} from 'react-router-dom';
import { useAuth } from '../context/authContext';
const Login = () => {
  const {
    register,
    handleSubmit,
    formState:{errors},

  }=useForm();
  const {login}=useAuth();
  const navigate=useNavigate();
  const onSubmit=(data)=>{
    console.log("login data:",data);
    alert("login successfully");
    login();
    navigate("/");
    
  }
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'
    >
      <form action="" onSubmit={handleSubmit(onSubmit)} className='bg-white shadow-md rounded-lg p-8 w-full max-w-md'>
        <h2 className='text-2xl font-bold text-blue-600 mb-6   text-center'>Login

        </h2>


        <div className='mb-4'>
          <label htmlFor="" className='block text-sm font-medium mb-1'>E mail</label>
          <input type="email" 
          {...register("email",{required:"emil is required",
            pattern:{
              value: /^[^@]+@[^@]+\.[^@.]{2,}$/,
              message:"email is not valid"
            },
          })}
          className='w-full border rounded-md px-3 py-2'/>
          {errors.email && (<p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter your password"
          />{errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <p className='text-black-600 text-center mt-4'>
                                         Don't have an account?{" "}
               <Link to="/signup" className="text-blue-800 hover:underline font-medium">
                  Sign up
                           </Link>
             </p>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>

      </form>
    </div>
  )
}

export default Login