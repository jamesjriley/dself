// src/components/BaseInput.js
import React from 'react';

function BaseInput({ type, placeholder, onChange, value }) {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} value={value} />
  );
}

export default BaseInput;
