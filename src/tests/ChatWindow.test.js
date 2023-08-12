// src/tests/ChatWindow.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ChatWindow from '../components/ChatWindow';

test('renders chat window with messages', () => {
  const messages = [
    { text: 'Hello, how can I help you?', sender: 'bot' },
    { text: 'Hi, I need assistance with my account.', sender: 'user' },
  ];
  const { getByText } = render(<ChatWindow messages={messages} />);

  expect(getByText('Hello, how can I help you?')).toBeInTheDocument();
  expect(getByText('Hi, I need assistance with my account.')).toBeInTheDocument();
});
