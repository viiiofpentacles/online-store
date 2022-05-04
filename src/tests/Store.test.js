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
    const mockAddItem = jest.fn();
    render(<Store handleAddItemToCartState = {mockAddItem} />);
    const itemCards = screen.getAllByDisplayValue('1');
    expect(itemCards.length).toBe(6);
});