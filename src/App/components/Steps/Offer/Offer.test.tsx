import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Offer from './Offer';

describe('<Offer />', () => {
  test('it should mount', () => {
    const candidateList = [{id: 'Abel', name: 'Abel', step: 'Entrevista técnica', comments: ''}];
    const handleChangeStep = jest.fn();

    render(<Offer candidatesList={candidateList} handleChangeStep={handleChangeStep}/>);

    const offer = screen.getByTestId('Offer');

    expect(offer).toBeInTheDocument();
  });
});
