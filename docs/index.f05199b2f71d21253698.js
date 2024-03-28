/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


// console.log('Hello!')
// console.log('Hello, world!')

// JavaScript код для фильтрации элементов по тегам
document.addEventListener('DOMContentLoaded', function () {
  var tags = document.querySelectorAll('#tags button');
  var items = document.querySelectorAll('#items .item');
  tags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      var selectedTag = this.getAttribute('data-tag');
      filterItems(selectedTag);
    });
  });
  function filterItems(tag) {
    items.forEach(function (item) {
      var itemTags = item.getAttribute('data-tags');
      if (tag === 'all' || itemTags.includes(tag)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // JavaScript код для изменения картинки на другую и обратно по кнопке с анимацией CSS
  var image = document.getElementById('image');
  var changeButton = document.getElementById('changeButton');
  var isImage1 = true;
  changeButton.addEventListener('click', function () {
    if (isImage1) {
      image.src = 'images/atoms/Q_Rass.png';
    } else {
      image.src = 'images/atoms/Q_Rass.png';
    }
    image.classList.add('hidden');
    setTimeout(function () {
      image.classList.remove('hidden');
    }, 50); // Промежуток времени перед удалением класса hidden, чтобы анимация успела сработать

    isImage1 = !isImage1;
  });
});
/******/ })()
;