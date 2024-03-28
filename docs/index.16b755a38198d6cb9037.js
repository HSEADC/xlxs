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
});
/******/ })()
;