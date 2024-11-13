import React from 'react';
import '../styles/InputField.css';

interface InputFieldProps {
  label: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type }) => (
  <div className="input-field">
    <input type={type} placeholder={label} />
  </div>
);

export default InputField;
