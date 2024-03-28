import './station.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './javascript/navigation.jsx'
import Footer from './javascript/footer.jsx'

ReactDOM.createRoot(document.getElementById('menu')).render(<Navigation />)

ReactDOM.createRoot(document.getElementById('foot')).render(<Footer />)

let button = document.querySelectorAll('.A_MainButton')
let arrow = document.querySelectorAll('.Q_Arrow')

for (var i = 0; i < button.length; i++) {
  button.addEventListener('mouseover', function () {
    arrow.classList.remove('orange_white')
  })
  button.addEventListener('mouseout', function () {
    arrow.classList.add('orange_white')
  })
}
