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
      station={
        '🎬 Метро Москвы на большом экране: киношные приключения под землей 🚇🍿 '
      }
      description={
        'Московское метро – не просто транспортная система, а настоящая кинозвезда! Оно уже давно стало излюбленным местом для съемок фильмов. Давай вспомним несколько классных примеров:'
      }
    />
    <ArticleChapter
      heading={'"Метро" (2013)'}
      text={
        'Этот фильм наверняка попадался тебе на глаза. Захватывающий сюжет о катастрофе, где один из туннелей затопило, и пассажирам приходится бороться за свою жизнь. Мощные спецэффекты и напряженная атмосфера – на грани реальности!'
      }
    />
    <ArticleChapter
      heading={'"Ночной дозор" (2004)'}
      text={
        'Культовая российская картина, где сцены в метро играют важную роль. Мрачные коридоры и загадочные персонажи создают атмосферу мистики и напряжения.'
      }
    />
    <ArticleChapter
      heading={'"Время первых" (2017)'}
      text={
        'Хотя фильм в основном о космосе, в нем есть эпизоды, связанные с метро. Московское метро здесь – символ прогресса и силы, как и сами космонавты.'
      }
    />
    <ArticleChapter
      heading={'"Анна Каренина" (2012)'}
      text={
        'Современная версия классического романа. В фильме использованы станции московского метро, чтобы передать атмосферу богатства и элегантности.'
      }
    />
    <ArticleChapter
      heading={'"Дневной дозор" (2006)'}
      text={
        'Продолжение "Ночного дозора". Опять-таки, сцены в метро здесь играют важную роль в создании напряженной и мрачной атмосферы.'
      }
    />
    <ArticleChapter
      text={
        'Московское метро – это больше, чем просто транспорт. Его уникальная архитектура и атмосфера делают его идеальным местом для съемок. От напряженных триллеров до мистических историй, метро Москвы помогает создавать незабываемые кадры и сцены, которые надолго остаются в памяти зрителей.'
      }
    />
    <ArticleChapter
      text={
        'Так что в следующий раз, когда будешь смотреть фильм, обрати внимание на знакомые станции и туннели. Может быть, ты увидишь московское метро в совершенно новом свете! 🎥✨'
      }
    />
    <MaybeInterestingCardsArticles start_number={0} end_number={3} />
    <Footer />
  </StrictMode>
)
