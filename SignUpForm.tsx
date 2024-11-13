import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import "../styles/SignUpForm.css";
import "../assets/image.png";
import assets from "../assets";
// import '../assets/image/image.png'
// import assets from '../assets/ic_profile.png'; // Make sure this path is correct

const SignUpForm: React.FC = () => (
  <div className="form-container"> 
  <div className="profile-icon">
  <img src={assets.image} height={124} width={124}  alt="profile"  />
  </div>
    

    <h2>Sign Up</h2>
    <InputField label=" Full Name" type="text" />
    <InputField label=" Email id" type="email" />
    <InputField label=" Mobile Number" type="tel" />
    <Button text="Sign Up" />
  </div>
);

export default SignUpForm;

