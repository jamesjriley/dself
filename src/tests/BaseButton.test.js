// src/tests/BaseButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BaseButton from '../components/BaseButton';
import { accessibilityCheck } from '../utils/accessibilityCheck'; // Import the utility function

test('renders button with correct label and handles click', async () => {
  const handleClick = jest.fn();
  const { getByText,container } = render(<BaseButton label="Send" onClick={handleClick} />);

  const button = getByText('Send');
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1); 
  await accessibilityCheck(container);
});
