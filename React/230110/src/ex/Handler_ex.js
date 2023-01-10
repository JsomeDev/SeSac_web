import React, { Component } from 'react';

export default class Handler_ex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello, World!',
    };
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        <h1>{text}</h1>
        <button onClick={() => this.setState({ text: 'Goodbye, World!' })}>
          클릭
        </button>
      </div>
    );
  }
}
