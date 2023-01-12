import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

// export default function Quiz() {
//   const randomNum1 = Math.floor(Math.random() * 10 + 1);
//   const randomNum2 = Math.floor(Math.random() * 10 + 1);
//   const randomCal = Math.floor(Math.random() * 3);

//   const inputEl = useRef();
//   const h1El = useRef();
//   const spanEl = useRef();

//   const cal = ['+', '-', '*'];

//   const answerCheck = () => {
//     if(spanEl.current.value == "*") {
//         let answer = randomNum1 * randomNum2;
//     } else if (spanEl.current.value == "+")

//     if (inputEl.current.value == answer) {
//       alert('정답입니다!');
//       inputEl.current.value = '';
//       inputEl.current.focus();
//     } else {
//       alert('틀렸습니다. 다시 입력해 주세요!');
//       inputEl.current.value = '';
//       inputEl.current.focus();
//     }
//   };

//   return (
//     <div>
//       <h1 ref={h1El}>
//         <div>
//           {randomNum1} <span ref={spanEl}>{cal[randomCal]}</span> {randomNum2}
//         </div>
//       </h1>
//       <input ref={inputEl}></input>
//       <button onClick={answerCheck}>정답 제출!</button>
//     </div>
//   );
// }

export default function Quiz() {
  const firstRandomNumber = Math.floor(Math.random() * 10); // 1~10
  const secondRandomNumber = Math.floor(Math.random() * 10);
  const arithmeticArr = ['+', '-', '*'];
  const arithmetic = Math.floor(Math.random() * 3); //주의 - 3이 나오면? //(2-0) +0

  let answer = 0;
  if (arithmetic === 0) {
    answer = firstRandomNumber + secondRandomNumber;
  } else if (arithmetic === 1) {
    answer = firstRandomNumber - secondRandomNumber;
  } else {
    answer = firstRandomNumber * secondRandomNumber;
  }

  const answerInput = useRef();
  const [again, setAgain] = useState(false); //가짜 렌더링을 위한 건 보통 t/f를 사용한다. 많이 사용!

  const checkAnswer = () => {
    if (answer === Number(answerInput.current.value)) {
      alert('정답입니다!');
      answerInput.current.value = '';
      answerInput.current.focus();
      setAgain(!again);
    } else {
      alert('틀렸습니다. 다시 입력해 주세요!');
      answerInput.current.value = '';
      answerInput.current.focus();
    }
  };

  return (
    <div>
      <h1>
        {firstRandomNumber} {arithmeticArr[arithmetic]} {secondRandomNumber}
      </h1>
      <input ref={answerInput}></input>
      <button onClick={checkAnswer}>정답 제출</button>
    </div>
  );
}
