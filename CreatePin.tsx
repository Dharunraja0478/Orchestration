import React from 'react'
import '../styles/OtpVerify.css'
import'../styles/SignUpForm.css'
import createpinpng from '../assets/createpin' 
import '../styles/Button.css' ;
import InputField from '../components/InputField'; 
import Button from "../components/Button";

export default function CreatePin() {
  return (
    <div>
       <div className='otp-container'>
          <div className='otp-profile'>
            <img src={createpinpng.createpin} height={124} width={124} alt='Createpin'/>
          </div> 
          <br></br>
          <h2>Create PIN</h2> 

          <p className="otp-instructions">
        Create a secure 4-digit PIN for quick access and to protect your account
      </p>  
      
      
        <InputField type='password' label=' User Id or Phone Number' /> 
        <InputField type='password' label=' Enter PIN'/>
          
          <Button text='Next'/>

       </div>
    </div>
  )
}
