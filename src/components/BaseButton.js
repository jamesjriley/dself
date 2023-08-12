// src/components/BaseButton.js
import React from 'react';

function BaseButton({ label, onClick, style }) {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
}

export default BaseButton;
