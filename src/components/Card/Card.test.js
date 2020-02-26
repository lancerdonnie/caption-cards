import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';

it('renders correctly', () => {
  const { queryByTestId, queryByPlaceholderText } = render(<Card />);
  expect(queryByTestId('card')).toBeTruthy();
});
