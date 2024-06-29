import React, { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArticleChapter, StationAccentLine } from './../particles/text.jsx'
import { W_ImagesRow, Q_Image } from './../particles/image.jsx'

import IMG1 from './../../images/stations/station_pages/rimskay_img01.png'
import IMG2 from './../../images/stations/station_pages/rimskay_img02.png'
import IMG3 from './../../images/stations/station_pages/rimskay_img03.png'
import IMG4 from './../../images/stations/station_pages/rimskay_img04.png'
import IMG5 from './../../images/stations/station_pages/rimskay_img05.png'
import IMG6 from './../../images/stations/station_pages/rimskay_img06.png'

import Heading from './../../images/stations/station_pages/rimskayHeading.png'
import Line from './../../images/stations/station_pages/rimskayLine.png'

import { StationHeading, MaybeInterestingCards } from '../particles/card.jsx'

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
      station={'Римская'}
      line={'Люблинско-Дмитровская'}
    />
    <ArticleChapter
      heading={'История появления'}
      text={
        'Станция Римская была открыта 28 декабря 1995 года в составе Люблинско-Дмитровской линии, став 152 станцией Московского метро. Физически располагается в Таганском районе. Темой станции стали “Римские достопримечательности”, а в разработке дизайна станции приняли участие  Джампаоло Имбриги и Андреа Куатрокки - итальянские архитекторы. Такой решение поддержало отношения Италии и Российской Федерации,  а также стало ответом на уже существующую в Милане станцию “Moscova”.'
      }
    />
    <Q_Image width={9} height={40} margin={5} url={IMG1} />
    <ArticleChapter
      heading={'Инженерное'}
      text={
        'Станция - колонная трехсводчатая глубоко заложения, по конструкции напоминает Маяковскую, но у нее отсутсвуют подплатформенные помещение в среднем зале и конструкция опирается на сплошной монолит. Однако, нововведение не прижилось и такая конструктивная особенность не встречается больше ни на одной станции московского метро. '
      }
    />
    <Q_Image width={12} height={40} margin={4} url={IMG2} />
    <StationAccentLine
      BGUrl={Line}
      heading={
        'В разработке дизайна станции принимали участия итальянские архитекторов, из-за чего станция стала натуральным порталом в Рим. '
      }
    />
    <ArticleChapter
      heading={'Искусство'}
      text={
        'В проектировании художественного оформления станции принимали участие итальянские архитекторы Джампаоло Имбриги  и Андреа Куатрокки. Для отделки пилонов и колонн использованы мраморы различных пород. Пилоны станции облицованы серым мрамором. Пол выложен чёрным, красным и серым гранитом. Во многом это отсылает к цветам оформления станции Moscova в Милане. '
      }
    />
    <Q_Image width={12} height={40} margin={4} url={IMG3} />
    <ArticleChapter
      text={
        'Основными акцентами на станции являются фигуры. Композиции “Фонтан” и 4 медальона, выполненные скульптором Л.Л.Берлин. Композиция с фонтаном и младенцами Ромулом и Ремом располагается при выходе в вестибюль( в сторону 2 выхода). Фонтан-водопад выполнен из черного гранита и работает ежедневно с открытия и до закрытия метрополитена. Скульптурная группа с основателями Рима выполнена из майолика, а если порассматривать колонну, то можно найти записи о перевозке композиции в Москву и подпись автора. 4 медальона размещаются в разных частях платформы'
      }
    />
    <Q_Image width={12} height={40} margin={4} url={IMG4} />
    <ArticleChapter
      text={
        'Вариация на тему “Мадонна с младенцем”. Располагается над переходом на станцию “Площадь Ильича”. Также выполнена из майолика, а на рамке написаны слова из молитвы Пресвятой Богородице на латинском языке. '
      }
    />
    <ArticleChapter
      text={
        '“Уста Истины”. Вольная интерпретация мраморной плиты располагаетс яна этой же стене, но с противоположной стороны. Лучше всего ее можно расмотреть при переходе с “Площади Ильича” на “Римскую”. По краям круглой окантовки также можно увидеть изречение на латинском языке. На русский оно переводится, как "Излишняя предосторожность никогда не повредит обществу'
      }
    />
    <ArticleChapter
      text={
        'Миниатюра с ангелами находится в конце перехода на “Площадь Ильича”'
      }
    />
    <ArticleChapter
      text={
        'Капитолийская волчица располагается над входом на станцию со стороны подземного вестибюля. Сюжет все также отсылает к дегенде об остнователях Рима. '
      }
    />
    <W_ImagesRow
      width_1={8}
      width_2={7}
      height={30}
      url_1={IMG5}
      url_2={IMG6}
    />
    <MaybeInterestingCards start_number={2} end_number={5} />
    <Footer />
  </StrictMode>
)
