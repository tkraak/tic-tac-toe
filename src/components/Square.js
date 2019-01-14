import React from 'react';
import style from './Square.css';

export default function Square({ value, onClick }) {
  return (
    <button className={style.square} onClick={onClick}>
      {value}
    </button>
  );
}
