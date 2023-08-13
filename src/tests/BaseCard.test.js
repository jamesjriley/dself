// src/tests/BaseCard.test.js
import React from 'react';
import { render } from '@testing-library/react';
import BaseCard from '../components/BaseCard';
import { accessibilityCheck } from '../utils/accessibilityCheck'; // Import the utility function

test('renders card with children content', async () => {
  const { getByText,container } = render(
    <BaseCard>
      <div>Child Content</div>
    </BaseCard>
  );

  expect(getByText('Child Content')).toBeInTheDocument();
  await accessibilityCheck(container);
});
