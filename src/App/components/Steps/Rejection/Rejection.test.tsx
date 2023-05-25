import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Rejection from './Rejection';

describe('<Rejection />', () => {
  test('it should mount', () => {
    const candidateList = [{id: 'Abel', name: 'Abel', step: 'Entrevista técnica', comments: ''}];
    const handleChangeStep = jest.fn();

    render(<Rejection candidatesList={candidateList} handleChangeStep={handleChangeStep}/>);

    const rejection = screen.getByTestId('Rejection');

    expect(rejection).toBeInTheDocument();
  });
});
