import React, { Component } from 'react';

import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: ['nHoICgbzKIrjq', 'aX2P8kEFqt8u4', 'TwtXMS5EnKDBK'],
      selectedGifID: "6IJuJJzgi9mzm"
    };
  }

  search = (query) => {
    giphy('iTVukwsilPnuQd6mp8glFx03Me1NZNPB').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <Gif id={this.state.selectedGifID} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}


export default App;
