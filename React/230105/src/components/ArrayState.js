import React from 'react';
import { useState } from 'react';

export default function ArrayState() {
  //state는 배열이 시작하는 메모리 주소값을 가지고 있다.
  //아무리 배열 값을 변경하려고 해도 변경되지 않는다.
  //메모리 주소는 항상 동일 => 바뀐게 없으니 렌더링이 되지 않는다.
  const [state, setState] = useState([0]);
  console.log(state);

  return (
    <div>
      {state[0]}
      <br />
      <button
        onClick={() => {
          state[0] = 1;
          const copyArr = [...state];
          setState(copyArr);
          console.log(state);
        }}
      >
        +1
      </button>
    </div>
  );
}
