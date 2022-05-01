import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ShopCart from "../ShopCart";

describe("Shopping Cart", () => {
    const mockCheckout = jest.fn();
    const mockTotalCost = 14.00;
    const mockTotalQty = 1


    it('shows item qty when there is 1 item in cart', () => {
        render(<ShopCart totalQty = {mockTotalQty} totalCost = {mockTotalCost} handleCheckout = {mockCheckout} />);
        expect(screen.getByText(/1 items in cart/i)).toBeInTheDocument();
    });

    it('renders cart total', () => {
        render(<ShopCart totalQty = {mockTotalQty} totalCost = {mockTotalCost} handleCheckout = {mockCheckout} />);
        expect(screen.getByText(/cart total: 14.00/i)).toBeInTheDocument();
    });   

    it('renders checkout button that fires function once when clicked', () => {
        render(<ShopCart totalQty = {mockTotalQty} totalCost = {mockTotalCost} handleCheckout = {mockCheckout} />);
        const addToCardButton = screen.getByRole('button');
        userEvent.click(addToCardButton);
        expect(mockCheckout).toBeCalledTimes(1);
    });
});