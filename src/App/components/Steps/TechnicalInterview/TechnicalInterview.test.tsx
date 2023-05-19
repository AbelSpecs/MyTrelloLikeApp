import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TechnicalInterview from './TechnicalInterview';

describe('<TechnicalInterview />', () => {
  test('it should mount', () => {
    render(<TechnicalInterview />);
    
    const technicalInterview = screen.getByTestId('TechnicalInterview');

    expect(technicalInterview).toBeInTheDocument();
  });
});