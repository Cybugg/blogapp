import React, { useState } from 'react'
import logo from './images/logo.png'
import Switch from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import image from "./images/night-mode.png"
import CancelIcon from '@mui/icons-material/Cancel';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ClickAwayListener } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useSelector } from 'react-redux';

function Nav() {
  const [menu,setMenu] = useState(false)
  const [darkMode,setDarkMode] = useState(false)
  const [blogDropDown ,setBlogDropDown] = useState(false)
  const [entDropDown ,setEntDropDown] = useState(false)
  
  
  // states from the store
  const isLoggedIn = useSelector(st => st.isLoggedIn);

const toggleMenu = (e)=>{
  e.stopPropagation()
  setMenu(!menu)
}
const toggleDarkMode= ()=>{
  setDarkMode(!darkMode)}
const closeMenu = () => {
  setMenu(false)
}
const dropBlogsList = () =>{
  setBlogDropDown(true)
}
const hideBlogsList = () =>{
  setBlogDropDown(false)
}
const dropEntList = () =>{
  setEntDropDown(true)
}
const hideEntList = () =>{
  setEntDropDown(false)
}

const toggleMobileBlogList = () => {
  setBlogDropDown(!blogDropDown)
}
const toggleEntBlogList = () => {
  setEntDropDown(!entDropDown)
}
  return (
    // Naviagtion
    <nav className='bg-white p-5 px-2 dark:bg-gray-900  fixed top-0 w-full dark:bg-blue-1000 bg-opacity-75 backdrop-blur-xl z-20 dark:bg tex-white'>
      {/* container */}
     <div className="container flex justify-between items-center mx-auto backdrop-blur-xl rounded-full px-2">
      {/* logo */}
        <a href="" className='flex items-center'>
            <img src={logo} alt="logo"  className='mr-2 h-6 sm:h-9 border border-blue-700 rounded bg-blue-400'/>
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-blue-600 dark:text-blue-400 qwitcher dark:text-blue-300'>WishHear</span>
        </a>
        {/* nav-links */}
        <ul className='hidden lg:flex space-x-10 text-gray-600 text-sm lg:items-center lg:justify-center font-bold'>
          <li className='text-pink-500 hover:text-gray-400'><Link to ="/">Home</Link></li>
          <li className='hover:text-gray-500 text-sm relative' onMouseEnter = {dropBlogsList}  onMouseLeave = {hideBlogsList} ><Link to ="/">Categories{!blogDropDown?<KeyboardArrowRightIcon sx ={{fontSize:"14px"}} />:<KeyboardArrowDownIcon sx ={{fontSize:"14px"}} />}</Link>
          {/* blog dropdown */}
          <div className={`${!blogDropDown?"hidden":""} dropdown absolute shadow-lg font-bold text-center hover:text-gray-600  z-40 p-1 backdrop-blur-lg bg-opacity-75 bg-white w-40`}>
          <li className='p-1 hover:bg-gray-100 '><Link to ="/">Food</Link></li>
          <li className='p-1 hover:bg-gray-100'><Link to ="/">Places</Link></li>
          <li className='p-1 hover:bg-gray-100'><Link to ="/">Health</Link></li>
          <li className='p-1 hover:bg-gray-100'><Link to ="/">Technology</Link></li>
          <li className='p-1 hover:bg-gray-100 relative' onMouseEnter = {dropEntList}  onMouseLeave = {hideEntList} ><Link to ="/">Entertainment<KeyboardArrowRightIcon sx ={{fontSize:"14px"}}/> </Link>

                   {/* Entertainment dropdown */}
          
          <div className={`${!entDropDown?"hidden":""} dropdown absolute shadow-lg font-bold text-center hover:text-gray-600  z-40 p-1 backdrop-blur-lg bg-opacity-75 bg-white w-40 side-side top-0`}>
            <li className='p-1 hover:bg-gray-100'><Link to ="/">Music</Link></li>
            <li className='p-1 hover:bg-gray-100'><Link to ="/">Movies</Link></li>
           <li className='p-1 hover:bg-gray-100'><Link to ="/">Sports</Link></li>
           <li className='p-1 hover:bg-gray-100'><Link to ="/">Gists</Link></li>
          </div>
          
          
          </li>
          
          <li className='p-1 hover:bg-gray-100'><Link to ="/">Fashion</Link></li>
          <li className='p-1 hover:bg-gray-100'><Link to ="/">Beauty</Link></li>
          <li className='p-1 hover:bg-gray-100'><Link to ="/">Love</Link></li>
          <li className='p-1 hover:bg-gray-100'><Link to ="/">Relationship</Link></li>
          <li className='p-1 hover:bg-gray-100'><Link to ="/">Hacks</Link></li>
          <li className='p-1 hover:bg-gray-100'><Link to ="/">Nature</Link></li>
          <li className='p-1 hover:bg-gray-100'><Link to ="/">Lifestyle</Link></li>
         
          <li className='p-1 hover:bg-gray-100'><Link to ="/">Politics</Link></li>
          </div>
          </li>
          {!isLoggedIn && <li className='hover:text-gray-500'><Link to ="/login">Login</Link></li>
         } <li className='hover:text-gray-500'><Link to ="/">Help</Link></li>
          <li className='hover:text-gray-500'><Link to ="/">Contact</Link></li>
          
        {/* search bar */}
          <form className='hidden lg:block text-gray-500'>
        <input type="search" name="searchbar" 
        placeholder='Search here...'
        className=' border-b-2 border-gray-500 p-1 px-2 outline-0 bg-transparent'/>
        <button type="submit"
        className='border-b-2 border-gray-500 ml-1 hover:bg-gray-300 hover:text-gray-600'
        ><SearchIcon /> 
        </button>
      </form>
      {!isLoggedIn && <li className='text-blue-600 text-sm border border-blue-600 rounded p-1'><Link to ="/">Create account</Link></li>}
      {isLoggedIn && <li className='text-pink-600 text-sm border border-pink-600 rounded p-1'><Link to ="/">Log out</Link></li>}

        </ul>

      <div className='hidden lg:flex text-gray-500  cursor-pointer space-x-2 justify-end'> 
      <div>
        <SettingsIcon className="border border-gray-400" />
      </div>
        <div className='relative hidden'>
          <NotificationsNoneIcon className="border-2 rounded-full border-gray-300 hover:bg-gray-300 hidden" />
          <div className='top-0 absolute w-3 h-3 right-0 rounded-full bg-red-500 flex items-center justify-center text-white tiny-text p-2'>
            1
          </div>
        </div>
        
      </div>




        {/* <ul className='hidden md:block'>
        {/* dark theme switch */}
        {/* <Switch checked={darkMode}  onChange={toggleDarkMode}  sx={{
     '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
              color: '#fff',
              border:"1px solid blue",
              transform: 'translateX(22px)',
              '& .MuiSwitch-thumb:before': {
                backgroundImage:`url(${image})`},
              '& + .MuiSwitch-track': {
                opacity: 1}
         }}}} /> 
         <DarkModeIcon className={`${darkMode?"text-blue-500 drop-shadow-md drop-shadow-blue-200":"text-gray-500"}`} />
        </ul> */}
       

     <div className='flex items-center justify-center space-x-3 '>
       <div>
        {/* settings */}
        <div className='hidden'>
          <SettingsIcon className="border-2 rounded-full border-blue-600 text-blue-600  cursor-pointer hidden" sx={{fontSize:"30px"}} 
        />
        </div>
        
      </div>
      {/*  notification*/}
        <div className='relative hidden'>
          <NotificationsNoneIcon className="border-2 rounded-full border-gray-300  border-blue-600 text-blue-600 cursor-pointer" sx={{fontSize:"30px"}} />
          <div className='top-0 absolute w-3 h-3 right-0 rounded-full bg-red-500 flex items-center justify-center text-white tiny-text p-2'>
            1
          </div>
        </div>
       {/* hamburger icon */}
        <div className='hamburger space-y-1 pointer  p-1 cursor-pointer lg:hidden border border-blue-200 p-2' onClick={toggleMenu}>
             <div className='w-5 h-0.5 bg-blue-600 dark:bg-blue-600 stick-two'>
             </div>
             <div className='w-5 h-0.5 bg-blue-600 dark:bg-blue-600 stick-two'>
             </div>
             <div className='w-5 h-0.5 bg-blue-600 dark:bg-blue-800 stick-three'>
             </div>
        </div>
     </div>
      </div>
     
     

      {/* mobile navigation  */}
      <div className={`${menu === false && "hidden"} w-full bg-black bg-opacity-25 backdrop-blur-lg absolute top-0 z-40 min-h-screen left-0 lg:hidden ${menu?"animate__animated animate__fadeIn":""} `}>
        <ClickAwayListener onClickAway={closeMenu}>
<div className={`h-full scroll-y bg-white top-0 absolute shadow-lg w-72 ${menu?"animate__animated animate__fadeInLeft":""}`}>
          <div className='menu-icons flex items-center justify-between my-1'>
            <div className='logo font-bold text-2xl px-2 qwitcher'>
               WishHear
            </div>
            <CancelIcon className="cursor-pointer" onClick={toggleMenu}
            />
          </div>
          <div className='container mx-auto p-1'>
            {/* top section  */}
            <div className='top-sec-menu bg-gray-100 p-2 rounded'>
              {/* step one of the top section */}
               <div className='text-lg font-bold'>
            <span className="text-blue-600 fw-bold">Simple blog app</span> created for educational purpose.
          </div>
          {/* step two of the top section */}
          <div className='text-gray-500 mt-3'>
          <p>Easily signup and start posting your favourites and interesting stories on your blog today!</p>
          </div>
          {/* step three of the top section */}
          <ul className='flex items-center flex-col text-gray-600 mt-3 '>
            {/* create account */}
            {!isLoggedIn && <li className='border border-blue-800 rounded p-1 text-blue-800 px-10 my-2 cur-pointer'><a href="">Create account</a></li>}
          {/* login */}
           {!isLoggedIn && <li className='my-2'><Link to="/login">Log in</Link></li>}

          {/* logout */}
          {
            isLoggedIn  && <li className='border border-pink-800 rounded p-1 text-pink-800 px-10 my-2 cur-pointer' ><Link to="/login">Log out</Link></li>
          }
          </ul>
            </div>
            {/* menu navigation links */}

          <ul className='text-gray-600 my-1 text-md py-2 px-2 font-bold '>

            {/* Home Link */}
        <li className='py-2 px-1 hover:bg-blue-100 hover:underline'><a href="" className=''><HomeIcon /> Home</a></li>

        {/* Category links */}
        <li className='py-2 px-1 hover:bg-blue-100  hover:underline cursor-pointer' onClick={toggleMobileBlogList}><BookIcon /> Categories{blogDropDown?<KeyboardArrowUpIcon />:<KeyboardArrowDownIcon />}
        </li>

        {/* blog dropdown */}
        <div className={`${!blogDropDown?"hidden":""} dropdown font-bold z-50 p-1  bg-opacity-75 w-full side-side pl-12 text-gray-700`}>
          <div className='bg-slate-200'>
               <li className='py-2 hover:bg-gray-100 pl-3'><Link to ="/">Food</Link></li>
          <li className='py-2 hover:bg-gray-100 pl-3'><Link to ="/">Places</Link></li>
          <li className='py-2 hover:bg-gray-100 pl-3'><Link to ="/">Health</Link></li>
          <li className='py-2 hover:bg-gray-100 pl-3'><Link to ="/">Technology</Link></li>
          <li className='py-2 pl-3 hover:bg-gray-100 cursor-pointer relative' onClick={toggleEntBlogList} >Entertainment{entDropDown?<KeyboardArrowUpIcon />:<KeyboardArrowDownIcon />}

                   {/* Entertainment dropdown */}
          
          <div className={`${!entDropDown?"hidden":""} font-bold absolute hover:text-gray-600  z-40  bg-white w-full shadow-md left-0`}>
            <li className='pl-7 p-2 hover:bg-gray-100 pl-2'><Link to ="/">Music</Link></li>
            <li className='pl-7 p-1 hover:bg-gray-100 pl-2'><Link to ="/">Movies</Link></li>
           <li className='pl-7 p-1 hover:bg-gray-100 pl-2'><Link to ="/">Sports</Link></li>
           <li className='pl-7 p-1 hover:bg-gray-100 pl-2'><Link to ="/">Gists</Link></li>
          </div>
          </li>

          <li className='p-1 hover:bg-gray-100 py-2 relative pl-3'><Link to ="/">Fashion</Link></li>
          <li className='p-1 hover:bg-gray-100 py-2 relative pl-3'><Link to ="/">Beauty</Link></li>
          <li className='p-1 hover:bg-gray-100 py-2 relative pl-3'><Link to ="/">Love</Link></li>
          <li className='p-1 hover:bg-gray-100 py-2 relative pl-3'><Link to ="/">Relationship</Link></li>
          <li className='p-1 hover:bg-gray-100 py-2 relative pl-3'><Link to ="/">Hacks</Link></li>
          <li className='p-1 hover:bg-gray-100 py-2 relative pl-3'><Link to ="/">Nature</Link></li>
          <li className='p-1 hover:bg-gray-100 py-2 relative pl-3'><Link to ="/">Lifestyle</Link></li>
         
          <li className='p-1 hover:bg-gray-100 py-2 relative pl-3'><Link to ="/">Politics</Link></li>
          </div>
          </div>
          <li className='py-2 px-1 hover:bg-blue-100 hover:underline'><a href=""><InfoIcon /> Help</a></li>
          <li className='py-2 px-1 hover:bg-blue-100 hover:underline'><a href=""><CallIcon /> Contact us</a></li>
        </ul>
        {/* about */}
        <div className='about'>
          <ul className='flex space-x-2 justify-center text-blue-700'>
        <li className=''><a href=""><TwitterIcon size="sm"/></a></li>
        <li className=''><a href=""><LinkedInIcon size="sm" /></a></li>
        <li className=''><a href=""><GitHubIcon size="sm" /></a></li>
          </ul>
          <div className='text-gray-400 mx-auto flex justify-center text-sm'>Cybug Technologies&copy;</div>
        </div>
        </div>
          </div>
        </ClickAwayListener>
         
      </div>
    </nav>
  )
}

export default Nav;