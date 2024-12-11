import React from 'react';
// Import the CSS file for styling the InputField component.
import '../styles/InputField.css';

// Define the TypeScript interface for the InputField props.
// This interface ensures that the `label` and `type` props are provided and typed correctly.
interface InputFieldProps {
  label: string; // The placeholder text to display in the input field.
  type: string;  // The type of the input field (e.g., "text", "email", "password").
}

// Define the InputField component as a functional component with TypeScript support.
// The props are destructured directly in the function signature.
const InputField: React.FC<InputFieldProps> = ({ label, type }) => (
  // Wrapper div for the input field with a CSS class for styling.
  <div className="input-field">
    {/* Input element with dynamic type and placeholder values */}
    <input 
      type={type} // Input type is dynamically set based on the `type` prop.
      placeholder={label} // Placeholder text is set to the value of the `label` prop.
    />
  </div>
);

// Export the InputField component as the default export.
export default InputField;
