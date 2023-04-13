"use strict";
(self["webpackChunkmydayapp_js"] = self["webpackChunkmydayapp_js"] || []).push([[439],{

/***/ 439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputValue": () => (/* binding */ inputValue)
/* harmony export */ });
var inputValue = function inputValue(text) {
  text.trim().toLowerCase();
  if (text !== "") {
    __webpack_require__.e(/* import() */ 376).then(__webpack_require__.bind(__webpack_require__, 376)).then(function (module) {
      return module.addTodoList(text);
    });
  }
  __webpack_require__.e(/* import() */ 132).then(__webpack_require__.bind(__webpack_require__, 132)).then(function (module) {
    return module.clearInput();
  });
};

/***/ })

}]);