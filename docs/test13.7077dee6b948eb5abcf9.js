/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/images/testss/Q-Test-Res-13.png
const Q_Test_Res_13_namespaceObject = __webpack_require__.p + "images/Q-Test-Res-13.2d173b2843bebcf9fec4.png";
;// CONCATENATED MODULE: ./src/testss/test13.js

var stage = {
  question: 'Чем отличается пузырьковая диаграмма от точечной?',
  answers: [{
    text: 'Количеством данных',
    count: 0
  }, {
    text: 'Формой графика',
    count: 0
  }, {
    text: 'Использованием размера пузырей для отображения третьей переменной',
    count: 1
  }, {
    text: 'Способом отображения временных рядов',
    count: 0
  }]
};
var resultTable = {
  preview: 'В отличие от диаграммы рассеяния, в пузырьковой диаграмме каждая точка обозначает определенное название или категорию (часто указываемое рядом с точкой или в подписях). Кроме того, каждая точка на графике представляется своим размером, что представляет третью переменную. На графике можно использовать цвета для разграничения категорий или для введения дополнительной переменной. ',
  text: 'Все верно!'
};

//функции
document.addEventListener('DOMContentLoaded', function () {
  initTest();
  chooseAnswer();
});
var currentStage = 0;
var resultCount = 0;
function initTest() {
  var question = document.querySelector('.A_Question');
  var answers = document.querySelector('.C_Answers');
  question.innerHTML = stage.question; //выводим вопрос

  //проверяем количество html-тегов для ответов и выводим в них текст
  for (var i = 0; i < stage.answers.length; i++) {
    console.log(stage.answers, stage.answers[i].text);
    var answer = document.createElement('div');
    answer.classList.add('A_Answer');
    answer.innerHTML = stage.answers[i].text; //вывести текст ответа
    answer.dataset.count = stage.answers[i].count; //добавить дата-атрибут с баллами

    answers.appendChild(answer);
  }
}

//при выборе ответа
function chooseAnswer() {
  var answers = document.querySelectorAll('.A_Answer');
  answers.forEach(function (answer) {
    answer.addEventListener('click', function () {
      if (answer.dataset.count == 1) {
        showResult();
      } //меняем вопросы
    });
  });
}
function showResult() {
  var section = document.querySelector('section');
  section.innerHTML = '';
  var results = document.createElement('div');
  results.classList.add('W_Result');
  var resultBlock = document.createElement('div');
  results.classList.add('M_Result');
  var image = document.createElement('div');
  image.innerHTML = "<img src=".concat(Q_Test_Res_13_namespaceObject, ">");
  resultBlock.prepend(image);
  var header = document.createElement('div');
  header.classList.add('A_ResultHeader');
  header.innerHTML = resultTable.preview;
  resultBlock.prepend(header);
  var description = document.createElement('div');
  description.classList.add('A_ResultHeader');
  description.innerHTML = resultTable.text;
  resultBlock.prepend(description);
  results.prepend(resultBlock);
  var article = document.createElement('div');
  article.classList.add('M_Article');
  var headerArticle = document.createElement('div');
  headerArticle.classList.add('A_ResultHeader');
  headerArticle.innerHTML = resultTable.preview;
  article.prepend(headerArticle);
  var imageArticle = document.createElement('div');
  imageArticle.innerHTML = "<img src=".concat(Q_Test_Res_13_namespaceObject, ">");
  article.prepend(imageArticle);
  article.append(results);
  section.prepend(results);
  var button = document.createElement('div');
  button.innerHTML = "<a href='../tests.html'>\u0425\u043E\u0447\u0443 \u043F\u0440\u043E\u0439\u0442\u0438 \u0435\u0449\u0451 \u0442\u0435\u0441\u0442</a>";
  section.append(button);
}
/******/ })()
;