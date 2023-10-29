import './forms.css'

let container_1 = document.getElementsByClassName('container-1')[0]
let container_2 = document.getElementsByClassName('container-2')[0]
let container_3 = document.getElementsByClassName('container-3')[0]
let container_4 = document.getElementsByClassName('container-4')[0]
let svg_text = document.getElementsByClassName('svg-text')
let svg = document.getElementsByClassName('svg')
let svgContainer = document.getElementsByClassName('svgContainer')

Array.from(svgContainer).forEach((container) => {
  container.addEventListener('mouseover', () => {
    container.childNodes[3].src = './images/card-dark-hover.svg'
  })
  container.addEventListener('mouseout', () => {
    container.childNodes[3].src = './images/card-dark.svg'
  })
})
