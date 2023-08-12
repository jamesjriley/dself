// src/tests/BaseInput.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BaseInput from '../components/BaseInput';

test('renders input field and handles text changes', () => {
  const handleChange = jest.fn();
  const { getByPlaceholderText } = render(<BaseInput type="text" placeholder="Type a message..." onChange={handleChange} />);

  const input = getByPlaceholderText('Type a message...');
  fireEvent.change(input, { target: { value: 'Hello' } });

  expect(handleChange).toHaveBeenCalledTimes(1);
});
