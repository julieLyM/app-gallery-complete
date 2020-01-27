import React, { Component } from 'react';

export default class Gallery extends Component {
  render() {
    const {
      picture: { urlImage, id },
    } = this.props;
    return (
      <div>
        <img src={urlImage} />
      </div>
    );
  }
}
