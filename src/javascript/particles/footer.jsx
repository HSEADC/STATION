import React from 'react'
import '../../stylesheets/components/organism.scss'
import '../../stylesheets/components/quarks.scss'
import '../../stylesheets/components/atoms.scss'
import '../../stylesheets/components/molecules.scss'
import '../../stylesheets/components/wrappers.scss'

function Footer() {
  return (
    <div className="O_Footer">
      <div className="ProjectLinks">
        <div className="Content">
          <div className="Q_Logo white"></div>
          <div>
            <p className="big">Хронология</p>
            <a href="">Хроно</a>
          </div>
          <div>
            <p className="big">Статьи</p>
            <a href="">Статьи</a>
            <a href="">Новости</a>
          </div>
          <div>
            <p className="big">Станции</p>
            <a href="">Список</a>
            <a href="">Карта</a>
          </div>
        </div>
        <div className="Icons">
          <div className="Q_SocialMedia tg"></div>
          <div className="Q_SocialMedia vk"></div>
          <div className="Q_SocialMedia dzen"></div>
        </div>
      </div>
      <div className="UniversityInfo">
        <p style={{ fontSize: '24px' }}>HSE ADC</p>
        <p>
          Атласова Нана <br /> Галиева Эльвира <br /> Комкова Анна <br /> Каем
          Софья
        </p>
      </div>
    </div>
  )
}

export default Footer
