import React from 'react'

import { useState } from 'react'

import { chronology } from './data.jsx'

function TextChangingComponent() {
  const [displayDate, setDisplayDate] = useState('Текст по умолчанию....')
  const [displayHeading, setDisplayHeading] = useState('Текст по умолчанию')
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

  // const handleMouseLeave = () => {
  //   setDisplayText1('Текст по умолчанию')
  // }

  return (
    <div>
      <div
        onMouseEnter={() => handleDivMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        Первый div
      </div>
      <div
        onMouseEnter={() => handleDivMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        Второй div
      </div>
      <div
        onMouseEnter={() => handleDivMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        Третий div
      </div>
      <div>
        <p>{displayDate}</p>
        <p>{displayHeading}</p>
        <p>{displayText1}</p>
        <p>{displayText2}</p>
        <p>{displayText3}</p>
      </div>
    </div>
  )
}

export default TextChangingComponent
