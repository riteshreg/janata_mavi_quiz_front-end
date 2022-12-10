import React, { Component } from 'react'

export class Score extends Component {
  render() {
    const {score} = this.props
    return (
      <div>{score}</div>
    )
  }
}

export default Score