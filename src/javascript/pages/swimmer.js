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
      station={'Что такое плывуны и чем они опасны для метро? '}
      description={
        '💡 Вопрос к знатокам метрополитена: что такое плывуны и почему они могут быть проблемой для метро? 🚇🌊'
      }
    />
    <ArticleChapter
      heading={'"Метро" (2013)'}
      text={
        'Плывуны – это такие участки земли, которые насыщены водой до такой степени, что превращаются в неустойчивую кашу. Представь себе гигантское болото, только под землёй! 🌿💦 Они могут быть очень коварными для строительства и эксплуатации метро. Почему это проблема? 🤔'
      }
    />
    <ArticleChapter
      heading={'Потоп и провал:'}
      text={
        'Плывуны могут вызвать внезапные затопления или даже провалы грунта. Представь, что туннель начинает буквально "плыть" – не самая приятная картина!'
      }
    />
    <ArticleChapter
      heading={'Сложности в строительстве:'}
      text={
        'Возведение тоннелей через плывуны требует специальных технологий и материалов. Это дольше, дороже и сложнее, чем обычные земляные работы.'
      }
    />
    <ArticleChapter
      heading={'"Анна Каренина" (2012)'}
      text={
        'Современная версия классического романа. В фильме использованы станции московского метро, чтобы передать атмосферу богатства и элегантности.'
      }
    />
    <ArticleChapter
      heading={'Поддержание стабильности:'}
      text={
        'Уже построенные тоннели и станции могут подвергаться дополнительным рискам из-за движения и деформации грунта. Это требует постоянного мониторинга и возможных ремонтных работ.'
      }
    />
    <ArticleChapter
      text={
        'Но не стоит паниковать! 🚧 Московский метрополитен активно работает над решением этих проблем. Специалисты используют современные технологии и материалы, чтобы защитить тоннели и станции от плывунов.'
      }
    />
    <ArticleChapter
      text={
        'Так что, если ты услышишь о плывунах, знай: это не просто жуткая история для городских легенд, а реальная инженерная задача, которую успешно решают профессионалы. 💪🔧'
      }
    />
    <MaybeInterestingCardsArticles start_number={0} end_number={3} />
    <Footer />
  </StrictMode>
)
