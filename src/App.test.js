import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

test('iniciar los posibles enlaces', () => {
  const div = document.createElement('Header');
  ReactDOM.render(<App />, div);
  /*
  render(<App />);
  const linkElement = screen.getAllByText(/header/i);
  expect(linkElement).toBeInTheDocument();
  */
});
