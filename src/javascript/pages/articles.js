import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'

import '../../stylesheets/main_css/CategoryArticles.css'

import Menu from '../particles/menu.jsx'
import { ArticlesList } from '../particles/ArticlesCataloge.jsx'
import { SectionHeading } from '../particles/text.jsx'
import { ArticleCard } from '../particles/card.jsx'
import Footer from '../particles/footer.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
function FullPage() {
  const [showArticles, setShowArticles] = useState(true)

  function handleCatNewsClick() {
    setShowArticles(false)
  }
  function handleCatArticlesClick() {
    setShowArticles(true)
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
          <div class="M_Filters stations" id="category_filter_scroll">
            <ul>
              <li class="active">все</li>
              <li>архитектору</li>
              <li>история</li>
              <li>искусство</li>
              <li>технологии</li>
              <li>инфоструктура</li>
              <li>мероприятия</li>
              <li>лайфхаки</li>
            </ul>
          </div>
          <ArticleCard
            size={'large'}
            text={'Лайфхаки при пересадках, сокращающие время перехода'}
            bg_image={''}
            linking={''}
          />
          <ArticlesList type={'article'} />
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
          <div class="M_Filters stations" id="category_filter_scroll">
            <ul>
              <li class="active">все</li>
              <li>архитектору</li>
              <li>история</li>
              <li>искусство</li>
              <li>технологии</li>
              <li>инфоструктура</li>
              <li>мероприятия</li>
              <li>лайфхаки</li>
            </ul>
          </div>
          <ArticleCard
            size={'large'}
            text={'Новые поезда на Замоскворецкой'}
            bg_image={''}
            linking={''}
          />
          <ArticlesList type={'news'} />
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
