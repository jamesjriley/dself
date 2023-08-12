// src/components/ChatWindow.js
import React from 'react';
import Message from './Message';
import { ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

function ChatWindow({ messages, onSendMessage }) {
  return (
    <div>
      <ListGroup style={{ height: '400px', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <Message key={index} text={message.text} sender={message.sender} />
        ))}
      </ListGroup>
      <InputGroup className="mt-3">
        <FormControl placeholder="Type a message..." />
          <Button variant="primary" onClick={onSendMessage}>Send</Button>
      </InputGroup>
    </div>
  );
}

export default ChatWindow;
