import React from 'react'

import '../../stylesheets/components/quarks.scss'
import '../../stylesheets/components/atoms.scss'
import '../../stylesheets/components/molecules.scss'
import '../../stylesheets/components/wrappers.scss'
import '../../stylesheets/vars.scss'
import { articles, stations } from './data.jsx'
import { Button, BackButton } from './button.jsx'
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
        </div>
      </div>
    </>
  )
}
export function ArticleCard({ text, bg_image, linking, size, text_color }) {
  const linkLong = linking
  const Card_size = `W_ArticleCard ${size}`
  return (
    <>
      <div
        className={Card_size}
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <h2 style={{ color: `var(--${text_color})` }}>{text}</h2>
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
export function StOfTheDay({ station, BGUrl }) {
  return (
    <div
      class="M_CardStationOfTheDay"
      style={{ backgroundImage: `url(${BGUrl})` }}
    >
      <h2>Станция дня — {station}</h2>
    </div>
  )
}

export function StationHeading({ station, BGUrl, line }) {
  return (
    <div className="O_StationHeading">
      <div
        className="W_StationHeadingImage"
        style={{ backgroundImage: `url(${BGUrl})` }}
      >
        <BackButton text={'назад'} color={'white'} />
      </div>
      <h1 style={{ color: `var(--white)` }}>{station}</h1>
      <div className="A_Tags white">{line}</div>
    </div>
  )
}
export function ArticleHeading({ station, BGUrl, description }) {
  return (
    <div className="O_ArticleHeading">
      <div
        className="W_StationHeadingImage"
        style={{ backgroundImage: `url(${BGUrl})` }}
      >
        <BackButton text={'назад'} color={'black'} />
      </div>
      <h2 style={{ color: `var(--black)` }}>{station}</h2>
      <p>{description}</p>
    </div>
  )
}
export function MaybeInterestingCards({ start_number, end_number }) {
  const listItems = stations
    .filter((station) => station.id >= start_number && station.id <= end_number)
    .map((station) => (
      <StationCard
        key={station.id} // добавление ключа для каждого элемента
        station={station.name}
        color={station.color}
        tag_1_text={station.line_1}
        Station_link={station.link}
      />
    ))
  return (
    <div className="W_AlsoLook">
      <h2>Вот о чем еще можно почитать</h2>
      <div className="W_CardsCollection">{listItems}</div>
    </div>
  )
}
export function MaybeInterestingCardsArticles({ start_number, end_number }) {
  const listItems = articles
    .filter((station) => station.id >= start_number && station.id <= end_number)
    .map((station) => (
      <StationCard
        key={station.id} // добавление ключа для каждого элемента
        station={station.name}
        color={station.color}
        tag_1_text={station.line_1}
        Station_link={station.link}
      />
    ))
  return (
    <div className="W_AlsoLook">
      <h2>Вот о чем еще можно почитать</h2>
      <div className="W_CardsCollection">{listItems}</div>
    </div>
  )
}
