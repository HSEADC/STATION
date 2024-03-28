import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './javascript/navigation.jsx'
import Footer from './javascript/footer.jsx'

ReactDOM.createRoot(document.getElementById('menu')).render(<Navigation />)

ReactDOM.createRoot(document.getElementById('foot')).render(<Footer />)
let buttons = document.querySelectorAll('.A_MainButton')
let arrows = document.querySelectorAll('.Q_Arrow')

for (let i = 0; i < buttons.length + 2; i++) {
  buttons[i].addEventListener('mouseover', function () {
    handleMouseover(i)
  })

  buttons[i].addEventListener('mouseout', function () {
    handleMouseout(i)
  })
}

function handleMouseover(index) {
  arrows[index].classList.remove('orange_white')
}

function handleMouseout(index) {
  arrows[index].classList.add('orange_white')
}
