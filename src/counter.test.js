import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './counter';

test('renders learn react link', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Incrementar/i);
  expect(buttonElement).toBeInTheDocument();
});


test('no debe cambiar el contador si no se hace clic en el botón', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Contador: 0/i);
  expect(buttonElement).toBeInTheDocument();
});