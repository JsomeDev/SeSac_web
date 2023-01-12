import './App.css';
import React from 'react';
import ChangeFocus from './components/ChangeFocus';
import ColorInput from './components/ColorInput';
import Comparing from './components/Comparing';
import Quiz from './components/Quiz';
import ReactFragment from './components/ReactFragment';
import RefDom from './components/RefDom';
import TestRef from './components/TestRef';
import ConditionalRender from './components/ConditionalRender';
import ExConditional from './components/ExConditional';
import TestUseEffect from './components/TestUseEffect';
import ShowTimer from './components/ShowTimer';
import PracticeTimer from './components/PracticeTimer';
import ExUnmount from './components/ExUnmount';

function App() {
  return (
    <div className="App">
      <ExUnmount />
    </div>
  );
}

export default App;
