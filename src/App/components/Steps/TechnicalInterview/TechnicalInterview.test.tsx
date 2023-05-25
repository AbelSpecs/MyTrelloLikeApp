import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TechnicalInterview from './TechnicalInterview';

describe('<TechnicalInterview />', () => {
  test('it should mount', () => {
    const candidateList = [{id: 'Abel', name: 'Abel', step: 'Entrevista Inicial', comments: ''}];
    const handleChangeStep = jest.fn();

    render(<TechnicalInterview candidatesList={candidateList} handleChangeStep={handleChangeStep}/>);

    const technicalInterview = screen.getByTestId('TechnicalInterview');

    expect(technicalInterview).toBeInTheDocument();
  });
});
