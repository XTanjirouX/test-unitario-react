import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './counter';

test('debe incrementar el contador varias veces al hacer clic varias veces', () => {
    render(<Counter />);
    const boton = screen.getByText(/Incrementar/i);
    
    // Hacemos varios clics
    fireEvent.click(boton);
    fireEvent.click(boton);
    fireEvent.click(boton);
    
    const buttonElement = screen.getByText(/Contador: 3/i);
    expect(buttonElement).toBeInTheDocument();
  });