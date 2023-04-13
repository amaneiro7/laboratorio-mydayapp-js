"use strict";
(self["webpackChunkmydayapp_js"] = self["webpackChunkmydayapp_js"] || []).push([[539],{

/***/ 539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filters": () => (/* binding */ filters),
/* harmony export */   "getTaskFilterd": () => (/* binding */ getTaskFilterd)
/* harmony export */ });
var filters = document.querySelector(".filters");
var getTaskFilterd = function getTaskFilterd() {
  var hash = window.location.hash;
  var all = filters.children[0].lastElementChild.classList;
  var pending = filters.children[1].lastElementChild.classList;
  var completed = filters.children[2].lastElementChild.classList;
  switch (hash) {
    case "":
    case "#/":
    case "#/all":
      all.add("selected");
      pending.remove("selected");
      completed.remove("selected");
      break;
    case "#/pending":
      all.remove("selected");
      pending.add("selected");
      completed.remove("selected");
      break;
    case "#/completed":
      all.remove("selected");
      pending.remove("selected");
      completed.add("selected");
      break;
    default:
      all.add("selected");
      pending.remove("selected");
      completed.remove("selected");
  }
};

/***/ })

}]);