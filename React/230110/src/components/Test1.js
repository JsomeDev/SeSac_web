import React, { Component } from 'react';

export default class Test1 extends Component {
  render() {
    const name = '주소미';
    const my_style = {
      backgroundColor: 'blue',
      color: 'orange',
      fontSize: '40px',
      padding: '12',
    };
    return <div style={my_style}>{name}</div>;
  }
}
