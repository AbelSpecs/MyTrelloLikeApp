import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dock from './Dock';
import InitialInterview from '../Steps/InitialInterview/InitialInterview';
import { Candidate } from '../../../types/candidate';

describe('<Dock />', () => {
  test('it should mount', async() => {
    render(<Dock />);

    const dock = screen.getByTestId('Dock');

    await waitFor(() => {
      expect(dock).toBeInTheDocument();
    })
  });

  test('it should add a candidate', async () => {
    let candidatesList = [{id: 'Abel', name: 'Abel', step: 'Entrevista Inicial', comments: ''}] as Candidate[];
    const newCandidate = {id: 'Pepe', name: 'Pepe', step: 'Entrevista Inicial', comments: ''};
    const addCandidate = jest.fn((candidate: Candidate) => {
      candidatesList = ([...candidatesList as Candidate[], candidate]);
    });

    render(<Dock />);

    document.body.innerHTML = `
      <button id="addCandidateBtn" onClick={() => {${addCandidate(newCandidate)}}}>Add Candidate</button>
    `;
    require('./Dock.tsx');

    const newCandidateBtn = document.getElementById('addCandidateBtn');
    newCandidateBtn!.click
    await waitFor(() => {
      expect(candidatesList.length).toBe(2);
    })
  });
});
