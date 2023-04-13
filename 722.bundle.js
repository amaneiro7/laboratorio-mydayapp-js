"use strict";
(self["webpackChunkmydayapp_js"] = self["webpackChunkmydayapp_js"] || []).push([[722],{

/***/ 722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verifyTaskLIstArray": () => (/* binding */ verifyTaskLIstArray)
/* harmony export */ });
var verifyTaskLIstArray = function verifyTaskLIstArray() {
  __webpack_require__.e(/* import() */ 412).then(__webpack_require__.bind(__webpack_require__, 412)).then(function (module) {
    return module.taskPlanner.getTasks();
  }).then(function (tasks) {
    if (!tasks || !tasks.length) {
      Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 152)).then(function (module) {
        return module.main.classList.add("hidden");
      });
      Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 152)).then(function (module) {
        return module.footer.classList.add("hidden");
      });
    } else {
      Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 152)).then(function (module) {
        return module.main.classList.remove("hidden");
      });
      Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 152)).then(function (module) {
        return module.footer.classList.remove("hidden");
      });
      var someCompleted = tasks.some(function (task) {
        return task.completed === true;
      });
      someCompleted ? Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 152)).then(function (module) {
        return module.clearCompleted.classList.remove("hidden");
      }) : Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 152)).then(function (module) {
        return module.clearCompleted.classList.add("hidden");
      });
    }
  });
};

/***/ })

}]);