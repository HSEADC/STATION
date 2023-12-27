import React from 'react'
import Logo from '../images/tiser/logo_white.svg'
import Dzen from '../images/tiser/icon_dzen.svg'
import VK from '../images/tiser/icon_vk.svg'
import TG from '../images/tiser/icon_tg.svg'
import '../stylesheets/components.scss'

class Footer extends React.Component {
  redirectToIndex = () => {
    window.location.href = 'index.html'
  }

  render() {
    return (
      <div className="footer">
        <div className="info">
          <div className="content">
            <img id="logo" src={Logo} alt="" onClick={this.redirectToIndex} />
            <p className="big">Хронология</p>
            <div>
              <p className="big"> Статьи</p>
              <p>Новости</p>
              <p>Лайфхаки</p>
              <p>Подборки</p>
            </div>
            <div>
              <p className="big">Станции</p>
              <p>Маяковская</p>
              <p>Библиотека им.Ленина</p>
            </div>
          </div>
          <div className="icons">
            <img src={TG} alt="" />
            <img src={Dzen} alt="" />
            <img src={VK} alt="" />
          </div>
        </div>
        <div className="names">
          <p>HSE ADC</p>
          <p>
            Атласова Нана <br /> Галиева Эльвира <br /> Комкова Анна <br /> Каем
            Софья
          </p>
        </div>
      </div>
    )
  }
}

export default Footer
