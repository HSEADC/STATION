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
import IMG1 from './../../images/articles/news_pages/science_img01.png'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Menu activeTag1={''} activeTag2={''} activeTag3={''} />
    <ArticleHeading
      BGUrl={Heading}
      station={
        '🧠 Научные конференции в метро Москвы: подземные встречи для умников 🚇✨ '
      }
    />
    <ArticleChapter
      text={
        'Московское метро становится необычной площадкой для научных конференций, привлекая ученых со всего мира. Станции, такие как "Парк культуры", "Кропоткинская" и "ВДНХ", превращаются в залы для выступлений и обсуждений, создавая уникальную атмосферу.'
      }
    />
    <Q_Image width={10} height={40} margin={5} url={IMG1} />
    <ArticleChapter
      text={
        'Темы варьируются от урбанистики и транспортных технологий до экологии и космоса. Участвуют ведущие ученые, исследователи и студенты, что делает конференции динамичными и живыми. Главная цель – популяризация науки и поиск новых решений для актуальных проблем. Следите за афишами и присоединяйтесь к подземным научным встречам! 🧠🚇✨'
      }
    />
    <MaybeInterestingCardsArticles start_number={0} end_number={3} />
    <Footer />
  </StrictMode>
)
