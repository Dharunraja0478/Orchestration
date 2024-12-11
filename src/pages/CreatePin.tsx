import React from 'react';
// Import the CSS file for styling the OTP-related components.
import '../styles/OtpVerify.css';
// Import the CSS file for additional styles used in the SignUpForm.
import '../styles/SignUpForm.css';
// Import the image asset used in the Create PIN screen.
import createpinpng from '../assets/createpin';
// Import the CSS file for the reusable Button component styles.
import '../styles/Button.css';
// Import the reusable InputField component for input fields.
import InputField from '../components/InputField';
// Import the reusable Button component for the "Next" action.
import Button from "../components/Button";

import "../styles/BgTheme.css";

// Define the CreatePin functional component.
export default function CreatePin() {
  return (
    // Wrapper container for the entire Create PIN screen.
    <div className='bg-theme'>
      <div className='otp-container'>
        {/* Profile section displaying an icon related to the Create PIN functionality */}
        <div className='otp-profile'>
          <img 
            src={createpinpng.createpin} // Source of the image.
            height={124} // Fixed height for the image.
            width={124} // Fixed width for the image.
            alt='Createpin' // Accessible alternative text for the image.
          />
        </div> 
        
        {/* Line break to add spacing (CSS can be used for better control over spacing) */}
        <br></br>
        
        {/* Heading for the Create PIN section */}
        <h2>Create PIN</h2> 

        {/* Instructions for the user on why and how to create a PIN */}
        <p className="otp-instructions">
          Create a secure 4-digit PIN for quick access and to protect your account
        </p>  
        
        {/* Input field for User ID or Phone Number */}
        <InputField 
          type='password' // Input type set to password to hide user input.
          label='User ID or Phone Number' // Label for the input field.
        /> 
        
        {/* Input field for entering the new PIN */}
        <InputField 
          type='password' // Input type set to password for secure PIN input.
          label='Enter PIN' // Label for the input field.
        />
        
        {/* Reusable Button component for proceeding to the next step */}
        <Button 
          text='Next' // Text displayed on the button.
        />
      </div>
    </div>
  )
}
