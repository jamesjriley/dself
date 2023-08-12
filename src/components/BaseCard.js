// src/components/BaseCard.js
import React from 'react';

function BaseCard({ children, style }) {
  return <div style={{ ...style, padding: '1rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>{children}</div>;
}

export default BaseCard;
