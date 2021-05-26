import React, { Component } from 'react'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * (359 - 1) + 1),
    saturation: Math.floor(Math.random() * (100 - 1) + 1),
    lightness: Math.floor(Math.random() * (100 - 1) + 1),
    alpha: Math.floor(Math.random() * (100 - 1) + 1),
  }

  handleButtonClick = event => {
    const newHue = Math.floor(Math.random() * (359 - 1) + 1)
    const newSaturation = Math.floor(Math.random() * (100 - 1) + 1)
    const newLightness = Math.floor(Math.random() * (100 - 1) + 1)
    const newAlpha = Math.floor(Math.random() * (100 - 1) + 1)

    const newState = {
      hue: newHue,
      saturation: newSaturation,
      lightness: newLightness,
      alpha: newAlpha,
    }
    this.setState(newState)
  }

  render() {
    const newBackgroundColor = `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%,${this.state.alpha}%)`

    const newStyle = { backgroundColor: newBackgroundColor }
    return (
      <div>
        <div className="color-bar" style={newStyle}>
          {`hsla(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%,${this.state.alpha}%)`}
        </div>
        <button style={newStyle} onClick={this.handleButtonClick}>
          Get a Random Color
        </button>
        <p>Hue: {this.state.hue}</p>
        <input
          type="range"
          min="0"
          max="359"
          className="hue slider"
          value={this.state.hue}
          onChange={event => this.setState({ hue: event.target.value })}
        ></input>

        <p>Saturation: {this.state.saturation}</p>
        <input
          type="range"
          min="0"
          max="100"
          className="saturation slider"
          value={this.state.saturation}
          onChange={event => this.setState({ saturation: event.target.value })}
        ></input>

        <p>Lightness: {this.state.lightness}</p>
        <input
          type="range"
          min="0"
          max="100"
          className="lightness slider"
          value={this.state.lightness}
          onChange={event => this.setState({ lightness: event.target.value })}
        ></input>

        <p>Alpha: {this.state.alpha}</p>
        <input
          type="range"
          min="0"
          max="100"
          className="alpha slider"
          value={this.state.alpha}
          onChange={event => this.setState({ alpha: event.target.value })}
        ></input>
      </div>
    )
  }
}
