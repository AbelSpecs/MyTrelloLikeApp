import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Assignment from './Assignment';

describe('<Assignment />', () => {
  test('it should mount', () => {
    render(<Assignment />);
    
    const assignment = screen.getByTestId('Assignment');

    expect(assignment).toBeInTheDocument();
  });
});