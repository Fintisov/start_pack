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

/***/ "./_src/scripts/module/customizator.js":
/*!*********************************************!*\
  !*** ./_src/scripts/module/customizator.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Customization {\n  constructor() {\n    this.btnBlock = document.createElement(\"div\");\n    this.colorPicker = document.createElement(\"input\");\n    this.btnBlock.addEventListener(\"click\", e => this.onScaleChange(e));\n    this.colorPicker.addEventListener(\"input\", e => this.onColorChange(e));\n  }\n\n  onScaleChange(e) {\n    let scale;\n    const body = document.querySelector(\"body\");\n\n    if (e.target.value) {\n      scale = +e.target.value.replace(/x/g, \"\");\n    }\n\n    function recuse(elem) {\n      elem.childNodes.forEach(node => {\n        if (node.nodeName === \"#text\" && node.nodeValue.replace(/\\s+/g, \"\").length > 0) {\n          let nodePerent = node.parentNode;\n\n          if (!nodePerent.hasAttribute(\"data-fz\")) {\n            let value = window.getComputedStyle(node.parentNode, null).fontSize;\n            nodePerent.setAttribute(\"data-fz\", value.replace(/px/g, \"\"));\n            nodePerent.style.fontSize = `${nodePerent.getAttribute(\"data-fz\") * scale}px`;\n          } else {\n            nodePerent.style.fontSize = `${nodePerent.getAttribute(\"data-fz\") * scale}px`;\n          }\n        } else {\n          recuse(node);\n        }\n      });\n    }\n\n    recuse(body);\n  }\n\n  onColorChange(e) {\n    const body = document.querySelector(\"body\");\n    body.style.backgroundColor = e.target.value;\n    console.log(e.target.valueOf());\n  }\n\n  render() {\n    let scaleInputS = document.createElement(\"input\"),\n        scaleInputM = document.createElement(\"input\"),\n        panel = document.createElement(\"div\");\n    panel.append(this.btnBlock, this.colorPicker);\n    scaleInputS.classList.add(\"scale_btn\");\n    scaleInputM.classList.add(\"scale_btn\");\n    this.btnBlock.classList.add(\"scale\");\n    this.colorPicker.classList.add(\"color\");\n    scaleInputS.setAttribute(\"type\", \"button\");\n    scaleInputM.setAttribute(\"type\", \"button\");\n    scaleInputS.setAttribute(\"value\", \"1x\");\n    scaleInputM.setAttribute(\"value\", \"1.5x\");\n    this.colorPicker.setAttribute(\"type\", \"color\");\n    this.colorPicker.setAttribute(\"value\", \"#ffffff\");\n    this.btnBlock.append(scaleInputS, scaleInputM);\n    panel.classList.add(\"panel\");\n    document.querySelector(\"body\").append(panel);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customization);\n\n//# sourceURL=webpack://start-pack-project/./_src/scripts/module/customizator.js?");

/***/ }),

/***/ "./_src/scripts/script.js":
/*!********************************!*\
  !*** ./_src/scripts/script.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_customizator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/customizator */ \"./_src/scripts/module/customizator.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const panel = new _module_customizator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  panel.render();\n});\n\n//# sourceURL=webpack://start-pack-project/./_src/scripts/script.js?");

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