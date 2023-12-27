import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './javascript/navigation.jsx'
import Main_button from './javascript/buttons.jsx'
import Station_card from './javascript/card.jsx'

ReactDOM.createRoot(document.getElementById('menu')).render(<Navigation />)

ReactDOM.createRoot(document.getElementById('2_card_1')).render(
  <Station_card text={'Маяковская'} margin={0} />
)
ReactDOM.createRoot(document.getElementById('2_card_2')).render(
  <Station_card text={'Проспект мира'} margin={0} />
)
