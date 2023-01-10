import React from 'react';
import { useState } from 'react';

// export default function Event_ex(props) {
//   const [data, setData] = useState([
//     { name: '코디', email: 'codi@gmail.com' },
//     { name: '윤소희', email: 'yoonsohee@gmail.com' },
//   ]);

//   function addInfo() {
//     const nameValue = document.getElementById('name').value;
//     const emailValue = document.getElementById('email').value;

//     const copyData = [
//       ...data,
//       {
//         name: nameValue,
//         email: emailValue,
//       },
//     ];

//     console.log(copyData);

//     setData(copyData);
//   }

//   return (
//     <div>
//       <form>
//         <input id="name" placeholder="이름" required></input>
//         <input id="email" placeholder="이메일" required></input>
//         <button
//           onClick={() => {
//             addInfo();
//           }}
//         >
//           등록
//         </button>
//       </form>

//       <h2>
//         {data.map((el, index) => {
//           return (
//             <div key={index}>
//               <p>
//                 {el.name}: {el.email}
//               </p>
//             </div>
//           );
//         })}
//       </h2>
//     </div>
//   );
// }

//state변수와 관련된 태그는 다 re-rendering
//input tag - value는 {name}이니까 다시 렌더링됨 => 등록하면 다시 빈문자열
export default function Event_ex() {
  const [info, setInfo] = useState([
    { name: '코디', email: 'codi@gmail.com' },
    { name: '윤소희', email: 'yoonsohee@gmail.com' },
  ]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={name}
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={email}
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setInfo(info.concat({ name: name, email: email }));
          setName('');
          setEmail('');
        }}
      >
        등록
      </button>
      {info.map((element, index) => (
        <h2 key={index}>
          {element.name}: {element.email}
        </h2>
      ))}
    </div>
  );
}
