import React, { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArticleChapter } from './../particles/text.jsx'
import { W_ImagesRow, Q_Image } from './../particles/image.jsx'

import IMG1 from './../../images/stations/bg_big_card.jpg'
import Heading from './../../images/stations/station_pages/bibliotekaLeninaHeading.png'

import { StationHeading } from '../particles/card.jsx'

import '../../stylesheets/main_css/Page.css'

import Menu from '../particles/menu.jsx'
import Footer from '../particles/footer.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Menu activeTag1={''} activeTag2={''} activeTag3={''} />
    <StationHeading
      BGUrl={Heading}
      station={'Библиотека им.Ленина'}
      line={'Сокольническая'}
    />
    <ArticleChapter
      heading={'Когда станция открылась?'}
      text={
        'Библиотека им.Ленина - станция первой очереди Московского метрополитена, открытая 15 мая 1935 году. Оформление станции посвящено Библиотеке им. Ленина (ныняшняя Российская государственная библиотека)'
      }
    />
    <Q_Image width={9} height={40} margin={5} url={IMG1} />
    <ArticleChapter
      heading={'История станции'}
      text={
        'Физически станция располагается прямо под Моховой улицей, что заметно усложнило процесс работы над ней. Так станция получила уникальную по тем времена конструкцию — односводчатую мелкого заложения. То есть для строительства станции не вырывали котлован, так как нельзя было перекрывать центральную улицу столицы, а работали под тонким слоем грунта, всего 3 метра от поверхности. Кроме того появилосбь еще и ограничение в ширину улицы, поэтому перед архитекторами и инженерами стояла сложная задача — сделать маленькую станцию — широкой и величественной.'
      }
    />
    <Q_Image width={12} height={40} margin={4} url={IMG1} />
    <ArticleChapter
      text={
        'Физически станция располагается прямо под Моховой улицей, что заметно усложнило процесс работы над ней. Так станция получила уникальную по тем времена конструкцию — односводчатую мелкого заложения. То есть для строительства станции не вырывали котлован, так как нельзя было перекрывать центральную улицу столицы, а работали под тонким слоем грунта, всего 3 метра от поверхности. Кроме того появилосбь еще и ограничение в ширину улицы, поэтому перед архитекторами и инженерами стояла сложная задача — сделать маленькую станцию — широкой и величественной.'
      }
    />
  </StrictMode>
)
