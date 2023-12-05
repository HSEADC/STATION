import './tiser.css'

document
  .getElementById('button_1_main')
  .addEventListener('mouseover', function () {
    document.getElementById('img_1_main').src =
      'images/e46c8f875b48e7c71c49.svg'
    document.getElementsByTagName('body')[0].style =
      'background-color: var(--bkl)'
    Array.from(document.getElementsByClassName('point')).forEach((element) => {
      element.style.backgroundColor = 'var(--white)'
    })
  })

document
  .getElementById('button_1_main')
  .addEventListener('mouseout', function () {
    document.getElementById('img_1_main').src =
      'images/ae36f4cab3b4eb6b1da4.svg'
    document.getElementsByTagName('body')[0].style =
      'background-color: var(--white)'
    Array.from(document.getElementsByClassName('point')).forEach((element) => {
      element.style.backgroundColor = 'var(--bkl)'
    })
  })

document.addEventListener('DOMContentLoaded', function () {
  var image = document.getElementById('cards_3')

  window.addEventListener('scroll', function () {
    // Получаем текущую позицию скролла
    let scrollPosition = window.scrollY

    // Добавляем условие для начала анимации после 1000px скролла
    if (scrollPosition > 1600) {
      // Вычисляем новое положение для изображения
      let newLeftPosition =
        -1800 * ((scrollPosition - 1600) / window.innerHeight)

      // Применяем новое положение к изображению
      image.style.marginLeft = newLeftPosition + 'px'
      document.getElementById('h1_3').style.position = 'fixed'
      document.getElementById('h1_3').style.top = '175px'
      image.style.position = 'fixed'
      image.style.top = '255px'
    } else {
      document.getElementById('h1_3').style.position = 'relative'
      document.getElementById('h1_3').style.top = 'auto'
      image.style.position = 'relative'
      image.style.top = 'auto'
    }
  })
})

document.addEventListener('scroll', function () {
  const scrollOffset = window.scrollY

  if (scrollOffset >= 2000) {
    const offsetAmount = Math.min(600, scrollOffset - 2000)
    const translateValue = `translateX(-${offsetAmount}px)`
    document.getElementById('h1_3').style.transform = translateValue
  } else {
    // Reset the transform if not scrolled enough
    document.getElementById('scrollingText').style.transform = 'translateX(0)'
  }
})
