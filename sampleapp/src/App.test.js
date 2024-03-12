import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders Heading', () => {
  render(<App />); //DOM in memory
  const h1Element = screen.getByText(/Users List/i);
  expect(h1Element).toBeInTheDocument();
});

// test spec
it("renders Users", () => {
  render(<App />);
  let btns = screen.getAllByRole('button');
  expect(btns.length).toBe(6);
});

it("delete a User", () => {
  render(<App />);
  let btns = screen.getAllByRole('button');
  fireEvent.click(btns[3]);
  btns = screen.getAllByRole('button');
  expect(btns.length).toBe(5);
});

it("filter a User", () => {
  render(<App />);
  let txtBox = screen.getByPlaceholderText('Search by name');
  fireEvent.change(txtBox, {"target": {"value": "Geller"}});
  // screen.debug();
  let btns =  screen.getAllByRole('button');
  expect(btns.length).toBe(2);
});