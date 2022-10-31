/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_src/scripts/module/modal.js":
/*!**************************************!*\
  !*** ./_src/scripts/module/modal.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst modal = function (trigger, close, modal) {\n  let timerModal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n  const triggerModal = document.querySelectorAll(trigger),\n        closeModal = document.querySelector(`${modal} ${close}`),\n        windowModal = document.querySelector(modal),\n        body = document.querySelector(\"body\");\n\n  function showModal() {\n    if (!windowModal.classList.contains(\"show\")) {\n      windowModal.classList.add(\"show\");\n      body.style.overflow = \"hidden\";\n      clearTimeout(showModalByTime);\n    }\n  }\n\n  function hiddenModal() {\n    if (windowModal.classList.contains(\"show\")) {\n      windowModal.classList.remove(\"show\");\n      body.style.overflow = \"\";\n    }\n  }\n\n  triggerModal === null || triggerModal === void 0 ? void 0 : triggerModal.forEach(elem => {\n    elem.addEventListener(\"click\", e => {\n      if (e.target) e.preventDefault();\n      showModal();\n    });\n  });\n  closeModal === null || closeModal === void 0 ? void 0 : closeModal.addEventListener(\"click\", () => {\n    hiddenModal();\n  });\n  windowModal === null || windowModal === void 0 ? void 0 : windowModal.addEventListener(\"click\", e => {\n    if (e.target === windowModal) {\n      hiddenModal();\n    }\n  });\n  let showModalByTime = timerModal ? setTimeout(showModal, timerModal) : null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n//# sourceURL=webpack://start-pack-project/./_src/scripts/module/modal.js?");

/***/ }),

/***/ "./_src/scripts/script.js":
/*!********************************!*\
  !*** ./_src/scripts/script.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/modal */ \"./_src/scripts/module/modal.js\");\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_module_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\".my-modal\", \".modal__btn-close\", \"#my-modal\");\n});\n\n//# sourceURL=webpack://start-pack-project/./_src/scripts/script.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./_src/scripts/script.js");
/******/ 	
/******/ })()
;