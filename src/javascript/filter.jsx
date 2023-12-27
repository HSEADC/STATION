// main.jsx

function filterCards(filter) {
  const cards = document.querySelectorAll('.card')

  cards.forEach((card) => {
    const filters = card.getAttribute('data-filters').split(' ')

    if (filters.includes(filter) || filter === 'all') {
      card.style.display = 'block'
    } else {
      card.style.display = 'none'
    }
  })
}

export default filterCards
