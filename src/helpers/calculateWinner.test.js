import calculateWinner from './calculateWinner';

describe('winner', () => {
  test('X wins', () => {
    expect(calculateWinner(['X', 'X', 'X'])).toBe('X');
  });

  test('O wins', () => {
    expect(calculateWinner(['O', 'O', 'O'])).toBe('O');
  });
});

describe('loser', () => {
  test('he loses', () => {
    expect(calculateWinner(['X', 'O', 'X'])).toBe(null);
  });

  test('she loses', () => {
    expect(calculateWinner(['O', 'X', 'O'])).toBe(null);
  });
});
