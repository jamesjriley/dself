// src/tests/BaseCard.test.js
import React from 'react';
import { render } from '@testing-library/react';
import BaseCard from '../components/BaseCard';

test('renders card with children content', () => {
  const { getByText } = render(
    <BaseCard>
      <div>Child Content</div>
    </BaseCard>
  );

  expect(getByText('Child Content')).toBeInTheDocument();
});
