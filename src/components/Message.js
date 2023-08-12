// src/components/Message.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Message({ text, sender }) {
  const variant = sender === 'user' ? 'primary' : 'secondary';
  return <ListGroup.Item variant={variant}>{text}</ListGroup.Item>;
}

export default Message;
