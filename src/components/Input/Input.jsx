import React from "react";
import "./input.css";

const Input = ({
  isRequired = true,
  labelText,
  isOptional = false,
  placeholder,
  hasPrefix = false,
  prefixText,
  handleInputChange,
}) => {
  return (
    <div className="input-container">
      <label className="inputfield-label">
        {labelText}{" "}
        {isOptional && <span className="optional-label">(optional)</span>}
      </label>
      <div className="input-group">
        {hasPrefix && <span className="prefix-text">{prefixText}</span>}
        <input
          type="text"
          placeholder={placeholder}
          className="inputfield-input"
          required={isRequired}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Input;
