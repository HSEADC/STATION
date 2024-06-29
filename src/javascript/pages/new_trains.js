import '../../stylesheets/main_css/Page.css'
import React, { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Menu from '../particles/menu.jsx'
import {
  MaybeInterestingCards,
  MaybeInterestingCardsArticles
} from '../particles/card.jsx'

import { ArticleHeading } from '../particles/card.jsx'
import { ArticleChapter } from '../particles/text.jsx'
import { Q_Image } from '../particles/image.jsx'
import Heading from './../../images/articles/news_pages/newtrainsHeading.png'
import IMG1 from './../../images/articles/news_pages/newtrains_img01.png'
import Footer from '../particles/footer.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Menu activeTag1={''} activeTag2={''} activeTag3={''} />
    <ArticleHeading
      BGUrl={Heading}
      station={'Новые поезда на Замоскворецкой'}
      description={'На замоскворецкой линии наконец-то станет тише.'}
    />
    <ArticleChapter
      heading={'Когда? Как?'}
      text={
        'Одна из самых старых веток метро Москвы наконец-то обзаведется обновками. Уже в начале 2024 года в тестовом режиме на ветке запустят новые поезда “Москва - 2020”, а к концу года планируется заменить 100% составов. '
      }
    />
    <Q_Image width={14} height={40} margin={4} url={IMG1} />
    <ArticleChapter
      text={
        'В новых вагонах изменится расположение USB-розеток, они появятся на поручнях для удобной зарядки стоя, двери останутся все такими же широкими, как в последних обновлениях составов на Калужско-Рижской, Кольцевой и Большой кольцевой линии.'
      }
    />
    <ArticleChapter
      text={
        'В электродепо «Сокол» Замоскворецкой линии начинает работу сервисный центр от производителя вагонов метро — «Метровагонмаша». Он будет обслуживать новые поезда по контракту жизненного цикла в течение всего срока их эксплуатации.'
      }
    />
    <MaybeInterestingCardsArticles start_number={0} end_number={3} />
    <Footer />
  </StrictMode>
)
