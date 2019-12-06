import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }
  }

  handleUpdate = (event) => {
    this.setState({
      term: event.target.value
    })
    this.props.searchFunction(event.currentTarget.value);
  }

  componentWillMount() {
    console.log('search bar will mount');
  }

  componentDidMount() {
    console.log('search bar did mount');
  }

  render() {
    return (
      <div>
        <input
        value={this.state.term}
        type="text"
        className="form-search form-control"
        onChange={this.handleUpdate}
        />
      </div>
    );
  }
}

export default SearchBar;
