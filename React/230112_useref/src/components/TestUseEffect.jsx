import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요!');
  const inputValue = useRef();

  //버튼 클릭, 키보드 입력을 하면 컴포넌트 리렌더링 실행! => useEffect 실행
  //state 변경 먼저 일어나고 useEffect가 일어남
  const onButtonClick = () => {
    console.log('button clicked!');
    setCount(count + 1);
  };

  const onInputChange = () => {
    console.log('키 입력!');
    setText(inputValue.current.value);
  };

  //무조건 실행
  useEffect(() => {
    console.log('렌더링될 때 마다 실행!');
  });

  //의존성 배열
  //빈 배열 -> 마운트될 때만 실행
  //배열 안에 있는 값이 변경이 되어야만 실행하는데, 빈배열이니 최초 마운트될 때만 실행됨
  useEffect(() => {
    console.log('마운트될 때만 실행');
  }, []);

  //마운트 + count값이 업데이트되었을 때만 실행
  useEffect(() => {
    console.log('☆버튼 클릭 시에만 실행');
  }, [count, text]);

  //   useEffect(() => {
  //     console.log('★키보드 입력 시에만 실행');
  //   }, [text]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 버튼</button>
      <br></br>
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onInputChange}></input>
    </div>
  );
}
