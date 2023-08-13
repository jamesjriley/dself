// src/pages/ChatPage.js
import React, { useState } from 'react';
//import BaseInput from '../components/BaseInput';
//import BaseButton from '../components/BaseButton';
import ChatWindow from '../components/ChatWindow';
import { useChat } from '../contexts/ChatContext'; // Import the useChat hook

function ChatPage() {
  const { chats } = useChat(); // Destructure chats and addChat from the context
//  const { chats, addChat } = useChat(); // Destructure chats and addChat from the context
//  const [inputText, setInputText] = useState('');

/*
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      // Use the addChat function from context to add a new chat message
      addChat({ text: inputText, sender: 'user' });
      setInputText('');
    }
  };
*/
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Chat with Support</h1>
      <ChatWindow messages={chats} /> {/* Use chats from context */}
    </div>
  );
}

export default ChatPage;
