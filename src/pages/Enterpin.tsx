import React from 'react';
// Import the OTP image asset (ensure the correct path and structure).
import otppng from '../assets/otp';
// Import the CSS file for styling the Enter PIN component.
import '../styles/OtpVerify.css';
// Import the reusable Button component for the "Next" action.
import Button from '../components/Button';
// Import the reusable InputField component for input fields.
import InputField from '../components/InputField';

import "../styles/BgTheme.css";
// Define the Enterpin functional component.
export default function Enterpin() {
  return ( 

    <div className='bg-theme'>
         <div className='otp-container'>
      {/* Profile section to display an icon for Enter PIN */}
      <div className="otp-profile">
        {/* Image representing the PIN entry section */}
        <img src={otppng.otp} height={124} width={124} alt="Enter PIN" />
      </div>

      {/* Line break to add spacing (consider using CSS for spacing instead) */}
      <br></br>

      {/* Heading for the Enter PIN section */}
      <h2>Enter PIN</h2>

      {/* Instructions to guide the user about entering the PIN */}
      <p className="otp-instructions">
        Please enter your Personal Identification Number (PIN) below to proceed.
      </p> 

      {/* Input field for User ID or Phone Number */}
      <InputField 
        type='password' // Input type is password to hide sensitive information.
        label='User ID or Phone Number' // Label for the input field.
      /> 

      {/* Input field for entering the PIN */}
      <InputField 
        type='password' // Input type is password for secure PIN entry.
        label='Enter PIN' // Label for the input field.
      /> 

      {/* Link-like text for "Forget PIN" with inline styling */}
      <p 
        className="resend-link" 
        style={{ fontFamily: 'sans-serif' }} // Inline style for font family.
      >
        Forget PIN
      </p> 

      {/* Add spacing before the button (consider using CSS instead of <br> tags) */}
      <br></br>

      {/* Reusable Button component for the "Next" action */}
      <Button 
        text='Next' // Label for the button.
      />
    </div>
    </div>
    // Wrapper container for the Enter PIN screen.
    
  )
}
