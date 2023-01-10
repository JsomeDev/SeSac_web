import React from 'react';
import { useState } from 'react';

export default function State2() {
  let [number, setNumber] = useState(0);

  function Increase(number) {
    setNumber(number + 1);
  }

  function Decrease(number) {
    setNumber(number - 2);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          Increase(number);
        }}
      >
        Increase: +1
      </button>
      <button
        onClick={() => {
          Decrease(number);
        }}
      >
        Decrease: -2
      </button>
    </div>
  );
}
