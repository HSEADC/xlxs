const burgerMenu = document.querySelector('.Q_NavBarBurger')
const closeButton = document.querySelector('.Q_Close')
const mobileMenu = document.querySelector('.M_Menu')
const bgg = document.querySelector('.S_Burger')

// Проверка на мобильную версию
const isMobile = window.innerWidth <= 744

if (isMobile) {
  burgerMenu.classList.remove('hidden')

  //нажимаем на бургер
  burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden')
    mobileMenu.classList.add('show')

    bgg.classList.remove('hidden')
    bgg.classList.add('show')

    burgerMenu.classList.add('hidden')
    closeButton.classList.remove('hidden')
    closeButton.classList.add('show')

    document.querySelectorAll('.M_mobileMenuPoint').forEach((point) => {
      point.classList.remove('hidden')
      point.classList.add('show')
    })
  })

  //  Закрытие меню при клике на Q_Close
  closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
    burgerMenu.classList.remove('hidden')
    burgerMenu.classList.add('show')
    closeButton.classList.add('hidden')
    bgg.classList.add('hidden')
    bgg.classList.remove('show')
    document.querySelectorAll('.M_mobileMenuPoint').forEach((point) => {
      point.classList.add('hidden')
    })
  })
} else {
  //  Скрываем  Q_burgerMenu и M_mobileMenuPoint  на  desktop
  burgerMenu.classList.add('hidden')
  document.querySelectorAll('.M_mobileMenuPoint').forEach((point) => {
    point.classList.add('hidden')
  })
}
