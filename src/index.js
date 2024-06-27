import './index.css'

const menuButton = document.querySelector('.Q_NavBarBurger')
const closeButton = document.querySelector('.Q_Close')
const menu = document.querySelector('.M_Menu')
const menuContent = document.querySelector('.M_Menu > .C_NavBarCategories')
const marginget = document.querySelector('.O_Footer')
const marginleft = parseInt(
  window.getComputedStyle(marginget).getPropertyValue('margin-left')
)

const mediaphone = window.matchMedia(
  '(min-width: 360px) and (max-width: 767px)'
)

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
