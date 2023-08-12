// src/tests/Message.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Message from '../components/Message';

test('renders message with correct text content', () => {
  const { getByText } = render(<Message text="Hello, how can I help you?" sender="bot" />);

  expect(getByText('Hello, how can I help you?')).toBeInTheDocument();
});
