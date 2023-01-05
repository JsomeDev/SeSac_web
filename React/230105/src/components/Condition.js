import React from 'react';
import { useState } from 'react';

export default function Condition() {
  //const를 사용하면, 상태변경함수로만 변경할 수 있음 - 에러 방지 가능
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <button onClick={() => setCondition(!condition)}>컨디션 변경!</button>
      <br />
      <span>{condition ? '👍' : '😂'}</span>
    </div>
  );
}
