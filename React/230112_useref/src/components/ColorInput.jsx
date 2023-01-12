import React from 'react';
import { useRef } from 'react';

export default function ColorInput() {
  const divBg = useRef();
  const colorInput = useRef();

  const changeBGC = () => {
    divBg.current.style.backgroundColor = colorInput.current.value;
  };

  return (
    <div ref={divBg}>
      <input ref={colorInput}></input>
      <br />
      <button onClick={changeBGC}>색 적용</button>
    </div>
  );
}
