import React from 'react';
// Import the OTP image asset (ensure the correct path and structure).
import otppng from '../assets/otp';
// Import the CSS file for styling the OTP verification component.
import '../styles/OtpVerify.css';
// Import the reusable Button component for the Sign-Up action.
import Button from '../components/Button';

import "../styles/BgTheme.css";
// Define the OtpVerify functional component.
export default function OtpVerify() {
  return ( 
     // Wrapper container for the OTP verification screen.
    <div className='bg-theme'>
         
    <div className="otp-container">
      {/* Profile section to display an OTP icon */}
      <div className="otp-profile">
        {/* Image for OTP verification with height and width set explicitly */}
        <img src={otppng.otp} height={124} width={124} alt="OTP Verification Icon" />
      </div>
      
      {/* Line break to add spacing (consider using CSS for spacing instead) */}
      <br></br>
      
      {/* Heading for the OTP verification section */}
      <h2>OTP Verification</h2>
      
      {/* Instructions for the user about the OTP sent to their phone number */}
      <p className="otp-instructions">
        We have sent an OTP to the given number +91 ******884
      </p>

      {/* Container for the OTP input fields */}
      <div className="otp-input-container">
        {/* Dynamically render 6 input fields for OTP digits using Array and map */}
        {Array(6)
          .fill('') // Create an array with 6 empty strings to represent each input.
          .map((_, index) => (
            <input
              key={index} // Unique key for each input element.
              type="text" // Input type as text to allow character input.
              maxLength={1} // Restrict input to one character per field.
              className="otp-input" // Class for styling the input fields.
              aria-label={`OTP digit ${index + 1}`} // Accessible label for each input field.
            />
          ))}
      </div>

      {/* Paragraph for the "Resend OTP" option */}
      <p className="otp-resend">
        Didn’t receive the OTP?
        {/* Span styled as a link for resending the OTP */}
        <span className="resend-link"> RESEND OTP</span>
      </p>

      {/* Reusable Button component for the Sign-Up action */}
      <Button text="Sign Up" />
    </div>
    </div>
    
  );
}
