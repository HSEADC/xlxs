/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


// console.log('Hello!')
// console.log('Hello, world!')

var menuButton = document.querySelector('.Q_NavBarBurger');
var closeButton = document.querySelector('.Q_Close');
var menu = document.querySelector('.M_Menu');
var menuContent = document.querySelector('.M_Menu > .C_NavBarCategories');
var marginget = document.querySelector('.O_Footer');
var marginleft = parseInt(window.getComputedStyle(marginget).getPropertyValue('margin-left'));
var mediaphone = window.matchMedia('(min-width: 360px) and (max-width: 767px)');

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

// function menuInit() {
//   menuContent.style.paddingLeft = +marginleft + 'px'
//   closeButton.style.right = +marginleft + 'px'
//   menuButton.addEventListener('click', menuOpen)
//   closeButton.addEventListener('click', menuClose)
// }

// function menuOpen() {
//   menu.style.right = '-' + marginleft + 'px'
//   document.body.style.overflow = 'hidden'
// }

// function menuClose() {
//   menu.style.right = '-120vw'
//   document.body.style.overflow = 'scroll'
// }

// document.addEventListener('DOMContentLoaded', () => {
//   marginInit()

//   if (mediaphone.matches) {
//     menuInit()
//   }

// })
/******/ })()
;