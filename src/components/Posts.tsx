import { useState } from "react"


const Posts = () => {

  const [flag, setFlag]= useState<boolean>(false)

  const handleClick=()=>{
    setFlag(true)
  }

  const handleCancel=()=>{
    setFlag(false)
  }
  
  return (
    <div className='flex xl:mt-80' style={{ fontFamily: 'IBM Plex Sans' }}>
    <main className='mt-12 mb-10 xl:w-2/5 xl:ml-80'>
      <div className='w-full flex flex-row justify-between xl:w-80'>
        <div className='ml-4 xl:hidden'>
          <p className='text-sm font-bold leading-5'>Posts(368)</p>
        </div>
        <div className='flex mr-4 text-xs font-medium xl:hidden'>
          <p>Filter:</p>
          <select name="select" id="">
            <option value="All">All</option>
          </select>
        </div>
        <div className='hidden xl:block'>
          <p className='xl:font-bold xl:underline'>All Post(32)</p>
        </div>
        <div className='hidden xl:block'>
          <p>Article</p>
        </div>
        <div className='hidden xl:block'>
          <p>Event</p>
        </div>
        <div className='hidden xl:block'>
          <p>Education</p>
        </div>
        <div className='hidden xl:block'>
          <p>Job</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src="/Rectangle 5.png" width={360} height={120} alt="" className='xl:w-full'/>
        <p className='flex flex-row text-sm leading-5 mt-3 mb-3 ml-4 self-stretch'>✍️ Article</p>
        <div className='flex flex-row justify-between mr-3 ml-3 xl:w-11/12'>
          <p className='w-80 text-base font-semibold leading-5'>What if famous brands had regular fonts? Meet RegulaBrands!</p>
          <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-3'>
            <path d="M14.6666 3.00002C14.6666 4.28335 15.7166 5.33335 16.9999 5.33335C18.2833 5.33335 19.3333 4.28335 19.3333 3.00002C19.3333 1.71669 18.2833 0.666687 16.9999 0.666687C15.7166 0.666687 14.6666 1.71669 14.6666 3.00002ZM12.3333 3.00002C12.3333 1.71669 11.2833 0.666687 9.99992 0.666687C8.71659 0.666687 7.66659 1.71669 7.66659 3.00002C7.66659 4.28335 8.71658 5.33335 9.99992 5.33335C11.2833 5.33335 12.3333 4.28335 12.3333 3.00002ZM5.33325 3.00002C5.33325 1.71669 4.28325 0.666686 2.99992 0.666686C1.71659 0.666686 0.666586 1.71669 0.666586 3.00002C0.666586 4.28335 1.71658 5.33335 2.99992 5.33335C4.28325 5.33335 5.33325 4.28335 5.33325 3.00002Z" fill="#212529" />
          </svg>
        </div>
        <p className='flex flex-row text-sm mt-2 mb-2 ml-6 self-stretch'>I’ve worked in UX for the better part of a decade. F..</p>
        <div className='w-80 flex flex-row justify-between xl:w-full xl:mt-3'>
          <div className='flex items-center xl:w-80'>
            <img src="./Rectangle 3.1.png" alt="" className='w-14 h-14'/>
            <div className='ml-2'>
              <p>Sarthak Kamra</p>
              <p>1.4k views</p>
            </div>
          </div>
          <div className='w-20 flex mt-2 justify-center rounded bg-slate-300 items-center'>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1'>
              <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#212529" />
            </svg>
            <p>Share</p>
          </div>
        </div>
      </div>

      <hr className='mt-2 mb-2'/>

      <div className='flex flex-col justify-center items-center'>
        <img src="/Rectangle 5 (1).png" width={360} height={120} alt="" className='xl:w-full'/>
        <p className='flex flex-row text-sm leading-5 mt-3 mb-3 ml-4 self-stretch'>🔬️ Education</p>
        <div className='flex flex-row justify-between mr-3 ml-3 xl:w-11/12'>
          <p className='w-80 text-base font-semibold leading-5'>Tax Benefits for Investment under National Pension Scheme launched by Government</p>
          <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-3'>
            <path d="M14.6666 3.00002C14.6666 4.28335 15.7166 5.33335 16.9999 5.33335C18.2833 5.33335 19.3333 4.28335 19.3333 3.00002C19.3333 1.71669 18.2833 0.666687 16.9999 0.666687C15.7166 0.666687 14.6666 1.71669 14.6666 3.00002ZM12.3333 3.00002C12.3333 1.71669 11.2833 0.666687 9.99992 0.666687C8.71659 0.666687 7.66659 1.71669 7.66659 3.00002C7.66659 4.28335 8.71658 5.33335 9.99992 5.33335C11.2833 5.33335 12.3333 4.28335 12.3333 3.00002ZM5.33325 3.00002C5.33325 1.71669 4.28325 0.666686 2.99992 0.666686C1.71659 0.666686 0.666586 1.71669 0.666586 3.00002C0.666586 4.28335 1.71658 5.33335 2.99992 5.33335C4.28325 5.33335 5.33325 4.28335 5.33325 3.00002Z" fill="#212529" />
          </svg>
        </div>
        <p className='flex flex-row text-sm mt-2 mb-2 ml-6 self-stretch'>I’ve worked in UX for the better part of a decade. F..</p>
        <div className='w-80 flex flex-row justify-between xl:w-full xl:mt-3'>
          <div className='flex xl:w-80'>
            <img src="./Rectangle 3.6.png" alt="" className='w-14 h-14'/>
            <div className='ml-2'>
              <p>Sarah West</p>
              <p>4.8k views</p>
            </div>
          </div>
          <div className='w-20 flex mt-2 justify-center rounded bg-slate-300 items-center'>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1'>
              <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#212529" />
            </svg>
            <p>Share</p>
          </div>
        </div>
      </div>

      <hr className='mt-2 mb-2'/>

      <div className='flex flex-col justify-center items-center'>
        <img src="/Rectangle 5 (2).png" width={360} height={120} alt="" className='xl:w-full'/>
        <p className='flex flex-row text-sm leading-5 mt-3 mb-3 ml-4 self-stretch'>🗓️ Meetup</p>
        <div className='flex flex-row justify-between mr-3 ml-3 xl:w-11/12'>
          <p className='w-80 text-base font-semibold leading-5'>Finance & Investment Elite Social Mixer @Lujiazui</p>
          <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-3'>
            <path d="M14.6666 3.00002C14.6666 4.28335 15.7166 5.33335 16.9999 5.33335C18.2833 5.33335 19.3333 4.28335 19.3333 3.00002C19.3333 1.71669 18.2833 0.666687 16.9999 0.666687C15.7166 0.666687 14.6666 1.71669 14.6666 3.00002ZM12.3333 3.00002C12.3333 1.71669 11.2833 0.666687 9.99992 0.666687C8.71659 0.666687 7.66659 1.71669 7.66659 3.00002C7.66659 4.28335 8.71658 5.33335 9.99992 5.33335C11.2833 5.33335 12.3333 4.28335 12.3333 3.00002ZM5.33325 3.00002C5.33325 1.71669 4.28325 0.666686 2.99992 0.666686C1.71659 0.666686 0.666586 1.71669 0.666586 3.00002C0.666586 4.28335 1.71658 5.33335 2.99992 5.33335C4.28325 5.33335 5.33325 4.28335 5.33325 3.00002Z" fill="#212529" />
          </svg>
        </div>
         
        <div className='w-80 flex mt-3 mb-3 justify-between xl:mr-44'>
          <div className='flex'>
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1 mr-1'>
            <path d="M10.6667 2.00001H10V0.666672H8.66667V2.00001H3.33333V0.666672H2V2.00001H1.33333C0.593333 2.00001 0.00666666 2.6 0.00666666 3.33334L0 12.6667C0 13.4 0.593333 14 1.33333 14H10.6667C11.4 14 12 13.4 12 12.6667V3.33334C12 2.6 11.4 2.00001 10.6667 2.00001ZM10.6667 12.6667H1.33333V5.33334H10.6667V12.6667ZM2.66667 6.66667H6V10H2.66667V6.66667Z" fill="#495057"/>
            </svg>
            <p>Fri, 12 Oct, 2018</p>
          </div>
          <div className='flex'>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1 mr-1'>
            <path d="M4.99992 0.333328C2.41992 0.333328 0.333252 2.42 0.333252 5C0.333252 8.5 4.99992 13.6667 4.99992 13.6667C4.99992 13.6667 9.66659 8.5 9.66659 5C9.66659 2.42 7.57992 0.333328 4.99992 0.333328ZM1.66659 5C1.66659 3.16 3.15992 1.66666 4.99992 1.66666C6.83992 1.66666 8.33325 3.16 8.33325 5C8.33325 6.92 6.41325 9.79333 4.99992 11.5867C3.61325 9.80666 1.66659 6.9 1.66659 5Z" fill="#495057"/>
            </svg>
            <p>Ahmedabad, India</p>
          </div>
        </div>
        <button className='w-80 h-8 border rounded text-red-700 mb-3 xl:w-full'>Visit Website</button>
        <div className='w-80 flex flex-row justify-between xl:w-full'>
          <div className='flex items-center'>
            <img src="./Rectangle 3.8.png" alt="" className='w-14 h-14'/>
            <div className='ml-2'>
              <p>Ronal Jones</p>
              <p>800 views</p>
            </div>
          </div>
          <div className='w-20 flex mt-2 justify-center rounded bg-slate-300 items-center'>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className=' mr-1'>
              <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#212529" />
            </svg>
            <p>Share</p>
          </div>
        </div>

      </div>

      <hr className='mt-2 mb-2'/>

      <div className='flex flex-col justify-center items-center pl-2 pr-2'>
        <p className='flex flex-row text-sm leading-5 mt-3 mb-3 ml-4 self-stretch' >💼️ Job</p>
        <div className='flex flex-row justify-between mr-3 ml-3 xl:w-11/12'>
          <p className='w-80 text-base font-semibold leading-5'>Software Developer - II</p>
          <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-3'>
            <path d="M14.6666 3.00002C14.6666 4.28335 15.7166 5.33335 16.9999 5.33335C18.2833 5.33335 19.3333 4.28335 19.3333 3.00002C19.3333 1.71669 18.2833 0.666687 16.9999 0.666687C15.7166 0.666687 14.6666 1.71669 14.6666 3.00002ZM12.3333 3.00002C12.3333 1.71669 11.2833 0.666687 9.99992 0.666687C8.71659 0.666687 7.66659 1.71669 7.66659 3.00002C7.66659 4.28335 8.71658 5.33335 9.99992 5.33335C11.2833 5.33335 12.3333 4.28335 12.3333 3.00002ZM5.33325 3.00002C5.33325 1.71669 4.28325 0.666686 2.99992 0.666686C1.71659 0.666686 0.666586 1.71669 0.666586 3.00002C0.666586 4.28335 1.71658 5.33335 2.99992 5.33335C4.28325 5.33335 5.33325 4.28335 5.33325 3.00002Z" fill="#212529" />
          </svg>
        </div>
        
        <div className='w-80 flex mt-3 mb-3 justify-between xl:mr-44'>
          <div className='flex xl:justify-start xl:items-start'>
          <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1 mr-1'>
             <path d="M8.33325 3.00002V1.66668H5.66659V3.00002H8.33325ZM1.66659 4.33335V11.6667H12.3333V4.33335H1.66659ZM12.3333 3.00002C13.0733 3.00002 13.6666 3.59335 13.6666 4.33335V11.6667C13.6666 12.4067 13.0733 13 12.3333 13H1.66659C0.926585 13 0.333252 12.4067 0.333252 11.6667L0.339919 4.33335C0.339919 3.59335 0.926585 3.00002 1.66659 3.00002H4.33325V1.66668C4.33325 0.926684 4.92659 0.333351 5.66659 0.333351H8.33325C9.07325 0.333351 9.66659 0.926684 9.66659 1.66668V3.00002H12.3333Z" fill="#495057"/>
             </svg>

            <p>Innovaccer Analytic...</p>
          </div>
          <div className='flex'>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1 mr-1'>
            <path d="M4.99992 0.333328C2.41992 0.333328 0.333252 2.42 0.333252 5C0.333252 8.5 4.99992 13.6667 4.99992 13.6667C4.99992 13.6667 9.66659 8.5 9.66659 5C9.66659 2.42 7.57992 0.333328 4.99992 0.333328ZM1.66659 5C1.66659 3.16 3.15992 1.66666 4.99992 1.66666C6.83992 1.66666 8.33325 3.16 8.33325 5C8.33325 6.92 6.41325 9.79333 4.99992 11.5867C3.61325 9.80666 1.66659 6.9 1.66659 5Z" fill="#495057"/>
            </svg>
            <p>Noida, India</p>
          </div>
        </div>
        <button className='w-80 h-8 border rounded text-green-700 xl:w-full'>Visit Website</button>
        <div className='w-80 flex flex-row justify-between xl:mt-4 xl:w-full'>
          <div className='flex items-center xl:w-full'>
            <img src="./Rectangle 3.10.png" alt="" className='w-14 h-14'/>
            <div className='ml-2'>
              <p>Joseph Gray</p>
              <p>1.7k views</p>
            </div>
          </div>
          <div className='w-20 flex mt-2 justify-center rounded bg-slate-300 items-center'>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className=' mr-1'>
              <path d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z" fill="#212529" />
            </svg>
            <p>Share</p>
          </div>
        </div>

      </div>

      <hr className='mt-2 mb-2'/>

      
    </main>
    <main className='hidden xl:mt-10 xl:ml-5 xl:block xl:w-60'>
      <div className='flex justify-between'>
        <div className='w-28 flex justify-center font-semibold bg-slate-200 rounded cursor-pointer'>
          <p>Write a Post</p>
          <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2 ml-1'>
            <path d="M0.416626 0.166626L4.99996 4.74996L9.58329 0.166626H0.416626Z" fill="black"/>
          </svg>

        </div>
        <div className='w-28 flex justify-center text-white bg-blue-800 rounded cursor-pointer' onClick={handleClick}>
          <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2 mr-1'>
             <path d="M7.33333 5.16671H4.58333V2.41671H2.75V5.16671H0V7.00004H2.75V9.75004H4.58333V7.00004H7.33333V5.16671ZM16.5 6.08337C18.0217 6.08337 19.2408 4.85504 19.2408 3.33337C19.2408 1.81171 18.0217 0.583374 16.5 0.583374C16.2067 0.583374 15.9225 0.629207 15.6658 0.711707C16.1883 1.45421 16.4908 2.35254 16.4908 3.33337C16.4908 4.31421 16.1792 5.20337 15.6658 5.95504C15.9225 6.03754 16.2067 6.08337 16.5 6.08337ZM11.9167 6.08337C13.4383 6.08337 14.6575 4.85504 14.6575 3.33337C14.6575 1.81171 13.4383 0.583374 11.9167 0.583374C10.395 0.583374 9.16667 1.81171 9.16667 3.33337C9.16667 4.85504 10.395 6.08337 11.9167 6.08337ZM17.985 8.06337C18.7458 8.73254 19.25 9.58504 19.25 10.6667V12.5H22V10.6667C22 9.25504 19.8275 8.38421 17.985 8.06337ZM11.9167 7.91671C10.0833 7.91671 6.41667 8.83337 6.41667 10.6667V12.5H17.4167V10.6667C17.4167 8.83337 13.75 7.91671 11.9167 7.91671Z" fill="white"/>
            </svg>
            <p >Join Group</p>
        </div>
      </div>
      <div>
        {!flag && <div className='flex justify-between mt-12'>
           <div className='flex'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1'>
            <g clip-path="url(#clip0_1_842)">
<path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="black"/>
<path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="black"/>
            </g>
             <defs>
              <clipPath id="clip0_1_842">
                     <rect width="18" height="18" fill="white"/>
              </clipPath>
             </defs>
           </svg>
           <p>Noida, India</p>
          </div>
          <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2'>
             <path d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z" fill="black"/>
          </svg>
          </div>
        </div>}
        {flag && <div className='flex justify-between mt-12'>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
          <g clip-path="url(#clip0_1_1233)">
               <path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="black"/>
              <path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="black"/>
           </g>
          <defs>
          <clipPath id="clip0_1_1233">
           <rect width="18" height="18" fill="white"/>
         </clipPath>
       </defs>
       </svg>
       <input type="text" placeholder="Enter Your Location" />
       <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1" onClick={handleCancel}>
        <path d="M11.8333 1.34169L10.6583 0.166687L6.00001 4.82502L1.34167 0.166687L0.166672 1.34169L4.82501 6.00002L0.166672 10.6584L1.34167 11.8334L6.00001 7.17502L10.6583 11.8334L11.8333 10.6584L7.17501 6.00002L11.8333 1.34169Z" fill="black"/>
        </svg>


        </div>}
        <div className='flex mt-8'>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 mt-1 mr-2'>
             <path d="M6.33337 9.00004H7.66671V10.3334H6.33337V9.00004ZM6.33337 3.66671H7.66671V7.66671H6.33337V3.66671ZM6.99337 0.333374C3.31337 0.333374 0.333374 3.32004 0.333374 7.00004C0.333374 10.68 3.31337 13.6667 6.99337 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00004C13.6667 3.32004 10.68 0.333374 6.99337 0.333374ZM7.00004 12.3334C4.05337 12.3334 1.66671 9.94671 1.66671 7.00004C1.66671 4.05337 4.05337 1.66671 7.00004 1.66671C9.94671 1.66671 12.3334 4.05337 12.3334 7.00004C12.3334 9.94671 9.94671 12.3334 7.00004 12.3334Z" fill="black"/>
           </svg>
          <p className='text-xs'>Your location will help us serve better and extend a personalised experience.</p>
        </div>
        {flag && <div className="flex mt-8 flex-col items-center">
          <div className="flex">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z" fill="black"/>
           </svg>
            <p className="ml-1 mb-1">RECOMMENDED GROUPS</p>
          </div>
          <div className="flex w-48 justify-between mt-3 items-center">
            <div className="flex">
              <img src="/Rectangle 6.png" alt="" />
              <p className="ml-2 mt-1">Leisure</p>
            </div>
            <div>
              <p className="bg-slate-300 w-16 text-center rounded-xl">Follow</p>
            </div>
          </div>
          <div className="flex w-48 justify-between mt-3 items-center">
            <div className="flex">
              <img src="/Rectangle 6 (2).png" alt="" />
              <p className="ml-2 mt-1">Activism</p>
            </div>
            <div>
              <p className="bg-slate-300 w-16 text-center rounded-xl">Follow</p>
            </div>
          </div>
          <div className="flex w-48 justify-between mt-3 items-center">
            <div className="flex">
              <img src="/Rectangle 6 (3).png" alt="" />
              <p className="ml-2 mt-1">MBA</p>
            </div>
            <div>
              <p className="bg-slate-300 w-16 text-center rounded-xl">Follow</p>
            </div>
          </div>
          <div className="flex w-48 justify-between mt-3 items-center">
            <div className="flex">
              <img src="/Rectangle 6(4).png" alt="" />
              <p className="ml-2 mt-1">Philosophy</p>
            </div>
            <div>
              <p className="bg-slate-300 w-16 text-center rounded-xl">Follow</p>
            </div>
          </div>
          <div className="mt-5 ml-36">
            <p className="text-blue-500">See More...</p>
          </div>
        </div> }
      </div>
    </main>
    </div>
  )
}

export default Posts