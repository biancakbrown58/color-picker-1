import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: 0,
  }
  handleChange = event => {
    this.setState({ hue: event.target.value })
  }

  render() {
    return (
      <div>
        <div className="color-bar">-</div>
        <input
          type="range"
          min="0"
          max="255"
          className="hue"
          value={this.state.hue}
          onChange={this.handleChange}
        ></input>
      </div>
    )
  }
}
