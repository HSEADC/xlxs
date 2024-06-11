document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.S_CardBody')
  const button = document.querySelector('.Q_Reverse')
  const classItem = card.classList[1]
  const newClassItem = `${classItem}_1`

  button.addEventListener('click', () => {
    console.log(classItem, newClassItem)
    if (card.classList.contains(classItem)) {
      card.classList.replace(classItem, newClassItem)
    }
  })
})
