import React from 'react';
import { useState } from 'react';

function Ex1() {
  let [value, setCalculator] = useState(1);

  function minus(value) {
    setCalculator(value - 1);
    console.log(value - 1);
  }

  function plus(value) {
    setCalculator(value + 1);
    console.log(value + 1);
  }

  return (
    <div className="App">
      <p>{value}</p>
      <button onClick={() => minus(value)}>-</button>
      <button onClick={() => plus(value)}>+</button>
    </div>
  );
}

export default Ex1;

//
// export default function answer() {
//   cosnt [count, setCount ] = useState(0);

//   return (
//     <div>
//     {count}
//     <br/>
//     <button onClick={()=>setCount(count - 1)}>-</button>
//     <button onClick={()=>setCount(count + 1)}>+</button>
//     </div>
//   )
// }
