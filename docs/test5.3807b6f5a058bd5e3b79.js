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

;// CONCATENATED MODULE: ./src/images/testss/Q-Test-Res-5.png
const Q_Test_Res_5_namespaceObject = __webpack_require__.p + "images/Q-Test-Res-5.1ea5e690bded7dc71fdf.png";
;// CONCATENATED MODULE: ./src/testss/test5.js

var stage = {
  question: 'Для чего используется блок-схема?',
  answers: [{
    text: 'Для анализа данных',
    count: 0
  }, {
    text: 'Для отображения последовательности шагов в процессе',
    count: 1
  }, {
    text: 'Для представления временных рядов',
    count: 0
  }, {
    text: 'Для построения демографических прогнозов',
    count: 0
  }]
};
var resultTable = {
  preview: 'Блок-схема — это тип диаграммы, который представляет алгоритм или процесс, показывая шаги в виде блоков различных форм, соединенных стрелками, которые указывают направление потока. Каждая форма блока имеет свое значение, что позволяет точно определить тип операции или действия.',
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
  image.innerHTML = "<img src=".concat(Q_Test_Res_5_namespaceObject, ">");
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
  imageArticle.innerHTML = "<img src=".concat(Q_Test_Res_5_namespaceObject, ">");
  article.prepend(imageArticle);
  article.append(results);
  section.prepend(results);
  var button = document.createElement('div');
  button.innerHTML = "<a href='../tests.html'>\u0425\u043E\u0447\u0443 \u043F\u0440\u043E\u0439\u0442\u0438 \u0435\u0449\u0451 \u0442\u0435\u0441\u0442</a>";
  section.append(button);
}
/******/ })()
;