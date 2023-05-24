import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardItem from './CardItem';

describe('<CardItem />', () => {
  test('it should mount', () => {
    const candidate = {id: 'Abel', name: "Abel", step: "Entrevista inicial", comments: "trying very hard"};
    const handleChangeStep = jest.fn();
    render(<CardItem item = {candidate} handleChangeStep={handleChangeStep}/>);
    const cardItem = screen.getByTestId('Card');
    expect(cardItem).toBeInTheDocument();
  });
});
