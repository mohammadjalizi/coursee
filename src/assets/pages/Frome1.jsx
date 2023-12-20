import React, { useState } from 'react'
import {auth}   from '../../firbase/config'
import {  createUserWithEmailAndPassword } from "firebase/auth";

const Frome1 = () => {
    const[email,Setemail]=useState("")
    const[password,Setpassword]=useState("")
    const[hasEror,SetEror]=useState(false)
    const[hasfirbaseroro,Setfirbaseroro]=useState("")
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

    SetEror(true)
    // ..
    switch (errorCode) {

      case "auth/invalid-email":
        setfirebaseError("Wrong Email")
        break;


      case "auth/user-not-found":
        setfirebaseError("Wrong Email")
        break;


      case "auth/wrong-password":
        setfirebaseError("Wrong Password")
        break;


      case "auth/too-many-requests":
        setfirebaseError("Too many requests, please try aganin later")
        break;


      default:
        setfirebaseError("Please check your email & password")
        break;

    }



  });

}}>  singh in </button>

{hasEror && <h1>{hasfirbaseroro}</h1>}
</form>


    </div>
  )
}

export default Frome1