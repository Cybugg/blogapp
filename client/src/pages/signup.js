import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='flex min-h-screen crimson bg-slate-100'>
      <div className='hidden loginBg w-full md:block'>
      </div>

      <div className='w-full flex flex-col items-center justify-center container mx-auto'>
            <span className='qwitcher text-blue-600 mdText animate__animated animate__bounce'>
        WishHear
    </span>
    {/* login form */}
        <form className='bg-white p-5 space-y-4 w-4/5 sm:w-3/5 text-lg shadow-lg py-12'>
         <input type="text" name="firstname" placeholder='First Name' required className='border-b-2 border-gray-500 outline-none px-1 w-full' /> <br />
         <input type="text" name="lastname" placeholder='Last Name' required className='border-b-2 border-gray-500 outline-none px-1 w-full' /> <br />
         <input type="email" name="email" placeholder='Email' required className='border-b-2 border-gray-500 outline-none px-1 w-full' /> <br />
         <input type="password" name="password" placeholder = "Password" required  className='border-b-2 border-gray-500 outline-none px-1 w-full'/> <br />
         <input type="password" name="password" placeholder = "Confirm Password" required  className='border-b-2 border-gray-500 outline-none px-1 w-full'/> <br />

         {/* submit button */}
            <button type="submit" className='text-white bg-blue-500 p-1 text-md rounded hover:bg-blue-600 w-full'>Sign up</button>
        </form>


        <div class="tac mt-3 mb-3 or w-3/5 py-2"><span>or sign up using</span></div>
        
        {/* alternative logins*/}
        <div className='flex items-center space-x-2'>
            <div className='text-blue-700' >
                <a href=""><FacebookIcon sx={{fontSize:"30px"}} /></a>
            </div>
            <div className='text-blue-400'>
            <a href=""><TwitterIcon sx={{fontSize:"30px"}} /></a>
            </div>
            <div className='text-red-700'>
            <a href=""><GoogleIcon sx={{fontSize:"30px"}} /></a>
            </div>
        </div>
        {/* lower section */}
        <div className='flex items-center justify-between text-pink-600 pt-4 underline space-x-32'>
  
            <div className='hover:text-pink-700'>
               <Link to="/login">Log in</Link> 
            </div>
        </div>


      </div>
    </div>
   
  )
}

export default Signup