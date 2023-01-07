import React from 'react';
import Ex53Child from './Ex53Child';

export default function Ex53() {
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
      <Ex53Child item={items[0].item} price={items[0].price} />
      <Ex53Child item={items[1].item} price={items[1].price} />
      <Ex53Child item={items[2].item} price={items[2].price} />
    </div>
  );
}
