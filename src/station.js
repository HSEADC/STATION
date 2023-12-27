import './station.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './javascript/navigation.jsx'
import filterCards from './javascript/filter.jsx'

ReactDOM.createRoot(document.getElementById('menu')).render(<Navigation />)

// Путь к вашему файлу

// Ваш HTML
document.getElementById('filter_1').onclick = function () {
  filterCards('сокольническая')
}
