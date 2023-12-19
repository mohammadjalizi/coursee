import React, { useState } from 'react'
import {auth}   from '../../firbase/config'
import {  createUserWithEmailAndPassword } from "firebase/auth";

const Frome1 = () => {
    const[email,Setemail]=useState("")
    const[password,Setpassword]=useState("")
  return (
    <div>
        
<form className='  mx-auto my-28 shadow-2xl bg-pink-300  flex flex-col justify-center w-[50%] '>

<input onChange={(eo)=>{

Setemail(eo.target.value)


}} className=' block ' type='email' placeholder='Email'/>
<input   onChange={(eo)=>{

Setpassword(eo.target.value)


}} className=' block ' type='password' placeholder='password'/>


<button onClick={(eo)=>{
eo.preventDefault()
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('Doneeeee')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

}}>  singh in </button>
</form>


    </div>
  )
}

export default Frome1