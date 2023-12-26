import React from 'react'
import Logo from '../images/tiser/logo.svg'
import '../stylesheets/components.scss'

function Navigation() {
  return (
    <div className="navigation">
      <div className="menu">
        <a href="">Хронология</a>
        <a href="">Станции</a>
        <a href="">Статьи</a>
      </div>
      <img src={Logo} alt="" />
    </div>
  )
}

export default Navigation
