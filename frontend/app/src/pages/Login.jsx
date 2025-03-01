import React from 'react'
import loginImg from '../assets/login.png';

export default function Login() {
  return (
    <div className='w-full h-screen relative flex justify-around'>
        <img src={loginImg} className='absolute h-full w-full z-[-100]' />
        <div className=''>
            <h1 className='text-[60px] font-bold'>TRACKit</h1>
            <p>Testing Reporting Academic Comprehensive Kit</p>
        </div>

        <div className='bg-white w-[30%] rounded-lg'>
            <p>Welcome to TRACKit</p>
            <h1>Sign In</h1>

            <form className='flex flex-col'>
                <input type="text" placeholder='Enter Your User Id'/>
                <input type="text" placeholder='Enter Your Password'/>
                <a href="#">Forgot Password</a>
                <button>Continue</button>
            </form>
        </div>
    </div>
  )
}
