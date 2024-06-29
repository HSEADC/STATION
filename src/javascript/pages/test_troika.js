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
import IMG1 from './../../images/articles/news_pages/test_troika_img01.png'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Menu activeTag1={''} activeTag2={''} activeTag3={''} />
    <ArticleHeading
      BGUrl={Heading}
      station={'Больше никаких желтых терминалов '}
      description={'Ну, просто новость года!'}
    />
    <ArticleChapter
      text={
        'Теперь вы можете активировать онлайн-пополнение «Тройки» и карты москвича на самих турникетах метро и МЦК. Больше не нужно искать желтые терминалы. '
      }
    />
    <Q_Image width={10} height={40} margin={5} url={IMG1} />
    <ArticleChapter
      text={
        '«Сервис доступен для всех выпущенных «Троек» и карт москвича для обучающихся. Возможность активировать баланс карты на турникете — одна из самых долгожданных цифровых новинок. Сервис позволит экономить до 20 минут в месяц для 2 млн пассажиров. Мы продолжим совершенствовать билетную систему и делать ее еще удобнее по поручению Мэра Москвы Сергея Собянина», — отметил Максим Ликсутов. '
      }
    />
    <MaybeInterestingCardsArticles start_number={0} end_number={3} />
    <Footer />
  </StrictMode>
)
