import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Props3 extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h1>{text}</h1>
        <br />
        <button
          onClick={() => {
            console.log(valid);
          }}
        >
          콘솔메시지
        </button>
      </div>
    );
  }
}

Props3.propTypes = {
  text: PropTypes.string.isRequired,
};

Props3.defaultProps = {
  text: '이건 기본 text props입니다.',
};
