import React, { Component } from 'react'
import Sliders from './Sliders.js'

import styles from './App.scss'

class App extends Component {

  constructor () {
    super()
    this.state = {
      hue: 3,
      saturation: 94,
      lightness: 60,
      alpha: 100
    }
  }

  updateHue (hue) {
    this.setState({
      hue: hue
    })
  }

  updateSaturation (saturation) {
    this.setState({
      saturation: saturation
    })
  }

  updateLightness (lightness) {
    this.setState({
      lightness: lightness
    })
  }

  updateAlpha (alpha) {
    this.setState({
      alpha: alpha
    })
  }

  render () {
    const hsla = `hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha / 100})`
    return <div>
      <h1>HSL Color Picker</h1>
      <h2>{hsla}</h2>
      <section>
        <figure className={styles.swatch}>
          <div style={{ backgroundColor: hsla }} />
        </figure>
        <ul>
          <li>H<Sliders name='hue' min={0} max={360} value={this.state.hue} handleChange={v => this.updateHue(v)} /></li>
          <li>S<Sliders name='saturation' min={0} max={100} value={this.state.saturation} handleChange={v => this.updateSaturation(v)} /></li>
          <li>L<Sliders name='lightness' min={0} max={100} value={this.state.lightness} handleChange={v => this.updateLightness(v)} /></li>
          <li>A<Sliders name='alpha' min={0} max={100} value={this.state.alpha} handleChange={v => this.updateAlpha(v)} /></li>
        </ul>
      </section>
      {/* <section>
        <button>Reset</button>
        <button>Save</button>
      </section>
      <ul /> {/* insert saved swatches here */}
    </div>
  }
}

export default App
