import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InitialInterview from './InitialInterview';
import { Candidate } from '../../../../types/candidate';

describe('<InitialInterview />', () => {
  test('it should mount', () => {
    const candidateList = [{id: 'Abel', name: 'Abel', step: 'Entrevista Inicial', comments: ''}];
    const handleChangeStep = jest.fn();
    const addCandidate = jest.fn();

    render(<InitialInterview candidatesList={candidateList} handleChangeStep={handleChangeStep} addCandidate={addCandidate}/>);

    const initialInterview = screen.getByTestId('InitialInterview');

    expect(initialInterview).toBeInTheDocument();
  });

  test('it should add candidate', () => {
    const candidatesList = [{id: 'Abel', name: 'Abel', step: 'Entrevista Inicial', comments: ''}] as Candidate[];
    const handleChangeStep = jest.fn();
    const addCandidate = jest.fn();

    render(<InitialInterview candidatesList={candidatesList} handleChangeStep={handleChangeStep} addCandidate={addCandidate}/>);
    const addCandidateButton = screen.getByText("Add Candidate");
    fireEvent.click(addCandidateButton);
    const addButton = screen.getByText('Agregar');
    fireEvent.click(addButton);
    expect(addCandidate).toBeCalled();
  });
});
