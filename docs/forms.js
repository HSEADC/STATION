/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var container_1 = document.getElementsByClassName('container-1')[0];
var container_2 = document.getElementsByClassName('container-2')[0];
var container_3 = document.getElementsByClassName('container-3')[0];
var container_4 = document.getElementsByClassName('container-4')[0];
var svg_text = document.getElementsByClassName('svg-text');
var svg = document.getElementsByClassName('svg');
var svgContainer = document.getElementsByClassName('svgContainer');
Array.from(svgContainer).forEach(function (container) {
  container.addEventListener('mouseover', function () {
    container.childNodes[1].style.color = 'var(--bg-dark)';
    container.childNodes[3].style.opacity = 1;
    console.log('In');
  });
});
Array.from(svgContainer).forEach(function (container) {
  container.addEventListener('mouseout', function () {
    container.childNodes[1].style.color = 'var(--bg-light)';
    container.childNodes[3].style.opacity = 0;
  });
});
/******/ })()
;