import React from 'react'
import '../../stylesheets/main_css/CategoryStations.css'
import { useState } from 'react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Menu from '../particles/menu.jsx'
import { StOfTheDay } from '../particles/card.jsx'

import { SectionHeading } from '../particles/text.jsx'
import { Q_Image, W_ImagesRow } from '../particles/image.jsx'
import Footer from '../particles/footer.jsx'
import StationList from '../particles/StationsCataloge.jsx'
import StOfTheDay_BG from './../../images/stations/StationOfTheDay_bg.png'
import ArticleCard_BG from './../../images/stations/bg_big_card.jpg'

function FullPage() {
  const [typeOfFilter, setTypeOfFilter] = useState(undefined)
  const [activeFilter, setActiveFilter] = useState('')

  function handleFilterClick(filter) {
    if (typeOfFilter === filter) {
      setTypeOfFilter(undefined)
      setActiveFilter('')
    } else {
      setTypeOfFilter(filter)
      setActiveFilter(filter)
    }
  }

  return (
    <div>
      <div className="W_PageTitleName">
        <SectionHeading heading={'Станции'} id="Station" />
      </div>
      <div>
        <StOfTheDay station={'Люблино'} BGUrl={StOfTheDay_BG} />
        <div className="M_FiltersPoints">
          <div className="M_FiltersPoints_inside" id="category_filter_scroll">
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'sokol' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--sokol)' }}
              onClick={() => handleFilterClick('sokol')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'zamos' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--zamos)' }}
              onClick={() => handleFilterClick('zamos')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'arbat' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--arbat)' }}
              onClick={() => handleFilterClick('arbat')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'filev' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--filev)' }}
              onClick={() => handleFilterClick('filev')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'kolic' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--kolic)' }}
              onClick={() => handleFilterClick('kolic')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'kalug' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--kalug)' }}
              onClick={() => handleFilterClick('kalug')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'tagan' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--tagan)' }}
              onClick={() => handleFilterClick('tagan')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'solnc' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--solnc)' }}
              onClick={() => handleFilterClick('solnc')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'serpy' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--serpy)' }}
              onClick={() => handleFilterClick('serpy')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'lubli' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--lubli)' }}
              onClick={() => handleFilterClick('lubli')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'BKL' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--BKL)' }}
              onClick={() => handleFilterClick('BKL')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'butov' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--butov)' }}
              onClick={() => handleFilterClick('butov')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'nekra' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--nekra)' }}
              onClick={() => handleFilterClick('nekra')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'birul' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--birul)' }}
              onClick={() => handleFilterClick('birul')}
            ></div>
            <div
              className={`Q_FilterPoint ${
                activeFilter === 'troick' ? 'active' : ''
              }`}
              style={{ backgroundColor: 'var(--troick)' }}
              onClick={() => handleFilterClick('troick')}
            ></div>
          </div>
        </div>

        <StationList
          ArticleCard_text={'Пыхтино — метро в аэропорт'}
          ArticleCard_bg={ArticleCard_BG}
          type={typeOfFilter}
        />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Menu activeTag1={''} activeTag2={'Active'} activeTag3={''} />
    <FullPage />
    <Footer />
  </StrictMode>
)
