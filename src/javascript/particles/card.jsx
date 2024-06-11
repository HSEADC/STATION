import React from 'react'

import '../../stylesheets/components/quarks.scss'
import '../../stylesheets/components/atoms.scss'
import '../../stylesheets/components/molecules.scss'
import '../../stylesheets/components/wrappers.scss'
import '../../stylesheets/vars.scss'
import Button from './button.jsx'
import BgChrono from '../../images/components/wrapped/ChronoCardBg.png'

export function StationCard({
  station,
  color,
  tag_1_text,
  tag_2_text,
  tag_3_text,
  Station_link
}) {
  const classForDiv = 'M_Card ' + color
  const handleClick = () => {
    window.location.href = `${Station_link}`
  }
  return (
    <>
      <div className={classForDiv} onClick={handleClick}>
        <h3>{station}</h3>
        <div className="W_TagsCollection">
          {tag_1_text && (
            <div className="A_Tags secondary">
              <p className="mini">{tag_1_text}</p>
            </div>
          )}
          {tag_2_text && (
            <div className="A_Tags secondary">
              <p className="mini">{tag_2_text}</p>
            </div>
          )}
          {tag_3_text && (
            <div className="A_Tags secondary">
              <p className="mini">{tag_3_text}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export function ArticleCard({ text, bg_image, linking, size }) {
  const linkLong = linking
  const Card_size = `W_ArticleCard ${size}`
  return (
    <>
      <div
        className={Card_size}
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        {/* Добавить белый текст! */}
        <h2>{text}</h2>
        <Button text={'читать'} arrow={'up'} linking={linkLong} />
      </div>
    </>
  )
}

export function ChronoCard({ text, year, image_URL, isWhite }) {
  const actual_tag_class = `A_Tags ${isWhite}`
  return (
    <div
      className="W_ChronoCard"
      style={{ backgroundImage: `url(${BgChrono})` }}
    >
      <div className="Q_Arrow orange"></div>
      <h3>{text}</h3>
      <div
        className="W_ChronoCardImage"
        style={{ backgroundImage: `url(${image_URL})` }}
      >
        <div className={actual_tag_class}>
          <p className="mini">{year}</p>
        </div>
      </div>
    </div>
  )
}
export function StOfTheDay({ station }) {
  return (
    <div class="M_CardStationOfTheDay">
      <h2>Станция дня — {station}</h2>
    </div>
  )
}
