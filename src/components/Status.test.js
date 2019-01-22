import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import { render } from 'react-testing-library';
import React from 'react';
import Status from './Status';
import calculateWinner from '../helpers/calculateWinner';

jest.mock('../helpers/calculateWinner');

afterEach(() => {
  calculateWinner.mockRestore();
});

test('Winner', () => {
  calculateWinner.mockReturnValue('x');
  const { getByText } = render(<Status />);
  const status = getByText(/winner\: x/i);
  expect(status).toHaveClass('status');
  expect(calculateWinner).toHaveBeenCalledTimes(1);
});

test('Next player: O', () => {
  const { getByText } = render(<Status />);
  const status = getByText(/next player\: o/i);
  expect(status).toHaveClass('status');
  expect(calculateWinner).toHaveBeenCalledTimes(1);
});

test('Next player: X', () => {
  const { getByText } = render(<Status xIsNext={true} />);
  const status = getByText(/next player\: x/i);
  expect(status).toHaveClass('status');
  expect(calculateWinner).toHaveBeenCalledTimes(1);
});
