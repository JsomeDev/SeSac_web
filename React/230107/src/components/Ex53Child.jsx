import React from 'react';

export default function Ex53Child({ item, price }) {
  return (
    <div>
      <h2>품목명: {item}</h2>
      <p>가격: {price}</p>
    </div>
  );
}
