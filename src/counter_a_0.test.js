import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './counter';

// Test inicial: Comprobamos que el contador inicia en 0
test('debe mostrar el contador inicial en 0', () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/Contador: 0/i);
    expect(buttonElement).toBeInTheDocument();
  });