import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InitialInterview from './InitialInterview';

describe('<InitialInterview />', () => {
  test('it should mount', () => {
    render(<InitialInterview />);
    
    const initialInterview = screen.getByTestId('InitialInterview');

    expect(initialInterview).toBeInTheDocument();
  });
});