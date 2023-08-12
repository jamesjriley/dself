// src/tests/BaseButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BaseButton from '../components/BaseButton';

test('renders button with correct label and handles click', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<BaseButton label="Send" onClick={handleClick} />);

  const button = getByText('Send');
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
