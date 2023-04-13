"use strict";
(self["webpackChunkmydayapp_js"] = self["webpackChunkmydayapp_js"] || []).push([[593],{

/***/ 593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemLeft": () => (/* binding */ itemLeft)
/* harmony export */ });
var itemLeft = function itemLeft() {
  __webpack_require__.e(/* import() */ 412).then(__webpack_require__.bind(__webpack_require__, 412)).then(function (module) {
    return module.taskPlanner.getPendingTasks();
  }).then(function (items) {
    var item;
    items.length > 1 ? item = "items" : item = "item";
    Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 152)).then(function (module) {
      return module.todoCount.innerHTML = "<strong>".concat(items.length, "</strong> ").concat(item, " left");
    });
  });
};

/***/ })

}]);