import React, { Component } from 'react';

import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
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
      <div className="container">
        <div className="row">
          <div className="col">
            <SearchBar searchFunction={this.search} />
          </div>
        </div>
        <div className="row">
            <div className="col">
              <Gif id={this.state.selectedGifID} />
            </div>
        </div>
              <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}


export default App;
