import './index.css'

// console.log('Hello!')
// console.log('Hello, world!')

// JavaScript код для фильтрации элементов по тегам
document.addEventListener('DOMContentLoaded', function () {
  const tags = document.querySelectorAll('#tags button')
  const items = document.querySelectorAll('#items .item')

  tags.forEach((tag) => {
    tag.addEventListener('click', function () {
      const selectedTag = this.getAttribute('data-tag')
      filterItems(selectedTag)
    })
  })

  function filterItems(tag) {
    items.forEach((item) => {
      const itemTags = item.getAttribute('data-tags')
      if (tag === 'all' || itemTags.includes(tag)) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })
  }

  // JavaScript код для изменения картинки на другую и обратно по кнопке с анимацией CSS
  const image = document.getElementById('image')
  const changeButton = document.getElementById('changeButton')
  let isImage1 = true

  changeButton.addEventListener('click', function () {
    if (isImage1) {
      image.src = 'images/atoms/Q_Rass.png'
    } else {
      image.src = 'images/atoms/Q_Rass.png'
    }

    image.classList.add('hidden')

    setTimeout(() => {
      image.classList.remove('hidden')
    }, 50) // Промежуток времени перед удалением класса hidden, чтобы анимация успела сработать

    isImage1 = !isImage1
  })
})
