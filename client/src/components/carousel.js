import React, { useEffect, useRef, useState } from 'react'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


let count = 0;
let slideInterval ;
function Carousel() {
   const [currIndex,setCurrIndex] = useState(0);
   

   const featuredPost = [img6,img7,img8,img9,img10]

//    next
   const handleOnNextClick = () =>{
    sliderRef.current.classList.add('fade-anim')
    count = (count + 1) % featuredPost.length;
    setCurrIndex(count)
}
// previous
    const handleOnPreviousClick = () =>{
        count = (count + featuredPost.length - 1) % featuredPost.length;
        setCurrIndex(count);
        sliderRef.current.classList.add('fade-anim')
}

// remove animation
    const removeAnimation = () => {
        sliderRef.current.classList.remove("fade-anim")
}
    const sliderRef = useRef()

    // slider
    const startSlider = () =>
    {slideInterval = setInterval(handleOnNextClick,5000)}
    
    // stop slider
    const pauseSlider = ()=>{
     clearInterval(slideInterval)
    }

   useEffect(
    () => {
    sliderRef.current.addEventListener(
        'animationend', removeAnimation
    );
    sliderRef.current.addEventListener(
        'mouseenter', pauseSlider);
    sliderRef.current.addEventListener(
        'mouseleave',  startSlider);
        startSlider()
        return () => pauseSlider()
    }, []);

    

  return (
    <div ref={sliderRef} className='w-full select-none mx-auto relative lg:w-3/5  '>
        <div className='aspect-w-16 aspect-h-9 mx-auto container'>
              <img src={featuredPost[currIndex]} className="w-full mx-auto" />
        </div>
      

        <div className='absolute top-1/2 transfrom -translate-y-1/2 px-3 w-full flex justify-between items-center text-gray-300'>
            <button onClick={handleOnPreviousClick}><ArrowBackIosIcon /> </button>
            <button onClick={handleOnNextClick}><ArrowForwardIosIcon /></button>
        </div>
    </div>
  )
}

export default Carousel;