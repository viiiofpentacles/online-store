import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Checkout from '../Checkout';

test('renders page with checkout header', () => {
    render(
        <Checkout />
    );
    const header = screen.getByText(/checkout/i);
    expect(header).toBeInTheDocument();
});

test('displays items in shopping cart', () => {
    const mockData = {
            1: 0,
            2: 2,
            3: 0,
            4: 0,
            5: 0,
            6: 0
          }
    render(
        <Checkout cart = {mockData} />
    );
    const uniform = screen.getByText(/uniform/i);
    expect(uniform).toBeInTheDocument();
});

test('correctly displays item quantity', () => {
    const mockData = {
            1: 0,
            2: 2,
            3: 0,
            4: 0,
            5: 0,
            6: 0
          }
    render(
        <Checkout cart = {mockData} />
    );
    const inputValue = screen.getByRole('textbox');
    expect(inputValue.value).toBe('2');
});

test('user is able to update input', () => {
        const mockData = {
                1: 0,
                2: 2,
                3: 0,
                4: 0,
                5: 0,
                6: 0
              }
        render(
            <Checkout cart = {mockData} />
        );
        const input = screen.getByRole('textbox');
        userEvent.type(input, '{backspace}0');
        expect(input.value).toBe('0');
    });
