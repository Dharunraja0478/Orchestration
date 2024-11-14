import React from 'react';
import otppng from '../assets/otp';
import '../styles/OtpVerify.css';
import Button from '../components/Button';

export default function OtpVerify() {
  return (
    <div className="otp-container">
      <div className="otp-profile">
        <img src={otppng.otp} height={124} width={124} alt="OTP Verification Icon" />
      </div>
       <br></br>
      <h2>OTP Verification</h2>
      <p className="otp-instructions">
        We have sent an OTP to the given number +91 ******884
      </p>

      <div className="otp-input-container">
        {Array(6)
          .fill('')
          .map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="otp-input"
              aria-label={`OTP digit ${index + 1}`}
            />
          ))}
      </div>

      <p className="otp-resend">
        Didn’t receive the OTP?
        <span className="resend-link"> RESEND OTP</span>
      </p>

      <Button text="Sign Up" />
    </div>
  );
}
