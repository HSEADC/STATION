import React, { useState } from 'react'
import '../../stylesheets/components/quarks.scss'
import '../../stylesheets/components/atoms.scss'
import '../../stylesheets/components/molecules.scss'
import '../../stylesheets/components/wrappers.scss'
import '../../stylesheets/adaptives/adaptive.scss'

function Menu({ state, activeTag1, activeTag2, activeTag3 }) {
  const mainpage = './'
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false)

  const toggleBurgerMenu = () => {
    setIsBurgerMenuVisible(!isBurgerMenuVisible)
  }

  return (
    <>
      <div className="W_Menu">
        <a className="A_MenuPoint" href={mainpage}>
          <div className="Q_Logo menu" id="Q_Logo_Menu" alt=""></div>
        </a>

        <div className="M_MenuPoints">
          <a href="./CategoryChrono.html" className={`A_Point${activeTag1}`}>
            <p>Хронология</p>
          </a>
          <a href="./СategoryStations.html" className={`A_Point${activeTag2}`}>
            <p>Станции</p>
          </a>
          <a href="./CategoryArticles.html" className={`A_Point${activeTag3}`}>
            <p>Статьи</p>
          </a>
        </div>
        <div className="Q_Burger" onClick={toggleBurgerMenu} alt=""></div>
        <a className="A_MenuPoint">
          <div className="Q_Search" alt=""></div>
        </a>
      </div>
      {isBurgerMenuVisible && (
        <div className="M_BurgerMenu">
          <a href="./CategoryChrono.html">
            <p>Хронология</p>
          </a>
          <a href="./СategoryStations.html">
            <p>Станции</p>
          </a>
          <a href="./CategoryArticles.html">
            <p>Статьи</p>
          </a>
        </div>
      )}
    </>
  )
}

export default Menu
