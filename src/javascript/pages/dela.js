import '../../stylesheets/main_css/Page.css'
import React, { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Menu from '../particles/menu.jsx'
import {
  MaybeInterestingCards,
  MaybeInterestingCardsArticles
} from '../particles/card.jsx'

import Heading from './../../images/articles/articles_pages/peresadkiHeading.png'
import { ArticleHeading } from '../particles/card.jsx'
import { ArticleChapter } from '../particles/text.jsx'
import { Q_Image } from '../particles/image.jsx'
import Footer from '../particles/footer.jsx'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Menu activeTag1={''} activeTag2={''} activeTag3={''} />
    <ArticleHeading
      BGUrl={Heading}
      station={'Закрытие участка «Деловой центр — Шелепиха — Хорошёвская»'}
      description={
        'С 22 июня 2024 года временно закрылся участок «Деловой центр — Шелепиха — Хорошёвская» БКЛ для интеграции в Рублёво-Архангельскую линию. Откроется он уже в составе новой линии.'
      }
    />
    <ArticleChapter
      text={
        'Не переживайте! «Москва-Сити» и «Деловой центр» — крупнейшие транспортные хабы, поэтому у вас будет много вариантов для поездок: через филевскаую линию, солнцевскую линию, МЦД-1 и МЦД-4, а также регулярные маршруты наземного транспорта, проходящие через «Шелепиху», станут ходить чаще. 🚌✨'
      }
    />
    <ArticleChapter
      text={
        'Все изменения и ограничения сразу отображаются на карте в приложении «Метро Москвы», чтобы вы могли лучше спланировать новые варианты маршрута! 🗺📱 Так что CHECK IT, чтобы быть в курсе последних обновлений и удобно ориентироваться 🚇✨'
      }
    />
    <MaybeInterestingCardsArticles start_number={0} end_number={3} />
    <Footer />
  </StrictMode>
)
