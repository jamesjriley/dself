// src/tests/ChatPage.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChatPage from '../pages/ChatPage';
import { ChatProvider } from '../contexts/ChatContext';
import { accessibilityCheck } from '../utils/accessibilityCheck'; // Import the utility function

test.skip('renders chat page with initial messages and sends new message', async () => {
  const { getByText, getByPlaceholderText,container } = render(
    <ChatProvider>
      <ChatPage />
    </ChatProvider>
  );

  // Check initial messages
  expect(getByText('Hello, how can I help you?')).toBeInTheDocument();
  expect(getByText('Hi, I need assistance with my account.')).toBeInTheDocument();

  // Simulate typing a new message
  const input = getByPlaceholderText('Type a message...');
  fireEvent.change(input, { target: { value: 'New message' } });
  fireEvent.click(getByText('Send'));

  // Check new message
  expect(getByText('New message')).toBeInTheDocument();
  await accessibilityCheck(container);
});
