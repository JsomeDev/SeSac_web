import React from 'react';
import { useState } from 'react';

function Ex2() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(value + 1)}>
        {value > 10 ? '😎' : '👍'}
        {/*{value <= 10 ? '👍' : '😎' } */}
      </button>
      <br />
      {value}
    </div>
  );
}

export default Ex2;
