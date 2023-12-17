import React from 'react'

const Navbar1 = () => {
    return (
        <div className='   mx-6 flex items-center justify-between'>
           <div className=' flex  items-center  gap-8 '> 
            
            <img src=" https://coursee.org/utils/logo.svg" alt="" className=' w-129px h-46px  rounded-none ' />

<span className="min-w-120px cursor-pointer hover:text-blue-200  rtl text-xs text-gray font-600 text-14px">إنشاء المحتوى</span>
</div>

    

<div className=' w-[40%] border p-1   rounded-xl'>
                <input className='  outline-none rounded-sm    w-[90%] ' type=' text' placeholder=' ماذا تريد ان تتعلم اليوم ' /></div>

<div>
<button>تسجيل الدخول</button>
</div>


       
        </div>
    )
}

export default Navbar1