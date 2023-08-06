import React from 'react'
import {useNavigate}  from 'react-router-dom'
 
import share from"../assets/share.mp4" 

const Login = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
            <video 
            src= {share}
            type="video/mp4"
            loop
            muted
             autoPlay
             controls={false}
            className='h-full w-full object-cover'  
            />
            <div className= "absolute flex flex-col justify-center item-center top-o-bottom-o-right-0 left-0 bg-blackOverlay">
                  <div className =>
            </div>
      </div>
    </div>
  )
}

export default Login