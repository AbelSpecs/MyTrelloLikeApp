import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Rejection from './Rejection';

describe('<Rejection />', () => {
  test('it should mount', () => {
    render(<Rejection />);
    
    const rejection = screen.getByTestId('Rejection');

    expect(rejection).toBeInTheDocument();
  });
});