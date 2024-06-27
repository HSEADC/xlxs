const burgerMenu = document.querySelector('.Q_NavBarBurger')
const closeButton = document.querySelector('.Q_Close')
const mobileMenu = document.querySelector('.M_Menu')
const bgg = document.querySelector('.S_Burger')

// Проверка на мобильную версию
const isMobile = window.innerWidth <= 744

if (isMobile) {
  burgerMenu.classList.remove('hidden')

  //нажимаем на бургер - появляется секшн
  burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden')
    mobileMenu.classList.add('show')

    bgg.classList.remove('hidden')
    bgg.classList.add('show')

    burgerMenu.classList.add('hidden')
    closeButton.classList.remove('hidden')
    closeButton.classList.add('show')

    document.querySelectorAll('.M_Menu').forEach((point) => {
      point.classList.remove('hidden')
      point.classList.add('show')
    })
  })

  // закрываем меню при крестике
  closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
    burgerMenu.classList.remove('hidden')
    burgerMenu.classList.add('show')
    closeButton.classList.add('hidden')
    bgg.classList.add('hidden')
    bgg.classList.remove('show')
    document.querySelectorAll('.M_Menu').forEach((point) => {
      point.classList.add('hidden')
    })
  })
} else {
  // скрываем если
  burgerMenu.classList.add('hidden')
  document.querySelectorAll('.M_Menu').forEach((point) => {
    point.classList.add('hidden')
  })
}
