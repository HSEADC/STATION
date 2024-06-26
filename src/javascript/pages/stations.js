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

function FullPage() {
  const [showStations, setShowStations] = useState(true)

  function handleCatStationsClick() {
    setShowStations(false)
  }
  function handleCatMapClick() {
    setShowStations(true)
  }

  return (
    <div>
      {showStations && (
        <>
          <div className="W_PageTitleName">
            <SectionHeading heading={'Станции'} id="Station" />
          </div>
          <div>
            <div class="M_FiltersPoints">
              <div class="M_FiltersPoints_inside" id="category_filter_scroll">
                <p className="active">все</p>
                <div
                  className="Q_FilterPoint active"
                  style={{ backgroundColor: 'var(--sokol)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--zamos)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--arbat)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--filev)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--kolic)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--kalug)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--tagan)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--solnc)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--serpy)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--lubli)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--BKL)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--butov)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--nekra)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--birul)' }}
                ></div>
                <div
                  className="Q_FilterPoint"
                  style={{ backgroundColor: 'var(--troick)' }}
                ></div>
              </div>
            </div>
            <StOfTheDay station={'Люблино'} />
            <StationList ArticleCard_text={'Пыхтино — метро в аэропорт'} />
          </div>
        </>
      )}
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
