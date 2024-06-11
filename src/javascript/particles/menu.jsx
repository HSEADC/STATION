import React from 'react'

import '../../stylesheets/components/quarks.scss'
import '../../stylesheets/components/atoms.scss'
import '../../stylesheets/components/molecules.scss'
import '../../stylesheets/components/wrappers.scss'

function Menu({ state }) {
  return (
    <div className="W_Menu">
      <a className="A_MenuPoint" href="/index.html">
        <img className="Q_Logo menu" id="Q_Logo_Menu" alt="" />
      </a>

      <div className="M_MenuPoints">
        <a href="./CategoryChrono.html" className="A_Point">
          Хронология
        </a>
        <a href="./СategoryStations.html" className="A_Point">
          Станции
        </a>
        <a href="./CategoryArticles.html" className="A_Point">
          Статьи
        </a>
      </div>
      <img className="Q_Burger" alt="" />
      <a className="A_MenuPoint">
        <img className="Q_Search" alt="" />
      </a>
    </div>
  )
}

export default Menu
