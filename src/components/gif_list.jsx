import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => {
      // console.log(gif)
      return <Gif id={gif} key={gif} />
    });
  }
  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
