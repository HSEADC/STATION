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
      station={'🌸 Москвичи выбирают ароматы для новых веток метро Москвы 🚇✨'}
      description={
        'Московский метрополитен вводит инновацию: теперь пассажиры смогут выбирать ароматы для новых веток метро! Этот проект направлен на улучшение комфорта и создания приятной атмосферы в подземке. На выбор предлагаются несколько ароматов, каждый из которых создаст особое настроение.'
      }
    />
    <ArticleChapter
      heading={'Голосование'}
      text={
        'Жители Москвы активно участвуют в голосовании, проходящем в приложении "Метро Москвы". Пассажиры могут выбрать из нескольких вариантов, таких как: свежесть леса, цветочный букет, цитрусовая свежесть, морской бриз, легкая лаванда. '
      }
    />
    <ArticleChapter
      heading={'Результаты'}
      text={
        'Итоги голосования будут объявлены в конце месяца, и самые популярные ароматы начнут использоваться на новых станциях уже в следующем году. Это не только сделает поездки более приятными, но и поможет создать уникальную атмосферу на каждой линии.'
      }
    />
    <ArticleChapter
      heading={'Технология '}
      text={
        'Для внедрения ароматов используются современные системы вентиляции и ароматизации, которые обеспечат равномерное и ненавязчивое распространение запахов. Особое внимание уделяется безопасности и комфорту пассажиров. '
      }
    />
    <ArticleChapter
      text={
        'Так что не упустите возможность повлиять на будущее метро и проголосуйте за любимый аромат! Сделаем наши поездки еще более приятными и комфортными вместе! 🌸🚇✨'
      }
    />

    <MaybeInterestingCardsArticles start_number={0} end_number={3} />
    <Footer />
  </StrictMode>
)
