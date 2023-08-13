// src/tests/ChatWindow.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ChatWindow from '../components/ChatWindow';
import { accessibilityCheck } from '../utils/accessibilityCheck'; // Import the utility function

test('renders chat window with messages', async () => {
  const messages = [
    { text: 'Hello, how can I help you?', sender: 'bot' },
    { text: 'Hi, I need assistance with my account.', sender: 'user' },
  ];
  const { getByText,container } = render(<ChatWindow messages={messages} />);

  expect(getByText('Hello, how can I help you?')).toBeInTheDocument();
  expect(getByText('Hi, I need assistance with my account.')).toBeInTheDocument();
  await accessibilityCheck(container);
});
