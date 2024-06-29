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
      station={'Нью лук и для салатовой ветки'}
      description={
        'Московский метрополитен готовится к масштабному обновлению: к 2030 году на Люблинско-Дмитровской линии будут ездить только новейшие поезда. Максим Ликсутов отметил, что замена составов начнется в 2027 году, сразу после завершения обновления поездов на Замоскворецкой линии.'
      }
    />
    <ArticleChapter
      text={
        'Сегодня на Люблинско-Дмитровской линии курсируют составы типа «Номерной». Многие из них прошли капитальный ремонт и полную замену салона. С 2011 года на линию поступили 10 поездов серии 81-717.6, в которых по сравнению с обычными «Номерными» заметно улучшен интерьер:'
      }
    />
    <ArticleChapter
      text={
        'Современные материалы в отделке салона, больше поручней для удобства пассажиров, принудительная вентиляция для комфортного климата, плавное открытие и закрытие дверей, две световые линии вместо одной.'
      }
    />
    <ArticleChapter
      text={
        'В 2018 году открылось новое электродепо «Лихоборы», оснащенное самым современным оборудованием для обслуживания, диагностики и ремонта поездов'
      }
    />
    <MaybeInterestingCardsArticles start_number={0} end_number={3} />
    <Footer />
  </StrictMode>
)
