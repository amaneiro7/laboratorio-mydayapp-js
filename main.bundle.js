/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "clearCompleted": () => (/* binding */ clearCompleted),
  "footer": () => (/* binding */ footer),
  "inputNewTodo": () => (/* binding */ inputNewTodo),
  "main": () => (/* binding */ main),
  "todoCount": () => (/* binding */ todoCount)
});

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/css/base.css
var base = __webpack_require__(945);
;// CONCATENATED MODULE: ./src/css/base.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(base/* default */.Z, options);




       /* harmony default export */ const css_base = (base/* default */.Z && base/* default.locals */.Z.locals ? base/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/js/UI/ClearTaskCompleted.js
var clearTaskCompleted = function clearTaskCompleted() {
  __webpack_require__.e(/* import() */ 412).then(__webpack_require__.bind(__webpack_require__, 412)).then(function (module) {
    return module.taskPlanner.clearTaskCompleted();
  });
  Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 860)).then(function (module) {
    return module.setterLocalStorage();
  });
  Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 136)).then(function (module) {
    return module.renderUI();
  });
};
// EXTERNAL MODULE: ./src/js/UI/renderUI.js + 4 modules
var renderUI = __webpack_require__(136);
// EXTERNAL MODULE: ./src/js/logic/setterLocalStorage.js
var setterLocalStorage = __webpack_require__(860);
;// CONCATENATED MODULE: ./src/js/logic/FirstLoad.js

//la logica empleada para la primera carga de la aplicacion

var firstLoad = function firstLoad() {
  var tasks = (0,setterLocalStorage.getterLocalStorage)();
  if (!tasks || !tasks.length) {
    Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 860)).then(function (module) {
      return module.setterLocalStorage();
    });
    __webpack_require__.e(/* import() */ 722).then(__webpack_require__.bind(__webpack_require__, 722)).then(function (module) {
      return module.verifyTaskLIstArray();
    });
  } else {
    tasks.forEach(function (task) {
      return __webpack_require__.e(/* import() */ 412).then(__webpack_require__.bind(__webpack_require__, 412)).then(function (module) {
        return module.taskPlanner.addTask(task);
      });
    });
    __webpack_require__.e(/* import() */ 722).then(__webpack_require__.bind(__webpack_require__, 722)).then(function (module) {
      return module.verifyTaskLIstArray();
    });
    Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 136)).then(function (module) {
      return module.renderUI();
    });
  }
  removeEventListener("load", firstLoad);
};
;// CONCATENATED MODULE: ./src/index.js




var main = document.querySelector(".main");
var footer = document.querySelector(".footer");
var inputNewTodo = document.querySelector(".new-todo");
var todoCount = document.querySelector(".todo-count");
var clearCompleted = document.querySelector(".clear-completed");
window.addEventListener("hashchange", renderUI.renderUI, false);
clearCompleted.addEventListener("click", clearTaskCompleted);
inputNewTodo.addEventListener("keydown", handleInput);
function handleInput(_ref) {
  var key = _ref.key;
  if (key === "Enter") {
    __webpack_require__.e(/* import() */ 439).then(__webpack_require__.bind(__webpack_require__, 439)).then(function (module) {
      return module.inputValue(inputNewTodo.value);
    });
  }
}
window.addEventListener("load", firstLoad);

/***/ }),

/***/ 136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "renderUI": () => (/* binding */ renderUI)
});

;// CONCATENATED MODULE: ./src/js/UI/CheckBox.js
var setCheckBox = function setCheckBox(_ref) {
  var liContainer = _ref.target.offsetParent;
  Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 152)).then(function (module) {
    return module.todoListContainer.classList.toggle("completed");
  });
  var id = liContainer.dataset.id;
  __webpack_require__.e(/* import() */ 412).then(__webpack_require__.bind(__webpack_require__, 412)).then(function (module) {
    return module.taskPlanner.toggleCompleted(id);
  });
  __webpack_require__.e(/* import() */ 722).then(__webpack_require__.bind(__webpack_require__, 722)).then(function (module) {
    return module.verifyTaskLIstArray();
  });
  Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 860)).then(function (module) {
    return module.setterLocalStorage();
  });
  Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 136)).then(function (module) {
    return module.renderUI();
  });
};
;// CONCATENATED MODULE: ./src/js/UI/DeleteTask.js
var deleteTask = function deleteTask(_ref) {
  var liContainer = _ref.target.offsetParent;
  var id = liContainer.dataset.id;
  __webpack_require__.e(/* import() */ 412).then(__webpack_require__.bind(__webpack_require__, 412)).then(function (module) {
    return module.taskPlanner.removeTask(id);
  });
  Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 860)).then(function (module) {
    return module.setterLocalStorage();
  });
  Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 136)).then(function (module) {
    return module.renderUI();
  });
};
;// CONCATENATED MODULE: ./src/js/UI/EditingMode.js
function editingMode(_ref) {
  var liContainer = _ref.target.offsetParent;
  var input = liContainer.lastChild;
  liContainer.classList.toggle("editing"); // se agrega la clase al Contenedor para acceder a al modo editar
  input.focus();

  // se almacenan los valores del ID y del valor por defecto del input
  var initialValue = this.innerText; // se almacena el valor iniciar del input

  input.addEventListener("keydown", function (_ref2) {
    var key = _ref2.key;
    if (key === "Enter") {
      var id = liContainer.dataset.id;
      var updatedTask = input.value.trim();
      __webpack_require__.e(/* import() */ 412).then(__webpack_require__.bind(__webpack_require__, 412)).then(function (module) {
        return module.taskPlanner.updateTask(id, updatedTask);
      });
      Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 860)).then(function (module) {
        return module.setterLocalStorage();
      });
      Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 136)).then(function (module) {
        return module.renderUI();
      });
    } else if (key === "Escape") {
      input.value = initialValue;
      liContainer.classList.remove("editing");
    }
  });
}
;// CONCATENATED MODULE: ./src/js/template/Template.js



var template = function template(taskList) {
  return taskList.map(function (taskView) {
    var id = taskView.id,
      title = taskView.title,
      completed = taskView.completed;
    //Se crear el elemento li, que ava a contener a todo los demas
    var li = document.createElement("li");
    li.dataset.id = id;
    completed && li.classList.add("completed");
    //Se creo el div, que contien al checkbox, label y el boton de borrar
    var div = document.createElement("div");
    div.classList.add("view");
    //el checkbox
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("toggle");
    completed ? checkBox.checked = true : checkBox.checked = false;
    checkBox.addEventListener("click", setCheckBox);
    //la etiqueta
    var label = document.createElement("label");
    label.innerText = title;
    label.addEventListener("dblclick", editingMode);
    // el boton de eliminar
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("destroy");
    deleteButton.addEventListener("click", deleteTask);
    //el input de editar
    var editInput = document.createElement("input");
    editInput.value = title;
    editInput.classList.add("edit");
    div.append(checkBox, label, deleteButton);
    li.append(div, editInput);
    return li;
  });
};
;// CONCATENATED MODULE: ./src/js/UI/renderUI.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var todoListContainer = document.querySelector(".todo-list");
var renderUI = function renderUI() {
  todoListContainer.innerHTML = "";
  __webpack_require__.e(/* import() */ 722).then(__webpack_require__.bind(__webpack_require__, 722)).then(function (module) {
    return module.verifyTaskLIstArray();
  });
  __webpack_require__.e(/* import() */ 539).then(__webpack_require__.bind(__webpack_require__, 539)).then(function (module) {
    return module.getTaskFilterd();
  });
  if (location.hash.startsWith("#/pending")) {
    __webpack_require__.e(/* import() */ 412).then(__webpack_require__.bind(__webpack_require__, 412)).then(function (module) {
      return module.taskPlanner.getPendingTasks();
    }).then(function (result) {
      return todoListContainer.append.apply(todoListContainer, _toConsumableArray(template(result)));
    });
  } else if (location.hash.startsWith("#/completed")) {
    __webpack_require__.e(/* import() */ 412).then(__webpack_require__.bind(__webpack_require__, 412)).then(function (module) {
      return module.taskPlanner.getCompletedTasks();
    }).then(function (result) {
      return todoListContainer.append.apply(todoListContainer, _toConsumableArray(template(result)));
    });
  } else {
    __webpack_require__.e(/* import() */ 412).then(__webpack_require__.bind(__webpack_require__, 412)).then(function (module) {
      return module.taskPlanner.getTasks();
    }).then(function (result) {
      return todoListContainer.append.apply(todoListContainer, _toConsumableArray(template(result)));
    });
  }
  // const view = template(taskIterator);
  // todoListContainer.append(...view);

  __webpack_require__.e(/* import() */ 593).then(__webpack_require__.bind(__webpack_require__, 593)).then(function (module) {
    return module.itemLeft();
  });
};

/***/ }),

/***/ 860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getterLocalStorage": () => (/* binding */ getterLocalStorage),
/* harmony export */   "setterLocalStorage": () => (/* binding */ setterLocalStorage)
/* harmony export */ });
var setterLocalStorage = function setterLocalStorage() {
  __webpack_require__.e(/* import() */ 412).then(__webpack_require__.bind(__webpack_require__, 412)).then(function (module) {
    return module.taskPlanner.getTasks();
  }).then(function (tasks) {
    return localStorage.setItem("mydayapp-js", JSON.stringify(tasks));
  });
};
var getterLocalStorage = function getterLocalStorage() {
  return JSON.parse(localStorage.getItem("mydayapp-js"));
};

/***/ }),

/***/ 945:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(808), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(36), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbutton {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  color: inherit;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  background: #f5f5f5;\r\n  color: #111111;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  font-weight: 300;\r\n}\r\n\r\n.container {\r\n  min-width: 230px;\r\n  max-width: 550px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header {\r\n  background-image: linear-gradient(\r\n    224deg,\r\n    hsl(240deg 100% 50%) 2%,\r\n    hsl(249deg 100% 59%) 63%,\r\n    hsl(252deg 99% 64%) 78%,\r\n    hsl(253deg 98% 68%) 87%,\r\n    hsl(254deg 96% 73%) 92%,\r\n    hsl(253deg 93% 77%) 96%,\r\n    hsl(251deg 89% 81%) 98%,\r\n    hsl(246deg 81% 85%) 99%,\r\n    hsl(232deg 68% 88%) 100%,\r\n    hsl(200deg 53% 90%) 100%\r\n  );\r\n  padding-bottom: 4rem;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.todoapp-wrapper {\r\n  position: relative;\r\n  top: -40px;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n  overflow: hidden;\r\n}\r\n\r\n.todoapp input::-webkit-input-placeholder {\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.todoapp input::-moz-placeholder {\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.todoapp input::input-placeholder {\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.header h1 {\r\n  width: 100%;\r\n  font-size: 3rem;\r\n  font-weight: 200;\r\n  color: white;\r\n  padding-top: 2rem;\r\n  margin: 0;\r\n}\r\n\r\n.header h1 + p {\r\n  margin: 0;\r\n  color: white;\r\n  padding-bottom: 1.2rem;\r\n}\r\n\r\n.new-todo,\r\n.edit {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 100%;\r\n  font-size: 24px;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  line-height: 1.4em;\r\n  color: inherit;\r\n  padding: 6px;\r\n  border: 1px solid #999;\r\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.new-todo {\r\n  padding: 2rem;\r\n  height: 65px;\r\n  border: none;\r\n  background: white;\r\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\r\n  border-radius: 8px;\r\n}\r\n\r\n.main {\r\n  position: relative;\r\n  z-index: 2;\r\n  border-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.toggle-all {\r\n  width: 1px;\r\n  height: 1px;\r\n  border: none;\r\n  /* Mobile Safari */\r\n  opacity: 0;\r\n  position: absolute;\r\n  right: 100%;\r\n  bottom: 100%;\r\n}\r\n\r\n.toggle-all + label {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 45px;\r\n  height: 65px;\r\n  font-size: 0;\r\n  position: absolute;\r\n  top: -65px;\r\n  left: -0;  \r\n}\r\n\r\n.toggle-all + label:before {\r\n  content: \"❯\";\r\n  display: inline-block;\r\n  font-size: 22px;\r\n  color: #949494;\r\n  padding: 10px 27px 10px 27px;\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.toggle-all:checked + label:before {\r\n  color: #484848;\r\n}\r\n\r\n.todo-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.todo-list li {\r\n  position: relative;\r\n  font-size: 24px;\r\n  border-bottom: 1px solid #ededed;\r\n  padding: 0rem 1rem;\r\n}\r\n\r\n.todo-list li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.todo-list li.editing {\r\n  border-bottom: none;\r\n  padding: 0;\r\n}\r\n\r\n.todo-list li.editing .edit {\r\n  display: block;\r\n  width: calc(100% - 4rem);\r\n  padding: 12px 16px;\r\n  margin: 0 0 0 4rem;\r\n}\r\n\r\n.todo-list li.editing .view {\r\n  display: none;\r\n}\r\n\r\n.todo-list li .toggle {\r\n  text-align: center;\r\n  width: 40px;\r\n  /* auto, since non-WebKit browsers doesn't support input styling */\r\n  height: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto 0;\r\n  border: none;\r\n  /* Mobile Safari */\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n}\r\n\r\n.todo-list li .toggle {\r\n  opacity: 0;\r\n}\r\n\r\n.todo-list li .toggle + label {\r\n  /*\r\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\r\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\r\n\t*/\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center left;\r\n}\r\n\r\n.todo-list li .toggle:checked + label {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.todo-list li label {\r\n  word-break: break-all;\r\n  padding: 15px 15px 15px 60px;\r\n  display: block;\r\n  line-height: 1.2;\r\n  transition: color 0.4s;\r\n  font-weight: 400;\r\n  color: #484848;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.todo-list li.completed label {\r\n  color: #949494;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.todo-list li .destroy {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  bottom: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: auto 0;\r\n  font-size: 30px;\r\n  color: #949494;\r\n  transition: color 0.2s ease-out;\r\n}\r\n\r\n.todo-list li .destroy:hover,\r\n.todo-list li .destroy:focus {\r\n  color: #c18585;\r\n}\r\n\r\n.todo-list li .destroy:after {\r\n  content: \"×\";\r\n  display: block;\r\n  height: 100%;\r\n  line-height: 1.1;\r\n}\r\n\r\n.todo-list li:hover .destroy {\r\n  display: block;\r\n}\r\n\r\n.todo-list li .edit {\r\n  display: none;\r\n}\r\n\r\n.todo-list li.editing:last-child {\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.footer {\r\n  padding: 1rem 1.5rem;\r\n  height: 20px;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  border-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.todo-count {\r\n  float: left;\r\n  text-align: left;\r\n}\r\n\r\n.todo-count strong {\r\n  font-weight: 300;\r\n}\r\n\r\n.filters {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.filters li {\r\n  display: inline;\r\n}\r\n\r\n.filters li a {\r\n  color: inherit;\r\n  margin: 3px;\r\n  padding: 3px 7px;\r\n  text-decoration: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 3px;\r\n}\r\n\r\n.filters li a:hover {\r\n  border-color: #6e49fe;\r\n}\r\n\r\n.filters li a.selected {\r\n  border-color: #4c33b1;\r\n}\r\n\r\n.clear-completed,\r\nhtml .clear-completed:active {\r\n  float: right;\r\n  position: relative;\r\n  line-height: 19px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-completed:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.info {\r\n  margin: 65px auto 0;\r\n  color: #4d4d4d;\r\n  font-size: 11px;\r\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n  text-align: center;\r\n}\r\n\r\n.info p {\r\n  line-height: 1;\r\n}\r\n\r\n.info a {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n\r\n.info a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n/*\r\n\tHack to remove background from Mobile Safari.\r\n\tCan't use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\r\n  .toggle-all,\r\n  .todo-list li .toggle {\r\n    background: none;\r\n  }\r\n\r\n  .todo-list li .toggle {\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n@media (max-width: 430px) {\r\n  .footer {\r\n    height: 50px;\r\n  }\r\n\r\n  .filters {\r\n    bottom: 10px;\r\n  }\r\n}\r\n\r\n:focus {\r\n  outline: 0;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 667:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 36:
/***/ ((module) => {

module.exports = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E";

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "mydayapp-js:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmydayapp_js"] = self["webpackChunkmydayapp_js"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(152);
/******/ 	
/******/ })()
;