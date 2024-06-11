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
            <SectionHeading
              heading={'карта'}
              unactive={1}
              id="Map"
              onClick={() => handleCatStationsClick()}
            />
          </div>
          <div>
            <div class="M_Filters" id="category_filter_scroll">
              <ul>
                <li class="active">все</li>
                <li>сокольническая</li>
                <li>замоскворецкая</li>
                <li>арбатско-покровская</li>
                <li>филевская</li>
                <li>кольцевая</li>
                <li>калужско-рижская</li>
                <li>таганско-краснопресненская</li>
                <li>калининская</li>
                <li>солнцевская</li>
                <li>серпуховско-тимирязевская</li>
                <li>люблинско-дмитровская</li>
                <li>большая кольцевая</li>
                <li>бутовская</li>
                <li>некрасовская</li>
              </ul>
            </div>
            <StOfTheDay station={'Люблино'} />
            <StationList ArticleCard_text={'Пыхтино — метро в аэропорт'} />
          </div>
        </>
      )}
      {!showStations && (
        <div>
          <div className="W_PageTitleName">
            <SectionHeading
              heading={'Станции'}
              id="Station"
              onClick={() => handleCatMapClick()}
              unactive={1}
            />
            <SectionHeading heading={'карта'} id="Map" />
          </div>
          ehf ehf{' '}
        </div>
      )}
    </div>
  )
}
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Menu />
    <FullPage />
    <Footer />
  </StrictMode>
)
