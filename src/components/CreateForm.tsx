import React from 'react'

type Status={
    setStatus1: React.Dispatch<React.SetStateAction<boolean>>,
    setStatus2: React.Dispatch<React.SetStateAction<boolean>>,
    setFlag: React.Dispatch<React.SetStateAction<boolean>>,

}

const CreateForm = ({setFlag, setStatus1, setStatus2}: Status) => {

    const handleClickSvg=()=>{
      setFlag(false)
    }

    const handleSignIn=()=>{
        setStatus2(true)
        setStatus1(false)
      }
  return (
    <div className='bg-white w-96 p-4' style={{fontFamily:'IBM Plex Sans'}}>
    <form action="">
      <div className='flex justify-between'>
       <p className='w-32 h-6 font-bold leading-6 text-lg'>Create Account</p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClickSvg}>
          <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#212529"/>
         </svg>
      </div>
      <div className='w-full flex overflow-hidden'>
        <input type="text" placeholder='First Name' className='border h-10'/>
        <input type="text" placeholder='Last Name' className='border'/>
      </div>
      <div>
        <input type="email" placeholder='Email' className='border w-full h-10'/>
      </div>
      <div>
        <input type="password" placeholder='Password' className='border w-full h-10'/>
      </div>
      <div>
        <input type="password" placeholder='Confirm Password' className='border w-full h-10'/>
      </div>
      <div className='flex justify-between mt-5 mb-5 pl-4 pr-4'>
        <button className='bg-blue-700 text-white rounded-2xl font-semibold text-sm w-32 h-9'>Create Account</button>
        <p className='underline' onClick={handleSignIn}>or, Sign In</p>
      </div>
      <div className='flex mb-5 justify-center border w-80 h-9'>
        <img src="/f_logo_RGB-Blue_1024.png" alt=""  className='h-6'/>
        <button className='ml-3'>Sign Up with Facebook</button>
      </div>
      <div className='flex mb-5 justify-center border w-80 h-9'>
     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5'>
        <g clipPath="url(#clip0_1_559)">
        <path d="M3.54594 9.66899L2.989 11.7481L0.953406 11.7912C0.345063 10.6628 0 9.37186 0 7.99999C0 6.67339 0.322625 5.42239 0.8945 4.32086H0.894938L2.70719 4.65311L3.50106 6.45449C3.33491 6.93889 3.24434 7.45889 3.24434 7.99999C3.24441 8.58724 3.35078 9.14989 3.54594 9.66899Z" fill="#FBBB00"/>
        <path d="M15.8602 6.50562C15.9521 6.98955 16 7.48933 16 8.00012C16 8.57287 15.9398 9.13155 15.8251 9.67046C15.4357 11.5043 14.4181 13.1056 13.0084 14.2388L13.008 14.2384L10.7253 14.1219L10.4023 12.1052C11.3377 11.5566 12.0687 10.6981 12.4537 9.67046H8.1759V6.50562H12.5161H15.8602Z" fill="#518EF8"/>
        <path d="M13.0081 14.2381L13.0086 14.2385C11.6376 15.3405 9.89602 15.9999 8.00021 15.9999C4.95361 15.9999 2.30483 14.297 0.953613 11.7911L3.54614 9.66888C4.22174 11.4719 5.96108 12.7555 8.00021 12.7555C8.87668 12.7555 9.6978 12.5185 10.4024 12.1049L13.0081 14.2381Z" fill="#28B446"/>
        <path d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z" fill="#F14336"/>
        </g>
      <defs>
         <clipPath id="clip0_1_559">
<rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
     </svg>
        <button className='ml-3'>Sign Up with Google</button>
      </div>
      <div>
        <p className='w-60 text-xs leading-4 m-auto text-center tracking-tight'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
      </div>
    </form>
  </div>
  )
}

export default CreateForm