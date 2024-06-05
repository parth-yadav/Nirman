import React from 'react'
import logo from './images/logo.svg'

import SignupForm from './Signup'

function Rightpane() {
  return (
    <>
    <div className='grid-cols-1 bg-white p-[30px] '>
        <nav className="bg-white  flex items-center justify-between h-[40px] mb-[86px]">
      <div className="flex items-center space-x-2">
        
      <div className="h-[30px] w-[30px] rounded-full
       flex items-center justify-center bg-[#AED8FF]">
     <img src={logo} alt="logo" className="h-[20px] w-[20px]"/>
       </div>     
        <span className="text-black text-lg font-bold">Nirmaan</span>
      </div>

      
      <button className='bg-white text-black px-4 py-2 rounded-md w-[73px] h-10 text-sm font-medium'>Log In</button>
    </nav>
    <SignupForm />
    </div>
   
    </>
    
  )
}

export default Rightpane