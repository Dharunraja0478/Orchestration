import React from 'react'
import otppng from '../assets/otp';
import '../styles/OtpVerify.css';
import Button from '../components/Button';
import InputField from '../components/InputField';

export default function Enterpin() {
  return (
    <div className='otp-container'>
        <div className="otp-profile">
        <img src={otppng.otp} height={124} width={124} alt="Enter PIN" />
      </div>
       <br></br>
      <h2>Enter PIN</h2>
      <p className="otp-instructions">
        Please enter your Personal identification Number(PIN) below to proceed.
      </p> 



      <InputField type='password' label=' Create PIN' /> 
        <InputField type='password' label=' Confirm PIN'/>
          <br></br>
          <Button text='Next'/>
    </div>
  )
}
