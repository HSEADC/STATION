import React from 'react'
import Logo from '../images/tiser/logo.svg'
import '../stylesheets/components.scss'

function Navigation() {
  return (
    <div className="navigation">
      <div className="menu">
        <a href="./category_chronology.html">Хронология</a>
        <a href="./category_station.html">Станции</a>
        <a href="'./category_articles.html'">Статьи</a>
      </div>
      <img src={Logo} alt="" />
    </div>
  )
}

export default Navigation
