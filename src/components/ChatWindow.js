// src/components/ChatWindow.js
import React from 'react';
import Message from './Message';

function ChatWindow({ messages, onSendMessage }) {
  return (
    <div style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '1rem' }}>
      {messages.map((message, index) => (
        <Message key={index} text={message.text} sender={message.sender} />
      ))}
      <div>
        <input type="text" placeholder="Type a message..." />
        <button onClick={onSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
