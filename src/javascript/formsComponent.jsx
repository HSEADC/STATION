import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class formsComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isHovered } = this.state
    const imageSrc = isHovered
      ? './images/card-dark-hover.svg'
      : './images/card-dark.svg'

    return (
      <div className="svgContainer">
        <img
          src={imageSrc}
          alt="Image"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      </div>
    )
  }
}
