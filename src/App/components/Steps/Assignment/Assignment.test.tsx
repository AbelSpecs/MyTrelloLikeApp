import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Assignment from './Assignment';

describe('<Assignment />', () => {
  test('it should mount', () => {
    const candidateList = [{id: 'Abel', name: 'Abel', step: 'Entrevista técnica', comments: ''}];
    const handleChangeStep = jest.fn();
    render(<Assignment candidatesList={candidateList} handleChangeStep={handleChangeStep}/>);

    const assignment = screen.getByTestId('Assignment');

    expect(assignment).toBeInTheDocument();
  });
});
