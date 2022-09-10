import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Blogs() {

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
    <div>Blogs</div>
  )
}

export default Blogs