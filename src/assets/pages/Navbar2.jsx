

import { auth } from '../../firbase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

import { signOut } from "firebase/auth";

const Navbar2 = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className=' my-10  flex justify-between '>
        
<div className='flex  px-40  gap-8'>

{user&& <h1>doneeeeeeee</h1>}
{!user && <button className=' bg-white border  hover:bg-blue-200   rounded-xl  px-14'>

<p className="  ">singh in</p>
</button> }

<button className='   bg-white border  hover:bg-blue-200   rounded-xl   px-7 flex justify-center items-center '>
<img className='  w-7 ' src='src\assets\pages\imag\online-learning.png' />
</button>
{!user &&<button>

<p className="">singh up</p>
</button>}

{user &&<button onClick={()=>{

signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

}}>

<p  className="">singh out</p>
</button>}


</div>
{!user&&<div>
  <button>

<p className="">الکل</p>
</button>
<p>محتواي</p>
<p>محتواي</p>
</div>}

    </div>
  )
}

export default Navbar2