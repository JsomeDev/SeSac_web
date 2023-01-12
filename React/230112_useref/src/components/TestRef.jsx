import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요');

  const inputValue = useRef();

  //   function onChangeText(e) {
  //     const inputText = e.target.value;
  function onChangeText() {
    console.log(inputValue);
    setText(inputValue.current.value);
  }
  //inputvalue => ref 요소 객체
  // .current => .current까지 해야 DOM 접근 (input 태그)
  // .current.value => 입력받은 값

  return (
    <div>
      <h1>{text}</h1>
      <input
        ref={inputValue}
        onChange={() => {
          onChangeText();
        }}
        // onChange={(e) => {
        //   onChangeText(e);
      ></input>
    </div>
  );
}
