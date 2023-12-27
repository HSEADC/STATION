import React from 'react'
import Logo from '../images/tiser/logo.svg'
import '../stylesheets/components.scss'

class Navigation extends React.Component {
  redirectToIndex = () => {
    window.location.href = 'index.html'
  }

  render() {
    return (
      <div className="navigation">
        <div className="menu">
          <a href="./category_chronology.html">Хронология</a>
          <a href="./category_station.html">Станции</a>
          <a href="./category_articles.html">Статьи</a>
        </div>
        <img id="logo" src={Logo} alt="" onClick={this.redirectToIndex} />
      </div>
    )
  }
}

export default Navigation
