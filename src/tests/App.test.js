import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders header with logo', () => {
  render(
  <MemoryRouter initialEntries={['/']}>
    <App />
  </MemoryRouter>
);
  const headerLogo = screen.getByText(/M/);
  expect(headerLogo).toBeInTheDocument();
});

test('renders 4 navigation links', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const links = screen.getAllByRole('link');
  expect(links.length).toBe(4);
});