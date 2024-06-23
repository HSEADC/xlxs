import imgHost from '../images/testss/Q-Test-Res-6.png'
const stage = {
  question: 'Что показывает планка погрешности на графике?',
  answers: [
    { text: 'Диапазон возможных значений данных', count: 1 },
    { text: 'Изменение данных во врвмени', count: 0 },
    { text: 'Корреляцию между переменными', count: 0 },
    { text: 'Иерархическую структуру', count: 0 }
  ]
}

const resultTable = {
  preview:
    'Планки погрешностей помогают указать предполагаемую погрешность или недостоверность с целью дать общее представление об уровне точности измерений. Для этого поверх первоначального графика наносятся маркеры и точки данных. Чаще всего планки погрешностей используются для отображения стандартного отклонения, стандартной погрешности, доверительных интервалов или min/max значений диапазона данных',
  text: 'Все верно!'
}

//функции
document.addEventListener('DOMContentLoaded', () => {
  initTest()
  chooseAnswer()
})

let currentStage = 0
let resultCount = 0

function initTest() {
  const question = document.querySelector('.A_Question')
  const answers = document.querySelector('.C_Answers')

  question.innerHTML = stage.question //выводим вопрос

  //проверяем количество html-тегов для ответов и выводим в них текст
  for (let i = 0; i < stage.answers.length; i++) {
    console.log(stage.answers, stage.answers[i].text)
    const answer = document.createElement('div')
    answer.classList.add('A_Answer')
    answer.innerHTML = stage.answers[i].text //вывести текст ответа
    answer.dataset.count = stage.answers[i].count //добавить дата-атрибут с баллами

    answers.appendChild(answer)
  }
}

//при выборе ответа
function chooseAnswer() {
  const answers = document.querySelectorAll('.A_Answer')

  answers.forEach((answer) => {
    answer.addEventListener('click', () => {
      if (answer.dataset.count == 1) {
        showResult()
      } //меняем вопросы
    })
  })
}

function showResult() {
  const section = document.querySelector('section')
  section.innerHTML = ''

  const results = document.createElement('div')
  results.classList.add('W_Result')

  const resultBlock = document.createElement('div')
  results.classList.add('M_Result')

  const image = document.createElement('div')
  image.innerHTML = `<img src=${imgHost}>`
  resultBlock.prepend(image)

  const header = document.createElement('div')
  header.classList.add('A_ResultHeader')
  header.innerHTML = resultTable.preview
  resultBlock.prepend(header)

  const description = document.createElement('div')
  description.classList.add('A_ResultHeader')
  description.innerHTML = resultTable.text
  resultBlock.prepend(description)

  results.prepend(resultBlock)

  const article = document.createElement('div')
  article.classList.add('M_Article')

  const headerArticle = document.createElement('div')
  headerArticle.classList.add('A_ResultHeader')
  headerArticle.innerHTML = resultTable.preview
  article.prepend(headerArticle)

  const imageArticle = document.createElement('div')
  imageArticle.innerHTML = `<img src=${imgHost}>`
  article.prepend(imageArticle)

  article.append(results)
  section.prepend(results)

  const button = document.createElement('div')
  button.innerHTML = `<a href='../tests.html'>Хочу пройти ещё тест</a>`

  section.append(button)
}
