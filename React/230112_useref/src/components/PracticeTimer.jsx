import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// export default function PracticeTimer() {
//   const [time, setTime] = useState(0);
//   const [render, setRender] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(time + 1);
//       console.log(time);
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   });

//   return (
//     <div>
//       <h1>{time}</h1>
//       <button
//         onClick={() => {
//           setRender(!render);
//         }}
//       >
//         시간
//       </button>
//     </div>
//   );
// }

export default function PracticeTimer() {
  const [render, setRender] = useState(false);
  const time = useRef(0);

  //마운트될 때만 실행, 빈배열! 안넣으면 계속 실행
  //시간 버튼을 누르면 리렌더링
  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>{time.current}</h1>
      <button
        onClick={() => {
          setRender(!render);
        }}
      >
        시간
      </button>
    </div>
  );
}
