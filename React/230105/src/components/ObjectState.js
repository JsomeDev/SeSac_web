import React from 'react';
import { useState } from 'react';

export default function ObjectState() {
  const [state, setState] = useState({ teacher: '소미주' });
  console.log(state);

  return (
    <div>
      <button
        onClick={() => {
          state.teacher = 'SMJ';
          const copyObj = { ...state };
          setState(copyObj);
          console.log(state);
        }}
      >
        영어로!
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
