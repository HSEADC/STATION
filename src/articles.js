import './articles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './javascript/navigation.jsx'
import Footer from './javascript/footer.jsx'

ReactDOM.createRoot(document.getElementById('menu')).render(<Navigation />)

ReactDOM.createRoot(document.getElementById('foot')).render(<Footer />)

let NewsElement = document.querySelector('.O_News')

let ArtElement = document.querySelector('.O_Articles')
let News = document.querySelector('#news')
let Art = document.querySelector('#articles')

document.querySelector('#news').addEventListener('click', function () {
  NewsElement.style.display = 'block'
  ArtElement.style.display = 'none'
  News.classList.toggle('unactive')
  Art.classList.toggle('unactive')
})

document.querySelector('#articles').addEventListener('click', function () {
  NewsElement.style.display = 'none'
  ArtElement.style.display = 'block'
  News.classList.toggle('unactive')
  Art.classList.toggle('unactive')
})

document
  .querySelector('.A_MainButton')
  .addEventListener('mouseover', function () {
    document.querySelector('.Q_Arrow').classList.remove('orange_white')
  })
document
  .querySelector('.A_MainButton')
  .addEventListener('mouseout', function () {
    document.querySelector('.Q_Arrow').classList.add('orange_white')
  })
