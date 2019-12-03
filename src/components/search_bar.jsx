import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.currentTarget.value);
  }

  render() {
    return (
      <div>
        <input type="text" className="form-search form-control"
        onChange={this.handleUpdate} />
      </div>
    );
  }
}

export default SearchBar;
