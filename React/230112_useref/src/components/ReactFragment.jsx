import React from 'react';

export default function ReactFragment() {
  return (
    <React.Fragment>
      <h1>안녕하세요</h1>
      <span>반갑습니다!</span>
    </React.Fragment>
    // css가 깨지는 걸 피하기 위해 React.Fragment 사용
    // <div>
    //   <h1>안녕하세요</h1>
    //   <span>반갑습니다!</span>
    // </div>
  );
}
