import React from 'react'
import { stations } from './data.jsx'
import { ArticleCard, StationCard } from './card.jsx'
import '../../stylesheets/adaptives/adaptive.scss'
function StationList({
  ArticleCard_text,
  ArticleCard_link,
  ArticleCard_bg,
  type
}) {
  const listItems = stations
    .filter((station) => (type !== undefined ? station.color === type : true))
    .map((station) => (
      <StationCard
        station={station.name}
        color={station.color}
        tag_1_text={station.line_1}
        Station_link={station.link}
        key={station.id}
      />
    ))

  return (
    <div className="W_CardsCollection">
      <ArticleCard
        text={ArticleCard_text}
        size={'medium'}
        linking={ArticleCard_link}
        bg_image={ArticleCard_bg}
      />
      {listItems}
    </div>
  )
}
export default StationList
