// src/components/BaseInput.js
import React from 'react';
import { FormControl } from 'react-bootstrap';

function BaseInput({ type, placeholder, onChange, value }) {
  return <FormControl type={type} placeholder={placeholder} onChange={onChange} value={value} />;
}

export default BaseInput;
