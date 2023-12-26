import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './javascript/navigation.jsx'
import Main_button from './javascript/buttons.jsx'
import Station_card from './javascript/card.jsx'

const menuRootInstance = ReactDOM.createRoot(document.getElementById('menu'))

const button1RootInstance = ReactDOM.createRoot(
  document.getElementById('button_1')
)
const card1in2RootInstance = ReactDOM.createRoot(
  document.getElementById('2_card_1')
)

menuRootInstance.render(<Navigation />)
button1RootInstance.render(<Main_button text={'читать'} />)
card1in2RootInstance.render(<Station_card text={'Павелецкая'} margin={0} />)
