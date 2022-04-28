import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Store from '../Store';

test('displays Store heading', () => {
    render(<Store />);
    const storeHeading = screen.getByRole('heading');
    expect(storeHeading).toHaveTextContent(/Store/);
});

test('renders all item cards', () => {
    const mockData = [
        {
        name: 'Ice cream',
        cost: '14.00',
        img: 'mockImg',
        id: 1
      },
      {
        name: 'Uniform',
        cost: '14.00',
        img: 'mockImg2',
        id: 2
      },
      {
        name: 'Ocean Blue',
        cost: '14.00',
        img: 'mockImg3',
        id: 3
      }
    ]

    render(<Store data = {mockData}/>);
    const itemCards = screen.getAllByDisplayValue('1');
    expect(itemCards.length).toBe(3);
});