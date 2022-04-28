import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ItemCard from '../ItemCard';

describe('ItemCard info', () => {
    const mockData = {
        name: 'test',
        cost: '6.00',
        id: 1
    }
    const mockAddCart = jest.fn();

    it('renders item name', () => {
        render(<ItemCard data = {mockData} addItemToCart = {mockAddCart} />);
        const itemName = screen.getByText(/test/i);
        expect(itemName).toBeInTheDocument();
    });

    it('renders item cost', () => {
        render(<ItemCard data = {mockData} addItemToCart = {mockAddCart} />);
        const itemCost = screen.getByText(/6.00/);
        expect(itemCost).toBeInTheDocument();
    });

    it('renders an input box with value of 1', () => {
        render(<ItemCard data = {mockData} addItemToCart = {mockAddCart} />);
        const input = screen.getByDisplayValue('1');
        expect(input).toBeInTheDocument();
    });

    it('user able to type in input box to change value', () => {
        render(<ItemCard data = {mockData} addItemToCart = {mockAddCart} />);
        const input = screen.getByDisplayValue('1');
        userEvent.type(input, '{backspace}5');
        expect(input).toHaveDisplayValue('5');
    });

    it('user able to click minus button to reduce input value', () => {
        render(<ItemCard data = {mockData} addItemToCart = {mockAddCart} />);
        const input = screen.getByDisplayValue('1');
        userEvent.click(screen.getByRole('button', {name: /\+/}));
        userEvent.click(screen.getByRole('button', {name: /-/}));
        expect(input).toHaveDisplayValue('1');
    });
    
    it('disables minus button if input value is 1', () => {
        render(<ItemCard data = {mockData} addItemToCart = {mockAddCart} />);
        const input = screen.getByDisplayValue('1');
        userEvent.click(screen.getByRole('button', {name: /-/}));
        expect(input).toHaveDisplayValue('1');
    });

    it('user able to click plus button to incease input value', () => {
        render(<ItemCard data = {mockData} addItemToCart = {mockAddCart} />);
        const input = screen.getByDisplayValue('1');
        userEvent.click(screen.getByRole('button', {name: /\+/}));
        expect(input).toHaveDisplayValue('2');
    });

    it('clicking add to cart button changes changes button text', () => {
        render(<ItemCard data = {mockData} addItemToCart = {mockAddCart} />);
        const addButton = screen.getByRole('button', {name: /Add to Cart/i});
        userEvent.click(addButton);
        expect(addButton).toHaveTextContent(/Added!/i);
    });
});
