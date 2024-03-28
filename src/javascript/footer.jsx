import React from 'react'
import Logo from '../images/components/quarks/Q_Logo_white.svg'
import Dzen from '../images/tiser/icon_dzen.svg'
import VK from '../images/tiser/icon_vk.svg'
import TG from '../images/tiser/icon_tg.svg'
import '../stylesheets/components/organism.scss'

class Footer extends React.Component {
  redirectToIndex = () => {
    window.location.href = 'index.html'
  }

  render() {
    return (
      <div className="O_Footer">
        <div className="ProjectLinks">
          <div className="Content">
            <img id="logo" src={Logo} alt="" onClick={this.redirectToIndex} />
            <p className="big">Хронология</p>
            <div>
              <p className="big">Статьи</p>
              <p>Статьи </p>
              <p>Новости</p>
            </div>
            <div>
              <p className="big">Станции</p>
              <p>Списком</p>
              <p>Картой</p>
            </div>
          </div>
          <div className="Icons">
            <img src={TG} alt="" />
            <img src={Dzen} alt="" />
            <img src={VK} alt="" />
          </div>
        </div>
        <div className="UniversityInfo">
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
