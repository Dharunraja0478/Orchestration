import React from 'react';
// Import the CSS file for styling the Button component.
import '../styles/Button.css';

// Define the TypeScript interface for the Button props.
// This ensures that the `text` prop is provided and correctly typed.
interface ButtonProps {
  text: string; // The text to display inside the button.
}

// Define the Button component as a functional component with TypeScript support.
// The `text` prop is destructured directly from the props.
const Button: React.FC<ButtonProps> = ({ text }) => (
  // Render a button element with a CSS class for styling.
  <button className="button">
    {/* Display the text passed via the `text` prop */}
    {text}
  </button>
);

// Export the Button component as the default export.
// This allows the Button to be reused across the application.
export default Button;
