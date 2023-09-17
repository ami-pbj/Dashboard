import React, { Component } from 'react'

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      Id : 'bitcoin',
      Data : {},
    };
  }

  fetch = () => {
    let data = fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
    let jsonData = data.json();

    this.setState({ Id: "pbj", Data: this.state.Data });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.Id}        
        </h1>

      </div>
    )
  }
}
