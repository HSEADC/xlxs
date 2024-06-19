/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
document.addEventListener('DOMContentLoaded', function () {
  var card = document.querySelector('.S_CardBody');
  var button = document.querySelector('.Q_Reverse');
  var classItem = card.classList[1];
  var newClassItem = "".concat(classItem, "_1");
  // const myText = document.querySelector('A_CardInfo')

  button.addEventListener('click', function () {
    console.log(classItem, newClassItem);
    if (card.classList.contains(classItem)) {
      card.classList.replace(classItem, newClassItem);
    } else {
      card.classList.replace(newClassItem, classItem);
    }
  });
});
/******/ })()
;