import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../stylesheets/main_css/CategoryChrono.css'
import { useState } from 'react'
import { chronology } from '../particles/data.jsx'
import { SectionHeading } from '../particles/text.jsx'
import Menu from '../particles/menu.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

function Page() {
  const [displayDate, setDisplayDate] = useState('2023')
  const [displayHeading, setDisplayHeading] = useState('Метро Москвы')
  const [displayText1, setDisplayText1] = useState('Текст по умолчанию')
  const [displayText2, setDisplayText2] = useState('Текст по умолчанию')
  const [displayText3, setDisplayText3] = useState('Текст по умолчанию')

  const handleDivMouseEnter = (number) => {
    setDisplayDate(chronology[number].date)
    setDisplayHeading(chronology[number].heading)
    setDisplayText1(chronology[number].text_1)
    setDisplayText2(chronology[number].text_2)
    setDisplayText3(chronology[number].text_3)
  }

  const handleMouseLeave = () => {
    setDisplayDate('2023')
    setDisplayHeading('Метро Москвы')
    setDisplayText1('Текст по умолчанию')
    setDisplayText2('Текст по умолчанию')
    setDisplayText3('Текст по умолчанию')
  }
  return (
    <div class="O_Chrono">
      <div class="W_ChronoPointsCollection">
        <div class="W_ChronoLine century">
          <p>20 век</p>
          <p>31-40</p>
          <div class="W_OneLinePoints">
            <div
              class="Q_Point"
              onMouseEnter={() => handleDivMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave()}
            ></div>
            <div
              class="Q_Point"
              onMouseEnter={() => handleDivMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave()}
            ></div>
            <div
              class="Q_Point"
              onMouseEnter={() => handleDivMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave()}
            ></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
          </div>
        </div>
        <div class="W_ChronoLine">
          <p>41-50</p>
          <div class="W_OneLinePoints">
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
          </div>
        </div>
        <div class="W_ChronoLine">
          <p>51-60</p>
          <div class="W_OneLinePoints">
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
          </div>
        </div>
        <div class="W_ChronoLine">
          <p>61-70</p>
          <div class="W_OneLinePoints">
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
          </div>
        </div>
        <div class="W_ChronoLine">
          <p>71-80</p>
          <div class="W_OneLinePoints">
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
          </div>
        </div>
        <div class="W_ChronoLine">
          <p>81-90</p>
          <div class="W_OneLinePoints">
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
          </div>
        </div>
        <div class="W_ChronoLine">
          <p>91-00</p>
          <div class="W_OneLinePoints">
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
          </div>
        </div>
        <div class="W_ChronoLine century">
          <p>21 век</p>
          <p>01-10</p>
          <div class="W_OneLinePoints">
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
          </div>
        </div>
        <div class="W_ChronoLine">
          <p>11-20</p>
          <div class="W_OneLinePoints">
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
          </div>
        </div>
        <div class="W_ChronoLine">
          <p>21-24</p>
          <div class="W_OneLinePoints">
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
            <div class="Q_Point"></div>
          </div>
        </div>
      </div>
      <div class="W_ChronoContent">
        <p>Посмотрите, что было в определенный год</p>
        <div class="W_ChronoContentTitle">
          <h3 id="ChronoYear">{displayDate}</h3>
          <h3 id="ChronoTitle">{displayHeading}</h3>
        </div>
        <div class="A_ArticleBody column">
          <p>{displayText1}</p>
          <p>{displayText2}</p>
          <p>{displayText3}</p>
        </div>
      </div>
    </div>
  )
}

root.render(
  <StrictMode>
    <Menu />
    <SectionHeading heading={'Хронология'} id="Station" />
    <Page />
  </StrictMode>
)
