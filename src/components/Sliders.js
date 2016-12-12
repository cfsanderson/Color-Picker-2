import React, { Component } from 'react'
import styles from './Sliders.scss'

class Sliders extends Component {

  render () {
    return <input
      className={styles.root}
      name={this.props.name}
      type='range'
      value={this.props.value}
      min={this.props.min}
      max={this.props.max}
      onChange={(event) => this.props.handleChange(event.target.value)}
    />
  }
}

export default Sliders
