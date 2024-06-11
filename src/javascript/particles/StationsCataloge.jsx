import React from 'react'
import { stations } from './data.jsx'
import { ArticleCard, StationCard } from './card.jsx'

function StationList({ ArticleCard_text, ArticleCard_link }) {
  const listItems = stations
    .filter((station) => station.id >= 2)
    .map((station) => (
      <StationCard
        station={station.name}
        color={station.color}
        tag_1_text={station.line_1}
        tag_2_text={station.line_2}
        tag_3_text={station.line_3}
        Station_link={station.link}
      />
    ))

  return (
    <div className="W_CardsCollection">
      <StationCard
        station={Object.values(stations)[0].name}
        color={Object.values(stations)[0].color}
        tag_1_text={Object.values(stations)[0].line_1}
        tag_2_text={Object.values(stations)[0].line_2}
        tag_3_text={Object.values(stations)[0].line_3}
        Station_link={Object.values(stations)[0].link}
      />
      <StationCard
        station={Object.values(stations)[1].name}
        color={Object.values(stations)[1].color}
        tag_1_text={Object.values(stations)[1].line_1}
        tag_2_text={Object.values(stations)[1].line_2}
        tag_3_text={Object.values(stations)[1].line_3}
        Station_link={Object.values(stations)[1].link}
      />
      <ArticleCard
        text={ArticleCard_text}
        size={'medium'}
        linking={ArticleCard_link}
      />
      {listItems}
    </div>
  )
}
export default StationList
