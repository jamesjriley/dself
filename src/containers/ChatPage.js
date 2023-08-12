// src/containers/ChatPage.js
import React, { useState } from 'react';
import BaseInput from '../components/BaseInput';
import BaseButton from '../components/BaseButton';
import ChatWindow from '../components/ChatWindow';

function ChatPage() {
  const [messages, setMessages] = useState([
    { text: 'Hello, how can I help you?', sender: 'bot' },
    { text: 'Hi, I need assistance with my account.', sender: 'user' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Chat with Support</h1>
      <ChatWindow messages={messages} />
      <BaseInput type="text" placeholder="Type a message..." onChange={handleInputChange} value={inputText} />
      <BaseButton label="Send" onClick={handleSendMessage} />
    </div>
  );
}

export default ChatPage;
