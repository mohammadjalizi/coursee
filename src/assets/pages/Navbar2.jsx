import React from 'react'

const Navbar2 = () => {
  return (
    <div className=' my-10  flex justify-between '>
        
<div className='flex  px-40  gap-8'>
<button className=' bg-white border  hover:bg-blue-200   rounded-xl  px-14'>

<p className="  ">الکل</p>
</button>
<button className='   bg-white border  hover:bg-blue-200   rounded-xl   px-7 flex justify-center items-center '>
<img className='  w-7 ' src='src\assets\pages\imag\online-learning.png' />
<p className="">دوره</p>
</button>
<button>

<p className="">الکل</p>
</button>
<button>

<p className="">الکل</p>
</button>

</div>
<div>
<p>محتواي</p>
<p>محتواي</p>
</div>

    </div>
  )
}

export default Navbar2