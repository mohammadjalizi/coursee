import React from 'react'
import { CiSearch } from "react-icons/ci";
const Navbar1 = () => {
    return (
        <div className='      px-36  flex items-center justify-between'>
           <div className=' flex  items-center  gap-8 '> 
            
            <img src=" https://coursee.org/utils/logo.svg" alt="" className=' w-129px h-46px  rounded-none ' />

<span className="  text-gray-400  cursor-pointer  hover:text-blue-950  ">إنشاء المحتوى</span>
</div>

    

<div className=' flex  items-center w-[40%] border p-1   rounded-xl'>
<CiSearch className='   text-lg  text-gray-500' />
                <input className='  outline-none rounded-sm    w-[90%] ' type=' text' placeholder=' ماذا تريد ان تتعلم اليوم ' /></div>

<div>
<button className='  bg-green-500 p-1  border   opacity-75   px-7   text-white  ' >تسجيل الدخول</button>
</div>


       
        </div>
    )
}

export default Navbar1