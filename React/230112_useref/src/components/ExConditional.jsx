import React from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';
import { useState } from 'react';

// export default function ExConditional() {
//   const [condition, setCondition] = useState('1번');

//   const changeBtn = () => {
//     condition === '1번' ? setCondition('2번') : setCondition('1번');
//   };

//   return (
//     <>
//       {condition === '1번' && <PracticeOne />}
//       {condition === '2번' && <PracticeTwo />}
//       <button onClick={changeBtn}>{condition}</button>
//     </>
//   );
// }

export default function ExConditional() {
  const [condition, setCondition] = useState('1번');
  const onChange = () => {
    condition === '1번' ? setCondition('2번') : setCondition('1번');
  };

  return (
    <div>
      {condition === '1번' ? (
        <PracticeOne text={condition + ' 컴포넌트'} />
      ) : (
        <PracticeTwo text={condition + ' 컴포넌트'} />
      )}
      <button onClick={onChange}>{condition}</button>
    </div>
  );
}
