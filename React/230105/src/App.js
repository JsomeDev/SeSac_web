import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Condition from './components/Condition';
import ClassState from './components/ClassState';
import StateAndVariable from './components/StateAndVariable';
import ArrayState from './components/ArrayState';
import ObjectState from './components/ObjectState';

// function App() {
//   let [teacher, setTeacher] = useState('소미주');

//   function customSetTeacher(name) {
//     setTeacher(name);
//     console.log(teacher);
//   }

//   // function inEnglish() {
//   //   const spanEl = document.querySelector('.App > span');
//   //   spanEl.innerHTML = 'SMJ';
//   //   //teacher = 'SMJ';
//   //   //console.log(teacher);
//   // }

//   return (
//     <div className="App">
//       <button onClick={() => setTeacher('SMJ')}>영어로!</button>
//       <br />
//       <span>{teacher}</span>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <ObjectState />
    </div>
  );
}
export default App;
