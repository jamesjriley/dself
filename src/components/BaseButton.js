// src/components/BaseButton.js
import React from 'react';
import { Button } from 'react-bootstrap';

function BaseButton({ label, onClick, variant = 'primary' }) {
  return <Button variant={variant} onClick={onClick}>{label}</Button>;
}

export default BaseButton;
