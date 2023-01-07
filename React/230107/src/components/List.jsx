import React from 'react';
import Modal from './Modal';
import ListChild from './ListChild';

export default function List() {
  const dataArr = [
    {
      title: '리액트 공부하기',
      content: 'state 활용법 익히기',
    },
    {
      title: '코테 문제 풀기',
      content: 'Lv 0 정복하기',
    },
    {
      title: '변경 확인',
      content: 'Lv 0 정복~',
    },
  ];
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <hr />
      {dataArr.map((el, index) => {
        return (
          <div key={index}>
            <h2>{el.title}</h2>
            <p>{el.content}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
