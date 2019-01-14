import React from 'react';
import calculateWinner from '../helpers/calculateWinner';
import style from './Status.css';

export default function Status({ squares, xIsNext }) {
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return <div className={style.status}>{status}</div>;
}
