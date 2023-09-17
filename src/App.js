import React, { Component } from 'react'
import CardSection from './components/CardSection';
import Header from './components/Header';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      Id : 'bitcoin',
      Data : {}
    }
  }

  fetchData = async() => {
    let data = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
    let jsonData = await data.json();

    this.setState({ Id: this.state.Id, Data: jsonData })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>

        {/* Header Section from src > components */}
        <Header/>

        {/* Card Section from src > components */}
        <CardSection
          cryptoName = {this.state.Data.name}
          sentiment = {this.state.Data.sentiment_votes_up_percentage}
        />

      </div>
    )
  }
}
