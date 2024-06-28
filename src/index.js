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
})
