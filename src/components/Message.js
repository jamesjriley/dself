// src/components/Message.js
import React from 'react';

function Message({ text, sender }) {
  const style = sender === 'user' ? { alignSelf: 'flex-end', backgroundColor: '#e0f7fa' } : { backgroundColor: '#f1f8e9' };
  return (
    <div style={{ ...style, padding: '0.5rem', borderRadius: '10px', margin: '0.5rem' }}>
      {text}
    </div>
  );
}

export default Message;
