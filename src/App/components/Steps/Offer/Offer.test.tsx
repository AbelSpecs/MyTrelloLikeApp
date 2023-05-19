import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Offer from './Offer';

describe('<Offer />', () => {
  test('it should mount', () => {
    render(<Offer />);
    
    const offer = screen.getByTestId('Offer');

    expect(offer).toBeInTheDocument();
  });
});