import React from 'react';
import Ex53Child from './Ex53Child';

export default function EX53() {
  const items = [
    {
      item: 'PS5',
      price: '685,000원',
    },
    {
      item: '에어 프라이어',
      price: '50,000원',
    },
    {
      item: '사세 치킨윙',
      price: '11,500원',
    },
  ];
  return (
    <div>
      {items.map((el, index) => {
        return <Ex53Child item={el.item} price={el.price} key={index} />;
      })}
      <hr></hr>
      {items.map((el, index) => {
        return (
          <div key={index}>
            <h2>{el.item}</h2>
            <p>{el.price}</p>
          </div>
        );
      })}
    </div>
  );
}

//index를 2번 활용하기 때문에 unique하지 않기 때문에 피해야 한다~!
