import React from 'react';

export default function Props2(props) {
  const style = {
    h1: {
      color: 'orange',
    },
    div: {
      backgroundColor: 'aliceblue',
      fontWeight: 'bold',
      width: '500px',
      height: '600px',
    },
    img: {
      width: '200px',
      height: '200px',
    },
  };
  const { title, author, price, type } = props.obj;
  return (
    <div style={style.div}>
      <h1 style={style.h1}>이번주 베스트셀러</h1>
      <img src="/bookIMG.jpg" style={style.img}></img>
      <h2>{title}</h2>

      <p>저자: {author}</p>

      <p>
        판매가:
        {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      </p>
      <p>구분: {type}</p>
    </div>
  );
}
