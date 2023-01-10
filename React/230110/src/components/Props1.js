import React from 'react';

export default function Props1(props) {
  const style = { color: 'red' };
  return (
    <div>
      <p>
        좋아하는 음식: <span style={style}>{props.food}</span>
        <br />
        <span style={style}>{props.food}</span>은 맛있다.{' '}
      </p>
    </div>
  );
}

Props1.defaultProps = {
  food: '초밥',
};
