import React, { Component } from 'react'

export class CardSection extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.cryptoName}
          {this.props.sentiment}
        </h1>
      </div>
    )
  }
}

export default CardSection