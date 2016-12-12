import React, { Component } from 'react'
import Sliders from './Sliders.js'

import styles from './App.scss'

class App extends Component {

  constructor () {
    super()
    this.state = {
      hue: 120,
      saturation: 100,
      lightness: 50,
      alpha: 1
    }
  }

  updateHue (hue) {
    this.setState({
      hue: hue
    })
  }

  updateSaturation (saturation) {
    console.log(saturation)
    this.setState({
      saturation: saturation
    })
  }

  render () {
    const hsla = `hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`
    return <div>
      <h1>HSL Color Picker</h1>
      <h2>{hsla}</h2>
      <section>
        <figure className={styles.swatch}>
          <div style={{ backgroundColor: hsla }} />
        </figure>
        <ul>
          <li>H<Sliders name='hue' min={0} max={360} value={this.state.hue} handleChange={v => this.updateHue(v)} /></li>
          <li>S<Sliders name='saturation' min={0} max={360} value={this.state.saturation} handleChange={v => this.updateSaturation(v)} /></li>
          <li>L<Sliders /></li>
          <li>A<Sliders /></li>
          {/* <BoxItem image={images[0]} isUp={picks.includes(0) || matched.includes(0)} handleClick={() => this.choose(0)} /> */}
        </ul>
      </section>
      <section>
        <button>Random</button>
        <button>Save</button>
      </section>
      <ul />
    </div>
  }
}

export default App
