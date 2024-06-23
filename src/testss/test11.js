import imgHost from '../images/testss/Q-Test-Res-11.png'
const stage = {
  question: 'Чем кольцевая диаграмма отличается от круговой?',
  answers: [
    { text: 'Формой отображения данных', count: 0 },
    { text: 'Наличием центрального отверстия для доп. информации', count: 1 },
    { text: 'Возможностью отображения отрицательных значений', count: 0 },
    { text: 'Способом отображения временных данных', count: 0 }
  ]
}

const resultTable = {
  preview:
    'Кольцевая диаграмма, также известная как донат-диаграмма (от англ. "donut chart"), представляет собой вариант круговой диаграммы. Основное отличие заключается в том, что в центре кольцевой диаграммы находится пустое пространство, делая её похожей на форму бублика. Эта особенность не только придает диаграмме уникальный визуальный стиль, но и позволяет размещать дополнительную информацию в центральной части.',
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
