import React from 'react'
import Icon from '../images/tiser/button_icon_white.svg'
import '../stylesheets/components.scss'

function Station_card({ text, margin }) {
  return (
    <>
      <h3>{text}</h3>
      <img style={{ marginTop: `${margin}px` }} src={Icon} alt="" />
    </>
  )
}

export default Station_card
