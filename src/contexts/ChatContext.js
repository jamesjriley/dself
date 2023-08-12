// src/contexts/ChatContext.js
import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export function useChat() {
  return useContext(ChatContext);
}

export function ChatProvider({ children }) {
  const [chats, setChats] = useState([]);

  const addChat = (chat) => {
    setChats((prevChats) => [...prevChats, chat]);
  };

  return (
    <ChatContext.Provider value={{ chats, addChat }}>
      {children}
    </ChatContext.Provider>
  );
}
