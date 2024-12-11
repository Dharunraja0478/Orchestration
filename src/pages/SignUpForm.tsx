import React from "react";
// Import the reusable InputField component for creating input fields.
import InputField from "../components/InputField";
// Import the reusable Button component for the "Sign Up" action.
import Button from "../components/Button";
// Import the CSS file for styling the SignUpForm component.
import "../styles/SignUpForm.css";
// Import the image asset to be used as the profile icon.

// Import all assets from the assets folder (assuming dynamic usage).
import assets from "../assets";
 
import "../styles/BgTheme.css";

// Define the SignUpForm component as a functional component with TypeScript support.
const SignUpForm: React.FC = () => (  
 
  <div className="bg-theme">
        {/* // Wrapper container for the entire Sign-Up form. */}
  <div className="form-container">
    {/* Section to display the profile icon */}
    <div className="profile-icon">
      {/* Image representing a profile placeholder */}
      <img 
        src={assets.images} // Source for the profile image.
        height={124} // Fixed height for the image.
        width={124} // Fixed width for the image.
        alt="profile" // Accessible alternative text for the image.
      />
    </div>

    {/* Heading for the Sign-Up form */}
    <h2>Sign Up</h2>

    {/* Input field for the user's full name */}
    <InputField 
      label="Full Name" // Label text for the input field.
      type="text" // Input type set to "text" for general text input.
    />

    {/* Input field for the user's email ID */}
    <InputField 
      label="Email id" // Label text for the input field.
      type="email" // Input type set to "email" to validate email input.
    />

    {/* Input field for the user's mobile number */}
    <InputField 
      label="Mobile Number" // Label text for the input field.
      type="tel" // Input type set to "tel" for phone number input.
    /> 

    {/* Add spacing before the button (consider using CSS instead of <br> tags) */}
    <br></br>

    {/* Button for submitting the Sign-Up form */}
    <Button 
      text="Sign Up" // Label for the button.
    />
  </div>
  </div>
  
);

// Export the SignUpForm component as the default export.
export default SignUpForm;
