import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './javascript/navigation.jsx'
import Station_card from './javascript/card.jsx'
import Footer from './javascript/footer.jsx'

ReactDOM.createRoot(document.getElementById('menu')).render(<Navigation />)

ReactDOM.createRoot(document.getElementById('2_card_1')).render(
  <Station_card text={'Маяковская'} margin={0} />
)
ReactDOM.createRoot(document.getElementById('2_card_2')).render(
  <Station_card text={'Проспект мира'} margin={0} />
)
ReactDOM.createRoot(document.getElementById('foot')).render(<Footer />)
// Находим элемент div по его идентификатору
const myDiv = document.getElementById('2_card_1')

// Добавляем обработчик события клика
myDiv.addEventListener('click', redirectToPage)

// Функция перенаправления на другую страницу
function redirectToPage() {
  // Используем метод window.location для изменения адреса страницы
  window.location.href = './mayakovskay.html'
}
