import logo from './logo.svg';
import './App.css';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Props1 from './components/Props1';
import Props2 from './components/Props2';
import Props3 from './components/Props3';
import State1 from './components/State1';
import State2 from './components/State2';
import Handler_ex from './ex/Handler_ex';
import Event_ex from './ex/Event_ex';

//jsx 실습 2번
// function App() {
//   let name = '행복이';
//   let animal = '말티즈';

//   return (
//     <div className="App">
//       <h2>
//         제 반려 동물의 이름은 <span>{name}</span>입니다.
//       </h2>
//       <h2>
//         <span>{name}</span>는 <span>{animal}</span>입니다.
//       </h2>
//     </div>
//   );
// }

//jsx실습 3번
// function App() {
//   return (
//     <div className="App">
//       <p>{3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}</p>
//     </div>
//   );
// }

//jsx실습4
// function App() {
//   const a = 320;
//   const b = 10;

//   return <div className="App">{a > b && 'a가 b보다 큽니다.'}</div>;
// }

//jsx 실습 5
// function App() {
//   let title = 'Hello, World!';

//   return (
//     <div className="App">
//       <div className="test">{title}</div>
//       <br />
//       아이디: <input></input>
//       <br />
//       비밀번호: <input></input>
//     </div>
//   );
// }

//jsx 실습 6
// function App() {
//   return (
//     <div className="App">
//       <div className="red"></div>
//       <div className="orange"></div>
//       <div className="yellow"></div>
//       <div className="green"></div>
//       <div className="blue "></div>
//       <div className="navy"></div>
//       <div className="purple"></div>
//     </div>
//   );
// }

//props 실습2
// function App() {
//   const book = {
//     title: '나의 하루는 4시 40분에 시작된다',
//     author: '김유진',
//     price: 13500,
//     type: '자기계발서',
//   };

//   return (
//     <div className="App">
//       <Props2 obj={book} />
//     </div>
//   );
// }

//Props 실습 3
// function App() {
//   const apptext = 'App 컴포넌트에서 넘겨준 text props입니다.';
//   const validtext = '콘솔 띄우기 성공!';
//   return (
//     <div className="App">
//       <Props3 text={apptext} valid={validtext} />
//     </div>
//   );
// }

//State 실습 1
// function App() {
//   return (
//     <div className="App">
//       <State1 />
//     </div>
//   );
// }

// //State 실습 2
// function App() {
//   return (
//     <div className="App">
//       <State2 />
//     </div>
//   );
// }

// 이벤트 핸들링 실습 1
// function App() {
//   return (
//     <div className="App">
//       <Handler_ex />
//     </div>
//   );
// }

//컴포넌트 응용 실습1
function App() {
  return (
    <div className="App">
      <Event_ex />
    </div>
  );
}

export default App;
