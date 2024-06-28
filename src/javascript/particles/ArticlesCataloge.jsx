import React from 'react'

import { StationCard } from './card.jsx'
import { articles } from './data.jsx'
import { SectionHeading } from './text.jsx'

export function ArticlesList({ type, filter }) {
  const listItems = articles
    .filter(
      (article) =>
        article.type === type &&
        (filter !== undefined ? article.color === filter : true)
    )
    .map((article) => (
      <StationCard
        key={article.id} // добавление ключа для каждого элемента
        station={article.name}
        color={article.color}
        tag_1_text={article.line_1}
        tag_2_text={article.line_2}
        tag_3_text={article.line_3}
        Station_link={article.link}
      />
    ))

  return <div className="W_CardsCollection">{listItems}</div>
}
