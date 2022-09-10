import React from 'react'
import Nav from '../Nav'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

function AllBlogs() {

  const [blogs,setBlogs] = useState()
  const sendRequest = async() => {
    const res = await axios.get("http://127.0.0.1:5500/api/blogs/").catch(
      err => console.log(err)
    )
    // response data
    const resData = await res.data
    return resData
  } 

  useEffect(
    ()=>{
     sendRequest().then(data => console.log(data)) 
    },[]
  )
  return (
    <div className='crimson'>
    <Nav />
    <div className='container flex space-x-2 mx-auto px-2'>
      <main className='basis-2/3'>
        <Card />
      </main>
      <aside className='basis-2/3'>
        
      </aside>
    </div>
    
    </div>
  )
}

export default AllBlogs