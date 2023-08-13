// src/tests/BaseInput.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BaseInput from '../components/BaseInput';
import { accessibilityCheck } from '../utils/accessibilityCheck'; // Import the utility function

test('renders input field and handles text changes', async () => {
  const handleChange = jest.fn();
  const { getByPlaceholderText,container } = render(<BaseInput type="text" placeholder="Type a message..." onChange={handleChange} />);

  const input = getByPlaceholderText('Type a message...');
  fireEvent.change(input, { target: { value: 'Hello' } });

  expect(handleChange).toHaveBeenCalledTimes(1);
  await accessibilityCheck(container);
});
