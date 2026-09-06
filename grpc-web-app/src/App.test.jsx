import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the unary call card', () => {
  render(<App />);
  const linkElement = screen.getByText(/unary call/i);
  expect(linkElement).toBeInTheDocument();
});
