import React, { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArticleChapter, StationAccentLine } from './../particles/text.jsx'
import { W_ImagesRow, Q_Image } from './../particles/image.jsx'

import IMG1 from './../../images/stations/station_pages/pychtino_img01.png'
import IMG2 from './../../images/stations/station_pages/pychtino_img02.png'
import IMG3 from './../../images/stations/station_pages/pychtino_img03.png'
import IMG4 from './../../images/stations/station_pages/pychtino_img04.png'
import IMG5 from './../../images/stations/station_pages/pychtino_img05.png'
import IMG6 from './../../images/stations/station_pages/pychtino_img06.png'
import Heading from './../../images/stations/station_pages/pychtinoHeading.png'
import Line from './../../images/stations/station_pages/pychtinoLine.png'

import { StationHeading, MaybeInterestingCards } from '../particles/card.jsx'

import '../../stylesheets/main_css/Page.css'

import Menu from '../particles/menu.jsx'
import Footer from '../particles/footer.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Menu activeTag1={''} activeTag2={''} activeTag3={''} />
    <StationHeading BGUrl={Heading} station={'Пыхтино'} line={'Калининская'} />
    <ArticleChapter
      heading={'Когда станция открылась?'}
      text={
        'Вторая полуподземная станция московского метрополитена, открытая в 2023 году в составе Солнцевской линии. Тематика станции — авиация, что можно очень четко понять из расположения станции рядом с аэропортом Внуково, а также модели самолета ТУ-144, находящимся над эскалаторной линией.'
      }
    />
    <Q_Image width={9} height={40} margin={5} url={IMG1} />
    <ArticleChapter
      heading={'История станции'}
      text={
        'Строительство метро до аэропоорта Внуково планировалось еще с 2015 года, предположительной датой открытия был 2025, но получилось завершить проект на 2 года раньше. '
      }
    />
    <Q_Image width={12} height={40} margin={4} url={IMG2} />
    <StationAccentLine
      BGUrl={Line}
      heading={'Станция названа в честь ближайшей к ней деревне Пыхтино'}
    />
    <ArticleChapter
      heading={'Инженерное'}
      text={
        'У станции довольно уникальное строение — полуподземное. В Москве такой тип станции встречается также на станции Мичуринский проспект. Такое строение станции обусловлено резким перепадом высот в районе ее расположения , поэтому с одной стороны платформы находится стена и обычный метрошный тоннель, а с другой метромост и панорамное остекление с видом на город. '
      }
    />
    <W_ImagesRow
      width_1={8}
      width_2={7}
      height={30}
      url_1={IMG3}
      url_2={IMG4}
    />
    <ArticleChapter
      heading={'Искусство'}
      text={
        'У станции довольно уникальное строение — полуподземное. В Москве такой тип станции встречается также на станции Мичуринский проспект. Такое строение станции обусловлено резким перепадом высот в районе ее расположения , поэтому с одной стороны платформы находится стена и обычный метрошный тоннель, а с другой метромост и панорамное остекление с видом на город. '
      }
    />
    <ArticleChapter
      text={
        'Изюминкой станции, конечно, является полноразмерная модель пассажирского сверхзвукового самолета Ту-144. Он висит над эскалаторной линией 1 выхода и прекрасно вписывается в симметричный дизайн станции.'
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
