import React, { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../../stylesheets/main_css/CategoryArticles.css'

import Menu from '../particles/menu.jsx'
import { ArticlesList } from '../particles/ArticlesCataloge.jsx'
import { SectionHeading } from '../particles/text.jsx'
import { ArticleCard } from '../particles/card.jsx'
import Footer from '../particles/footer.jsx'
import ArticleCard_BG from './../../images/articles/ArticleCard_Bg.jpg'
import NewsCard_BG from './../../images/articles/NewsCard_Bg.png'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

function FullPage() {
  const [showArticles, setShowArticles] = useState(true)
  const [filter, setFilter] = useState(undefined) // Инициализируем undefined
  const [activeFilter, setActiveFilter] = useState('') // Состояние для активного фильтра

  function handleCatNewsClick() {
    setShowArticles(false)
    setFilter(undefined) // Сброс фильтра при переключении на новости
  }

  function handleCatArticlesClick() {
    setShowArticles(true)
    setFilter(undefined) // Сброс фильтра при переключении на статьи
  }

  function handleFilterClick(newFilter) {
    if (filter === newFilter) {
      setFilter(undefined)
      setActiveFilter('')
    } else {
      setFilter(newFilter)
      setActiveFilter(newFilter)
    }
  }

  return (
    <div>
      {showArticles && (
        <div>
          <div className="W_PageTitleName">
            <SectionHeading heading={'Статьи'} id="Station" />
            <SectionHeading
              heading={'Новости'}
              id="Map"
              onClick={() => handleCatNewsClick()}
              unactive={1}
            />
          </div>
          <div className="M_Filters stations" id="category_filter_scroll">
            <ul>
              <li
                className={activeFilter === 'arch' ? 'active' : ''}
                onClick={() => handleFilterClick('arch')}
              >
                архитектору
              </li>
              <li
                className={activeFilter === 'hist' ? 'active' : ''}
                onClick={() => handleFilterClick('hist')}
              >
                история
              </li>
              <li
                className={activeFilter === 'art' ? 'active' : ''}
                onClick={() => handleFilterClick('art')}
              >
                искусство
              </li>
              <li
                className={activeFilter === 'tech' ? 'active' : ''}
                onClick={() => handleFilterClick('tech')}
              >
                технологии
              </li>
              <li
                className={activeFilter === 'info' ? 'active' : ''}
                onClick={() => handleFilterClick('info')}
              >
                инфоструктура
              </li>
              <li
                className={activeFilter === 'evnt' ? 'active' : ''}
                onClick={() => handleFilterClick('evnt')}
              >
                мероприятия
              </li>
              <li
                className={activeFilter === 'life' ? 'active' : ''}
                onClick={() => handleFilterClick('life')}
              >
                лайфхаки
              </li>
            </ul>
          </div>
          <ArticleCard
            size={'large'}
            text={'Лайфхаки при пересадках, сокращающие время перехода'}
            bg_image={ArticleCard_BG}
            linking={'./peresadki.html'}
          />
          <ArticlesList type={'article'} filter={filter} />
        </div>
      )}
      {!showArticles && (
        <div>
          <div className="W_PageTitleName">
            <SectionHeading
              heading={'Статьи'}
              id="Station"
              unactive={1}
              onClick={() => handleCatArticlesClick()}
            />
            <SectionHeading heading={'Новости'} id="Map" />
          </div>
          <div className="M_Filters stations" id="category_filter_scroll">
            <ul>
              <li
                className={activeFilter === 'arch' ? 'active' : ''}
                onClick={() => handleFilterClick('arch')}
              >
                архитектору
              </li>
              <li
                className={activeFilter === 'hist' ? 'active' : ''}
                onClick={() => handleFilterClick('hist')}
              >
                история
              </li>
              <li
                className={activeFilter === 'art' ? 'active' : ''}
                onClick={() => handleFilterClick('art')}
              >
                искусство
              </li>
              <li
                className={activeFilter === 'tech' ? 'active' : ''}
                onClick={() => handleFilterClick('tech')}
              >
                технологии
              </li>
              <li
                className={activeFilter === 'info' ? 'active' : ''}
                onClick={() => handleFilterClick('info')}
              >
                инфоструктура
              </li>
              <li
                className={activeFilter === 'evnt' ? 'active' : ''}
                onClick={() => handleFilterClick('evnt')}
              >
                мероприятия
              </li>
              <li
                className={activeFilter === 'life' ? 'active' : ''}
                onClick={() => handleFilterClick('life')}
              >
                лайфхаки
              </li>
            </ul>
          </div>
          <ArticleCard
            size={'large'}
            text={'Новые поезда на Замоскворецкой'}
            bg_image={NewsCard_BG}
            linking={''}
            text_color={'white'}
          />
          <ArticlesList type={'news'} filter={filter} />
        </div>
      )}
    </div>
  )
}

root.render(
  <StrictMode>
    <Menu activeTag1={''} activeTag2={''} activeTag3={'Active'} />
    <FullPage />
    <Footer />
  </StrictMode>
)
