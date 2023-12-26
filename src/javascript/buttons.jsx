import React from 'react'
import Icon from '../images/tiser/button_icon_white.svg'
import '../stylesheets/components.scss'

function Main_button({ text }) {
  return (
    <button>
      {text}
      <img src={Icon} alt="" />
    </button>
  )
}

export default Main_button
