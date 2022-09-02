import React from 'react'
import Carousel from '../components/carousel'
import Label from '../components/label'

export default function  Home() {
  return (
  <div className='crimson bg-slate-100'>
    <div className='pt-10 mx-auto px-5 container'>
  <Label />
    {/* carousel */} 
  <Carousel />
    </div>

    </div>
  )
}
