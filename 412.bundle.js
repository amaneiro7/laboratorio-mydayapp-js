"use strict";
(self["webpackChunkmydayapp_js"] = self["webpackChunkmydayapp_js"] || []).push([[412],{

/***/ 412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskPlanner": () => (/* binding */ taskPlanner)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var createTasks = function createTasks() {
  var tasksList = [];
  return {
    addTask: function addTask(newTask) {
      tasksList.push(newTask);
      return "Todo agregado exitosamente", newTask;
    },
    removeTask: function removeTask(id) {
      tasksList = tasksList.filter(function (task) {
        return task.id !== Number(id);
      });
      return "Elemento Eliminado con exito", id;
    },
    getTasks: function getTasks() {
      return tasksList;
    },
    getLastTaskId: function getLastTaskId() {
      var _tasksList;
      return (_tasksList = tasksList[tasksList.length - 1]) === null || _tasksList === void 0 ? void 0 : _tasksList.id;
    },
    getPendingTasks: function getPendingTasks() {
      return tasksList.filter(function (task) {
        return !task.completed;
      });
    },
    getCompletedTasks: function getCompletedTasks() {
      return tasksList.filter(function (task) {
        return task.completed;
      });
    },
    toggleCompleted: function toggleCompleted(id) {
      var index;
      index = tasksList.findIndex(function (task) {
        return task.id === Number(id);
      });
      tasksList[index].completed = !tasksList[index].completed;
    },
    updateTask: function updateTask(id, updates) {
      var index = tasksList.findIndex(function (task) {
        return task.id === Number(id);
      });
      tasksList[index] = _objectSpread(_objectSpread({}, tasksList[index]), {}, {
        title: updates
      });
      return "Tarea actualizada con exito", updates, tasksList;
    },
    clearTaskCompleted: function clearTaskCompleted() {
      tasksList = tasksList.filter(function (task) {
        return !task.completed;
      });
    }
  };
};
var taskPlanner = createTasks();

/***/ })

}]);