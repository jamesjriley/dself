// src/components/BaseCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

function BaseCard({ children }) {
  return (
    <Card>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default BaseCard;
