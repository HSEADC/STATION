const svgContainer = document.getElementsByClassName('svgContainer')[0]
const svgImage = document.getElementsByClassName('svg-1')[0]

svgContainer.addEventListener('mouseover', function () {
  svgImage.src = './images/images_forms/ticket-light.svg'
})

svgContainer.addEventListener('mouseout', function () {
  svgImage.src = './images/images_forms/ticket-dark.svg'
})
