// src/tests/Message.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Message from '../components/Message';
import { accessibilityCheck } from '../utils/accessibilityCheck'; // Import the utility function

test('renders message with correct text content', async () => {
  const { getByText,container } = render(<Message text="Hello, how can I help you?" sender="bot" />);

  expect(getByText('Hello, how can I help you?')).toBeInTheDocument();
  await accessibilityCheck(container);
});
