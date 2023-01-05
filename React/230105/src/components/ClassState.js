//rcc
import React, { Component } from 'react';

export default class ClassState extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       teacher: '소미주',
  //     };
  //   }

  state = {
    teacher: '소미주',
  };

  render() {
    const { teacher } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ teacher: 'SMJ' })}>
          영어로!
        </button>
        <br />
        <span>{teacher}</span>
      </div>
    );
  }
}
