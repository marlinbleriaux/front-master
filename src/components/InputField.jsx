import React from "react";

const InputField = ({ label, type, name, value, placeholder, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.value);
        }}
      />
    </div>
  );
};

export default InputField;
