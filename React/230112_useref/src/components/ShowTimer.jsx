import React from 'react';
import Timer from './Timer';
import { useState } from 'react';

export default function ShowTimer() {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show && <Timer />}
      <button onClick={() => setShow(!show)}>버튼</button>
    </div>
  );
}
