import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {

  const [inputs,setInputs] = useState({
    firstname:"",lastname:"",email:"",password:"",conPassword:""
  })
  const [matched,setMatched] = useState(true)

const username = inputs.firstname + " " +inputs.lastname


  // handleSubmit
  const sendRequest = async () => {

    if(inputs.password !== inputs.conPassword){
      console.log("request not sent");
      return setMatched(false)
    }

  const res = await axios.post('http://127.0.0.1:5500/api/user/signup',{
      firstname:inputs.firstname,
      lastname:inputs.lastname,
      username:username,
      email:inputs.email,
      password:inputs.password
    }).catch(
      err => console.log(err)
    );

    console.log("sent request");

  // data
  const data = res.data  
  return data;
  }

  // handle change
  const  handleChange = e => {

    setInputs(prev => ({
      ...prev,
    [e.target.name] :e.target.value
    }))
  }
  

  // handlesubmit
  const handleSubmit = (e) =>{
    e.preventDefault()
    sendRequest().then((data)=>console.log(data))
  }
  return (
    <div className='flex min-h-screen crimson bg-slate-100'>
      <div className='hidden loginBg w-full md:block'>
      </div>

      <div className='w-full flex flex-col items-center justify-center container mx-auto'>
            <span className='qwitcher text-blue-600 mdText animate__animated animate__bounce'>
        WishHear
    </span>

    {/* login form */}
        <form className='bg-white p-5 space-y-4 w-4/5 sm:w-3/5 text-lg shadow-lg py-10 ' onSubmit={handleSubmit}>

      {/* infos */}

      <div className='info text-pink-600'>
        <span className={`hidden`}>Email already taken!</span>
        <span className={`${"hidden"}`}>Password too weak!</span>
        <span className={`${matched && "hidden"}`}>Password doesnt match!</span>
      </div>

        {/* first name field */}

         <input type="text" name="firstname" placeholder='First Name' value={inputs.firstname} required className='border-b-2 border-gray-500 outline-none px-1 w-full' onChange={handleChange} /> <br />

        {/* lastname field */}

         <input type="text" name="lastname" placeholder='Last Name' value={inputs.lastname} required className='border-b-2 border-gray-500 outline-none px-1 w-full' onChange={handleChange} /> <br />

        {/* email field */}

         <input type="email" name="email" placeholder='Email' value={inputs.email} required className='border-b-2 border-gray-500 outline-none px-1 w-full' onChange={handleChange} /> <br />

        {/* password field */}

         <input type="password" name="password" placeholder = "Password" value={inputs.password} required  className='border-b-2 border-gray-500 outline-none px-1 w-full' onChange={handleChange}/><br />

        {/* confirm password field */}

         <input type="password" name="conPassword" placeholder = "Confirm Password" value={inputs.conPassword} required  className='border-b-2 border-gray-500 outline-none px-1 w-full' onChange={handleChange} /> <br />

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
        <div className='flex items-center justify-between text-pink-600 pt-4 underline space-x-32 pb-5'>
  
  <div className='hover:text-pink-700'>
     <Link to="/login">Log in</Link> 
  </div>
</div>


      </div>
    </div>
   
  )
}

export default Signup