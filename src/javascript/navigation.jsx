import React from 'react'
import '../stylesheets/components.scss'

class Navigation extends React.Component {
  redirectToIndex = () => {
    window.location.href = 'index.html'
  }

  render() {
    return (
      <div className="W_Menu">
        <img
          className="Q_Logo"
          id="Q_Logo_Menu"
          alt=""
          onClick={this.redirectToIndex}
        />
        <div className="M_MenuPoints">
          <a href="./category_chronology.html" className="A_Point">
            Хронология
          </a>
          <a href="./category_station.html" className="A_Point">
            Станции
          </a>
          <a href="./category_articles.html" className="A_Point">
            Статьи
          </a>
        </div>
        <img className="Q_Burger" alt="" />
        <img className="Q_Search" alt="" />
      </div>
    )
  }
}

export default Navigation
